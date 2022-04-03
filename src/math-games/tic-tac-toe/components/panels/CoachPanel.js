import React from 'react';



// Custom Components
import StatusHeader from './StatusHeader';
import Commentary from "./Commentary";

import UndoMoveButton from "../buttons/UndoMoveButton";
import ShowSolutionButton from "../buttons/ShowSolutionButton";

// MUI Components
import { Box, Container } from '@mui/material';

export default function CoachPanel(props) {
    const { moveList, showSolution, toggleShowSolution, handleUndoClick, outcomeMap } = props
    
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
        <Box display='flex' >
          <ShowSolutionButton 
              showSolution={showSolution}
              toggleShowSolution={toggleShowSolution}
          />
          <Box id='spacer' px={2} />
          <UndoMoveButton
              gameOver={false}
              moveList={moveList}
              handleUndoClick={handleUndoClick}
          />
        </Box>
      </Container>
    )
}


