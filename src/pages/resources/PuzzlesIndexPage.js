import React from 'react'
import {  Container, Grid } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader } from "../../components/text";
import { CopyDriveFileCard } from "../../components/cards";

import { puzzleData } from "./puzzleData"

export default function PuzzlesIndexPage() {

  // const [selectedTags, setSelectedTags] = useState({
  //   "pythagorean theorem": true,
  //   "classic puzzles": true,
  //   "factoring": true,
  //   circles: true,
  //   area: true,

  //   // combinations
  //   // logic
  //   // fractions
  //   // sequences
  //   // permutations
  //   // 'tree graph'
  //   // percents
  //   // probability
  //   // circles
  //   // area
  //   // distance
  //   // nets
  //   // "pythagorean theorem"
  //   // "algebra"
  //   // "classic puzzles"
  //   // "factoring"
  //   // "perfect squares"
  //   // quadratic
  //   // "linear system"
  //   // "unit rates"
  //   // triangle numbers
  //   // "arithmetic series"
  //   // multiplication
  //   // averages
  // }) 
  
  return (
    <Background>
      <Container maxWidth="lg" sx={{ pb: '3rem' }} >
        <PageHeader title="Puzzles"
          // subtitle="My personal favorites, collected over many years of happy nerding."
          // subtitle="I assembled this colletion of math puzzles over many years, pulling from many sources. Introduce a puzzle, allow space for struggle and confusion. Where other sheets are great for practicing basic skills these puzzles are for practicing high level problem solving. The important thing when using these puzzles is not the final answer, it is about how you approach the problem. Try out different way of organizing your thoughts on paper. Break problems down into simpler parts and create your own simpler warm-up problems to help as you get started in your exploration. How kids get answers to these puzzles will vary a lot depending on what techniques the have recieved previous instruction on. None of these puzzles is meant to be solved just one way. To be part of this collection a puzzle had to bear a connection to a high school standard while still being accessible to much younger kids with no formal teaching on that standard. Avoid any hint giving as much as possible. If you are an adult and are struggling to solve one of these, great! share that sturggle with a youngster! It is vital for kids to see adults try at things where success is not a foregone conclusion. Don't just teach them what you know; Teach them what you do when you don't already know. It is ok if a kid isn't able to solve one of these puzzles the day it is first assigned and has to revisit it weeks later. An excellent way to use these puzzles is to present the same one repeatedly to a student at an interval of a few years. Let them observe how their approach changes as thier mathematical experience grows."
        />
        <Grid container spacing={2} >
          {/* <Grid item xs={12} >
            <Filter 
              selectedTags={selectedTags} 
              setSelectedTags={setSelectedTags}
            />
          </Grid> */}
          {
            puzzleData.filter(cardData => {
              return true
            }).map(cardData => {
              const { cardTitle } = cardData
              return (
                <Grid item xs={6} sm={4} md={3} key={cardTitle} >
                  <CopyDriveFileCard cardData={{...cardData}}  />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Background>
  )
}

// function Filter(props) {
//   const { selectedTags, setSelectedTags } = props
//   return (
//     <Card raised sx={{ height: '100%', borderRadius: 1, bgcolor: 'white', padding: 2 }} >
//       <Typography variant='h4' children="Filter by prerequisite" />
//       {/* <Typography children="While these puzzles are great for fostering creative problem solving, I don't reccomend giving a puzzle that requires the pythagorean theorem to a student who has never been icreative Some of these can be solved with pure creativity but other" /> */}
//       <Typography variant='h4' children="Filter by source" />

      
//     </Card>
//   )
// }
