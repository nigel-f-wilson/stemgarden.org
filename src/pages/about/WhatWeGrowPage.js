import React, { useState } from 'react'
import { Box, Grid, Container, Typography } from '@mui/material';


import { Background } from "../../components/backgrounds";
import { PageHeader, Section } from "../../components/text";

// What We Grow
const banana_papaya_turmeric_flower = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646607021/stemgarden.org/banana_papaya_turmeric_j3f7k9.jpg"

const profile_with_hoe = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647374938/stemgarden.org/nigel/profile-pic_ncluzf.jpg"
const mushroom_background = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647375289/stemgarden.org/garden_backgrounds/mushroom_yfjiho.jpg"
const banana_papaya_pile = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135416/stemgarden.org/harvests/banana_papaya_harvest_f9ml5d.jpg"

const papaya_fruit = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135460/stemgarden.org/harvests/papaya_fruit_mirz2m.jpg'

export default function WhatWeGrowPage(props) {
  const [selectedCrop, setSelectedCrop] = useState('none')
  
  return (
    <Background >
      <Container maxWidth='md' >
        <PageHeader title="What We Grow" />

        <CropSelector />

      </Container>
    </Background>
  )

  function CropSelector(props) {
    return (
      <Box 
        // display='flex'
        // justifyContent='space-between'
        border='solid red 1px'
        minHeight='100px'
      >
        <Grid container spacing={2} >
          <CropSelectorButton crop="banana" />
          <CropSelectorButton crop="papaya" />
          <CropSelectorButton crop="fig" />
          <CropSelectorButton crop="turmeric" />
          <CropSelectorButton crop="loquat" />
        </Grid>


      </Box>
    )
  }

  function CropSelectorButton(props) {
    const { crop } = props

    return (
      <Grid item xs={4} md={2} minHeight='100%' >
        <Box 
          minHeight='100%'
          border='solid blue 2px'
        />
      </Grid>
    )
  }
}


