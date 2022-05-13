import React from 'react'
import { Container } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageTitle, Section } from '../../components/text';

export default function OurStoryPage(props) {
  
  return (
    <Background >
      <Container maxWidth='md' >
        <PageTitle text="Our Story" paddingBottom={4} />

        <FoundingSection />
        <LivingSection />

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

  const par1 = "When I bought the garden it was an overgrown trash pit. I spent my first summer in New Orleans picking broken glass, tires, gas tanks, couches and other trash out of the dirt and I built a toolshed. Over the next five years the garden gradually became a more comfortable place to live and I got better at building. I built a screened-in kitchen and two tiny houses on trailers."

  const par2 = "I was able to buy the land for less than it would have cost to rent an apartment for a year."

  const par3 = "I believe that, when it comes to meeting our basic needs, shorter supply chains are better.Bringing the production of food, water, and power as close as possible to the end consumer makes the system both more efficient and more resilient. I got interested in solar power and built my own system starting with one panel and one battery. I expanded as I could afford to and now have 800 watts of production capacity. I went through a similar process teaching myself about rain water catch systems and expanding one tank at a time up to 1200 gallons of storage capacity. I also brought in and composted three hundred cubic years of horse manure. I reveled in having no rent and no monthly bills to pay."
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2, par3 ]}

    />
  )
}

