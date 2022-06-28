import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Box, Container, Card, CardMedia, Button } from '@mui/material';

// ICONS
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// CUSTOM COMPONENTS
import TopLandingSection from "./TopLandingSection";
import WhatWeGrowSection from "./WhatWeGrowSection";
import { PageTitle, PageSubtitle, CardTitle, PageHeader, Paragraph, ButtonLabel } from "../../components/text";
import { LeafyBackground, BackgroundSection } from "../../components/backgrounds";
// import Footer from '../components/Footer';

// IMAGE URLs
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
} from "../../cloudinaryURLs";
import { AppContext } from '../../AppContext';
import ScrollToTopButton from '../../components/navigation/ScrollToTopButton';

export default function LandingPage() {
  return (
    <React.Fragment>
      <TopLandingSection />

      <OurStorySection />

      <WhatWeGrowSection />

      
      <BackgroundSection bg="dark" id="our-story"  >
        <Container maxWidth='md' id='landing' >
          <Header />
        </Container>
      </BackgroundSection>
      <BackgroundSection bg="dark" id="what-we-grow"  >
        <Container maxWidth='md' id='landing' >
          <Header />
        </Container>
      </BackgroundSection>
      <BackgroundSection bg="dark"   >
        <Container maxWidth='md' id='landing' >
          <Header />
        </Container>
      </BackgroundSection>
      <ScrollToTopButton />
    </React.Fragment>
  )
}


function OurStorySection(props) {
  const { availableHeight, availableWidth } = useContext(AppContext)
  return (
    <BackgroundSection id="our-story" bg="dark" >
      <PageHeader title="Our Story" />
      <PageSubtitle text="Caring for Soil since 2016" align='left' gutterBottom />
      <Paragraph text="Before I moved to New Orleans, I had been gardening for three years, planting in a different community garden space each summer. This experiecnce taught me that gardening, at least the way I want to practice it, is less about taking care of plants and more about taking care of soil. Taking care of soil, though, is a slow process and one that requires longterm commitment." />
      <Paragraph text="I bought the land that is now the STEM Garden for less than it would have cost to rent an apartment for a year. At the time, it was a blighted trash pit, but I could see its potential." />
      <Button 
        href="about/our-story" 
        variant="outlined"
        sx={{ color: "white", border: "solid white 1px" }} 
        children={
          <ButtonLabel 
            text="Read more" 
            fontFamily="roboto" 
            endIcon={faArrowCircleRight} 
          />
        } 
      />

  {/* ADD SOME IMAGES HERE */}

    </BackgroundSection>
  ) 
}







function Header() {
  return (
    <Box>
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