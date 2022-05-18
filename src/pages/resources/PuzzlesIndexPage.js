import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, Typography, Button, Stack } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader } from "../../components/text";

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

export default function PuzzlesIndexPage() {
  
  return (
    <Background>
      <Container maxWidth="md" >
        <PageHeader 
          title="Puzzles"
          subtitle="Each can be used with students at a wide range of levels. It's not about the answer, it about how you explore and explain."
          // subtitle="I assembled this colletion of math puzzles over many years, pulling from many sources. Introduce a puzzle, allow space for struggle and confusion. Where other sheets are great for practicing basic skills these puzzles are for practicing high level problem solving. The important thing when using these puzzles is not the final answer, it is about how you approach the problem. Practice organizing your thoughts, breaking problems down into simpler parts, creating your own simpler problems to help as you explore the the puzzles in their original form. How kids get answers to these puzzles will vary a lot depending on what techniques the have recieve instruction on. None of these puzzles is meant to be solved one way, to be part of this collection a puzzle had to bear a connection to a high school standard while still being accessible to much younger kids with no formal teaching on that standard. Use the same puzzle more tSome of these are old classics and some These are my personal favorites ollection consists of my personal favorites of one page puzzles I have assembeled from many sources."
        />
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
      </Container>
    </Background>
  )
}

function MathGameCard(props) {
  const { title, linkTo, imgUrl, disabled } = props.data

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
