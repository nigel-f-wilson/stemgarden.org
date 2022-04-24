import React, { useContext } from 'react'
import { Box } from '@mui/material'

import { PageLayoutContext } from "../../../contexts";

export function MaxSquareArea(props) {
  const { maxSquareSideLength } = useContext(PageLayoutContext)
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