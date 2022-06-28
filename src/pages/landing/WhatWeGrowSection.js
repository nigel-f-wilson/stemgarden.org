import React, { useContext, useState } from 'react'

import { Box, Stack, Tooltip } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

// CUSTOM COMPONENTS
import { PageHeader, PageSubtitle, Paragraph } from "../../components/text";
import { BackgroundSection } from "../../components/backgrounds";
// import Footer from '../components/Footer';

import { AppContext } from '../../AppContext';

const crops = [
  {
    // Defaults display before user selects one
    name: "none_selected",
    imageUrls: [
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135393/stemgarden.org/harvests/colorful_harvest_nwnjsa.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652730424/stemgarden.org/harvests/tobacco_plant_yiy4r6.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607700/stemgarden.org/flowers/shell_ginger_jarbow.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1653498832/stemgarden.org/harvests/carrot_harvest_vhwnyu.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607110/stemgarden.org/harvests/guavas_vnbt5b.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607719/stemgarden.org/flowers/sunflower_rcje1i.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607660/stemgarden.org/flowers/passion_flower_nwjgwa.jpg"
    ],
    detailText: "We grow a much wider variety of crops than what is shown here but these are some of our favorites. They are the crops that have given us the sweetest rewards while requiring the least amount of maintenance work. We usually have enough to sell when in season and often have frozen stock available year round. Other crops come and go from our offering. Subscribe to our newsletter for a monthly-ish update on what's in season." 
  },{ 
    name: "banana",
    imageUrls: [ 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652720183/stemgarden.org/harvests/banana_hands_vhxa6v.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607722/stemgarden.org/flowers/banana_flower_beecdn.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612190844/stemgarden.org/harvests/banana_bunch_iusnwi.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135313/stemgarden.org/harvests/banana_types_quesw9.png", 
    ],
    detailText: 'The garden is surrounded by a wall of banana "trees", which are actually a type of grass with no woody parts. The juicy stalks are made up of tightly clustered leaves and can be easily cut with a machete. Cut stalks will regrow, but each stalk will only bear fruit once. The root cluster survives and sends up new stalks, called "pups" to replace those that reach maturity and die. While blooming, one of the bright red leaves of the "bell" opens each day to reveal a row of flowers that will turn into a "hand" of bananas.',
  },{ 
    name: "papaya",
    imageUrls: [ 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135462/stemgarden.org/harvests/papaya_halved_sazzwm.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612190898/stemgarden.org/harvests/papaya_picking_hf87gf.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652720259/stemgarden.org/harvests/papaya_tree_with_green_fruit_yzzo7g.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607697/stemgarden.org/flowers/papaya_flower_d3enpz.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135459/stemgarden.org/harvests/papaya_pile_gb5lme.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612190930/stemgarden.org/harvests/papaya_leaf_wme3i0.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612190940/stemgarden.org/harvests/papaya_trees_sdhzhf.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135460/stemgarden.org/harvests/papaya_fruit_mirz2m.jpg",
    ],
    detailText: "Ripe papaya are a beautiful deep orange color but they can also be shredded and made into a salad while still green. Most papaya sold at grocery stores in the U.S. are picked prematurely to improve shelf-life, but as a result they never fully ripen. I leave the fruits on the trees until they are ready to eat. This way they get much sweeter and develop a more interesting flavor. Papaya is a key ingredient in my homegrown fruit smoothies. I sell them green, ripe, or frozen in quart bags.",
  },{ 
    name: "fig",
    imageUrls: [ 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1653333743/stemgarden.org/harvests/figs_on_tree_ufyfdw.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652720191/stemgarden.org/harvests/fig_missing_bite_laugkv.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1653498826/stemgarden.org/harvests/three_buckets_of_figs_gzg6un.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652720224/stemgarden.org/harvests/three_figs_unwxfd.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1653499154/stemgarden.org/harvests/bags_of_figs_xg3ofm.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646606908/stemgarden.org/harvests/fig_harvest_rcmtsu.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652720208/stemgarden.org/harvests/fig_tree_wie68y.jpg"
    ],
    detailText: 'Figs are available throughout the summer. They are pollinated by wasps, not bees or butterflies. We sell the fruit, fresh and frozen, as well as rooted cuttings for those who want to grow their own fig trees. ',
  },{ 
    name: "turmeric",
    imageUrls: [ 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135511/stemgarden.org/harvests/turmeric_harvest_iwfpqu.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612191032/stemgarden.org/flowers/turmeric_flower_fwvwmj.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612191040/stemgarden.org/harvests/turmeric_replanting_h1gzvl.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612191038/stemgarden.org/harvests/turmeric_leaves_vwcrpx.jpg", 
    ],
    detailText: 'Native to India, Turmeric is very happy with the climate in New Orleans. It commands a high price per pound while still being a relatively low maintenance crop. Its broad leaves help shade out weeds and other competition and unlike the fruits we grow, which need picked daily when they are in season, turmeric only requires a few days of hands-on work each year. I sell turmeric flowers for use in salads in July. Freshly dug turmeric is available year round but it keeps best when harvested at the end of the dry season. Each October, I dig up all the turmeric, break apart the big root clusters. I replant about 20% of the rhizomes the same day and make the rest available for sale.',
  },{ 
    name: "loquat",
    imageUrls: [ 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652703028/stemgarden.org/harvests/loquat_pile_sryz1n.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652720249/stemgarden.org/harvests/loquats_on_tree_gezrfc.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1646607661/stemgarden.org/flowers/loquat_blossom_aa6prt.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652702918/stemgarden.org/harvests/loquat_harvest_lfyeee.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1653492318/stemgarden.org/people/kaylee_dan_and_loquat_pile_jrlosl.jpg",
    ],
    detailText: "Not related to Cumquats! Loquats are also known as Japanese plums or 'Misbeliefs' because the fruit ripens so early in the year you almost wouldn't believe it! Loquats bloom in December and January, providing an excellent food source for honey bees during an otherwise scarce time of year. By late February the trees are covered in delicious fruit. They can be found all over New Orleans, being a popular ornamental tree in landscapes. I sell the fruit whole and my partner makes a delicious sorbet from the rest.",
  },{ 
    name: "other",
    imageUrls: [ 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652701628/stemgarden.org/harvests/tomato_cuke_harvest_h3ymvj.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652730445/stemgarden.org/harvests/cucumber_pile_fd91a2.jpg", 
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1652701631/stemgarden.org/harvests/radishes_qpz2ou.jpg",
      "https://res.cloudinary.com/nola-stem-garden/image/upload/w_500,h_500,c_limit/v1612135410/stemgarden.org/harvests/lime_harvest_ii1d8r.jpg",

    ],
    detailText: 'All the crops listed on this page come from established trees and perennials but we also grow a rotation of seasonal veggies. Cucumbers, green beans, radishes, mustard greens, okra, and tobacco are the most prolific. I have experimented with a much wider variety over the years and settled on these crops because they thrive with the least amount of help. We select varieties that are naturally resistant to fungal diseases and bugs because this allows us to avoid using chemical pesticides.',
  }
]

export default function WhatWeGrowSection() {
  const [selectedCrop, setSelectedCrop] = useState("none_selected")
  return (
    <BackgroundSection id="what-we-grow" 
      sectionHeight="auto"
      bg="dark"
    >
      <Stack alignItems="center" >
        <PageHeader title="What We Grow" />
        <CropSelector 
          selectedCrop={selectedCrop} 
          setSelectedCrop={setSelectedCrop} 
        />
        <CropDetail 
          selectedCrop={selectedCrop} 
        />
      </Stack>
    </BackgroundSection>
  ) 
}


function CropSelector(props) {
  const { selectedCrop, setSelectedCrop } = props
  const { availableWidth } = useContext(AppContext)

  const cropSelectorWidth = (availableWidth > 500) ? 500 : availableWidth - 32
  const cropSelectorWidthPx = `${cropSelectorWidth}px`
  const selectorButtonSizePx = `${Math.floor(cropSelectorWidth / 6)}px`

  return (
      <Box id="crop-selector-container"
        width={cropSelectorWidth}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        {
          crops.map(crop => {
            if (crop.name === "none_selected") {
              return undefined
            }
            else {
              return (
                <CropSelectorButton 
                  key={`select_${crop.name}_button`}
                  crop={crop}  
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop} 
                  cropSelectorWidthPx={cropSelectorWidthPx}
                  selectorButtonSizePx={selectorButtonSizePx}
                />
              )
            }
          })
        }
        </Box>

        
      // </Box>
    // </Box>
  )
}

function CropDetail(props) {
  const { selectedCrop } = props
  const { availableWidth } = useContext(AppContext)
  
  const crop = crops.find(element => element.name === selectedCrop)
  const { name, imageUrls, detailText } = crop
  const capitalizedSelectedCrop = (name === "none_selected") ? "Select a crop for more info" : name[0].toUpperCase().concat(name.slice(1))

  const imageSizePx = (availableWidth > 500) ? "500px" : `${availableWidth - 32}px`
  const imageStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderRadius: '1rem'
  } 

  return (
    <Box marginBottom="5.0rem" >
      <Stack maxWidth="700px" display='flex' margin="0.5rem auto" >
        <PageSubtitle text={capitalizedSelectedCrop} align='center' gutterBottom/>
        <Paragraph text={detailText} />  
      </Stack>
      <Box id="carousel-container" 
        margin='0 auto'
        width={imageSizePx}
        height={imageSizePx}
      >
        <Carousel
          animation="slide"
          height={imageSizePx}
        >
          {
            imageUrls.map((imageUrl, index) => (
              <Box key={index} sx={{ backgroundImage: `url(${imageUrl})`, ...imageStyles}} />
            ))
          }
        </Carousel>
      </Box>
    </Box>
  )
}

function CropSelectorButton(props) {
  const { crop, selectedCrop, setSelectedCrop, selectorButtonSizePx } = props
  const { name, imageUrls } = crop
  const imgUrl = imageUrls[0]  // The first image listed is used in the selector
  const selected = (name === selectedCrop)
  const border = selected ? 'solid yellow 3px': 'none'

  const imageStyles = { 
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imgUrl})`,  // The first image listed is used in the selector
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '1rem',
  }  

  return (
    <Box 
      width={selectorButtonSizePx}
      height={selectorButtonSizePx}
      padding='2px'
    >
      <Tooltip title={name} arrow>
        <Box 
          onClick={() => { setSelectedCrop(name) }}
          border={border}
          sx={imageStyles}
        />
      </Tooltip>
    </Box>
  )
}

