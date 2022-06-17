import React from 'react';
import { Box, Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';


// Logic
import { gameOver } from "../../../magicSquareHelpers";

export default function NewGameButton(props) {
  const { 
    moveList, 
    handleNewGameClick
  } = props

  return (
    <Button
      onClick={() => handleNewGameClick()}
      variant="contained"
      color="primary"
      disabled={!gameOver(moveList)}
      sx={{ flexGrow: 2, mx: 1 }}
    >
      <Box mr={2} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faRotateLeft} size='lg' />
      </Box>
      Play&nbsp;Again!
    </Button>
  )
}