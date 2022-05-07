import React from 'react'

import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Card, CardMedia, Typography, Button, Stack } from '@mui/material';
// import MathGameCard from "../components/cards/MathGameCard"

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
    title: "Fluency Checklist",
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

export default function MathGamesIndexPage() {
  // const { narrowScreen } = useContext(PageLayoutContext)
  return (
    <Background >
      <PageHeader />
      <Grid container spacing={2} >
      {
        mathGamesCardData.map((cardData, index) => {
          return (
            <Grid item xs={6} md={4} key={index} >
              <MathGameCard data={cardData}  />
            </Grid>
          )
        })
      }
    </Grid>
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
function PageHeader() {
  return (
    <Box padding='2rem 1rem 3rem' display='flex' flexDirection='column' >
      <Typography align="center" variant="pageHeader" >
          Math Games
      </Typography>
      <Typography align="justify" variant="pageSubheader" px='8%' >
          These games have something to offer students at all levels!
          Some aim to make practicing foundation facts a little more fun.
          Others have built in lessons on binary numbers, probability, combinatorics, and proof.
      </Typography>
    </Box>
  )
}


function MathGameCard(props) {
  const { 
    title, 
    linkTo, 
    imgUrl, 
    disabled 
  } = props.data

  return (
    <Card raised
      sx={{ height: '100%', borderRadius: 1, 
        bgcolor: 'black'
      }}
    >
      <Stack height='100%' display='flex' justifyContent='space-between' p={1} >
        <Typography 
          children={title}
          color="white"
          align='center'
          fontSize='1.2rem'
        />
        <CardMedia
          component="img"
          image={imgUrl}
          alt={title}
        />
        <Button 
          component={RouterLink} 
          to={linkTo}
          disabled={disabled}
          children="Play Now!"
          variant='contained'
          sx={{ mt: 1 }}
        />
      </Stack>
    </Card>
  )
}
