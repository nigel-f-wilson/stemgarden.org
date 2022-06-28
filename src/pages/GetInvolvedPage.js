import React from 'react'
import { Container } from '@mui/material';


import { Background } from "../components/backgrounds";
import { PageHeader, PictureRow } from '../components/text';
import Section from "../components/text/Section";

import { 
  olive_holding_raddishes,
  profile_pic_with_hoe,
  kaylee_dan_and_loquat_pile,
  emily_with_tobacco_plant,
  june_playing_banjo,
  // nigel_at_computer_desk,
  // nigel_holding_banana_bunches,
  buckets_of_figs,
  tearoom_completed,

 } from "../cloudinaryURLs";

export default function GetInvolvedPage(props) {
  // const [typeOfInvolvement, setTypeOfInvolvement] = useState('garden') 
  
  return (
    <Background >
      <Container maxWidth='md' >
        <PageHeader title="Get Involved" />

        {/* <TypeOfInvolvementSelector 
          typeOfInvolvement={typeOfInvolvement}
          setTypeOfInvolvement={setTypeOfInvolvement}
        /> */}

        <PictureRow 
          imgUrls={[
            emily_with_tobacco_plant,
            kaylee_dan_and_loquat_pile,
            profile_pic_with_hoe,
            olive_holding_raddishes 
          ]} 
          roundedCorners
        />

        <GardenIntroSection />
        
        <ResidentCaretakerSection  />
        <VolunteerDaysSection />
        <VisitSection />

      </Container>
    </Background>
  )
}

// function TypeOfInvolvementSelector(props) {
//   const { typeOfInvolvement, setTypeOfInvolvement } = props

//   const InvolvementButton = (props) => {
//     const { activity } = props
//     return (
//       <Button 
//         color='white'
//         variant='text' 
//         children={activity} 
//         sx={{
//           width: '33%'
//         }}

//       />
//     )
//   }

//   return (
//     <Box 
//       width='100%'
//       height='60px'
//       bgcolor='primary.main'
//       margin='1rem 0'
//       borderRadius='1rem'

//     >
//       <InvolvementButton activity='garden' />
//       <InvolvementButton activity='garden' />
//       <InvolvementButton activity='garden' />


//     </Box>
//   )
// }

function GardenIntroSection() {
  return (
    <React.Fragment>
      <Section 
        textItems={[
          {
            type: 'heading',
            text: "Help with the Garden"
          },{
            type: 'paragraph',
            text: "Ever since establishing the garden I have been thinking about ways to care for the space that will minimize the amount of maintenance required. All the compost that I've added has made the soil better at holding the right amounts of air and water. It has also made it very easy to pull weeds up roots and all. Many varieties of crops that we grew in the past we do not grow anymore because they required too much hands on care or pesticides to thrive. "
          },
        ]}
      />
      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "In spite of this mindset, it is still a 6000 square foot garden and it does require a lot of work. At this point in its evolution the work that the garden requires is roughly half planting and maintenance tasks and half harvesting and processing crops for storage and distribution. As much work as it is, it is failry obvious that the amount of fruit the space produces is more than worth the effort. "
          },{
            type: 'paragraph',
            text: "We will happily accept help from folks with varying levels of know-how and commitment. Keep reading to learn about the different ways to get involved!"
          }
        ]}
        imgUrl={buckets_of_figs}
        imgAlign="right"
      />
    </React.Fragment>
  )
}

function ResidentCaretakerSection() {
  return (
    <React.Fragment>
      <Section 
        textItems={[
          {
            type: 'heading',
            text: "Resident Caretaker"
          },{
            type: 'paragraph',
            text: "I am currently accepting applications for a resident caretaker position. This position requires between 10 and 15 hours of work per week, depending on the season. The caretaker would live on site in the Tea Room and be responsible for keeping up with daily chores as well as coordinating group volunteer days at times of year when there is more harvest and distribution work than normal. This is not a paid position, compensation will come in the form of discounted housing and, of course, all the fruit you can eat. "
          }
        ]}
        imgUrl={tearoom_completed}
        imgAlign="left"
      />
      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "I am looking for someone who will make a relatively long-term commitment, as it takes time to get deeply familiar with the garden, to get good at seeing what needs done. I will consider applicants with any amount of experience caring for plants but preference will be given to applicants with more experience farming. If interested, contact nigel@stemgarden.org"
          },
        ]}
      />
    </React.Fragment>
  )
}

function VolunteerDaysSection() {
  return (
    <Section 
      textItems={[
        {
          type: 'heading',
          text: "Volunteer Days"
        },{
          type: 'paragraph',
          text: "The main activities that volunteers can help with are harvest, processing, and distributing fruit. We are currently seeking folks who volunteer regularly with NOLA Mutual Aid or other local charities that would like to get involved with the garden and leverage their other connections to help out produce find good homes. "
        },
      ]}
      imgUrl={june_playing_banjo}
      imgAlign="right"
    />
  )
}

function VisitSection() {
  return (
    <Section 
      textItems={[
        {
          type: 'heading',
          text: "Visit"
        },{
          type: 'paragraph',
          text: "It is a long term goal of the garden to be a place where local schools can visit for STEM-themed field trips. From biology to solar power to carpentry, there is a lot of science that went into making this vacant lot a comfortable place to live. Visiting the garden for a day of hands-on learning is sure to be an experience kids carry with them for a long time. "
        },{
          type: 'paragraph',
          text: "While we are excited to share with kids some of the ways that knowing science can enrich their lives, we do not currently carry liability insurance to be able to host groups of young people. If you are a teacher in New Orleans and you like what you see and would like to share the STEM Garden with your students, please reach out! Once enough people express interest we will take the needed steps to become a place where kids can come to learn about science outside the classroom."
        }
      ]}
      // imgUrl={nigel_holding_banana_bunches}
      // imgAlign="left"
    />
  )
}

