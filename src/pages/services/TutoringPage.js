import React, { useContext } from 'react'
import { Box, Container, Typography } from '@mui/material';

import { PageLayoutContext } from "../../contexts";

// const under_construction = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561688/stemgarden.org/under_construction_sbiop2.png"

// Tutoring
// const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"

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
  const { narrowScreen } = useContext(PageLayoutContext)
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
      {/* <Typography align="justify" variant="pageSubheader" px='8%' >
        I have taught math and physics in schools and privately since 2011. 
      </Typography> */}
    </Box>
  )
}


function Offering() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Offering
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I offer one-on-one tutoring and small group lessons in math and physics. I teach in person and over Zoom. In person lessons are offered in New Orleans, Louisiana and Athens, Ohio depending on the time of year. 
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

function Testimony() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Testimony
      </Typography>

      <Quote
        quote="I wouldn't have made it through my first semester of grad school without Nigel. I had tried several other tutors before him so I can say he has a unique tallent for breaking concepts down clearly. After working with him, I could even explain the concepts to the other people in my study group. He listened to me vent about my professor, then redirected to keep me positive and on track."
        citation="Julie Richelson, MBA Student at UNO"
      />

      <Quote
        quote="I highly recommend Nigel without reservation! He brought much preparation and care to his teaching while encouraging his students' solving ability and thirst for knowledge with an upbeat attitude."
        citation="William Mains, Parent of a 7th grader at WSNO"
      />

      <Quote
        quote="While Nigel was our math teacher at the Waldorf School of New Orleans, our students were very engaged. It was the most excited I had ever seen them to go to math. The lessons he developed and taught our 4th-8th graders were so interesting and thought provoking."
        citation="Jill Contento, Faculty Chair WSNO"
      />


    </Box>
  )
}

function Quote(props) {
  const { quote, citation } = props
  return (
    <Box p={1} >
      <Typography  variant="body1" align='justify' color='white' >
        "{quote}"
      </Typography>
      <Typography  variant="body1" align='right' color='white' >
        - {citation}
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
