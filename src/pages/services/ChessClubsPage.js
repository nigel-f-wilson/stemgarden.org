import React from 'react'
import { Container, Grid } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, Section, PageSubtitle } from '../../components/text';
import { CopyDriveFileCard } from "../../components/cards";

import { 
  chess_at_college_track,
  chess_at_college_track_2,
  // chess_at_bric,
  chess_demo_board,
  simul_at_bric,
  handout_rules_of_chess,
  poster_rules_of_chess,
  knight_coloring_quilt,
 } from "../../cloudinaryURLs";


export default function ChessClubsPage(props) {
  return (
    <Background >
      <Container maxWidth='md' sx={{ pb: '3rem'}} >
        <PageHeader title="Chess Clubs" />
        <WhyChessSection />
        <ClubsSection />
        <LessonsSection />
        <ChessTeachingMaterialsSection />
        <ChessClubHostAppSection />

      </Container>
    </Background>
  )
}

function WhyChessSection() {
  const headerText = "Why I Teach Chess"
  const par1 = "My very first teaching experiences were at chess club, years before I decided to become a math teacher. Chess Club is more than just good cheap entertainment, it is a medium through which kids learn life lessons on sportsmanship, psychology, and strategy. Chess helps kids remember that thinking really hard being playful are not mutually exclusive."
  const par2 = "It's intellectually challenging. It's not required, but kids flock to it. That is why I teach chess."
  // const par3 = 'Kids who have been made to feel bad about themselves in the context of a math class will often avoid math later on. They lose their ability to fearlessly create and experiment and the get the idea that math is just a lot of memorization. The best antidote to this perdicament I have yet found is to play strategy games. Chess is a great example, but almost any game will do. meta-cognition.  '
  // const par4 = 'As a math teacher I am frequently asked questions like "Why do I have to do this?" and "When am I ever going to need this?" As a chess coach, I am never asked such questions. Math is incredibly useful, yet the way it is taught causes many kids to doubt this. The required math curriculum in the US certainly includes many things that the average person will never need outside of school. Chess, on the other hand, is not a required subject. It requires a lot of focus, deep thought, and study to play well, but it has no practical value.'
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={chess_at_college_track}
      imgAlign="right"
    />
  )
}

function ClubsSection() {
  const headerText = "Start a Club"
  const par1 = "I am currently looking to establish new partnerships with schools, libraries, homeschooling groups, and other community organizations to offer seasonal chess clubs. I will be coaching in South East Ohio during the Spring and Fall and in New Orleans during Winter. Pricing for this service is negotiable case by case."
  const par2 = "If you are interested in starting a chess club at your school please email nigel@stemgarden.org."

  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={chess_demo_board}
      imgAlign="left"
    />
  )
}

function LessonsSection() {
  const headerText = "Lessons"
  const par1 = "I offer private and small group lessons in person and online. My base rate is $40 per hour for chess coaching. As with tutoring, I am willing to barter for this service I am happy to coach parents on how best to support their own kids in learning chess. "
   
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1 ]}
      imgUrl={chess_at_college_track_2}
      imgAlign="right"
    />
  )
}


function ChessTeachingMaterialsSection() {
  return (
    <Grid container spacing={2} sx={{ pb: '2rem' }} >
      <Grid item xs={12} >
        <PageSubtitle text="Printable Chess Teaching Resources" />
      </Grid>
      {
        chessTeachingMaterials.filter(cardData => {
          return true
        }).map(cardData => {
          return (
            <Grid item xs={6} sm={4} key={cardData.title} >
              <CopyDriveFileCard cardData={cardData}  />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

function ChessClubHostAppSection(props) {
  const headerText = "Club Hosting Tool"
  const par1 = "I am currently working on a piece of software to automate the record keeping and rating calculations for in person clubs. It will have a leader board, tournament mode, free-play match up suggestions, a quiz series designed to help verify new members are fluent in the rules."

  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1 ]}
      imgUrl={simul_at_bric}
      imgAlign="left"
    />
  )
}



const chessTeachingMaterials = [
  {
    title: "Rules of Chess Handout",
    imgUrl: handout_rules_of_chess,
    googleDriveCopyUrl: "https://docs.google.com/document/d/1wLQb0hd7IGSsqOCa1ui8eyOQZDYkt3nzcq34qpHNc3I/copy",
  },{
    title: "Rules of Chess Posters",
    imgUrl: poster_rules_of_chess,
    googleDriveCopyUrl: "https://docs.google.com/document/d/10YYxbGb21AhLhDbFLkpnQ_3RsZy4FeuRsMneFkBlYAQ/copy",
  },{
    title: "Knight Coloring Quilt",
    imgUrl: knight_coloring_quilt,
    googleDriveCopyUrl: "https://docs.google.com/document/d/1_0r_X2OVDNPV6SCykmdW-l7zvoimjEScxCIOHbiRbRY/copy",
  },
]


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

