import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function PageSubtitle(props) {
  const { text, align, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const padding = (gutterBottom) ? "0 0 0.4rem" : "0"
  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      children={text}
      color={textColor}
      align={align} 
      p={padding}
      sx={{
        textShadow: '0.15rem 0.15rem 0.3rem black',
        fontWeight: 200,
        fontSize: '1.7rem',
        '@media (min-width: 600px)': {
          fontSize: '1.8rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '2.0rem',
        },
      }}
    />
  )
}
