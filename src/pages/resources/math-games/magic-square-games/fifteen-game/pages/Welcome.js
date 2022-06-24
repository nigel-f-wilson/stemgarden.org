import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUserFriends } from '@fortawesome/free-solid-svg-icons';

export default function Welcome() {
  return (
    <Box >
      <Title />
      <Subheader />
      <PlayModeButtons />
      <TeachingTips />
      <ElementarySchool />
      <MiddleSchool />
      <HighSchool />
    </Box>
  )
}

function Title() {
  return (
    <Typography
      variant='h2' 
      align='center'
      py={2}
      children='The Fifteen Game'
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
        The Fifteen Game is a two-player strategy game traditionally played with a set of cards numbered one through nine.
        Players take turns claiming one card at a time, with the goal of being first to collect a set of three cards that adds up to exactly Fifteen. 
        You may collect more than three cards, but only subsets of three can count as winning sets. Play continues until someone wins or all nine 
        cards are claimed and the game ends a draw. 
      </Typography>
    </Box>
  )
}

function TeachingTips() {
  return (
    <Box p={2} >
      <Typography
        variant='h4' 
        py={2}
      >
        Teaching Tips
      </Typography>
      <Typography 
        variant='subtitle1'
        fontSize={18}
        lineHeight='1.5rem'
        align='justify'
      >
        The Fifteen Game has something to offer for students of all ages and at levels of mathematical training. 
        Each round only takes takes a few minutes to play, making it an ideal for a brain-break activity during class.
        If you want to set up a bracket and have a class-wide or school-wide championship tournament, I recommend the free tool available at <a href="https://brackethq.com/" >Bracket HQ</a>.
      </Typography>
    </Box>
  )
}

function ElementarySchool() {
  return (
    <Box p={2} >
      <Typography align='left' variant='h4' gutterBottom >
        Elementary School
      </Typography>
      <Typography align='left' variant='h6' gutterBottom >
        Mental Math Fluency and Thinking Out Loud
      </Typography>
      <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
        For students at the Elementary level, The Fifteen Game is a fantastic way to build automaticity at mentally computing sums and differences within 20 (a 1st grade standard).
        Even for students who have mastered basic addition, trying to formulate strategies that involve offence and defense will push them to a new depth of understanding. 
        Make note of the pairs that add up to 10 and the fact that any of these four pairs is enough to win if you get the 5.
        Be sure to get kids talking! Thinking out loud is a valuable life skill that games like this are excellent tools for teaching. 
        Keep playing against the bot in "Easy" mode until you can win well over half the time.
      </Typography>
    </Box>
  )
}
function MiddleSchool() {
  return (
    <Box p={2} >
      <Typography align='left' variant='h4' gutterBottom >
        Middle School
      </Typography>
      <Typography align='left' variant='h6' gutterBottom >
        Combinations and Permutations
      </Typography>
      <Typography paragraph align='justify'  component='p' variant='body1'  >
        Students at the Middle School level who have already gained a feel for the game can take there understanding to the next level by exploring questions like:
        <br /> &#8226; &nbsp; How many different three card combinations are there total? 
        <br /> &#8226; &nbsp; How many of those combinations sum to 15?
        <br /> &#8226; &nbsp; What are the sums of all the combinations that don't sum to 15?
        <br /> &#8226; &nbsp; Would this game be fun to play with a different targt number than 15?
      </Typography>
      <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
        Entertaining questions like these will set kids up to learn about combinations and permutations. Once they have answered all of the above questions
        you can inform kids that the Fifteen Game is actually Tic Tac Toe in disguise. Don't explain how though! As teachers we have to withold
        some information to teach kids how to go get what they want with their own research!
      </Typography>
    </Box>
  )
}
function HighSchool() {
  return (
    <Box p={2} >
      <Typography align='left' variant='h4' gutterBottom >
        High School
      </Typography>
      <Typography align='left' variant='h6' gutterBottom >
        Similarity Beneath the Surface
      </Typography>
      <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
        Many problems can be solved with less work if, instead of starting from scratch, you look for similarities between the problem
        at hand and other problems that you already know how to solve. Have you <em>mastered</em> Tic Tac Toe to the point where you 
        never lose and also never miss a chance to win when you opponent slips up?  Does the bot still get the best of you at the 15 game 
        occasionally? Well you know by now that these two games are the same, make yourself a visual aide!
      </Typography>
      <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
        Magic Squares are an ancient mathematical curiosity. They can be made in many sizes but here is what you will be trying to create:
        <br /> &#8226; &nbsp; A three by three grid that has each of the numbers 1 through 9 in it one time each.
        <br /> &#8226; &nbsp; The three digits in each row, column, and diagonal must add up to 15.
        <br /> Start listing combos and put your algebra and logical deduction skills to work! What can you proove as you go?
        There is more than one way to complete this task but ask yourself things like:
        <br /> &#8226; &nbsp; What is special about the center cell? Which numbers can go there?
        <br /> &#8226; &nbsp; What do all the numbers that go in corners have in common?
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
      mb={4}
    >
      <BigIconButton 
        label="Play vs. Bot"
        to='play-vs-bot'
        icon={faRobot}
      />
      <BigIconButton 
        label="Play a Friend"
        to='play-vs-friend'
        icon={faUserFriends}
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
        // height: "100%",
        margin: 3,
        paddingBottom: 2,
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


