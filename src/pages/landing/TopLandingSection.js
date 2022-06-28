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
  const { availableHeight, screenWidth } = useContext(AppContext)
  const availableWidth = (screenWidth > 900) ?  900 : screenWidth 
  const hideThirdCard = screenWidth < 500
  console.log(`hideThirdCard: ${hideThirdCard}`);
  const sectionHeight = (availableHeight > availableWidth) ? "100vh" : `${availableWidth}px`
  
  const cardRowHeight = (availableWidth === 900) ? "340px" 
    : hideThirdCard ? `${Math.floor(availableWidth * 1.2 / 2)}px` 
    : `${Math.floor(availableWidth * 1.2 / 3)}px`
  const cardWidth = (availableWidth === 900) ? "280px" 
    : hideThirdCard ? `${Math.floor(availableWidth / 2)}px` 
    : `${Math.floor(availableWidth / 3)}px`

  return (
    <BackgroundSection bg="leafy" id="top" sectionHeight={sectionHeight}  >
      <Box id="title" 
        display='flex'
        flexDirection='column'
        paddingY={{ xs: '2.0rem', sm: '3.0rem' }} 
      >
        <PageTitle text="Sowing seeds of" />
        <PageTitle text="life-long learning" />
        <PageTitle text="and DIY-spirit" gutterBottom />
        <PageSubtitle text="The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math." align="justify" gutterBottom />

      </Box>
      <Box 
        id='landing-card-row'
        height={cardRowHeight}
        display='flex' 
        justifyContent='space-evenly'
        alignItems="stretch"
      > 
        <HashLink to="#what-we-grow" smooth  > {/*  ref={ref} */}
          <LandingCard 
            title="What We Grow" 
            imgUrl={banana_papaya_turmeric_flower} 
            cardWidth={cardWidth}
          />
        </HashLink>
        <RouterLink to="services"  >
          <LandingCard 
            title="Teaching Services" 
            shortTitle="Services"
            imgUrl={practicing_math_facts} 
            cardWidth={cardWidth}
          />
        </RouterLink>
        <Box display={ hideThirdCard ? 'none' : 'block' } > 
          <RouterLink to="resources/math-games"  >
            <LandingCard 
              title="Math Games" 
              imgUrl={girls_playing_connect_four} 
              cardWidth={cardWidth}
            />
          </RouterLink>
        </Box>
      </Box>
    </BackgroundSection>
  ) 
}

function LandingCard(props) {
  const { title, imgUrl, cardWidth } = props
  // const cardTitleHeight = `${Math.floor(cardWidth / 5)}px`
  return (
    <Box width={cardWidth} height="100%" padding={1} >
      <Card raised 
        sx={{ 
          height: '100%',
          width: "100%",
          bgcolor: 'darkGrey',
          position: 'relative',
          borderRadius: "1rem",
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
          height='23%'
          // height={cardTitleHeight}
          textDecoration='none'
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ background: "linear-gradient(0deg, rgba(32,32,32,1) 85%, rgba(32,32,32,0.5) 94%, rgba(32,32,32,0.1) 100%)" }}
        >
          <CardTitle text={title}  />
        </Box>
      </Card>
    </Box>
  )
}
