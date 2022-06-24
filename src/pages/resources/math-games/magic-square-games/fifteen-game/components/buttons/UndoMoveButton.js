import React from 'react';
import { Box, Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

import { gameOver } from "../../../magicSquareHelpers";

export default function UndoMoveButton(props) {
  const { 
    moveList, 
    handleUndoClick, 
  } = props

  const disabled = (moveList.length === 0 || gameOver(moveList))
  
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleUndoClick()}
      disabled={disabled}
      sx={{ flexGrow: 2, mx: 1 }}
    >
      <Box mr={1} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faRotateLeft} size='lg' />
      </Box>
      Undo
    </Button>
  )
}



 