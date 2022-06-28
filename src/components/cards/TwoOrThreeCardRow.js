import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

import { Box, Grid, Container, Card, CardHeader, CardMedia } from '@mui/material';
import theme from '../theme';

// import Footer from '../components/Footer';
import { PageTitle, PageSubtitle } from "../components/text";
import { LeafyBackground, ScreenHeightSection } from "../components/backgrounds";

// Tutoring
import { 
  practicing_math_facts,
  girls_playing_connect_four,
  chess_at_college_track,
  guitar_fret_measuring,
  bike_gear_ratio_tutoring,
  banana_papaya_turmeric_flower,
  profile_with_hoe,
  mushroom_background,
  banana_papaya_pile,
} from "../cloudinaryURLs";
import { AppContext } from '../AppContext';

const landingCards = [
  {
    title: "What We Grow",
    linkTo: "about",
    imgUrl: banana_papaya_turmeric_flower,
  },{
    title: "Teaching Services",
    linkTo: "services",
    imgUrl: practicing_math_facts
  },
]

export default function TwoOrThreeCardRow(props) {
  const { cardData } = props
  return (
     <Box > 
        <HashLink to="#what-we-grow"  >
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
        <Box display={{ xs: 'none', md: 'block' }} > 
          <RouterLink to="math-games"  >
            <LandingCard 
              title="Math Games" 
              imgUrl={girls_playing_connect_four} 
            />
          </RouterLink>
        </Box>
      </Box>
  )
}


function LandingCard(props) {
  const { title, imgUrl } = props
  const { availableHeight, availableWidth } = useContext(AppContext)
     {/* That box should display based on screen width. but cards are fixed aspect ratio an d currently sized relative to vh. make box containing cards sised relative to vh but cards not necesarily ful height. then get card containing box height ans width and determin if there are two or three cards. */}
  // Cards are fixed aspect ratio 25vh:30vh so to decide if we render 2 or 3 cards we need to know if the width of the box is sufficient for 3 x 25vh.
  const hideThirdCard = 0.75 * availableHeight < availableWidth

  return (
    <Card raised 
      sx={{ 
        bgcolor: 'darkGrey',
        position: 'relative', 
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
        padding="5% 0 2%"
        sx={{ background: "linear-gradient(0deg, rgba(32,32,32,1) 85%, rgba(32,32,32,0.5) 94%, rgba(32,32,32,0.1) 100%)" }}
        textDecoration='none'

      >
        <PageSubtitle text={title}  />
        {/* <FontAwesomeIcon icon={faArrowCircleDown} color="white" iconSize="2x" /> */}
      </Box>
    </Card>
  )
}

// funct