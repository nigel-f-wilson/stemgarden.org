import React from 'react'
import { Container } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, Section } from '../../components/text';

// const early_days_trash_pile = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612190892/nolastemgarden/early_days/mattresses_emfztm.jpg'

export default function OurStoryPage(props) {
  
  return (
    <Background >
      <Container maxWidth='md' >
        <PageHeader title="Our Story"  />

        <FoundingSection />
        <LivingSection />

      </Container>
    </Background>
  )
}

function FoundingSection() {
  const headerText = "In 2016, I bought a vacant lot..."
  const par1 = "I had just completed my bachelor's degree in math education at Ohio University and I had heard that the education scene in New Orleans was ripe with innovation. There was a lot of buzz around the city's post-Katrina transition from traditional public schools to a system made up entirely of independent charter schools. I moved to New Orleans because I wanted to see for myself what things were like on the ground in the city with the most rapidly changing educational landscape in the country. Besides that, I was also excited to be able to garden year round."
  const par2 = "I bought the first half of the garden in an online auction two months after moving to New Orleans. I had been gardening for three years at that point, working in a different place each summer. I had learned that gardening is about much more than taking care of plants, it is about taking care of soil, and that is something that you just can't do if you change location every year."
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={early_days_trash_pile}
      imgAlign="right"
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
      imgUrl={trash_in_dirt}
      imgAlign="left"
    />
  )
}

