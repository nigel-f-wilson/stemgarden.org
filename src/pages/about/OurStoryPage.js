import React from 'react'
import { Container } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, Section } from '../../components/text';

import { 
  early_days_trash_pile,
  trash_in_dirt,

 } from "../../cloudinaryURLs";

export default function OurStoryPage(props) {
  
  return (
    <Background >
      <Container id='OurStory'
        maxWidth='md' 
        sx={{pb: 3}}  
      >
        <PageHeader title="Our Story"  />

        <FoundingSection />
        <LivingSection />

        <SolarAndRainSection />


        {/* <Wildlife /> 
        <PhilosophyOfGardening /> */}

      </Container>
    </Background>
  )
}

function FoundingSection() {
  return (
    <React.Fragment>
      <Section 
        textItems={[
          {
            type: 'heading',
            text: "In 2016, I bought a vacant lot..."
          },{
            type: 'paragraph',
            text: "I had just completed my bachelor's degree in math education at Ohio University and I had heard that the education scene in New Orleans was ripe with innovation. There was a lot of buzz around the city's post-Katrina transition from traditional public schools to a system made up entirely of charters. I moved to New Orleans because I wanted to see what things were like on the ground in the city with the most rapidly changing educational landscape in America. Of course, I was also excited to be able to garden and bicycle twelve months a year."
          },
        ]}
        imgUrl={early_days_trash_pile}
        imgAlign="right"
        contain
      />
      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "I bought the first half of the garden in an online auction two months after moving to New Orleans, paying less than it would have cost to rent an apartment for a year. I had been gardening for three years at that point, working in a different place each summer. I had learned that gardening, as I want to practice it, is about much more than taking care of plants. It is about taking care of soil, and that is something that you just can't do if you change location every year."
          }
        ]}
        // imgUrl={early_days_trash_pile}
        // imgAlign="right"
      />
    </React.Fragment>
  )
}

function LivingSection() {
  return (
    <React.Fragment>
      <Section 
      textItems={[
        {
          type: 'heading',
          text: "Building an off-grid urban homestead"
        },{
          type: 'paragraph',
          text: "When I bought the garden it was an overgrown trash pit. I spent my first summer in New Orleans picking broken glass, tires, gas tanks, couches and other trash out of the dirt and I built a toolshed. Over the next five years the garden gradually became a more comfortable place to live and I got better at building. I built a screened-in kitchen and two tiny houses on trailers."
        },
      ]}
      imgUrl={trash_in_dirt}
      imgAlign="left"
      contain
    />
    <Section 
      textItems={[
        {
          type: 'paragraph',
          text: "I believe that, when it comes to meeting our basic needs, shorter supply chains are better.Bringing the production of food, water, and power as close as possible to the end consumer makes the system both more efficient and more resilient. I got interested in solar power and built my own system starting with one panel and one battery. I expanded as I could afford to and now have 800 watts of production capacity. I went through a similar process teaching myself about rain water catch systems and expanding one tank at a time up to 1200 gallons of storage capacity. I also brought in and composted three hundred cubic years of horse manure. I reveled in having no rent and no monthly bills to pay."
        }

      ]}
    />
    </React.Fragment>
  )
}

function SolarAndRainSection() {
  return (
    <React.Fragment>
      <Section 
        textItems={[
          {
            type: 'heading',
            text: "Solar Power & Rain Catch"
          },{
            type: 'paragraph',
            text: "I believe that, when it comes to meeting our basic needs, shorter supply chains are better. Bringing the production of food, water, and power as close as possible to the end consumer makes the system both more efficient and more resilient. I got interested in solar power and built my own system starting with one panel and one battery. I expanded my production and consumption together, as I could afford the equipment, and I now have 800 watts of production capacity."
          }
        ]}
        imgUrl={trash_in_dirt}
        imgAlign="left"
      />
      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "I went through a similar process teaching myself about rain water catch systems and expanding one tank at a time up to 1200 gallons of storage capacity. I also brought in and composted over 9000 cubic feet of leaves and horse manure. I reveled in having no rent and no monthly bills to pay."
          }
        ]}
      />
    </React.Fragment>
  )
}

