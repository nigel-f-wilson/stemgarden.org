import React from 'react'
import { Box, Container, Grid } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageTitle, Section, Quote, PageSubtitle } from '../../components/text';

// Tutoring
const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"
const guitar_fret_measuring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646597930/stemgarden.org/teaching/hands_on/guitar_fret_spacing_jezbuk.jpg"
const bike_gear_ratio_tutoring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647052266/stemgarden.org/teaching/hands_on/bike_gear_ratios_at_tutoring_s6l3ee.jpg"

// const under_construction = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561688/stemgarden.org/under_construction_sbiop2.png"

// Tutoring
// const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"

export default function TutoringPage(props) {
  return (
    <Background >
      <Container maxWidth='md' sx={{ pt: 4 }} >
        <PageTitle text="Tutoring" paddingBottom={4} />
        <OfferingSection />
        <SubjectsSection />
        <PricingSection />
        <TestimonySection />
        {/* <ExperienceSection /> */}
      </Container>
    </Background>
  )
}

function OfferingSection() {
  const headerText = "Offering & Booking"
  const par1 = "I offer one-on-one tutoring and small group lessons in math and physics. In person lessons are offered in New Orleans, Louisiana and Athens, Ohio depending on the time of year. Lessons over Zoom are available year round."
  const par2 = "To schedule a lesson, email nigel@stemgarden.org"
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={guitar_fret_measuring}
      imgAlign="right"
    />
  )
}

function SubjectsSection() {
  const headerText = "Subjects"
  const par1 = "I teach foundational number sense, algebra, geometry, trigonometry, calculus, statistics, discrete math, and probability. Tutoring generally focuses on book-work. If you are interesten in a more hands-on experience, be sure to check out the STEM Enrichment page."
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1 ]}
      imgUrl={practicing_math_facts}
      imgAlign="left"
    />
  )
}


function PricingSection() {
  const headerText = "Pricing"
  const par1 = "My base reate for one-on-one tutoring is $50 per hour. For tutoring in AP and college level material I charge $65 per hour. For groups of 2-8 students, pricing depends on group size and meeting location."
  const par2 = "I believe that high-quality math instruction should be available to any student with the drive to practice. If affordability is an issue, don't hesitate to reach out. I can usually make it work through a combination of group discounts and work-trade agreements. I also coach parents on how to best support their kids in math. This can be a more affordable option for families with kids up to high school."
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={bike_gear_ratio_tutoring}
      imgAlign="right"
    />
  )
}

// TODO add pictures of people who provided quotes
function TestimonySection() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <PageSubtitle text="Testimony" />

      <Grid container spacing={3} >
        <Grid item xs={12} >
          <Quote
            quote="I wouldn't have made it through my first semester of grad school without Nigel. He has a unique tallent for breaking concepts down clearly. After working with him, I could even explain the concepts to the other people in my study group. He listened to me vent about my professor, then redirected to keep me positive and on track."
            personName="Julie Richelson"
            relationship="MBA Student, UNO"
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Quote
            quote="I highly recommend Nigel without reservation! He brought much preparation and care to his teaching while encouraging his students' solving ability and thirst for knowledge with an upbeat attitude."
            personName="William Mains"
            relationship="Parent of a student"
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Quote
            quote="Our students were very engaged in Mr. Nigel's math class. It was the most excited I had ever seen them to go to math. The lessons he developed and taught our 4th-8th graders were so interesting and thought provoking for students and other staff."
            personName="Jill Contento"
            relationship="Faculty Chair, WSNO"
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Quote
            quote="I was trying to relearn calculus after years out of school but I was having trouble with a few concepts. I was already using Khan Academy when I got in touch with Nigel but he showed me how to use it much more effectively so I would get the most out of study time between tutoring sessions. Nigel was able to quickly answer my questions on concepts and problems that I was getting stuck on."
            personName="Jakob Schanzer"
            relationship="Adult Student"
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Quote
            quote="Your explanations are always so simple and digestible. I feel so much more comfortable supporting my students in math after having you would explain things to me. The depth of your content knowledge is extraordinary and you have a gift for explaining math in user-friendly terms."
            personName="Justin Allison"
            relationship="Special Needs Teacher at Bricolage"
          />
        </Grid>
      </Grid>
    </Box>
  )
}



// function ExperienceSection() {
//   const headerText = "Experience"
//   const par1 = "I had my first teaching experiences at chess club when I was still a kid. In 2015, I earned my Bachelors degree in secondary Math Education from Ohio University after completing an internship with Step-By-Step scool in Noida, India. Since then, I have been teaching in New Orleans in schools, after school programs, and as a private tutor. I have helped my students succeed at everything from foundational number sense to college level courses in calculus, statistics, and physics."
//   const par2 = "For more detail check out my resume."

//   return (
//     <Section 
//       headerText={headerText}
//       paragraphs={[ par1, par2 ]}
//     />
//   )
// }