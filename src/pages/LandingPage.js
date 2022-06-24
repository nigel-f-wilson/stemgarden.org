import React from 'react'
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

// const landingCards = [
//   {
//     title: "Math Tutoring",
//     linkTo: "services/tutoring",
//     imgUrl: practicing_math_facts

//   },
//   {
//     title: "Math Games",
//     linkTo: "resources/math-games",
//     // imgUrl: playing_the_15_game,
//     imgUrl: girls_playing_connect_four,
//   },
//   {
//     title: "Chess Clubs",
//     linkTo: "services/tutoring",
//     imgUrl: chess_at_college_track
//   },
//   {
//     title: "STEM Enrichment",
//     linkTo: "services/tutoring",
//     imgUrl: bike_gear_ratio_tutoring,
//   },
//   {
//     title: "What We Grow",
//     linkTo: "about",
//     imgUrl: banana_papaya_turmeric_flower,
//   },
//   {
//     title: "Study Materials",
//     linkTo: "/services/tutoring",
//     imgUrl: guitar_fret_measuring,
//   },
//   {
//     title: "Our Story",
//     linkTo: "/garden/story",
//     imgUrl: mushroom_background,
//   },
//   {
//     title: "Buy Our Fruit",
//     linkTo: "/garden/for_sale",
//     imgUrl: banana_papaya_pile,
//   },
//   {
//     title: "Get Involved",
//     linkTo: "/garden/get_involved",
//     imgUrl: profile_with_hoe,
//   },
// ]

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

export default function LandingPage() {
  return (
    <React.Fragment>
      <TopSection />

      
      <ScreenHeightSection bg="dark" id="our-story"  >
        <Container maxWidth='md' id='landing' >
          <Header />
        </Container>
      </ScreenHeightSection>
      <ScreenHeightSection bg="dark" id="what-we-grow"  >
        <Container maxWidth='md' id='landing' >
          <Header />
        </Container>
      </ScreenHeightSection>
      <ScreenHeightSection bg="dark" id="what-we-grow"  >
        <Container maxWidth='md' id='landing' >
          <Header />
        </Container>
      </ScreenHeightSection>

      {/* <LeafyBackground >
        <Container maxWidth='md' id='landing' >
          <Header />
          <CardGrid />
        </Container>
        
      </LeafyBackground> */}
      {/* <Footer smallScreen={smallScreen} /> */}
    </React.Fragment>
  )
}

function TopSection(props) {
  return (
    <ScreenHeightSection bg="leafy" id="top"  >
      <Box paddingY={{ xs: '1rem', sm: '2rem' }}  >
        <PageTitle text="Sowing seeds of" />
        <PageTitle text="life-long learning" />
        <PageTitle text="and DIY-spirit" />
      </Box>
      <Box display='flex' flex='2 0 30vh' alignItems='center' pb={2} >
        <PageSubtitle text="The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math." align="justify" />
      </Box>
      <Box position="relative" display='flex' flex='2 0 30vh' alignItems='center' pb={2} border='solid red 1px' > 
        BABETHGNANAJA
        {/* <RouterLink to="#what-we-grow"  > */}
          <LandingCard 
            title="What We Grow" 
            imgUrl={banana_papaya_turmeric_flower} 
            linkComponent="router-link"
            linkTo="what-we-grow"
          />
        {/* </RouterLink> */}
        
        
        {/* <LandingCard 
          title="What We Grow" 
          imgUrl={banana_papaya_turmeric_flower} 
          linkTo="about" 
        />
        <LandingCard 
          title="Teaching Services" 
          imgUrl={practicing_math_facts} 
          linkTo="services" 
        /> */}
      
      </Box>


    </ScreenHeightSection>
  ) 
}

function Header() {
  return (
    <Box padding='4rem 0rem 2rem' >
      <PageTitle text="Sowing seeds of" />
      <PageTitle text="life-long learning" />
      <PageTitle text="and DIY-spirit" gutterBottom />
      <PageSubtitle text="The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math." align="justify" />
    </Box>
  )
}

// function CardGrid(props) {
//   return (
//     <Grid container spacing={1} padding='0 0 4rem' >
//       {
//         landingCards.map((cardData, index) => {
//           return (
//             <Grid item xs={6} sm={4} key={index} >
//               <LandingCard data={cardData}  />
//             </Grid>
//           )
//         })
//       }
//     </Grid>
//   )
// }


function LandingCard(props) {
  const { title, imgUrl, linkTo } = props

  const cardStyles = { 
    backgroundColor: theme.palette.darkGrey,
    color: theme.palette.common.white,
    textDecoration: 'none',
  }
  const linkStyles = { 
    color: theme.palette.common.white,
    textDecoration: 'none',
  }
  return (
      <Card raised 
        sx={{ 
          bgcolor: 'white',
          // position: 'relative', 
          // position: 'absolute', 
          paddingTop: '116%',
          borderRadius: "1rem"
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
          height="20%"
          padding="5% 0 2%"
          sx={{ background: "linear-gradient(0deg, rgba(32,32,32,1) 90%, rgba(32,32,32,0.5) 97%, rgba(32,32,32,0.1) 100%)" }}
          textDecoration='none'

        >
          <PageSubtitle text={title}  />
          {/* <FontAwesomeIcon icon={faArrowCircleDown} color="white" iconSize="2x" /> */}
        </Box>
      </Card>
  )
}

