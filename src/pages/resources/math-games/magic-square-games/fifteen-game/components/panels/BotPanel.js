import React from 'react';
import { Box, Container } from '@mui/material';

import StatusHeader from "./StatusHeader"
import { HomeButton, BotGoFirstButton, NewGameButton, DifficultyModeButton } from "../buttons";
import WinLossDrawRecord from "./WinLossDrawRecord";

export default function BotPanel(props) {
  const { 
    moveList, 
    humanGoesFirst, 
    handleNewGameClick, 
    difficultyMode, 
    changeDifficultyMode, 
    letBotGoFirst,
    winLossDrawRecord,
  } = props

  const playMode = "play-vs-bot" 

  return (
    <Container 
      sx={{ 
        width: '100%',
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      disableGutters
    >
      <StatusHeader 
        moveList={moveList} 
        playMode={playMode}
        humanGoesFirst={humanGoesFirst}
      />
      <WinLossDrawRecord 
        winLossDrawRecord={winLossDrawRecord}
        humanGoesFirst={humanGoesFirst}
        playMode={playMode}
      />
        
      <Box id='button-container' m={1} >
        <Box display='flex' justifyContent='space-between' height={40} mb={1}  > 
          <DifficultyModeButton thisButtonsMode='easy'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode} />
          <DifficultyModeButton thisButtonsMode='medium' difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode} marginX={1} />
          <DifficultyModeButton thisButtonsMode='hard'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode}  />
        </Box> 
        <Box display='flex' justifyContent='space-between' height={40} >
          <HomeButton />
          <BotGoFirstButton moveList={moveList} letBotGoFirst={letBotGoFirst} />
          <NewGameButton moveList={moveList} handleNewGameClick={handleNewGameClick} />
        </Box>
      </Box>
    </Container>
  )
}


