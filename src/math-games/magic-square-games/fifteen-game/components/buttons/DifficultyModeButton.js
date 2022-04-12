import React from 'react';
import { Button } from '@mui/material';

export default function DifficultyModeButton(props) {
  const { thisButtonsMode, difficultyMode, changeDifficultyMode } = props
  const selected = (thisButtonsMode === difficultyMode)
  return (
    <Button
      children={thisButtonsMode}
      sx={{flexGrow: 1, mx: 1, border: selected ? 'solid white 3px' : 'none' }}
      variant={'contained'}
      onClick={() => changeDifficultyMode(thisButtonsMode)}
    />
  )
}
  