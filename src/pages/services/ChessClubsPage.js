import React from 'react'
import { Box, Typography } from '@mui/material';

import Background from "../../components/Background";
import PageTitle from "../../components/text/PageTitle";
import Section from "../../components/text/Section";

export default function ChessClubsPage(props) {
  return (
    <Background colorTheme='dark' >
      <PageTitle title="Chess Clubs" />
      <Section 
        headerText="Offering"
        paragraphs={["I offer private lessons and small group coaching both online and in person. While you can practice playing chess against opponents of similar skill online any time, it is more fun when you have a partner who you can play with regularly over the board. Group lessons are great for siblings, neighbors, or kids who homeschool together. They enable you and your practice partner to grow together, so that your matches remain challenging and exciting as you improve. I also offer lessons specifically for parents who are new to chess but have a child who has taken an interest."]}
      />
      <Offering />
      <Subjects />
      <Pricing />
      <Testimony />
      <Experience />
    </Background>
  )
}

// Private and Group Lessons
// 
// Chess Club in the Garden
// *** All in-person clubs are suspended until further notice due to Covid-19 ***

// When safe, chess in the garden will be offered every Sunday afternoon from 2-4pm I will be launching a Sunday afternoon chess club in the STEM Garden as soon as it is safe to do so.

// Afterschool Clubs
// *** All in-person clubs are suspended until further notice due to Covid-19 ***
// I currently host an afterschool chess club in partnership with the Waldorf School of New Orleans. I am currently seeking schools to partner with to establish new afterschool chess clubs. Need help establishing a chess club at your school? Call me!

// Why Learn Chess?
// Learning chess helps kids experience firsthand that thinking hard and having fun can go together.
// Math and Chess have a lot in common. They both require creative, yet disiplined, thinking. Math is very useful, and so kids are required to learn it in school. Unfortunately, that pressure to learn math often causes them to lose sight of the fact that doing math can be really fun. When students feel under pressure in math classes they start asking "Why do I have to learn this?" and "When am I going to need this?"

// By contrast, Chess is an abstract game with no practical applications. No one is required to learn it, and yet, something about it makes kids feel drawn to apply their full reasoning abilities. No one has ever inturrupted a chess lesson to ask me "When am I going to need this?" Chess makes kids want to think hard. It is an excellent medium for teaching kids to think out loud and to think through questioning, both skills which carry over and make them more effective learners in all other subjects. including math. Players also develop greater self-awareness about how their emotions affect their thinking process

// Pricing
// •One-on-one lessons are offered for $35 per hour. •Lessons for 2 students are offered for $40 per hour. •Lessons for groups of 3 to 6 students are $15 per student per hour. •Lessons for groups of 7 to 12 students are $10 per student per hour. •Sunday Chess Club in the garden is offered with a suggested donation of $5-10. •The cost for facilitating afterschool clubs can be negotiated on a case-by-case basis.
// As with my math tutoring services, I want chess lessons to be accessible to any student who is really motivated to apply themselves. If cost is an issue please reach out to me personally, I am happy to barter or make work-trade agreements, lessons in exchange for help with garden projects.

// Chess Teaching Experience
// I have played chess for 18 years and I am currently rated ~1600, or in the 90th percentile of players on chess.com. I'm a long way from the title of 'Master' but I have a knack for explaining the game. At the club I went to as a kid I was encouraged to play 'teaching games' with other kids as soon as I had something to teach, so I've been teaching chess even longer than I've been teaching math!
// Besides establishing chess clubs at College Track and the Waldorf School I have taught chess summer camps offered by Strategic Thoughts in partnership with NORD.

// Chess & Test Prep
// I got serious about running youth chess clubs while working at College Track. CT placed a strong emphasis on preping kids for fast-paced high-stakes standardized tests. I reflected on my own experience getting a scholarship based on my ACT score and I realized that, though the math topics covered on the ACT had been gone over in school, what had really prepared me for the test's pressure level and pace was all the speed chess I had played as a kid. It was chess that taught me to cope with time pressure, to focus my mind so that I could think clearly in a stressful circumstance. I offer discounted rates on SAT and ACT prep for students who add on chess lessons.





function Offering() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Offering & Booking
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I offer one-on-one tutoring and small group lessons in math and physics. I teach in person and over Zoom. In person lessons are offered in New Orleans, Louisiana and Athens, Ohio depending on the time of year. 
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        To schedule a lesson, email nigel@stemgarden.org 
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
