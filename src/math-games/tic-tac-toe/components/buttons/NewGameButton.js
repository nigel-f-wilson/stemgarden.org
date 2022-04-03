import React from 'react';

// My Components

// MUI Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';


export default function NewGameButton(props) {
  const { gameOver, disabled } = props
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={() => props.handleNewGameClick()}
      disabled={!gameOver}
      sx={{ 
        width: '100%',
        height: '2.1rem',
        fontSize: '1rem', 
      }}
    >
      <Box mr={2} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faRotateLeft} size='lg' />
      </Box>
      New&nbsp;Game
    </Button>
  )
}


