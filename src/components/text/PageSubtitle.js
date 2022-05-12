import React, { useContext } from 'react'
import { Typography, Box } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function PageTitle(props) {
  const { text } = props
  const { colorTheme } = useContext(AppContext)

  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Box px='10%' >
      <Typography 
        color={textColor}
        align="justify" 
        sx={{
          textShadow: '0.15rem 0.15rem 0.3rem black',
          fontWeight: 200,
          fontSize: '0.85rem',
          '@media (min-width: 450px)': {
            fontSize: '1.0rem',
          },
          '@media (min-width: 600px)': {
            fontSize: '1.2rem',
          },
          '@media (min-width: 900px)': {
            fontSize: '1.35rem',
          },
        }}
      >
        { text }
      </Typography>
    </Box>
  )
}
