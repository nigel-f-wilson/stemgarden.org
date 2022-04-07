import React from 'react';
import { Box, Button }from '@mui/material';

export default function DifficultyModeButtons(props) {
  const { difficultyMode, changeDifficultyMode } = props

  const DifficultyModeButton = (props) => {
    const { mode } = props
    const selected = (mode === difficultyMode)
    return (
      <Button
        label={mode}
        children={mode}
        sx={{ flexGrow: 1, mx: 1, border: selected ? 'solid white 3px' : 'none' }}
        variant={'contained'}
        onClick={() => changeDifficultyMode(mode)}
      />
    )
  }

  return (
    <Box width='100%' display='flex' justifyContent='space-between' >
      <DifficultyModeButton 
        mode='easy'
      />
      <DifficultyModeButton 
        mode='medium'
      />
      <DifficultyModeButton 
        mode='hard'
      />
    </Box>         
  )
}