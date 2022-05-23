import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Container, Card, CardHeader, CardMedia } from '@mui/material';
import theme from '../theme';

// import Footer from '../components/Footer';
import { PageTitle } from "../components/text";
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

