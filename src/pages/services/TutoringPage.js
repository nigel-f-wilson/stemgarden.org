import React from 'react'
import { Box, Container, Grid } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, Section, Quote, PageSubtitle } from '../../components/text';

import { 
  // jakob_at_graduation,
  practicing_math_facts,
  guitar_fret_measuring,
  bike_gear_ratio_tutoring
} from "../../cloudinaryURLs";

export default function TutoringPage(props) {
  return (
    <Background >
      <Container maxWidth='md' >
        {/* <PageTitle text="Tutoring" gutterBottom /> */}
        <PageHeader title="Tutoring" />

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
  return (
    <Section 
      textItems={[
        {
          type: 'heading',
          text: "Offering"
        },{
          type: 'paragraph',
          text: "I work with learners of all ages, from elementary schoolers to adults. I offer one-on-one tutoring as well as small group lessons in math and physics. I also offer focussed preparation for the math portion of the SAT, ACT, and other standardized tests."
        },{
          type: 'paragraph',
          text: "In person lessons are offered in New Orleans, Louisiana and Athens, Ohio depending on the time of year. Lessons over Zoom are available year round. "
        },{
          type: 'paragraph',
          text: "To schedule a lesson, email nigel@stemgarden.org"
        },
      ]}
      imgUrl={practicing_math_facts}
      imgAlign="right"
    />
  )
}

function SubjectsSection() {
  return (
    <Section 
      textItems={[
        {
          type: 'heading',
          text: "Subjects & Style"
        },{
          type: 'paragraph',
          text: "I teach foundational number sense, algebra, geometry, trigonometry, calculus, statistics, discrete math, probability, game theory, and physics."
        },{
          type: 'paragraph',
          text: "Whereas schools require students to conform to their structures, Tutoring has the flexibility to be whatever works best for the student. It can be mainly book-work or can be filled with hands-on experiences. "
        },{
          type: 'paragraph',
          text: 'My broad background enables me to help students at all levels identify and fill gaps in their understanding of math. This is a critical advantage as almost all students who have learned math in a school setting have at one time or another been pushed to move through the curriculum in sync with peers rather than at their own pace. The way most schools operate all but guarantees that students will accumulate gaps in their math understanding, even as they earn passing grades and get promoted. '
        },
      ]}
      imgUrl={guitar_fret_measuring}
      imgAlign="left"
    />
  )
}


function PricingSection() {
  return (
    <Section 
      textItems={[
        {
          type: 'paragraph',
          text: "Students usually seek out tutoring when they first have the experience of 'hitting a wall' in math. This experience causes many to worry that they have reached the limit of their math ability, but that is not the case! Feeling like you hit a wall in math is usually the result of several little gaps catching up with you all at once. Tutoring can eliminate gaps with laser focus. It helps students to restore the positive feedback loop where struggle followed by success becomes a source of motivation."
        },{
          type: 'heading',
          text: "Pricing"
        },{
          type: 'paragraph',
          text: "My hourly rate for one-on-one tutoring in grade school content is $50. For tutoring in AP and college level material I charge $65 per hour. For groups of 2-8 students, pricing depends on group size and meeting location. Email nigel@stemgarden.org for details."
        },{
          type: 'paragraph',
          text: "I believe that high-quality math instruction should be available to any student with the drive to practice. If affordability is an issue, don't hesitate to reach out. I can usually make it work through a combination of group discounts and work-trade agreements. I also coach parents on how to best support their kids in math. This can be a more affordable option for families with kids up to high school age."
        },
      ]}
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
            quote="I wouldn't have made it through my first semester of grad school without Nigel. He has a unique talent for breaking concepts down clearly. I had worked with other tutors before and still felt stuck but after working with Nigel I could even explain the concepts to the other people in my study group."
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
            quote="Our students were very engaged in Mr. Nigel's math class. It was the most excited I had ever seen them to go to math. The lessons he developed and taught our 4th-8th graders were so interesting and thought provoking for students and even for other staff."
            personName="Jill Contento"
            relationship="Faculty Chair, WSNO"
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Quote
            quote="I was trying to relearn calculus after years out of school but I was having trouble with a few concepts. Nigel was able to quickly answer my questions on concepts and problems that I was getting stuck on. I was already using Khan Academy, but Nigel showed me how to use it much more effectively. He always set me up to get the most out of my independent study time between tutoring sessions."
            personName="Jakob Schanzer"
            relationship="Adult Student, UNO"
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Quote
            quote="Your explanations are always so simple and digestible. I feel so much more comfortable supporting my students in math after having you coach me on teaching strategies. The depth of your content knowledge is extraordinary and you have a gift for explaining math in user-friendly terms."
            personName="Justin Allison"
            relationship="Special Needs Teacher at Bricolage"
          />
        </Grid>
      </Grid>
    </Box>
  )
}

//  He listened to me vent about my professor, then redirected to keep me positive and on track.

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