import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Card, CardMedia, Typography, Button, Stack } from '@mui/material';

import { PageLayoutContext } from "../../contexts";


// Tutoring
const practicing_math_facts = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646863130/stemgarden.org/teaching/practicing_math_facts_gnhwkx.jpg"

const connect_four_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561099/stemgarden.org/project_screenshots/connect-four_y750ue.jpg"

// const under_construction = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647561688/stemgarden.org/under_construction_sbiop2.png"

// Chess Clubs
// const chess_at_college_track = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647050134/stemgarden.org/chess/chess_club_college_track_st00uc.jpg"
// const chess_at_bric = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1647050028/stemgarden.org/chess/chess_club_at_bric_tvycwi.jpg"
const chess_demo_board = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1612135192/stemgarden.org/chess/chess_demo_board_qtdzpw.jpg"
// const simul_at_bric = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1646937461/stemgarden.org/chess/simul_at_bric_nagag0.jpg"


// Web Development 
const code_screenshot = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1651934086/stemgarden.org/Code_Screenshot_thruye.png"

// Enrichment + Hands On
const guitar_fret_measuring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1646597930/stemgarden.org/teaching/hands_on/guitar_fret_spacing_jezbuk.jpg"
const bike_gear_ratio_tutoring = "https://res.cloudinary.com/nola-stem-garden/image/upload/w_1000,h_1000,c_limit/v1647052266/stemgarden.org/teaching/hands_on/bike_gear_ratios_at_tutoring_s6l3ee.jpg"



const servicesCardData = [
  {
    title: "Private Tutoring",
    description: 'I offer one-on one coaching in Math and Physics.',
    linkTo: "tutoring",
    imgUrl: practicing_math_facts,
    disabled: false,
    buttonLabel: "Learn More",
  },
  {
    title: "STEM Enrichment",
    description: 'Make academic learning stick with memorable hands-on projects.',
    linkTo: "enrichment",
    imgUrl: bike_gear_ratio_tutoring,
    disabled: false,
    buttonLabel: "Do More",
  },
  {
    title: "Web Development",
    description: "Need a web site? I built this one myself and I am currently taking on new freelance projects.",
    linkTo: "web-development",
    imgUrl: code_screenshot,
    disabled: false,
    buttonLabel: "Get Building",
  },
  {
    title: "Chess Clubs",
    description: "I partner with Schools in New Orleans and South East Ohio to offer after school chess leagues.",
    linkTo: "chess-clubs",
    imgUrl: chess_demo_board,
    disabled: false,
    buttonLabel: "Start A Club",
  },
  {
    title: "Teacher Training",
    description: "I coach adults (both parents and professional teachers) on how to best support kids' LocationSearching.",
    linkTo: "teacher-training",
    imgUrl: bike_gear_ratio_tutoring,
    disabled: false,
    buttonLabel: "Learn More",
  },
  // {
  //   title: "Electrical",
  //   description: "I've built two tiny houses and done all sorts of freelance handyman work. Not currently taking on this kind of work for pay.",
  //   linkTo: "web-development",
  //   imgUrl: fifteen_game_screenshot,
  //   disabled: false, 
  // buttonLabel: ,
  // },
  // {
  //   title: "Bicycle Repair",
  //   description: "I depend on my bike to get around. When it breaks down I depend on myself to fix it. Not currently taking on this kind of work for pay.",
  //   linkTo: "web-development",
  //   imgUrl: fifteen_game_screenshot,
  //   disabled: false, 
  // buttonLabel: ,
  // },
 
]

export default function ServicesIndexPage() {
  return (
    <Background >
      <PageHeader />
      <CardGrid />
    </Background>
  )
}

function Background(props) {
  const { narrowScreen } = useContext(PageLayoutContext)
  const padding = narrowScreen ? '0rem' : '2rem 1rem 3rem'
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      bgcolor="darkGrey"
      display='flex'
      flexDirection='column'
      padding={padding}
    >
      <Container maxWidth='md'>
        { props.children }
      </Container>
    </Box>
  )
}
function PageHeader() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography align="center" variant="pageHeader" >
        Services
      </Typography>
      <Typography align="justify" variant="pageSubheader" px='8%' >
        I am a jack of all trades because I believe that variety is the spice of life.  
        The best kind of learning synthesizes insights from across disiplines.
        {/* "A jack of all trades is a master of none, but is often more useful than a master of one."   */}
      </Typography>
    </Box>
  )
}
function CardGrid(props) {
  return (
    <Grid container spacing={2} >
      {
        servicesCardData.map((cardData, index) => {
          return (
            <Grid item xs={6} md={4} key={index} >
              <ServiceCard data={cardData}  />
            </Grid>
          )
        })
      }
    </Grid>
  )
}


function ServiceCard(props) {
  const { 
    title, 
    // description, 
    linkTo, 
    imgUrl, 
    disabled,
    buttonLabel
  } = props.data

  return (
    <Card raised
      sx={{ height: '100%', borderRadius: 1, 
        bgcolor: 'black'
      }}
    >
      <Stack height='100%' display='flex' justifyContent='space-between' p={1} >
        <Typography 
          children={title}
          color="white"
          align='center'
          fontSize='1.2rem'
        />
        <CardMedia
          component="img"
          image={imgUrl}
          alt={title}
        />
        <Button 
          component={RouterLink} 
          to={linkTo}
          disabled={disabled}
          children={buttonLabel}
          variant='contained'
          sx={{ mt: 1 }}
        />
      </Stack>
    </Card>
  )
}
