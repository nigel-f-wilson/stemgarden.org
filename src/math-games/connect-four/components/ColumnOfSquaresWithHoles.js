import React, { useContext } from 'react'
import { Box } from '@mui/material'

import { ConnectFourContext } from "../ConnectFourContext";

export function ColumnOfSquaresWithHoles(props) {
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { zIndex, rowNumbers, oneSixth, oneSeventh, sixSevenths, chipSizeRelativeToSquare, } = gameBoardConstants

  return (
    <Box id="columnOfSquares"
      position='absolute'
      top={oneSeventh}
      bgcolor='transparent'
      width='100%'
      height={sixSevenths}
      zIndex={zIndex.board}
      display='flex'
      flexDirection='column-reverse'
    >
      {rowNumbers.map(num => {
        return (
          <Box id="squareWithHole"
            key={num}
            overflow='hidden'
            width='100%'
            height={oneSixth}
            display='flex'
            justifyContent='center'
            alignItems='center'
            boxShadow='0px 1px 1px 1px #0039cb'
          >
            <Box id="hole"
              boxShadow="0 0 0 99px #0039cb"
              borderRadius='50%'
              bgcolor='transparent'
              width={chipSizeRelativeToSquare}
              height={chipSizeRelativeToSquare}
            />
          </Box>
        )
      })}
    </Box>
  )
}

