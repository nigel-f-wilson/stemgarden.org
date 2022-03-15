import React from 'react'

import { useScreenWidth } from "../hooks"

import CustomCard from "../components/CustomCard"
import { Container, Box, Grid, Typography } from '@mui/material';

// MY images
// import leafy_background from "../images/leafy_background.jpg";
const leafy_background = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1647192146/stemgarden.org/leafy_background_wzclfb.jpg"

// Tutoring
const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"

// Math Games
// const playing_the_15_game = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646685339/stemgarden.org/project_screenshots/playing_the_15_game_rcowti.jpg"
// const playing_connect_four = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646687130/stemgarden.org/project_screenshots/playing_math_fact_connect_four_zgyzou.jpg"
const girls_playing_connect_four = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647052443/stemgarden.org/teaching/connect_four/girls_playing_math_fact_connect_four_j84gqo.jpg"

// Chess Clubs
const chess_at_college_track = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647050134/stemgarden.org/chess/chess_club_college_track_st00uc.jpg"
// const chess_at_bric = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1647050028/stemgarden.org/chess/chess_club_at_bric_tvycwi.jpg"
// const chess_demo_board = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1612135192/stemgarden.org/chess/chess_demo_board_qtdzpw.jpg"
// const simul_at_bric = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646937461/stemgarden.org/chess/simul_at_bric_nagag0.jpg"

// Enrichment + Hands On
const guitar_fret_measuring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646597930/stemgarden.org/teaching/hands_on/guitar_fret_spacing_jezbuk.jpg"
const bike_gear_ratio_tutoring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647052266/stemgarden.org/teaching/hands_on/bike_gear_ratios_at_tutoring_s6l3ee.jpg"

// What We Grow
const banana_papaya_turmeric_flower = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646607021/stemgarden.org/banana_papaya_turmeric_j3f7k9.jpg"

const profile_with_hoe = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647374938/stemgarden.org/nigel/profile-pic_ncluzf.jpg"
const mushroom_background = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647375289/stemgarden.org/garden_backgrounds/mushroom_yfjiho.jpg"
const banana_papaya_pile = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1612135416/stemgarden.org/harvests/banana_papaya_harvest_f9ml5d.jpg"

const landingCards = [
  {
    title: "Math Tutoring",
    linkTo: "tutoring-services",
    imgUrl: practicing_math_facts

  },
  {
    title: "Math Games",
    linkTo: "math-games",
    // imgUrl: playing_the_15_game,
    imgUrl: girls_playing_connect_four,
  },
  {
    title: "Chess Clubs",
    linkTo: "services/tutoring",
    imgUrl: chess_at_college_track
  },
  {
    title: "STEM Enrichment",
    linkTo: "services/tutoring",
    imgUrl: bike_gear_ratio_tutoring,
  },
  {
    title: "What We Grow",
    linkTo: "about",
    imgUrl: banana_papaya_turmeric_flower,
  },
  {
    title: "Study Materials",
    linkTo: "/services/tutoring",
    imgUrl: guitar_fret_measuring,
  },
  {
    title: "Our Story",
    linkTo: "/garden/story",
    imgUrl: mushroom_background,
  },
  {
    title: "Buy Our Fruit",
    linkTo: "/garden/for_sale",
    imgUrl: banana_papaya_pile,
  },
  {
    title: "Get Involved",
    linkTo: "/garden/get_involved",
    imgUrl: profile_with_hoe,
  },
]

export default function LandingPage() {
  const screenWidth = useScreenWidth()
  const smallScreen = screenWidth < 600
  return (
    <Background smallScreen={smallScreen} >
      <Header />
      <CardGrid />
    </Background>
  )
}

function Background(props) {
  const gradient = (props.smallScreen) ?
    "linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)"
    : "linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)"

  const backgroundStyles = {
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    backgroundImage: `
      ${gradient},
      url(${leafy_background})
    `,
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',

    margin: '3rem 0rem 0rem',
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }  
  return (
    <Box sx={backgroundStyles} >
      <Container maxWidth='md' id='landing' >
        { props.children }
      </Container>
    </Box>
  )
}

function Header() {
  return (
    <Box sx={{ padding: '0 2rem' }} >
      <Typography align="center" variant="pageHeader" >
          Sowing seeds of life&#8209;long learning and DIY&#8209;spirit.
      </Typography>
    </Box>
  )
}

function CardGrid(props) {
  return (
    <Grid container 
      
      // spacing={2} 
      sx={{ 
        padding: '3rem 0rem',
        margin: '0 auto'
      }}
    >
      {
        landingCards.map((cardData, index) => {
          return (
            <Grid item xs={6} sm={4} key={index} padding='0.4rem' >
              <CustomCard data={cardData}  />
            </Grid>
          )
        })
      }
    </Grid>
  )
}
 
// {/* 
//       The STEM Garden is an off-grid urban teaching garden rooted in New Orleans.
//       We offer private tutoring and small group lessons, both in the garden and online.
//       We help students excell on the SAT and ACT and meet all Common Core math standards,
//       but we see learning math as so much more than that! We emphacize the playful side of
//       mathematical thinking and make use of many puzzles, games, and hands-on projects to engage young imaginations.
//   </Typography> */}