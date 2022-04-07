import React from 'react';



// Custom Components
import StatusHeader from './StatusHeader';
import Commentary from "./Commentary";

import HomeButton from "../buttons/HomeButton";
import DifficultyModeButtons from '../buttons/DifficultyModeButtons';
import BotGoFirstButton from '../buttons/BotGoFirstButton';


// MUI Components
import { Box, Container } from '@mui/material';

export default function BotPanel(props) {
    const { moveList, difficultyMode, changeDifficultyMode, outcomeMap, handleBotGoFirstClick } = props
    
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
          
          
        </Box>

        <DifficultyModeButtons 
          difficultyMode={difficultyMode}
          changeDifficultyMode={changeDifficultyMode}
        />
        <Box display='flex' >
          {/* <ShowSolutionButton 
              showSolution={showSolution}
              toggleShowSolution={toggleShowSolution}
          /> */}
          <Box id='spacer' px={1} />
          <BotGoFirstButton
              gameOver={false}
              moveList={moveList}
              handleBotGoFirstClick={handleBotGoFirstClick}
          />
          <Box id='spacer' px={1} />
          <HomeButton
              gameOver={false}
              moveList={moveList}
              handleClick={() => {console.log(`The HOME button is not built yet`)}}
          />
        </Box>
      </Container>
    )
}


