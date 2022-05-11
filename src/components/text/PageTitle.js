import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function PageTitle(props) {
  const { text } = props
  const { colorTheme } = useContext(AppContext)

  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      color={textColor}
      align="center" 
      sx={{
        textShadow: '0.15rem 0.15rem 0.3rem black',
        fontWeight: 200,
        fontSize: '2.4rem',
        '@media (min-width: 450px)': {
          fontSize: '3.0rem',
        },
        '@media (min-width: 600px)': {
          fontSize: '4.0rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '5.0rem',
        },
        paddingBottom: '2rem'
      }}
    >
      { text }
    </Typography>
  )
}