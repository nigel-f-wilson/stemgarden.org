import React from 'react'
import { Box } from "@mui/material";
import { PageTitle, PageSubtitle } from "../text";

export default function PageHeader(props) {
  const { title, subtitle } = props

  return (
    <Box px='10%' >
      <PageTitle text={title} padding="2rem 0 2rem 0" />
      <PageSubtitle text={subtitle} align='center' padding="0 0 4rem 0" />
    </Box>
  )
}