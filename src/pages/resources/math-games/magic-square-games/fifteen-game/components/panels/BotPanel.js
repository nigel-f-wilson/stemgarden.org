import React from 'react';
import { Box, Container, Button } from '@mui/material';

import StatusHeader from "./StatusHeader"
import HomeButton from "../buttons/HomeButton";
import NewGameButton from "../buttons/NewGameButton";
import DifficultyModeButton from "../buttons/DifficultyModeButton";
import WinLossDrawRecord from "./WinLossDrawRecord";

// Logic

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

  const playMode = "playVsBot" 


  // const WinLossDrawRecord = () => {
  //   // const {  } = props
  //   let playerOne = ""
  //   let playerTwo = ""
  //   if (humanGoesFirst) {
  //     playerOne = "X Human"
  //     playerTwo = "O Bot"
  //   }
  //   else {
  //     playerOne = "O Human"
  //     playerTwo = "X Bot"
  //   }

  //   return (
  //     <Box display='flex' flexDirection='column' px='25%' >
  //       <Box display='flex' justifyContent='space-between' >
  //         <Typography align='left' variant='h5' >
  //           {playerOne}:
  //         </Typography>
  //         <Typography align='right' variant='h5' >
  //           {winLossDrawRecord[0]}
  //         </Typography>
  //       </Box> 
  //       <Box display='flex' justifyContent='space-between' >
  //         <Typography align='left' variant='h5' >
  //           {playerTwo}:
  //         </Typography>
  //         <Typography align='right' variant='h5' >
  //           {winLossDrawRecord[1]}
  //         </Typography>
  //       </Box> 
  //       <Box display='flex' justifyContent='space-between' >
  //         <Typography align='left' variant='h5' >
  //           Drawn:
  //         </Typography>
  //         <Typography align='right' variant='h5' >
  //           {winLossDrawRecord[2]}
  //         </Typography>
  //       </Box> 
  //     </Box>  
  //   )
  // }

  return (
    <Container 
      sx={{ 
        width: '100%',
        height: '35vh',
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
        
      <Box>
        <Box mb={2} height={40} display='flex' justifyContent='space-between' > 
          <DifficultyModeButton thisButtonsMode='easy'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode} />
          <DifficultyModeButton thisButtonsMode='medium' difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode}  />
          <DifficultyModeButton thisButtonsMode='hard'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode}  />
        </Box> 
        <Box display='flex' justifyContent='space-between' height={40} >
          <BotGoFirstButton />
          <NewGameButton moveList={moveList} handleNewGameClick={handleNewGameClick} />
          <HomeButton />
        </Box>
      </Box>
    </Container>
  )
}


