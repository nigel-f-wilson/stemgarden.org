import React from 'react';
import { Box, Container, Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faQuestion } from '@fortawesome/free-solid-svg-icons';

// My Components
import StatusHeader from './StatusHeader';
import Commentary from "./Commentary";

import HomeButton from "../buttons/HomeButton";
// import UndoMoveButton from "../buttons/UndoMoveButton";
// import ShowSolutionButton from "../buttons/ShowSolutionButton";



export default function CoachPanel(props) {
  const { moveList, showSolution, toggleShowSolution, handleUndoClick, outcomeMap } = props

  const UndoMoveButton = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleUndoClick()}
        disabled={moveList.length === 0}
        sx={{ flexGrow: 2, mx: 1 }}
      >
        <Box mr={1} display="flex" alignContent="center" >
          <FontAwesomeIcon icon={faRotateLeft} size='lg' />
        </Box>
        Undo
      </Button>
    )
  }
  
  const ShowSolutionButton = () => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => toggleShowSolution()}
          sx={{ flexGrow: 2, mx: 1 }}
        >
          <Box mr={2} display="flex" alignContent="center" >
            <FontAwesomeIcon icon={faQuestion} size='lg' />
          </Box>
          {showSolution ? "Hide Solution" : "Show Solution"}
        </Button>
      )
  }
  

  return (
    <Container 
      sx={{ 
        width: '100%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box >
        <StatusHeader moveList={moveList} />
        <Commentary 
          moveList={moveList} 
          outcomeMap={outcomeMap}
        />
      </Box>
      <Box mb={2} height={40} display='flex' justifyContent='space-between' >
        <ShowSolutionButton 
          showSolution={showSolution}
          toggleShowSolution={toggleShowSolution}
        />
        <UndoMoveButton />
        <HomeButton />
      </Box>
    </Container>
  )
}


