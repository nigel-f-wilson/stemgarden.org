import React, { useContext } from 'react'
import { Box, Container, Typography } from '@mui/material';

import { PageLayoutContext } from "../../contexts";

// const under_construction = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561688/stemgarden.org/under_construction_sbiop2.png"

// Tutoring
// const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"

export default function TutoringPage(props) {
  return (
    <Background >
      <PageHeader />
    </Background>
  )
}

function Background(props) {
  const { narrowScreen } = useContext(PageLayoutContext)
  const padding = narrowScreen ? '0rem' : '2rem 1rem 3rem'
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      bgcolor="darkGrey"
      display='flex'
      flexDirection='column'
      padding={padding}
    >
      <Container maxWidth='md'>
        { props.children }
      </Container>
    </Box>
  )
}
function PageHeader() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography align="center" variant="pageHeader" >
        Tutoring
      </Typography>
      <Typography align="justify" variant="pageSubheader" px='8%' >
        I have taught math and physics in schools and privately since 2011. 
      </Typography>
    </Box>
  )
}
