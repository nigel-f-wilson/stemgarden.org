import React from 'react'

import { useScreenWidth } from "../hooks"

import CustomCard from "../components/CustomCard"

import { useTheme } from "@mui/system";
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


const landingCards = [
  {
    title: "Connect Four",
    // decscription: "",
    linkTo: "tutoring-services",
    imgUrl: girls_playing_connect_four,

  },
  {
    title: "Tic Tac Toe Coach",
    linkTo: "math-games",
    // imgUrl: playing_the_15_game,
    imgUrl: girls_playing_connect_four,
  },
  {
    title: "The Fifteen Game",
    linkTo: "services/tutoring",
    imgUrl: girls_playing_connect_four,
  },
  {
    title: "Quick Quizes",
    linkTo: "services/tutoring",
    imgUrl: girls_playing_connect_four,
  },
  {
    title: "Classic Nim",
    linkTo: "about",
    imgUrl: girls_playing_connect_four,
  },
 
]

export default function MathGames() {
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
  const theme = useTheme()
  const backgroundStyles = {
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: theme.palette.darkGrey,

    margin: '3rem 0rem 0rem',
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }  
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      height= 'auto'
      bgcolor="darkGrey"

      margin='3rem 0rem 0rem'
      padding='3rem 1rem'
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
    >
      <Container maxWidth='md' id='math-games' >
        { props.children }
      </Container>
    </Box>
  )
}

function Header() {
  return (
    <Box sx={{ padding: '0 2rem' }} >
      <Typography align="center" variant="pageHeader" >
          Math Games
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