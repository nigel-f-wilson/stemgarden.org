import React, { lazy, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import {  Container,  Box } from '@mui/material';

import { generatePositionToOutcomeMap } from "../magic-square-games.js/magicSquareGameSolution";

const Welcome = lazy(() => import('./pages/Welcome'))
const PlayWithCoach = lazy(() => import('./pages/PlayWithCoach'))
const PlayVsBot = lazy(() => import('./pages/PlayVsBot')) 

export default function TicTacToeRoutes(props) {
  const [outcomeMap, setOutcomeMap] = useState(null)
  useEffect(() => {
    let map = generatePositionToOutcomeMap()
    setOutcomeMap(map)
    console.log("Outcome Map Generated");
  }, [])

  return (
    <Box 
      width='100vw' 
      height='calc(100vh - 48px)'
      overflow='hidden'
      bgcolor='common.black'
      color='common.white'
    >
      <Container maxWidth='sm' disableGutters >
        <Routes >
          <Route index element={<Welcome />} />
          <Route path="play-with-coach" element={<PlayWithCoach outcomeMap={outcomeMap} />} />
          <Route path="play-vs-bot" element={<PlayVsBot outcomeMap={outcomeMap} />} />
        </Routes>
      </Container>
    </Box>
  )
}

