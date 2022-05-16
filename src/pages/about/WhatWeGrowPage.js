import React, { useState, useContext } from 'react'
import { Box, Grid, Container, Typography } from '@mui/material';

import { AppContext } from "../../AppContext";

import { Background } from "../../components/backgrounds";
import { PageHeader, Section } from "../../components/text";
import theme from '../../theme';

// What We Grow
const banana_papaya_turmeric_flower = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607021/stemgarden.org/banana_papaya_turmeric_j3f7k9.jpg"

const profile_with_hoe = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1647374938/stemgarden.org/nigel/profile-pic_ncluzf.jpg"
const mushroom_background = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1647375289/stemgarden.org/garden_backgrounds/mushroom_yfjiho.jpg"
const banana_papaya_pile = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135416/stemgarden.org/harvests/banana_papaya_harvest_f9ml5d.jpg"

// Papaya
const papaya_fruit_whole = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135460/stemgarden.org/harvests/papaya_fruit_mirz2m.jpg'
const papaya_fruit_halved = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135462/stemgarden.org/harvests/papaya_halved_sazzwm.jpg'

// Banana
const banana = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612190844/nolastemgarden/banana/banana_bunch_iusnwi.jpg'

// Fig 
const fig = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646606908/stemgarden.org/harvests/fig_harvest_rcmtsu.jpg'
const fig_2 = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612190789/nolastemgarden/fig/fig_harvest_qmwyxm.jpg'

// 
const loquat_bunch = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652702918/stemgarden.org/harvests/loquat_harvest_lfyeee.jpg'
const loquat_pile = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652703028/stemgarden.org/harvests/loquat_pile_sryz1n.jpg'

// Turmeric
const turmeric = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135511/stemgarden.org/harvests/turmeric_harvest_iwfpqu.jpg'

// Other Harvests
const tomato_cuke_harvest = 'https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652701628/stemgarden.org/harvests/tomato_cuke_harvest_h3ymvj.jpg'

export default function WhatWeGrowPage(props) {
  // const [selectedCrop, setSelectedCrop] = useState('none')
  const [selectedCrop, setSelectedCrop] = useState('papaya')


  // const {  } = useContext(AppContext)
  
  return (
    <Background >
      <Container maxWidth='md' >
        <PageHeader title="What We Grow" />

        <CropSelector 
          selectedCrop={selectedCrop} 
          setSelectedCrop={setSelectedCrop} 

        />

      </Container>
    </Background>
  )

  
}

  const crops = ["banana", "papaya", "fig", "turmeric", "loquat", "other" ]


function CropSelector(props) {
  const { selectedCrop, setSelectedCrop } = props


    
  return (
    <Container maxWidth='sm' disableGutters >
      <Box 
      display='flex'
      flexWrap='wrap'
      // flexFlow='row wrap'
      justifyContent='center'
      border='solid red 1px'
      // height='100px'

      // sx={{ [theme.breakpoints.down('sm')]: { height: '200px' } }}
    >
      {/* <Grid container spacing={1} > */}
        {
          crops.map(crop => {
            return (
              <CropSelectorButton 
                crop={crop}  
                selectedCrop={selectedCrop}
                setSelectedCrop={setSelectedCrop} 

              />
            )

          })
        }

      {/* </Grid> */}


    </Box>
    </Container>
  )
}

function CropSelectorButton(props) {
  const { crop, selectedCrop, setSelectedCrop } = props

  const selected = (crop === selectedCrop)
  const border = selected ? 'solid yellow 2px': 'none'

  const imageStyles = {
    width: '100%',
    height: '100%',
    // backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '1rem'
  }  

  return (
    // <Grid item xs={4} md={2} sx={{ minHeight: '100%', border: 'solid yellow 2px' }} >
      <Box 
        // width='33%'
        // marginBottom='20px'
        sx={{ 
          [theme.breakpoints.down('sm')]: {width: '33%', paddingTop: '33%'},
          [theme.breakpoints.up('sm')]: {width: '16%', paddingTop: '16%'} 

        }}
        position='relative'

        // minHeight='100px'
        // border='solid blue 2px'
        // margin='auto'
        // padding='8px'
      >
        <Box 
          position='absolute'
          top='0'
          width='100%'
          padding='4px'
          // minHeight='100px'
          // border='solid green 2px'
          height='100%'
          // margin='auto'
        >
          <Box 
            onClick={() => { setSelectedCrop(crop) }}
            border={border}
            sx={imageStyles}

          />
        </Box>
      </Box>
    // </Grid>
  )
}


