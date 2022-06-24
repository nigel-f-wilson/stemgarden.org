import React from 'react';
import { Box, Container } from '@mui/material';

// My Components
import StatusHeader from './StatusHeader';
import WinLossDrawRecord from "./WinLossDrawRecord";
import { HomeButton, NewGameButton, UndoMoveButton } from "../buttons";

export default function FriendPanel(props) {
  const { 
    moveList, 
    gameNumber,
    handleNewGameClick, 
    winLossDrawRecord,
    handleUndoClick, 
  } = props

  const playMode = "play-vs-friend"  

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
        <StatusHeader 
          moveList={moveList} 
          gameNumber={gameNumber}
          playMode={playMode}
            
        />
        <WinLossDrawRecord 
          gameNumber={gameNumber}
          winLossDrawRecord={winLossDrawRecord}
          playMode={playMode}
          // humanGoesFirst={humanGoesFirst}
        />
        
      </Box>
      <Box display='flex' justifyContent='space-between' height={40} >
        <HomeButton />
        <UndoMoveButton moveList={moveList} handleUndoClick={handleUndoClick} />
        <NewGameButton moveList={moveList} handleNewGameClick={handleNewGameClick} />
      </Box>
    </Container>
  )
}

