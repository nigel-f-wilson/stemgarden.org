import React, { useState, useContext, useEffect } from 'react'
import { Box, 
  Container, 
  Grid, 
  Stack, 
  Typography, 
  IconButton, 
  Drawer,
  FormControl, 
  Tooltip, 
  Select, 
  MenuItem, 
  AppBar, 
  Card } from '@mui/material';
  import SettingsIcon from '@mui/icons-material/Settings';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { Background } from "../../../components/backgrounds";
import { Logo } from "../../../components/navigation";

import { AppContext } from "../../../AppContext";

// const color_mixing_venn_diagram = "https://res.cloudinary.com/nola-stem-garden/image/upload/v1655057278/stemgarden.org/project_screenshots/Color-Wheel-Mix-Colors_ejldn0.jpg"

export default function DivisibilityPlaygroundPage() {
  const { screenWidth, setNavbarHidden, colorTheme } = useContext(AppContext)

  useEffect(() => {
    setNavbarHidden(true)
  }, [setNavbarHidden])

  const darkMode = colorTheme === 'dark' 
  const backgroundColor = darkMode ? 'darkGrey' : 'white'

  const cardColors = darkMode ?
  {
    red: '#DD0000',
    orange: '#FF6600',
    yellow: '#FFDD00',
    green: '#008800',
    blue: '#002277',
    purple: '#7711AA',
    none: 'white',
    all: 'black',
    text: 'white'
  } : {

  }

  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(true)
  const [numberOfColumns, setNumberOfColumns] = useState(10)
  const [numberCardSize, setNumberCardSize] = useState('medium')

  const [factors, setFactors] = useState({
    red: 'none',
    yellow: 9,
    blue: 11
  })

  let cardFontSize, cardSideLength, gridSpacing
  if (numberCardSize === 'small') {
    cardFontSize = 16
    cardSideLength = 40
    gridSpacing = 4
  }
  else if (numberCardSize === 'medium') {
    cardFontSize = 24
    cardSideLength = 60
    gridSpacing = 6
  }
  else {
    cardFontSize = 36
    cardSideLength = 90
    gridSpacing = 8
  }
  let maxNumberOfColumns = Math.floor(screenWidth / (cardSideLength + gridSpacing))
  
  let optionsForSquareSize = ['small', 'medium', 'large']
  let optionsForNumberOfColumns = []
  let optionsForFactors = ['none', 2]
  for (let i = 3; i < maxNumberOfColumns; i++) {
    optionsForNumberOfColumns.push(i)
    optionsForFactors.push(i)
  }

  let textColor = darkMode ? 'white' : 'black'

  return (
    <Background>
      <HeaderBar />
      <Drawer
        anchor='top'
        open={settingsDrawerOpen}
        onClose={() => {setSettingsDrawerOpen(false)}}
        PaperProps={{ sx: {backgroundColor: backgroundColor, padding: '7rem 0 2rem'}}}
      >
        <Settings />
      </Drawer>
      <NumberGrid 
        cardFontSize={cardFontSize}
        cardSideLength={cardSideLength}
        gridSpacing={gridSpacing}
      />
    </Background>
  )

  function HeaderBar(props) {
    return (
      <AppBar position='sticky' sx={{ zIndex: 1400 }} >
        <Container maxWidth='lg' disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <Logo height="4rem" />
          <Typography variant='h4' color='white' marginX="10%" >
            Divisibility Playground
          </Typography>
          <Tooltip title={settingsDrawerOpen ? "Close Settings" : "Open Settings"} >
            <IconButton 
              variant='contained'
              onClick={() => {setSettingsDrawerOpen(!settingsDrawerOpen)}}
            >
              {settingsDrawerOpen ? <ExpandLessIcon htmlColor='white' fontSize="large" /> : <ExpandMoreIcon htmlColor='white' fontSize="large" /> }
              <SettingsIcon htmlColor='white' fontSize="large" />
            </IconButton>
          </Tooltip>
        </Container>
      </AppBar>
    )
  }

  function NumberGrid(props) {
    const { cardFontSize, cardSideLength, gridSpacing } = props


    const nums = new Array(360).fill(null)
    
    // let cardFontSize, cardSideLength, gridSpacing
    // if (numberCardSize === 'small') {
    //   cardFontSize = 16
    //   cardSideLength = 40
    //   gridSpacing = 4
    // }
    // else if (numberCardSize === 'medium') {
    //   cardFontSize = 24
    //   cardSideLength = 60
    //   gridSpacing = 6
    // }
    // else {
    //   cardFontSize = 36
    //   cardSideLength = 90
    //   gridSpacing = 8
    // }
    return (
      <Grid container 
        spacing={`${gridSpacing}px`} 
        columns={numberOfColumns} 
        // maxWidth={`${numberOfColumns * 100}px`}
        width={`${numberOfColumns * (cardSideLength + gridSpacing)}px`}
        margin='16px auto'
      >
        {nums.map((item, index) => {
            return (
              <Grid item xs={1}  key={index}  >
                <NumberCard num={index + 1} fontSize={cardFontSize} cardSideLength={cardSideLength}  />
              </Grid>
            )
          })} 
      </Grid>
    )
  }

  function NumberCard(props) {
    const { num, fontSize, cardSideLength } = props
    const colors = ['red', 'yellow', 'blue'].filter(color => num % factors[color] === 0)
    const cardBgColor = cardColors[mix(colors)]
    const cardTextColor = (cardBgColor === 'black') ? 'white' : 'black' 
    
    return (
      <Card 
        key={num}
        sx={{ 
          height: `${cardSideLength}px`, 
          width: `${cardSideLength}px`, 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: cardBgColor,
        }} 

      >
        <Typography 
          children={num} 
          color={cardTextColor}
          fontSize={fontSize}
        />
      </Card>
    )
  }

  // Takes an array subset of primary colors and returns secondary color names
  function mix(colors) {
    if (colors.length === 0){
      return 'none'
    }
    else if (colors.length === 1){
      return colors[0]
    }
    else if (colors.length === 2){
      return (!colors.includes("blue")) ? "orange" : (!colors.includes("red")) ? "green" : "purple"
    }
    else {
      return 'all'
    }
  }

  function Settings(props){
    return (
      <Box display='flex' justifyContent='center' >
        <Stack p={1} > 
          <Box id='row-one' display='flex' flexFlow='row wrap' alignItems='center'  >
            <Typography  variant='h5' color={textColor} pr={1}>Make a grid with </Typography>
            <FormControl color={textColor} >
              <Select
                value={numberOfColumns}
                onChange={(event) => { setNumberOfColumns(event.target.value) }}
                sx={{ color: textColor, height: '3.0rem', border: "solid white 1px" }}
                MenuProps={{ sx: { zIndex: 2400}}}
              >
                {
                  optionsForNumberOfColumns.map(option => {
                    return (
                      <MenuItem key={option} value={option} >
                        <Typography variant='h5' children={option}  /> 
                      </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
            <Typography  variant='h5' color={textColor} px={1}>columns of </Typography>
            <FormControl color={textColor}  >
              <Select
                id="select-number-of-columns"
                value={numberCardSize}
                onChange={(event) => { setNumberCardSize(event.target.value) }}
                sx={{ color: textColor, height: '3.0rem', border: "solid white 1px" }}
                MenuProps={{ sx: { zIndex: 2400}}}
              >
                {
                  optionsForSquareSize.map(option => {
                    return (
                      <MenuItem key={option} value={option}  >
                        <Typography variant='h5' children={option}  /> 
                      </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
            <Typography variant='h5' color={textColor} px={1} >sized number cards.</Typography>
          </Box>
          
          <ColorSettingsRow color="red" />
          <ColorSettingsRow color="yellow" />
          <ColorSettingsRow color="blue" />
          <Typography  variant='h5' color={textColor} py={1} pr={1} >See what happens when the colors mix!</Typography>
          {/* <Box 
            width="194px"
            paddingTop='194px'
            backgroundPosition='center center'
            backgroundRepeat='no-repeat'
            backgroundSize='contain'
            sx={{ backgroundImage: `url(${color_mixing_venn_diagram})`}}
          /> */}
        </Stack>
      </Box>
      
    )
  }

  

  function ColorSettingsRow(props) {
    const { color } = props
    return (
      <Box id='row-two' display='flex' alignItems='center'  >
        <Typography  variant='h5' color={textColor} pr={1}>Color the cards</Typography>
        <Typography  variant='h4' color={cardColors[color]} pr={1} children={color.toUpperCase()} />
        <Typography  variant='h5' color={textColor} pr={1}>that are multiples of</Typography>
        <FormControl >
          <Select
            value={factors[color]}
            onChange={(event) => handleFactorChange(color, event.target.value)}
            sx={{ color: textColor, height: '2.8rem', marginY: '0.2rem', border: "solid white 1px" }}
            MenuProps={{ sx: { zIndex: 2400}}}
          >
            {
              optionsForFactors.map(option => {
                return (
                  <MenuItem key={option} value={option} >
                    <Typography variant='h5' children={option}  /> 
                  </MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
      </Box>
    )
  }
  function handleFactorChange(color, newValue) {
    let newFactors = {...factors}
    newFactors[color] = newValue
    setFactors(newFactors)
  }
}
