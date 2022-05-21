import React, { useState, useContext } from 'react'
import { Box, Grid, Container, Typography, Tooltip } from '@mui/material';

import { AppContext } from "../../AppContext";

import { Background } from "../../components/backgrounds";
import { PageHeader } from "../../components/text";

import { 
  banana_papaya_turmeric_flower,
  basket_of_raddishes,
  papaya_fruit_whole,
  papaya_fruit_halved,
  papaya_flower,
  banana_hands,
  banana_flower,
  banana_papaya_pile, 
  fig_2,
  fig_missing_bite,
  three_figs,
  loquat_bunch,
  loquat_pile,
  loquats_on_tree,
  turmeric_harvest,
  turmeric_flower,
  tomato_cuke_harvest,
  cucumber_pile,
  tobacco_plant
} from "../../cloudinaryURLs";


export default function WhatWeGrowPage(props) {
  const [selectedCrop, setSelectedCrop] = useState("none_selected")

  const capitalizedCropName = (selectedCrop === "none_selected") ? 
    "What We Grow" : 
    selectedCrop[0].toUpperCase().concat(selectedCrop.slice(1))
  
  return (
    <Background >
      <Container maxWidth='md' >
        <PageHeader title={capitalizedCropName} />

        <CropSelector 
          selectedCrop={selectedCrop} 
          setSelectedCrop={setSelectedCrop} 
        />
        <CropDetail 
          selectedCrop={selectedCrop} 
        />
      </Container>
    </Background>
  )

  
}

const crops = [
  { 
    name: "banana",
    imgUrl: banana_hands,
    detailImgUrl1: banana_flower,    
    detailImgUrl2: banana_papaya_pile,
    detailText: 'The garden is surrounded by a wall of banana "trees", which are actually a type of grass with no woody parts.The juicy stalks are made up of tightly clustered leaves and can be easily cut with a machete. Cut stalks will regrow, but each stalk will only bear fruit once. The root cluster survives ans sends up new stalks, called "pups" to replace those that reach maturity and die. While blooming, one of the bright red leaves of the "bell" opens each day to reveal a row of flowers that will turn into a "hand" of bananas.',
  },{ 
    name: "papaya",
    imgUrl: papaya_fruit_halved,
    detailImgUrl1: papaya_fruit_whole,    
    detailImgUrl2: papaya_flower,
    detailText: "Ripe papaya are a beutiful deep orange color but they can also be shredded and made into a salad while still green. Most papaya sold at grocery stores in the U.S. are picked prematurely to improve shelf-life, but as a result they never fully ripen. I leave the fruits on the trees until they are ready to eat. This way they get much sweeter and develop a more interesting flavor. Papaya is a key ingredient in my homegrown fruit smoothies. I sell them green, ripe, or frozen in quart bags.",
  },{ 
    name: "fig",
    imgUrl: three_figs,
    detailImgUrl1: fig_missing_bite,    
    detailImgUrl2: fig_2,
    detailText: 'Figs are available throughout the summer. They are pollenated by wasps, not bees or butterflies. We sell the fruit, fresh and frozen, as well as rooted cuttings for those who want to grow their own fig trees.',
  },{ 
    name: "turmeric",
    imgUrl: turmeric_harvest,
    detailImgUrl1: turmeric_flower,    
    detailImgUrl2: turmeric_harvest,
    detailText: 'Native to India, Turmeric is very happy with the climate in New Orleans. It commands a high price per pound while still being a relatively low maintenance crop. Its broad leaves help shade out weeds and other competition and unlike the fruits we grow, which need picked daily when they are in season, turmeric only requires a few days of hands on work each year. I sell turmeric flowers for use in salads in July. Freshly dug turmeric is available year round but it keeps best when harvested at the end of the dry season. Each October, I dig up all the turmeric, break apart the big root clusters. I replant about 20% of the rhizomes the same day and make the rest available for sale.',
  },{ 
    name: "loquat",
    imgUrl: loquat_bunch,
    detailImgUrl1: loquat_pile,    
    detailImgUrl2: loquats_on_tree,
    detailText: "Not related to Cumquats! Loquats are also known as Japanese plums or 'Misbeliefs' because the fruit ripens so early in the year you almost wouldn't believe it! Loquats bloom in December and January, providing an excellent food source for honey bees during an otherwise scarce time of year. By late February the trees are covered in delicious fruit. They can be found all over New Orleans, being a popular ornamental tree in landscapes. I sell the fruit whole and my partner makes a delicious sorbet from the rest.",
  },{ 
    name: "other",
    imgUrl: tomato_cuke_harvest,
    detailImgUrl1: cucumber_pile,    
    detailImgUrl2: basket_of_raddishes,
    detailText: 'Most of the crops listed on this page come from established trees but we also grow a rotation of seasonal veggies. Cucumbers, green beans, raddishes, mustard greens, okra, and tobacco are the most prolific. I have experimented with a much wider variety over the years and settled on these crops because they thrive with the least amount of help. We select varieties that are naturally resistant to fungal diseases and bugs because this allows us to avoid using chemical pesticides.',
  }
]

function CropDetail(props) {
  const { selectedCrop } = props
  const { colorTheme } = useContext(AppContext)
  const textColor = (colorTheme === "dark") ? "white" : "black"

  let detailImgUrl1 = tobacco_plant
  let detailImgUrl2 = banana_papaya_turmeric_flower
  let detailText = "This page includes information about the crops we grow the most of. We grow a much wider variety than what is shown here. These are the crops that we currently grow enough of to sell. Select a thumbnail for more details on that crop." 

  const crop = crops.find(element => element.name === selectedCrop)
  if (crop) {
    detailImgUrl1 = crop.detailImgUrl1
    detailImgUrl2 = crop.detailImgUrl2
    detailText = crop.detailText 
  }

  const imageStyles = {
    width: '100%',
    paddingTop: '100%',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderRadius: '1rem'
  }  
  
  return (
    <Grid container columns={{ xs: 12, sm: 12, md: 24 }} spacing={4} my={1} >
      
      <Grid item xs={12} sm={6} md={7} order={{ xs: 2, md: 1 }} >
        <Box sx={{ backgroundImage: `url(${detailImgUrl1})`, ...imageStyles}} />
      </Grid>
      <Grid item xs={12} sm={12} md={10} order={{ xs: 1, md: 2 }} >
        <Typography 
          color={textColor} 
          children={detailText}
          align='justify' 
          gutterBottom
        />
      </Grid>
      <Grid item xs={12} sm={6} md={7} order={{ xs: 3 }} >
        <Box sx={{ backgroundImage: `url(${detailImgUrl2})`, ...imageStyles}} />
      </Grid>
    </Grid>
  )
}

function CropSelector(props) {
  const { selectedCrop, setSelectedCrop } = props
  return (
    <Container maxWidth='sm' disableGutters >
      <Box 
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        paddingX='15%'
        mb={1}
      >
        {
          crops.map(crop => {
            return (
              <CropSelectorButton 
                key={`select_${crop.name}_button`}
                crop={crop}  
                selectedCrop={selectedCrop}
                setSelectedCrop={setSelectedCrop} 
              />
            )
          })
        }
      </Box>
    </Container>
  )
}

function CropSelectorButton(props) {
  const { crop, selectedCrop, setSelectedCrop } = props
  const { name, imgUrl } = crop

  const selected = (name === selectedCrop)
  const border = selected ? 'solid yellow 3px': 'none'

  const imageStyles = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '1rem',
  }  

  return (
    <Box 
      sx={{ 
        width: '16%', 
        paddingTop: '16%',
        // [theme.breakpoints.down('sm')]: {width: '33%', paddingTop: '33%' },
        // [theme.breakpoints.up('sm')]: {width: '16%', paddingTop: '16%'} 
      }}
      position='relative'
    >
      <Box 
        position='absolute'
        top='0'
        width='100%'
        padding='4px'
        height='100%'
        boxSizing='border-box'
      >
        <Tooltip title={name} arrow>
          <Box 
            onClick={() => { setSelectedCrop(name) }}
            border={border}
            sx={imageStyles}
         />
        </Tooltip>
      </Box>
    </Box>
  )
}


