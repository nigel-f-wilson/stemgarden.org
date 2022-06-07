import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Container, Card, CardHeader, CardMedia } from '@mui/material';
import theme from '../theme';

// import Footer from '../components/Footer';
import { PageHeader } from "../components/text";
import { LeafyBackground } from "../components/backgrounds";

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

const landingCards = [
  {
    title: "Math Tutoring",
    linkTo: "services/tutoring",
    imgUrl: practicing_math_facts

  },
  {
    title: "Math Games",
    linkTo: "resources/math-games",
    // imgUrl: playing_the_15_game,
    imgUrl: girls_playing_connect_four,
  },
  {
    title: "Chess Clubs",
    linkTo: "services/tutoring",
    imgUrl: chess_at_college_track
  },
  {
    title: "STEM Enrichment",
    linkTo: "services/tutoring",
    imgUrl: bike_gear_ratio_tutoring,
  },
  {
    title: "What We Grow",
    linkTo: "about",
    imgUrl: banana_papaya_turmeric_flower,
  },
  {
    title: "Study Materials",
    linkTo: "/services/tutoring",
    imgUrl: guitar_fret_measuring,
  },
  {
    title: "Our Story",
    linkTo: "/garden/story",
    imgUrl: mushroom_background,
  },
  {
    title: "Buy Our Fruit",
    linkTo: "/garden/for_sale",
    imgUrl: banana_papaya_pile,
  },
  {
    title: "Get Involved",
    linkTo: "/garden/get_involved",
    imgUrl: profile_with_hoe,
  },
]

export default function LandingPage() {
  return (
    <React.Fragment>
      <LeafyBackground >
        <Container maxWidth='md' id='landing' >
          <PageHeader title="Contact Us" />
          {/* <CardGrid /> */}
        </Container>
        
      </LeafyBackground>
      {/* <Footer smallScreen={smallScreen} /> */}
    </React.Fragment>
  )
}





