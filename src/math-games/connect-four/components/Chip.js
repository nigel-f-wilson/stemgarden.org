import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Slide } from '@mui/material'

// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';

export function Chip(props) {
  const { id, color, containerRef } = props

  // const { moveList, gameBoardConstants } = useContext(ConnectFourContext)
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSixth, chipSizeRelativeToSquare } = gameBoardConstants

  // const lastMoveMade = moveList.slice(-1)
  // console.log(`Last move made: ${lastMoveMade}`);
  // const iWasLast = (id === lastMoveMade)
  // console.log(`I was the last move made! ID: ${id}`);
  
  // let claimed = (color !== "unclaimed")
  let bgcolor = `connectFour.${color}`
  return (
    <Slide 
      in={true} 
      // in={iWasLast} 
      direction="down"
      container={containerRef.current}
      // easing="easing.parabolicAcceleration"
      // easing={{ enter: 'transitions.easing.easeOut', exit: 'transitions.easing.sharp' }}
    >
      <Box id="transparentSquareFrame"
        width='100%'
        height={oneSixth}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box id="chip"
          borderRadius='50%'
          zIndex='chip'
          bgcolor={bgcolor}
          width={chipSizeRelativeToSquare}
          height={chipSizeRelativeToSquare}
          children={id}
          color='#fff'
        />
      </Box>
    </Slide>

  )
}
Chip.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['playerOne', 'playerTwo', 'unclaimed']),
}
