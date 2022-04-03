import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';

import { 
  Container, 
  Box, 
} from '@mui/material';

import { generatePositionToOutcomeMap } from "./logic/gameLogic";

export default function TicTacToeRoot(props) {
  
  const startingPosition = "" 
  const [moveList, setMoveList] = useState(startingPosition);

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
        <Outlet context={[outcomeMap, moveList, setMoveList]} />
      </Container>
    </Box>
  )
}

