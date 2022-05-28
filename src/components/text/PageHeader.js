import React from 'react'
import { Box } from '@mui/material';

import { PageTitle, PageSubtitle } from "./";

export default function PageHeader(props) {
  const { title, subtitle } = props

  return (
    <Box p='3.5rem 10%' >
      <PageTitle text={title} gutterBottom={subtitle} />
      <PageSubtitle text={subtitle}  />
    </Box>
  )
}




