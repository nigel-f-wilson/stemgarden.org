import React from 'react';
import { Box, Button ,Typography } from '@mui/material';

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
      sx={{ flexGrow: 2 }}
    >
      <Box mr={1} display={{ xs: 'none', sm: 'flex' }} alignContent="center" >
        <FontAwesomeIcon icon={faRotateLeft} size='lg' />
      </Box>
      <Typography children="Play&nbsp;Again!" variant="button" noWrap />
    </Button>
  )
}