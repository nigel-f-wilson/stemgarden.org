import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import theme from "../../theme";
import { AppContext } from "../../AppContext";

export default function Paragraph(props) {
  const { text } = props
  const { colorTheme } = useContext(AppContext)
  const textColor = (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      children={text}
      color={textColor}
      align="justify" 
      variant="body1"
      gutterBottom
      sx={{
        fontSize: '0.9rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '1.1rem',
        },
        // [theme.breakpoints.up('md')]: {
        //   fontSize: '1.3rem',
        // },
      }}
    />
  )
}
