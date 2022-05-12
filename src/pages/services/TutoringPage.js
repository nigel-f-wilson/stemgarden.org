import React, { useContext } from 'react'
import { Box, Container, Typography } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function TutoringPage(props) {
  return (
    <Background >
      <PageHeader />
      <Offering />
      <Subjects />
      <Pricing />
      <Testimony />
      <Experience />
    </Background>
  )
}

function Background(props) {
  const { narrowScreen } = useContext(AppContext)
  const padding = narrowScreen ? '0rem' : '2rem 1rem 3rem'
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      bgcolor="darkGrey"
      display='flex'
      flexDirection='column'
      padding={padding}
    >
      <Container maxWidth='sm'>
        { props.children }
      </Container>
    </Box>
  )
}
function PageHeader() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography align="center" variant="pageHeader" >
        Tutoring
      </Typography>
    </Box>
  )
}


function Offering() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Offering & Booking
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I offer one-on-one tutoring and small group lessons in math and physics. I teach in person and over Zoom. In person lessons are offered in New Orleans, Louisiana and Athens, Ohio depending on the time of year. 
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        To schedule a lesson, email nigel@stemgarden.org 
      </Typography>
    </Box>
  )
}

function Subjects() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Subjects
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I teach foundational number sense, algebra, geometry, trigonometry, calculus, statistics, discrete math, and probability. Tutoring generally focuses on book-work. 
        If you are interesten in a more hands-on experience, be sure to check out the STEM Enrichment page. 
        {/* I also love to support homeschooling families and collectives.  */}
      </Typography>
    </Box>
  )
}

function Pricing() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Pricing
      </Typography>
      <Typography  variant="body1" align='justify' color='white' gutterBottom >
        My base reate for one-on-one tutoring is $50 per hour. For tutoring in AP and college level material I charge $65 per hour.
        For groups of 2-8 students, pricing depends on group size and meeting location.
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I believe that high-quality math instruction should be available to any student with the drive to learn. If affordability is an issue, 
        don't hesitate to reach out. I can usually make it work through a combination of group discounts and work-trade agreements. I also coach
        parents on how to best support their kids in math. This can be a more affordable option for families with kids up to high school.
      </Typography>
    </Box>
  )
}

function Experience() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Experience
      </Typography>
      <Typography  variant="body1" align='justify' color='white'  >
        I had my first teaching experiences at chess club when I was still a kid. In 2015, I earned my Bachelors degree in 
        secondary Math Education from Ohio University after completing an internship with Step-By-Step scool in Noida, India. 
        Since then, I have been teaching in New Orleans in schools, after school programs, and as a private tutor.  I have helped
        my students succeed at everything from foundational number sense to college level courses in calculus, statistics, and physics.
      </Typography>
    </Box>
  )
}
