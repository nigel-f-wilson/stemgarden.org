import React from 'react'
import { 
  // Box, 
  Container, 
  // Grid 
} from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, Section } from '../../components/text';

// Tutoring
// const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"
// const guitar_fret_measuring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646597930/stemgarden.org/teaching/hands_on/guitar_fret_spacing_jezbuk.jpg"
const bike_gear_ratio_tutoring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647052266/stemgarden.org/teaching/hands_on/bike_gear_ratios_at_tutoring_s6l3ee.jpg"

// const under_construction = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561688/stemgarden.org/under_construction_sbiop2.png"

// Tutoring
// const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"

export default function WebDevelopmentPage(props) {
  return (
    <Background >
      <Container maxWidth='md' sx={{ pt: 4 }} >
        <PageHeader 
          title="Web Development"
          subtitle="I had a lot of fun building this website, so I'm looking for more work of this type."
        />
        <OfferingSection />
        {/* <FreelanceProjectsSection /> */}
        {/* <TechnologiesSection /> */}
        {/* <HireMeSection /> */}
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
      imgUrl={bike_gear_ratio_tutoring}
      imgAlign="right"
    />
  )
}
