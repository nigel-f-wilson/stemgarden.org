import React from 'react';

import { Box, Paper, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faO, faXmark } from '@fortawesome/free-solid-svg-icons';

const green = '#3B3' 
const yellow = '#FF3'
const red = '#F44'
const white = '#ddd'

export default function Square(props) {
  const { icon, color, number, handleSquareClick } = props

  let squareIcon;
  switch (icon) {
    case 'x':
      squareIcon = 
      <Box display='flex' alignItems='center' sx={{fontSize: '12vh'}}>
        <FontAwesomeIcon icon={faXmark} size='lg' />
      </Box>
      break;
    case 'o':
      squareIcon = 
      <Box display='flex' alignItems='center' sx={{fontSize: '10vh'}}>
        <FontAwesomeIcon icon={faO} size='lg' />
      </Box>
      break;
    case '_':
      squareIcon = <Typography variant='h3' color='textSecondary' >{props.number}</Typography> // 
      break;
    default:
      console.error("Square passed symbol not 'x' 'o' or '_'");
  }

  let paperColor;
  switch (color) {
    case 'claimed':
      paperColor = white
      break;
    case 'unclaimed':
      paperColor = white
      break;
    case 'noColor':
      paperColor = white
      break;
    case 'draw':
      paperColor = yellow
      break;
    case 'win':
      paperColor = green
      break;
    case 'lose':
      paperColor = red
      break;
    default:
      paperColor = white
  }

  return (
    <Box
      p='0.35rem'
      width='33.3%'
      minWidth='100px'
      height='100%'
      display='flex'
    >
      <Paper
        number={number}
        onClick={() => handleSquareClick(number.toString())}
        sx={{
          width: '100%',
          backgroundColor: paperColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {squareIcon}
    </Paper>
    </Box>
  )
}
