import React from 'react';
import { Container } from "@mui/material"

export default function FlexRow(props) {
  const align = props.align ? props.align : 'center'
  const justify = props.justify ? props.justify : 'start'
  // const ma

  return (
    <Container 
      disableGutters
      maxWidth={props.maxWidth} 
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: align,
        justifyContent: justify,
        // backgroundColor: '#f00'
      }} 
    >
      { props.children }
    </Container>
  )
}
