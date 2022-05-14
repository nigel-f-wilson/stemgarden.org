import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function PageTitle(props) {
  const { text, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const padding = (gutterBottom) ? "0 0 4rem" : "0"
  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      color={textColor}
      align="center" 
      sx={{
        // padding: padding,
        padding: padding, 
        textShadow: '0.15rem 0.15rem 0.3rem black',
        fontWeight: 200,
        fontSize: '2.6rem',
        lineHeight: '3.0rem',
        '@media (min-width: 450px)': {
          fontSize: '3.0rem',
          lineHeight: '3.5rem',
        },
        '@media (min-width: 600px)': {
          fontSize: '4.0rem',
          lineHeight: '4.7rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '5.0rem',
          lineHeight: '6.0rem', 
        },
      }}
    >
      { text }
    </Typography>
  )
}