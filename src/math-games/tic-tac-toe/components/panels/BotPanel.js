import React from 'react';



// Custom Components
import StatusHeader from './StatusHeader';
import Commentary from "./Commentary";

// import BotGoFirstButton from '../buttons/BotGoFirstButton';
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
  const BotGoFirstButton = (props) => {
    // const { moveList, letBotGoFirst } = props
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => letBotGoFirst()}
        disabled={moveList.length !== 0}
        sx={{
          flexGrow: 2,

        <DifficultyModeButtons 
          difficultyMode={difficultyMode}
          changeDifficultyMode={changeDifficultyMode}
        />
        <Box display='flex' >
          <HomeButton
              gameOver={false}
              moveList={moveList}
              handleClick={() => {console.log(`The HOME button is not built yet`)}}
          />
        </Box>
      </Container>
    )
        <BotGoFirstButton
          letBotGoFirst={letBotGoFirst}
        />
}


