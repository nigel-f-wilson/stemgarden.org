import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function CardTitle(props) {
  const { text, align, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const padding = (gutterBottom) ? "0 0 0.4rem" : "0"
  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      noWrap
      children={text}
      color={textColor}
      align={align} 
      p={padding}
      sx={{
        textShadow: '0.12rem 0.12rem 0.2rem black',
        fontWeight: 200,
        fontSize: '1.1rem',
        lineHeight: '1.6rem',
        '@media (min-width: 600px)': {
          fontSize: '1.7rem',
        lineHeight: '2.1rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '1.5rem',
        lineHeight: '1.8rem',
        },
      }}
    />
  )
}
