import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

// MUI  components
import { Box, Button, Icon, IconButton, Dialog, Zoom, Typography, Grid } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faRobot, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

// ICONS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRobot, faUser, faPlus, faTimes, faDivide, faSuperscript } from '@fortawesome/free-solid-svg-icons'
// const robot = () => { return <FontAwesomeIcon icon={faRobot} /> }
// const robot = () => { return <FontAwesomeIcon icon={faRobot} /> }
// const UserIcon = () => { return <FontAwesomeIcon icon={faUser} /> }
// const PlusIcon = () => { return <FontAwesomeIcon icon={faPlus} /> }
// const TimesIcon = () => { return <FontAwesomeIcon icon={faTimes} /> }
// const DivideIcon = () => { return <FontAwesomeIcon icon={faDivide} /> }
// const SuperscriptIcon = () => { return <FontAwesomeIcon icon={faSuperscript} /> }
// import { faPlus, faTimes, faDivide, faSuperscript } from '@fortawesome/free-solid-svg-icons'

// Style & Layout Constants
const opponentHeight = "25%"
const topicHeight = "35%"
const difficultyHeight = "25%"
const inputHeight = "15%"


export default function Welcome(props) {

  
  return (
    <Box 
      // width='100%' 
      // height='100%'
      // overflow='hidden'
      // bgcolor='common.black'
      // color='common.white'
    >
      <Title />
      <PlayModeButtons />

    </Box>
  )
}

function Title() {
  return (
    <Typography 
      children='Tic Tac Toe Trainer'
      variant='h2' 
      align='center'
      py={2}
    />
  )
}

function PlayModeButtons() {
  return (
    <Box 
      display='flex' 
      justifyContent='space-around' 
      height='12rem'
      p={2} 
    >
      <BigIconButton 
        label="Play vs. Bot"
        to='play-vs-bot'
        icon={faRobot}
      />
      <BigIconButton 
        label="Play with Coach"
        to='play-with-coach'
        icon={faChalkboardTeacher}
      />
      
    </Box>
  )
}
function BigIconButton(props) {
  let { label, to, icon } = props

  return (
    <Button
      component={RouterLink}
      to={to}
      fullWidth
      sx={{
        border: "solid white 1px",
        height: "100%",
        margin: 2,
        textTransform: 'none',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }}
    >
        <Typography
          children={label}
          variant="cardHeader"
          gutterBottom
          align="center"
          p={1}
        />
        <FontAwesomeIcon
          icon={icon} 
          color='white'
          size='3x'
          sx={{
              width: "10rem",
              fontSize: "6rem",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center'
          }}
        />
    </Button>
  )
}


