import React, { useContext } from 'react'
import { Box } from '@mui/material';

import { PageTitle, PageSubtitle } from "./";
import { AppContext } from "../../AppContext";

export default function PageHeader(props) {
  const { title, subtitle } = props
  const { navbarHeightPx } = useContext(AppContext)
  const marginTop = `${navbarHeightPx}px`

  return (
    <Box 
      marginTop={marginTop}
      paddingY={{ xs: '2rem', sm: '3.5rem' }} 
      // paddingX="10%" 
    >
      <PageTitle text={title} gutterBottom={subtitle} />
      <PageSubtitle text={subtitle}  />
    </Box>
  )
}
