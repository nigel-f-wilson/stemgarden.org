import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, Typography, Button, Stack } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader } from "../../components/text";

import { puzzleData } from "./puzzleData"

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
            puzzleData.map(cardData => {
              const { title, tags, imgUrl, googleDriveCopyUrl } = cardData 
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
