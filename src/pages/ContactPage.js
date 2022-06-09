import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Select, MenuItem, FormControl, Typography, TextField } from '@mui/material'
import { Box, Grid, Container, Card, CardHeader, CardMedia,  } from '@mui/material';
import theme from '../theme';

import { Dialog, Button, IconButton, } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

// import Footer from '../components/Footer';
import { PageHeader } from "../components/text";
import { LeafyBackground } from "../components/backgrounds";

// Tutoring
import { 
  practicing_math_facts,
  girls_playing_connect_four,
  chess_at_college_track,
  guitar_fret_measuring,
  bike_gear_ratio_tutoring,
  banana_papaya_turmeric_flower,
  profile_with_hoe,
  mushroom_background,
  banana_papaya_pile,
} from "../cloudinaryURLs";

const landingCards = [
  {
    title: "Math Tutoring",
    linkTo: "services/tutoring",
    imgUrl: practicing_math_facts

  },
  {
    title: "Math Games",
    linkTo: "resources/math-games",
    // imgUrl: playing_the_15_game,
    imgUrl: girls_playing_connect_four,
  },
  {
    title: "Chess Clubs",
    linkTo: "services/tutoring",
    imgUrl: chess_at_college_track
  },
  {
    title: "STEM Enrichment",
    linkTo: "services/tutoring",
    imgUrl: bike_gear_ratio_tutoring,
  },
  {
    title: "What We Grow",
    linkTo: "about",
    imgUrl: banana_papaya_turmeric_flower,
  },
  {
    title: "Study Materials",
    linkTo: "/services/tutoring",
    imgUrl: guitar_fret_measuring,
  },
  {
    title: "Our Story",
    linkTo: "/garden/story",
    imgUrl: mushroom_background,
  },
  {
    title: "Buy Our Fruit",
    linkTo: "/garden/for_sale",
    imgUrl: banana_papaya_pile,
  },
  {
    title: "Get Involved",
    linkTo: "/garden/get_involved",
    imgUrl: profile_with_hoe,
  },
]

export default function ContactPage() {
  return (
    <React.Fragment>
      <LeafyBackground >
        <Container maxWidth='md' id='landing' >
          <PageHeader title="Contact Us" />
          {/* <CardGrid /> */}
        </Container>
        
      </LeafyBackground>
      {/* <Footer smallScreen={smallScreen} /> */}
    </React.Fragment>
  )
}




// MUI components


function EditModal(props) {
    let { open, selectedCatData, saveUpdates, closeEditModal } = props
    return (
        <Dialog
            open={open}
            onClose={closeEditModal}
            PaperProps={{
                sx: {
                    width: "1000px",
                    height: "650px",
                    borderRadius: 4,
                    overflowX: "hidden"
                }
            }}>
            <Header 
                closeEditModal={closeEditModal}
            />
            <Form 
                selectedCatData={selectedCatData}
                saveUpdates={saveUpdates}
                closeEditModal={closeEditModal}
            />
        </Dialog>
    )
}

function Header(props) {
    let { closeEditModal } = props
    return (
        <Box sx={{
            borderBottom: "solid #888 1px",
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem"

        }} >
            <Typography variant="h4" children="Edit Cat" />
            <IconButton
                children={<CloseIcon />}
                onClick={closeEditModal}
            />
        </Box>
    )
}
function Form(props) {
    let { selectedCatData, saveUpdates, closeEditModal } = props

    const [formState, setFormState] = useState({...selectedCatData})

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating Form field "${name}" with value: ${value}`)

        setFormState({
            ...formState,
            [name]: value,
        });
    }
    
    return (
        <Box sx={{
            height: "550px",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0 0"
        }} >
            
            
            <NameInput
                formName={formState.name}
                handleFormChange={handleFormChange}
            />
            <UrlInput
                formUrl={formState.thumbnail_url}
                handleFormChange={handleFormChange}
            />
            <BirthdateInput
                formBirthdate={formState.birthdate}
                handleFormChange={handleFormChange}
            />
            <OwnerInput
                formOwner={formState.owner_name}
                handleFormChange={handleFormChange}
            />
            <SaveAndCancelButtons 
                formState={formState}
                saveUpdates={saveUpdates} 
                closeEditModal={closeEditModal}    
            />
        </Box>
    )

    
}

function SaveAndCancelButtons(props) {
    let { formState, saveUpdates, closeEditModal } = props

    return (
        <Box
            sx={{
                display: "flex",
                width: '100%',
                height: "100px",
                justifyContent: "flex-end",
                alignItems: "center",
                borderTop: "solid #888 1px",
            }}
        >
            <Button
                children="Save"
                onClick={() => { saveUpdates(formState) }}
            />
            <Box sx={{ width: "0", height: "1.6rem", margin: "0.8rem 0.5rem", border: "solid black 1px" }} />
            <Button
                children="Cancel"
                onClick={closeEditModal}
                sx={{ paddingRight: "2rem", }}
            />
        </Box>
    )
}

function FormRow(props) {
    let { label, children } = props
    return (
        <Box id="form_row"
            sx={{
                width: "100%",
                height: "120px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }} >
            <Typography
                variant="body1"
                children={label}
                sx={{ flex: "0 0 35%", paddingLeft: "5%" }}
            />
            <Box 
                children={children}                
                sx={{ flex: "0 0 55%", display: "flex", justifyContent: "stretch" }}
            />
        </Box>
    )
}

function NameInput(props) {
    let { formName, handleFormChange } = props
    return (
        <FormRow label={"Name"} >
            <TextField
                name="name"
                value={formName}
                variant="outlined"
                onChange={handleFormChange}
                fullWidth 
            />
        </FormRow>
    )
}


function BirthdateInput(props) {
    let { formBirthdate, handleFormChange } = props
          {/* <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} ></div>  */}

    let dateString = convertDateFormat(formBirthdate)
    console.log(`Form BD: ${formBirthdate}`);

    return (
        <FormRow label={"Birthdate"} >
            <TextField
                name="birthdate"
                value={formBirthdate}
                variant="outlined"
                onChange={handleFormChange}
                id="date"
                type="date"
                fullWidth
                // Still trying to get this to display this string as "dd mon yyyy" instead of "mm/dd/yyyy"
                // InputProps={{
                //     valueAsDate: dateString,
                // }}  
            />
        </FormRow>
    )
}


function UrlInput(props) {
    let { formUrl, handleFormChange } = props
    return (
        <FormRow label={"Thumbnail URL"} >
            <TextField
                name="thumbnail_url"
                value={formUrl}
                variant="outlined"
                onChange={handleFormChange}
                fullWidth 
            />
        </FormRow>
    )
}


function OwnerInput(props) {
    let { formOwner, handleFormChange } = props

    let owners = ["Claire Morrison", "Jane Doe", "Jane Smith", "John Doe", "Kate Debarros", "Sam Jones"]

    return (
        <FormRow label="Owner"  >
            <FormControl fullWidth >
                <Select
                    name="owner_name"
                    labelId="select-owner"
                    id="select-owner"
                    value={formOwner}
                    onChange={handleFormChange}
                >
                    {owners.map((owner, index) => {
                        return (
                            <MenuItem key={index} value={owner} >{owner}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </FormRow>
    )
}

function convertDateFormat(inputDate) {
    if (inputDate === undefined) {
        return undefined
    }
    let firstHyphen = inputDate.indexOf("-")
    let secondHyphen = inputDate.lastIndexOf("-")
    let year = inputDate.slice(0, firstHyphen)
    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let monthNumber = Number(inputDate.slice(firstHyphen + 1, secondHyphen))
    let month = monthList[(monthNumber - 1)]
    let day = Number(inputDate.slice(secondHyphen + 1))
    let date = `${day} ${month} ${year}`
    return date
}