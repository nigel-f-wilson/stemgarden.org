import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'

// My Components
import { Chip } from "./Chip";
import { ColumnOfSquaresWithHoles } from "./ColumnOfSquaresWithHoles";

import { ConnectFourContext } from '../ConnectFourContext';


export function Column(props) {
  const { index, handleColumnClick } = props
  const { gameIsOver, nextPlayer, gameBoardConstants } = useContext(ConnectFourContext)
  const { columnLetters, oneSeventh } = gameBoardConstants

  let columnLetter = gameIsOver ? '' : columnLetters[index]
  
  return (
    <Box id="column" 
      onClick={() => handleColumnClick(index)}
      position='relative'
      width={oneSeventh}
      height='100%'
      sx={{
        '&:hover #hoverChip': {
          backgroundColor: `connectFour.${nextPlayer}`,
        },
      }}
    >
      <HoverChip columnLetter={columnLetter} />
      <ChipContainer index={index} />
      <ColumnOfSquaresWithHoles />
    </Box>
  );
}

function HoverChip(props) {
  const { columnLetter } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, chipSizeRelativeToSquare } = gameBoardConstants

  return (
    <Box id="hoverChipContainer"
      height={oneSeventh}
      zIndex={8}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box id="hoverChip"
        bgcolor='background'
        width={chipSizeRelativeToSquare}
        height={chipSizeRelativeToSquare}
        borderRadius='50%'
        zIndex={8}
        display='flex'
        justifyContent='center'
        alignItems='flex-end'
        fontSize='2rem'
      >
        <Typography variant='h4' color='connectFour.text'  >
          {columnLetter}  
        </Typography>
      </Box>
    </Box>
  )
}

function ChipContainer(props) {
  const { index } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, sixSevenths, rowNumbers,  } = gameBoardConstants

  const containerRef = React.useRef(null);
  const cellsInColumn = rowNumbers.map(row => index + 7 * row)

  return (
    <Box 
      ref={containerRef}
      width='100%'
      position='absolute'
      top={oneSeventh}
      bgcolor='transparent'
      height={sixSevenths}
      zIndex={8}
      display='flex'
      flexDirection='column-reverse'
    >
      {cellsInColumn.map(cellId => {
        return (
          <Chip
            key={cellId}
            id={cellId}
            containerRef={containerRef}
          />
        )
      })}
    </Box>
  )
}
