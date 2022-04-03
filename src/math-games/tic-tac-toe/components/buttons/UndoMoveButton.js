import React from 'react';

import { moveNumber } from "../../logic/gameLogic";


// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function UndoMoveButton(props) {
  const { moveList, gameOver, handleUndoClick } = props

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleUndoClick()}
      disabled={gameOver || moveNumber(moveList) === 1}
      sx={{ width: '100%' }}
    >
      <Box mr={2} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faRotateLeft} size='lg' />
      </Box>
      Undo
    </Button>
  )
}


