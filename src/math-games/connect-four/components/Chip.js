import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Slide } from '@mui/material'

// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';

export function Chip(props) {
  const { id, containerRef } = props
  const { boardData, gameBoardConstants } = useContext(ConnectFourContext)
  const { zIndex, oneSixth, chipSizeRelativeToSquare } = gameBoardConstants

  const color = boardData[id]
  let bgcolor = `connectFour.${color}`
  return (
    <Slide 
      in={color !== 'unclaimed'}
      timeout={300}
      direction="down"
      container={containerRef.current}
      // easing="easing.parabolicAcceleration"
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
          zIndex={zIndex.board}
          bgcolor={bgcolor}
          width={chipSizeRelativeToSquare}
          height={chipSizeRelativeToSquare}
        />
      </Box>
    </Slide>
  )
}
Chip.propTypes = {
  id: PropTypes.number.isRequired,
  containerRef: PropTypes.object.isRequired
}
