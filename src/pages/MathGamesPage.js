import React from 'react'

import { useScreenWidth } from "../hooks"

import MathGameCard from "../components/cards/MathGameCard"

import { Container, Box, Grid, Typography } from '@mui/material';

// Images 
const connect_four_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561099/stemgarden.org/project_screenshots/connect-four_y750ue.jpg"
const connect_four_description = "The classic game with a twist. Each time you select a column to drop a chip in you will be presented with a math question. Answer it correctly or your turn will be skipped!"

const tic_tac_toe_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1647713688/stemgarden.org/project_screenshots/TicTacToeCoachScreenshot860x800_vvlgl3_f6ewfv.png"
const tic_tac_toe_description = "Play the most underestimated strategy game of all time with a coach that will help you see its true depth. Tic Tac Toe serves as a wonderful tool for introducing kids to mathematical proof, tree diagrams, symmetry, and counting techniqes. "

const fifteen_game_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1647714008/stemgarden.org/project_screenshots/Fifteen_Game_Screenshot_cropped_aycwzx.png"
const fifteen_game_description = "Two players go head to head trying to collect a set of three cards that add up to 15. This game is a fantastic tool for building mental addition skills. For advanced players it has connections to combinations, permutations, and magic squares."

const under_construction = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561688/stemgarden.org/under_construction_sbiop2.png"

const mathGamesCardData = [
  {
    title: "Math Fact Connect Four",
    description: connect_four_description,
    linkTo: "connect-four",
    imgUrl: connect_four_screenshot,
    disabled: false
  },
  {
    title: "Tic Tac Toe Coach",
    description: tic_tac_toe_description,
    linkTo: "tic-tac-toe",
    imgUrl: tic_tac_toe_screenshot,
    disabled: false
  },
  {
    title: "The Fifteen Game",
    description: fifteen_game_description,
    linkTo: "the-15-game",
    imgUrl: fifteen_game_screenshot,
    disabled: false
  },
  {
    title: "Quick Quizes",
    linkTo: "the-15-game",
    imgUrl: under_construction,
    disabled: true
  },
  {
    title: "Classic Nim",
    linkTo: "the-15-game",
    imgUrl: under_construction,
    disabled: true
  },
  {
    title: "Fibonacci Nim",
    linkTo: "the-15-game",
    imgUrl: under_construction,
    disabled: true
  },
 
]

export default function MathGamesPage() {
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
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      bgcolor="darkGrey"
      display='flex'
      flexDirection='column'
    >
      <Container maxWidth='md' id='math-games' >
        { props.children }
      </Container>
    </Box>
  )
}
function Header() {
  return (
    <Box padding='4rem 1rem 2rem' display='flex' flexDirection='column' >
      <Typography align="center" variant="pageHeader" >
          Math Games
      </Typography>
      <Typography align="center" variant="pageSubheader"  >
          These games have something to offer students at all levels!
          Some aim to make practicing foundation facts a little more fun.
          Others have built in lessons on combinatorics and proof.
      </Typography>
    </Box>
  )
}

function CardGrid(props) {
  return (
    <Grid container 
      sx={{ 
        padding: '3rem 0rem',
        margin: '0 auto'
      }}
    >
      {
        mathGamesCardData.map((cardData, index) => {
          return (
            <Grid item xs={12} key={index} padding='0.4rem' >
              <MathGameCard data={cardData}  />
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