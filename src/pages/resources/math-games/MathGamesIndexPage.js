import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, Typography, Button, Stack } from '@mui/material';

import { Background } from "../../../components/backgrounds";
import { PageHeader } from "../../../components/text";

// Images 
import { 
  connect_four_screenshot,
  tic_tac_toe_screenshot,
  fifteen_game_screenshot,
  under_construction,
} from "../../../cloudinaryURLs"

const connect_four_description = "The classic game with a twist. Each time you select a column to drop a chip in you will be presented with a math question. Answer it correctly or your turn will be skipped!"
const tic_tac_toe_description = "Play the most underestimated strategy game of all time with a coach that will help you see its true depth. Tic Tac Toe serves as a wonderful tool for introducing kids to mathematical proof, tree diagrams, symmetry, and counting techniqes. "
const fifteen_game_description = "Two players go head to head trying to collect a set of three cards that add up to 15. This game is a fantastic tool for building mental addition skills. For advanced players it has connections to combinations, permutations, and magic squares."

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
  
  return (
    <Background>
      <Container maxWidth="md" >
        <PageHeader 
          title="Math Games"
          subtitle="These games have something to offer students at all levels! Some aim to make practicing foundation facts a little more fun. Others have built in lessons on binary numbers, probability, combinatorics, and proof."
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
