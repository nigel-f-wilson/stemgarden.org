import React from 'react'

import { useScreenWidth } from "../hooks"

import CustomCard from "../components/CustomCard"

import { useTheme } from "@mui/system";
import { Container, Box, Grid, Typography } from '@mui/material';

// Images 
const connect_four_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561099/stemgarden.org/project_screenshots/connect-four_y750ue.jpg"
const tic_tac_toe_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646607861/stemgarden.org/project_screenshots/TicTacToeCoachScreenshot860x800_vvlgl3.png"
const fifteen_game_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646607861/stemgarden.org/project_screenshots/FifteenGameScreenshot860x800_inrlpn.png"
const under_construction = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561688/stemgarden.org/under_construction_sbiop2.png"

const landingCards = [
  {
    title: "Connect Four",
    // decscription: "",
    linkTo: "tutoring-services",
    imgUrl: connect_four_screenshot,

  },
  {
    title: "Tic Tac Toe Coach",
    linkTo: "math-games",
    imgUrl: tic_tac_toe_screenshot,
  },
  {
    title: "The Fifteen Game",
    linkTo: "services/tutoring",
    imgUrl: fifteen_game_screenshot,
  },
  {
    title: "Quick Quizes",
    linkTo: "services/tutoring",
    imgUrl: under_construction,
  },
  {
    title: "Classic Nim",
    linkTo: "about",
    imgUrl: under_construction,
  },
  {
    title: "Fibonacci Nim",
    linkTo: "about",
    imgUrl: under_construction,
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
      <Typography align="center" variant="cardHeader" >
          
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