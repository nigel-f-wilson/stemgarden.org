import React from 'react';



// Custom Components
import StatusHeader from './StatusHeader';
import Commentary from "./Commentary";

// import DifficultyModeButtons from '../buttons/DifficultyModeButtons';
// import BotGoFirstButton from '../buttons/BotGoFirstButton';
import HomeButton from "../buttons/HomeButton";


// MUI Components
import { Box, Container } from '@mui/material';

export default function BotPanel(props) {
  const { moveList, newGame, difficultyMode, changeDifficultyMode, outcomeMap, letBotGoFirst } = props
  
  const DifficultyModeButton = (props) => {
    const { mode } = props
    const selected = (mode === difficultyMode)
    return (
      <Button
        label={mode}
        children={mode}
        sx={{ flexGrow: 1, mx: 1, border: selected ? 'solid white 3px' : 'none' }}
        variant={'contained'}
        onClick={() => changeDifficultyMode(mode)}
      />
    )
  }
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

        <Box display='flex' >
          <HomeButton
              gameOver={false}
              moveList={moveList}
              handleClick={() => {console.log(`The HOME button is not built yet`)}}
          />
        </Box>
      </Container>
    )
      <Box  display='flex' justifyContent='space-between' >
        <DifficultyModeButton 
          mode='easy'
        />
        <DifficultyModeButton 
          mode='medium'
        />
        <DifficultyModeButton 
          mode='hard'
        />
      </Box>         
        <BotGoFirstButton
          letBotGoFirst={letBotGoFirst}
        />
}


