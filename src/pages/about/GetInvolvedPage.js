import React from 'react'
import { Box, Container, Typography } from '@mui/material';


import { Background } from "../../components/backgrounds";
import { PageHeader } from '../../components/text';
import Section from "../../components/text/Section";

export default function GetInvolvedPage(props) {
  
  return (
    <Background >
      <Container maxWidth='md' >
        <PageHeader 
          title="Get Involved" 
        />

        <FoundingSection />
        <LivingSection />
        <SolarAndRainSection />

        <Subjects />
        <Pricing />
        <Testimony />
        <Experience />
      </Container>
    </Background>
  )
}

function FoundingSection() {
  const headerText = "The STEM Garden was founded in 2016 ..."
  const par1 = "Shortly after completing my bachelor's in math education at Ohio University, I moved to New Orleans. I wanted to find out what all the buzz around charter schools was about but I was also excited to be able to garden year round."
  const par2 = "I bought the first half of the garden in an online auction two months after moving to New Orleans. I had been gardening for three years at that point, working in a different place each summer. I had learned that gardening is about much more than taking care of plants, it is about taking care of soil, and that is something that you just can't do if you change location every year."
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
    />
  )
}

function LivingSection() {
  const headerText = "Building an off-grid urban homestead"
  const par1 = "When I bought the garden it was an overgrown trash pit. When I first began cleaning up the site I was living out of my van. Over the next five years the garden gradually became a more comfortable place to live. I built a toolshed, a screened-in kitchen, and two tiny houses on trailers. I stubbornly avoided monthly bills and dependence on any infrastructure I did not thoroughly understand. I believe in radically shortening supply chains, that, when it comes to meeting our basic needs, bringing the production as close as possible to the consumer is a good thing. It makes systems both more efficient and more resilient.   as clsoe to home  got into solar power and rain water catch systems. with one panel and battery and expanded the system as I could afford to. Similarly, I " 
  const par2 = "manure"
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}

    />
  )
}

function SolarAndRainSection() {
  const headerText = "Solar Power and Rain Catch"
  const par1 = "When I bought the garden it was an overgrown trash pit. When I first began cleaning up the site I was living out of my van. Over the next five years the garden gradually became a more comfortable place to live. I built a toolshed, a screened-in kitchen, and two tiny houses on trailers. I stubbornly avoided monthly bills and dependence on any infrastructure I did not thoroughly understand. I believe in radically shortening supply chains, that, when it comes to meeting our basic needs, bringing the production as close as possible to the consumer is a good thing. It makes systems both more efficient and more resilient.   as clsoe to home  got into solar power and rain water catch systems. with one panel and battery and expanded the system as I could afford to. Similarly, I " 
  const par2 = ""
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}

    />
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
