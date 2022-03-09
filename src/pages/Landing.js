import React from 'react'

import { useScreenWidth } from "../hooks"
// MY images
import leafy_background from "../images/leafy_background.jpg";
import CustomCard from "../components/CustomCard"
import BigIconButton from "../components/navigation/BigIconButton"
import { Container, Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const coffee = <FontAwesomeIcon icon={faCoffee} />


const playing_the_15_game = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646685339/stemgarden.org/project_screenshots/playing_the_15_game_rcowti.jpg"
const playing_connect_four = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646687130/stemgarden.org/project_screenshots/playing_math_fact_connect_four_zgyzou.jpg"


const landingCards = [
  {
    title: "Tutoring Services",
    linkTo: "tutoring-services",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646597930/stemgarden.org/guitar_fret_spacing_jezbuk.jpg",
    icon: coffee

  },
  {
    title: "Math Games",
    linkTo: "math-games",
    imgUrl: playing_connect_four,
    icon: coffee
  },
  {
    title: "Tutoring Services",
    linkTo: "services/tutoring",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646597930/stemgarden.org/guitar_fret_spacing_jezbuk.jpg",
    icon: coffee
  },
  {
    title: "Tutoring Services",
    linkTo: "services/tutoring",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646597930/stemgarden.org/guitar_fret_spacing_jezbuk.jpg",
  },
  {
    title: "Tutoring Services",
    linkTo: "/services/tutoring",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646597930/stemgarden.org/guitar_fret_spacing_jezbuk.jpg",
  },
  {
    title: "Tutoring Services",
    linkTo: "/services/tutoring",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646597930/stemgarden.org/guitar_fret_spacing_jezbuk.jpg",
  },
]

export default function LandingPage() {
  const screenWidth = useScreenWidth()
  const smallScreen = screenWidth < 600
  return (
    <Background smallScreen={smallScreen} >
      <Header smallScreen={smallScreen} />
      <CardGrid />
    </Background>
  )
}

function Background(props) {
  const gradient = (props.smallScreen) ?
    "linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)"
    : "linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)"

  const backgroundStyles = {
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    backgroundImage: `
      ${gradient},
      url(${leafy_background})
    `,
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
  }  
  return (
    <Box sx={backgroundStyles} >
      <Container maxWidth='lg' >
        { props.children }
      </Container>
    </Box>
  )
}


function Header(props) {
  const { smallScreen } = props
  
  const theme = useTheme()
  const color = theme.palette.common.white
  const padding = (smallScreen) ? '7rem 0rem 3rem' : '12rem 0rem 5rem'   
  const fontSize = (smallScreen) ? '2.5rem' : '6.0rem'   
  
  const styles = {
    color: color,
    padding: padding,
    fontSize: fontSize,
    width: '100%',
    fontWeight: '200',
    textShadow: '0.15rem 0.15rem 0.3rem black',
  } 
  
  return (
      <Typography sx={styles} align="center" >
          Sowing seeds of life&#8209;long learning and DIY&#8209;spirit.
      </Typography>
  )
}

function CardGrid(props) {
  return (
    <Grid container 
      spacing={2} 
      sx={{ padding: '1rem' }}
    >
      {
        landingCards.map((cardData, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} key={index} >
              <CustomCard data={cardData}  />
              {/* <BigIconButton data={cardData} /> */}
            </Grid>
          )
        })
      }
    </Grid>
  )
}



{/* 
      The STEM Garden is an off-grid urban teaching garden rooted in New Orleans.
      We offer private tutoring and small group lessons, both in the garden and online.
      We help students excell on the SAT and ACT and meet all Common Core math standards,
      but we see learning math as so much more than that! We emphacize the playful side of
      mathematical thinking and make use of many puzzles, games, and hands-on projects to engage young imaginations.
  </Typography> */}