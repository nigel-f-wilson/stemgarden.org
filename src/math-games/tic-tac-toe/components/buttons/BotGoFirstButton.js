import React from 'react';

import Button from '@mui/material';

export default function DifficultyModeButtons(props) {
  const { handleBotGoFirstClick } = props
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleBotGoFirstClick()}
      disabled={props.moveList.length !== 0}
      sx={{
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '2.1rem',
        fontSize: '1rem',
      }}
    >
      Let&nbsp;Bot&nbsp;Go&nbsp;First
    </Button>
  )
}