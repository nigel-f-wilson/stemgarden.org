import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
// import { faPlus, faTimes, faDivide, faSuperscript } from '@fortawesome/free-solid-svg-icons'

export default function Welcome(props) {
  return (
    <Box>
      <Title />
      <Subheader />
      <PlayModeButtons />
    </Box>
  )
}

function Title() {
  return (
    <Typography
      variant='h2' 
      align='center'
      py={2}
      children='Tic Tac Toe Trainer'
    />
  )
}
function Subheader() {
  return (
    <Box p={2} >
      <Typography 
        variant='subtitle1'
        fontSize={18}
        lineHeight='1.5rem'
        align='justify'
      >
        Tic Tac Toe is perhaps the most underrated strategy game. Almost everybody is familiar
        with this classic paper and pencil game, but few have discovered its full depth. 
        Is there a strategy that can be proven to win every time, or not? Can you make a mistake 
        on the first move of the game? What exactly is a "mistake"? Try and answer these questions
        as you play against my bot, or select "Play with Coach" for a guided exploration.
      </Typography>
    </Box>
  )
}

function PlayModeButtons() {
  return (
    <Box 
      display='flex' 
      justifyContent='space-around' 
      height='13rem'
      px={4} 
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
        margin: 3,
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
          size='4x'
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


