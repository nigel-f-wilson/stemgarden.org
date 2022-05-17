import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Container, Card, CardHeader, CardMedia } from '@mui/material';
import theme from '../theme';

// import Footer from '../components/Footer';
import { PageTitle } from "../components/text";
import { LeafyBackground } from "../components/backgrounds";

// Tutoring
const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"

// Math Games
// const playing_the_15_game = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646685339/stemgarden.org/project_screenshots/playing_the_15_game_rcowti.jpg"
// const playing_connect_four = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646687130/stemgarden.org/project_screenshots/playing_math_fact_connect_four_zgyzou.jpg"
const girls_playing_connect_four = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647052443/stemgarden.org/teaching/connect_four/girls_playing_math_fact_connect_four_j84gqo.jpg"

// Chess Clubs
const chess_at_college_track = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647050134/stemgarden.org/chess/chess_club_college_track_st00uc.jpg"
// const chess_at_bric = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1647050028/stemgarden.org/chess/chess_club_at_bric_tvycwi.jpg"
// const chess_demo_board = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1612135192/stemgarden.org/chess/chess_demo_board_qtdzpw.jpg"
// const simul_at_bric = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646937461/stemgarden.org/chess/simul_at_bric_nagag0.jpg"

// Enrichment + Hands On
const guitar_fret_measuring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646597930/stemgarden.org/teaching/hands_on/guitar_fret_spacing_jezbuk.jpg"
const bike_gear_ratio_tutoring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647052266/stemgarden.org/teaching/hands_on/bike_gear_ratios_at_tutoring_s6l3ee.jpg"

// What We Grow
const banana_papaya_turmeric_flower = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646607021/stemgarden.org/banana_papaya_turmeric_j3f7k9.jpg"

const profile_with_hoe = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647374938/stemgarden.org/nigel/profile-pic_ncluzf.jpg"
const mushroom_background = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647375289/stemgarden.org/garden_backgrounds/mushroom_yfjiho.jpg"
const banana_papaya_pile = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1612135416/stemgarden.org/harvests/banana_papaya_harvest_f9ml5d.jpg"

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
          <Header />
          <CardGrid />
        </Container>
        
      </LeafyBackground>
      {/* <Footer smallScreen={smallScreen} /> */}
    </React.Fragment>
  )
}

function Header() {
  return (
    <Box padding='4rem 0rem 2rem' >
      <PageTitle text="Sowing seeds of" />
      <PageTitle text="life-long learning" />
      <PageTitle text="and DIY-spirit" />
    </Box>
  )
}

function CardGrid(props) {
  return (
    <Grid container padding='0 0 4rem' >
      {
        landingCards.map((cardData, index) => {
          return (
            <Grid item xs={6} sm={4} key={index} padding='0.4rem' >
              <LandingCard data={cardData}  />
            </Grid>
          )
        })
      }
    </Grid>
  )
}


function LandingCard(props) {
  const { title, linkTo, imgUrl } = props.data

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
    <RouterLink to={linkTo} style={linkStyles} >
      <Card raised style={cardStyles}
        sx={{ 
          position: 'relative', 
          paddingTop: '112%',
          borderRadius: "1rem"
        }}
      >
        <CardHeader 
          title={title}
          titleTypographyProps={{
            align: 'center', 
            variant: 'cardHeader',
            noWrap: true,
          }}
          sx={{ 
            position: 'absolute', 
            top: 0,
            zIndex: 20,
            width: "100%",
            padding: "2% 0 6%",
            backgroundColor: "rgb(32,32,32)",
            background: "linear-gradient(180deg, rgba(32,32,32,1) 80%, rgba(32,32,32,0.5) 93%, rgba(32,32,32,0.1) 100%)",
            }}
        />
        <CardMedia
          component="img"
          image={imgUrl}
          alt={title}
          sx={{ 
            position: 'absolute', 
            bottom: "0%",
            zIndex: 10
          }}
        />
      </Card>
    </RouterLink>
  )
}

