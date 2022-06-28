import React from 'react'
import { Container } from '@mui/material';

import { Background } from "../components/backgrounds";
import { PageHeader, Section, PictureRow } from '../components/text';

import { 
  early_days_trash_pile,
  trash_in_dirt,
  solar_panels_on_classroom,
  load_of_manure,
  tearoom_completed,
  cooking_on_the_screen_porch,
  tool_shed_with_zinnias
 } from "../cloudinaryURLs";

export default function OurStoryPage(props) {
  return (
    <Background >
      <Container id='OurStory'
        maxWidth='md' 
        // disableGutters
        sx={{pb: 3}}  
      >
        <PageHeader title="Our Story"  />

        <FoundingSection />
        <PictureRow 
          imgUrls={[
            early_days_trash_pile,
            trash_in_dirt,
          ]} 
          roundedCorners
        />
        <LivingSection />
        <SolarAndRainSection />
        <PictureRow 
          imgUrls={[
            tearoom_completed,
            cooking_on_the_screen_porch
          ]} 
          roundedCorners
        />
        {/* <Wildlife /> 
        <PhilosophyOfGardening /> */}
      </Container>
    </Background>
  )
}

function FoundingSection() {
  return (
    <Section 
      textItems={[
        {
          type: 'heading',
          text: "In 2016, I bought a blighted lot..."
        },{
          type: 'paragraph',
          text: "I had just completed my bachelor's degree in math education at Ohio University and I had heard that the education scene in New Orleans was ripe with innovation. There was a lot of buzz around the city's post-Katrina transition from traditional public schools to a system made up entirely of charters. I moved to New Orleans because I wanted to see what things were like on the ground in the city with the most rapidly changing educational landscape in America. Of course, I was also excited to be able to garden and bicycle twelve months a year."
        },{
          type: 'paragraph',
          text: "I bought the first half of the garden in an online auction two months after moving to New Orleans, paying less than it would have cost to rent an apartment for a year. I had been gardening for three years at that point, working in a different place each summer. I had learned that gardening, as I want to practice it, is about much more than taking care of plants. It is about taking care of soil, and that is something that you just can't do if you change location every year."
        }
      ]}
      imgUrl={load_of_manure}
      imgAlign="right"
      contain
    />
  )
}

function LivingSection() {
  return (
    <Section 
      textItems={[
        {
          type: 'heading',
          text: "Building an off-grid homestead"
        },{
          type: 'paragraph',
          text: "When I bought the garden it was an overgrown trash pit. I spent my first summer in New Orleans sleeping in my van and picking broken glass, car parts, furniture and other trash out of the dirt. I built a simple tool shed and picked up many discarded pallets to build a fence out of. I brought in and composted over 9000 cubic feet of leaves and horse manure to feed the soil and to help the site become less susceptible to flooding. "
        },{
          type: 'paragraph',   
          text: "I hosted a series of couch surfers who would trade a couple hours of work for a place to stay. In the third year, a friend of a friend named Olive asked if she could park her 1950's airstream trailer in the garden and live there for a few months. We hit it off immediately and a few months has turned into many happy years. I built a screened-in kitchen so Olive could cook without getting mosquito bites. I designed and built two tiny houses on trailers, the Tea Room and the Classroom. I took things apart and reused the materials and gradually I got better at building things. The garden became a more comfortable place to live."
        }
      ]}
      imgUrl={tool_shed_with_zinnias}
      imgAlign="left"
      contain
    />
  )
}

function SolarAndRainSection() {
  return (
    <Section 
      textItems={[
        {
          type: 'heading',
          text: "Solar Power & Rain Catch"
        },{
          type: 'paragraph',
          text: "I got interested in solar power and built my own system starting with one panel and one battery. I expanded my production and consumption together, as I could afford the equipment, and I now have 800 watts of production capacity."
        },{
          type: 'paragraph',
          text: "I went through a similar process teaching myself about rain water catch systems and expanding one tank at a time up to 1200 gallons of storage capacity. I reveled in having no rent and no monthly bills to pay."
        },{
          type: 'paragraph',
          text: "I believe that, when it comes to meeting our basic needs, shorter supply chains are better. Bringing the production of food, water, and power as close as possible to the end consumer makes the system both more efficient and more resilient. This philosophy was the unifying theme behind what might seem like a lot of unrelated projects that I undertook in the earliest years of the garden.  I got interested in solar power and built my own system starting with one panel and one battery. I expanded my production and consumption together, as I could afford the equipment, and I now have 800 watts of production capacity."
        },
      ]}
      imgUrl={solar_panels_on_classroom}
      imgAlign="right"
    />
  )
}


