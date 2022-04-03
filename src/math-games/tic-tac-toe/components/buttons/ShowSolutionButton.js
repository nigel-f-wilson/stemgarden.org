import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

export default function ShowSolutionButton(props) {
    const { showSolution, toggleShowSolution } = props

    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => toggleShowSolution()}
        sx={{  width: '100%', }}
      >
        <Box mr={2} display="flex" alignContent="center" >
          <FontAwesomeIcon icon={faQuestion} size='lg' />
        </Box>
        {showSolution ? "Hide Solution" : "Show Solution"}
      </Button>
    )
}
    

    
