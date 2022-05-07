import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function NumberCard(props) {
  const { number, claimStatus, isInWin, handleNumberCardClick } = props

  let claimColor = (
    claimStatus === 'unclaimed' ? '#fff' : 
    claimStatus === 'playerOne' ? 'magicSquareGames.playerOne' :
    claimStatus === 'playerTwo' ? 'magicSquareGames.playerTwo' : 'error.main'
  )
  const textColor = (claimStatus === 'playerTwo') ? 'white' : 'black'
  const borderColor = (isInWin ? 'magicSquareGames.highlightWins' : 'transparent' )

  return (
    <Paper
      elevation={4}
      onClick={() => handleNumberCardClick(number.toString())}
      sx={{
        bgcolor: claimColor,
        borderStyle: 'solid',
        borderWidth: '0.7rem',
        borderColor: borderColor,
        margin: '1.2%',
        display: 'flex',
        flex: '2 0 2rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography 
        color={textColor}
        children={number}
        variant='h1'
      />
    </Paper>
  )
}