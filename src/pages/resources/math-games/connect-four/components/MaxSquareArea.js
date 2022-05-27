import React, { useContext } from 'react'
import { Box } from '@mui/material'

import { AppContext } from "../../../../../AppContext";

export function MaxSquareArea(props) {
  const { maxSquareSideLength } = useContext(AppContext)
  return (
    <Box 
      children={props.children}
      display='flex'
      flexDirection='column'
      alignItems='center'
      height={maxSquareSideLength}
      width={maxSquareSideLength}
      position='relative'
    />
  )
}