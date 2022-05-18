import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';

import { AppContext } from "../../AppContext";

export default function PageHeader(props) {
  const { title, subtitle } = props

  return (
    <Box p='2rem 10%' >
      <PageTitle text={title} gutterBottom={subtitle} />
      <PageSubtitle text={subtitle}  />
    </Box>
  )
}


export function PageTitle(props) {
  const { text, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const padding = (gutterBottom) ? "0 0 2rem" : "0"
  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      color={textColor}
      align="center" 
      sx={{
        padding: padding, 
        textShadow: '0.15rem 0.15rem 0.3rem black',
        fontWeight: 200,
        fontSize: '2.6rem',
        lineHeight: '2.8rem',
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

export function PageSubtitle(props) {
  const { text, align, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const display = (text) ? "flex" : "none"
  const padding = (gutterBottom) ? "0 0 3rem" : "0"
  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      children={text}
      display={display}
      color={textColor}
      align={align} 
      p={padding}
      sx={{
        textShadow: '0.15rem 0.15rem 0.3rem black',
        fontWeight: 200,
        fontSize: '1.5rem',
        lineHeight: '1.7rem',
        '@media (min-width: 600px)': {
          fontSize: '1.7rem',
          lineHeight: '2.0rem',
        },
        // '@media (min-width: 900px)': {
        //   fontSize: '2.0rem',
        // },
      }}
    />
  )
}