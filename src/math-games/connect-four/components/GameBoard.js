import React, { useContext } from 'react'
import { Box } from '@mui/material'

// My Components
import { Column } from "./Column";
import { InfoHeaderRow } from "./InfoHeaderRow";
import { RoundedBorder } from "./RoundedBorder";

// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';

export function GameBoard(props) {
  const { handleColumnClick } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { columnNumbers, boardSideLength } = gameBoardConstants
  // console.log(`RENDERING GAME BOARD with MOVE LIST: ${moveList}`);
  return (
    <Box id="game_board"
      position='relative'
      height={boardSideLength}
      width={boardSideLength}
      display='flex'
      flexDirection='row'
      alignItems='flex-end'
    >
      <InfoHeaderRow />  
      {columnNumbers.map((columnIndex) => {
        return (
          <Column 
            key={columnIndex}
            index={columnIndex}
            handleColumnClick={handleColumnClick}
          />
        )
      })}
      <RoundedBorder />
    </Box>
  )
}