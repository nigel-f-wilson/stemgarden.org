import React from 'react';

import { Box, Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function UndoMoveButton(props) {
  const { moveList, gameOver, handleUndoClick } = props

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleUndoClick()}
      disabled={gameOver || moveList.length === 0}
      sx={{ width: '50%' }}
    >
      <Box mr={1} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faRotateLeft} size='lg' />
      </Box>
      Undo
    </Button>
  )
}


