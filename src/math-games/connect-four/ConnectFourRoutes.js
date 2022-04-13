import React, { lazy, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import {  Container,  Box } from '@mui/material';

import { generatePositionToOutcomeMap } from "../solution";

// My Components
import App from './pages/App'
// import Welcome from './pages/Welcome'
// const PlayWithCoach = lazy(() => import('./pages/PlayWithCoach'))
// const PlayVsBot = lazy(() => import('./pages/PlayVsBot')) 


export default function ConnectFourRoutes(props) {
  const [outcomeMap, setOutcomeMap] = useState(null)
  
  useEffect(() => {
    const generateOutcomeMapAsync = async () => {
      const map = await generatePositionToOutcomeMap()
      setOutcomeMap(map)
      console.log("Outcome Map Generated");
    }
    generateOutcomeMapAsync()
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
          <Route index element={<App />} />
          {/* <Route path="play-with-coach" element={<PlayWithCoach outcomeMap={outcomeMap} />} /> */}
          {/* <Route path="play-vs-bot" element={<PlayVsBot outcomeMap={outcomeMap} />} /> */}
        </Routes>
      </Container>
    </Box>
  )
}