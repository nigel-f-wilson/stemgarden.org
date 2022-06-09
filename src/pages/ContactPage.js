// WARNING 
// This contact form must reflect the settings in ./formspree.json
// Any changes must be deployed by running 'formspree deploy'

import React, { useState } from 'react'

import { useForm } from '@formspree/react';

import { 
  Container, 
  Box, 
  Stack, 
  Paper,
  Typography, 
  TextField, 
  Button, 
  FormControlLabel, 
  RadioGroup, 
  Radio 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// My Components
import { PageHeader } from "../components/text";
import { LeafyBackground } from "../components/backgrounds";

// Image URLs
const bamboo = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646607025/stemgarden.org/bamboo_ho9jli.jpg"

export default function ContactPage() {
  return (
    <LeafyBackground >
      <Container maxWidth='md' id='landing' >
        <PageHeader title="Contact Us" />
        <FormWrapperPaper>
          <FormspreeContactForm />
        </FormWrapperPaper>
      </Container>
    </LeafyBackground>
  )
}

function FormspreeContactForm(props) {
  const [state, handleSubmit] = useForm("contact");

  const [reasonForContacting, setReasonForContacting] = useState("")
  const [name, setName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [message, setMessage] = useState("")


  const isValidEmail = (emailAddress) => {
    return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))
  }


  if (state.succeeded) {
    return (
      <Stack minHeight="500px" justifyContent='center' >
        <Typography variant="h5" color='black' gutterBottom >
          Your message sent successfully!
        </Typography>
        <Typography variant="h5" color='black' >
          Thanks for reaching out!
        </Typography>
      </Stack>
    )
  }
  else {
    return (
      <Stack>
            
        <form 
          onSubmit={handleSubmit} 
        >

          <Typography variant="h4" children="What can we do for you?" />
          <FormRowWrapper>
            <RadioGroup 
              id="reason-for-contact-radio-group"
              name="reason-for-contact"
              sx={{ width: '100%'}}
              defaultValue='garden'
              row
              aria-labelledby="reason-for-reaching-out-radio-buttons"
            >
              <Stack width='50%' >
                <FormControlLabel value="garden" control={<Radio />} label="It's about the Garden" />
                <FormControlLabel value="tutor" control={<Radio />} label="Math Tutoring" />
              </Stack>
              <Stack width='50%'  >
                <FormControlLabel value="web-dev" control={<Radio />} label="Build me a Website" />
                <FormControlLabel value="other" control={<Radio />} label="Something Else" />
              </Stack>
            </RadioGroup>
          </FormRowWrapper>
        
          
          </Stack>

          <FormRowWrapper 
            label="Your Name" 
            errorMessage={(message.length > 0 && name.length === 0) ? "What shall I call you?" : ""}
          >
            <TextField
              id="name"
              name="name"
              value={name}
              onChange={(event) => { setName(event.target.value) }}
              fullWidth 
            />
          </FormRowWrapper>
          <FormRowWrapper 
            label="Your Email Address" 
            errorMessage={(message.length > 0 && !isValidEmail(emailAddress)) ? "I need a valid email address so I can reply to your inquiry." : ""}
          >
            <TextField
              id="email"
              name="email"
              value={emailAddress}
              onChange={(event) => { setEmailAddress(event.target.value) }}
              fullWidth 
            />
          </FormRowWrapper>

          <FormRowWrapper label="Message" >
            <TextField
              id="message"
              name="message"
              value={message}
              onChange={(event) => { setMessage(event.target.value) }}
              fullWidth 
              multiline minRows={4} maxRows={4}
            />
          </FormRowWrapper>

          {/* <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} ></div>  */}

          <Button 
            type="submit"
            disabled={state.submitting || !isValidEmail(emailAddress) || name.length === 0 }
            children="Send" 
            variant="contained" 
            endIcon={<SendIcon />} 
            sx={{ 
              margin: '1rem 0 0', 
              maxHeight: '2.5rem' 
            }} 

            />
          </form>
        </Stack>
    )
  }
}


function FormWrapperPaper(props) {
  const bgURL = `url(${bamboo})`
  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      width: "100%",
      height: "auto",
      borderRadius: 4,
      overflowX: "hidden"
    }}>
      <Box 
        id="picture-container" 
        width={{ xs: '0', sm: '25%', md: '35%' }}
        position='relative'
      >
        <Box id="picture" 
          width="100%"
          height='100%'
          position='absolute'
          top={0}
          left={0}
          sx={{ 
            backgroundColor: 'primary.main',
            backgroundImage: bgURL,
            backgroundSize: 'cover',
          }}
        />
      </Box>
      <Stack 
        id="form-container"
        children={props.children}
        padding={4}
        width={{ xs: '100%', sm: '75%', md: '65%' }}
      />
    </Paper>
  )
}

function FormRowWrapper(props) {
  let { label, children, errorMessage } = props
  return (
    <Stack 
      id="form_row"
      marginTop={2}
      width="100%"
      display='flex'      
      alignItems='flex-start'
    >
      <Typography children={label}  />
      { children }
      <Typography children={errorMessage} color="error" />
    </Stack>
  )
}