import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { moveNumber } from "../../logic/gameLogic";


// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-regular-svg-icons';

export default function HomeButton(props) {
  const { moveList, gameOver, handleUndoClick } = props

  return (
    <Button
      component={RouterLink}
      to='../'
      variant="contained"
      color="primary"
      sx={{ width: '50%' }}
    >
      <Box mr={2} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faHome} size='lg' />
      </Box>
      Undo
    </Button>
  )
}


