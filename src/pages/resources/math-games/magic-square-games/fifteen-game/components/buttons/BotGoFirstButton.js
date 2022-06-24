import React from 'react';
import { Button, Typography } from '@mui/material';


export default function BotGoFirstButton(props) {
  const { moveList, letBotGoFirst } = props
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => letBotGoFirst()}
      disabled={moveList.length !== 0}
      sx={{ flexGrow: 2, mx: 1 }}
    >
      <Typography children="Let" variant="button" display={{ xs: 'none', sm: 'block' }}  />
      <Typography children="Bot Go First" variant="button" noWrap />
    </Button>
  )
}