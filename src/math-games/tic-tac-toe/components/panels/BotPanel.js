import React from 'react';



// Custom Components
import StatusHeader from './StatusHeader';
import Commentary from "./Commentary";

// import DifficultyModeButtons from '../buttons/DifficultyModeButtons';
// import BotGoFirstButton from '../buttons/BotGoFirstButton';
// import NewGameButton from '../buttons/NewGameButton';
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
  const NewGameButton = (props) => {
    const { gameOver, newGame } = props
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => newGame()}
        disabled={!gameOver}
        sx={{ 
          flexGrow: 2,
          mx: 1
        }}
      >
        <Box mr={2} display="flex" alignContent="center" >
          <FontAwesomeIcon icon={faRotateLeft} size='lg' />
        </Box>
        Play&nbsp;Again!
      </Button>
    )
  }
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
        <NewGameButton
            gameOver={gameOver(moveList)}
            moveList={moveList}
            newGame={newGame}
        />
        {/* <Box id='spacer' px={1} /> */}
}


