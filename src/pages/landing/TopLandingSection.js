import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Box, Card, CardMedia } from '@mui/material';

// Custom Components
import { AppContext } from '../../AppContext';
import { PageTitle, PageSubtitle, CardTitle } from "../../components/text";
import { BackgroundSection } from "../../components/backgrounds";

// Assets
import { 
  practicing_math_facts,
  girls_playing_connect_four,
  banana_papaya_turmeric_flower,
} from "../../cloudinaryURLs";

export default function TopLandingSection(props) {
  const { availableHeight, availableWidth } = useContext(AppContext)
  // Cards are fixed aspect ratio 25vh:30vh so to decide if we render 2 or 3 cards we need to know if the width of the box is sufficient for 3 x 25vh.
  const hideThirdCard = 0.75 * availableHeight > availableWidth

  // const ref = useREf()

  return (
    <BackgroundSection bg="leafy" id="top"  >
      <Box id="title" 
        display='flex'
        flexDirection='column'
        justifyContent="center"
        flex="2 0 30vh" 
      >
        <PageTitle text="Sowing seeds of" />
        <PageTitle text="life-long learning" />
        <PageTitle text="and DIY-spirit" />
      </Box>
      <Box id="subtitle"
        display='flex'
        alignItems="center"
        flex="2 0 20vh" 
        paddingX={{ xs: 0, sm: '2.5rem'}}
      >
        <PageSubtitle text="The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math." align="justify" />
      </Box>
      <Box 
        id='landing-cards'
        display='flex' 
        flex="2 0 35vh" 
        justifyContent='space-evenly'
        alignItems="center"
      > 
        <HashLink to="#what-we-grow" smooth  > {/*  ref={ref} */}
          <LandingCard 
            title="What We Grow" 
            imgUrl={banana_papaya_turmeric_flower} 
          />
        </HashLink>
        <RouterLink to="services"  >
          <LandingCard 
            title="Teaching Services" 
            imgUrl={practicing_math_facts} 
          />
        </RouterLink>
        <Box display={ hideThirdCard ? 'none' : 'block' } > 
          <RouterLink to="math-games"  >
            <LandingCard 
              title="Math Games" 
              imgUrl={girls_playing_connect_four} 
            />
          </RouterLink>
        </Box>
      </Box>
    </BackgroundSection>
  ) 
}

function LandingCard(props) {
  const { title, imgUrl } = props

  return (
    <Card raised 
      sx={{ 
        bgcolor: 'darkGrey',
        position: 'relative',
        margin: 1, 
        paddingTop: '30vh',
        borderRadius: "1rem",
        width: "25vh"
      }}
    >
      <CardMedia
        component="img"
        image={imgUrl}
        alt={title}
        sx={{ 
          position: 'absolute', 
          top: 0,
          zIndex: 10
        }}
      />
      <Box 
        position='absolute' 
        bottom={0}
        zIndex={20}
        width="100%"
        height="6vh"
        padding="7% 0 2%"
        sx={{ background: "linear-gradient(0deg, rgba(32,32,32,1) 85%, rgba(32,32,32,0.5) 94%, rgba(32,32,32,0.1) 100%)" }}
        textDecoration='none'

      >
        <CardTitle text={title}  />
        {/* <FontAwesomeIcon icon={faArrowCircleDown} color="white" iconSize="2x" /> */}
      </Box>
    </Card>
  )
}
