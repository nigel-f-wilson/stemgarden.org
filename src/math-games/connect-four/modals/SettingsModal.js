import React, { useState, useContext } from 'react'

// MUI  components
import { Box, Button, IconButton, Dialog, Zoom, Typography } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faRobot } from '@fortawesome/free-solid-svg-icons';

// CONTEXT 
import { PageLayoutContext } from "../../../contexts";
import { ConnectFourContext } from "../ConnectFourContext";

// ICONS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRobot, faUser, faPlus, faTimes, faDivide, faSuperscript } from '@fortawesome/free-solid-svg-icons'
// const RobotIcon = () => { return <FontAwesomeIcon icon={faRobot} /> }
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
})

export function SettingsModal(props) {
  const { open, startNewGame, cancelNewGame } = props

  const { maxSquareSideLength } = useContext(PageLayoutContext)


  const { 
    settings, setSettings,
  
  } = useContext(ConnectFourContext)
  
  // const [settings, setSettings] = useState(props.settings)

  let noneSelectedError = settings.topics.length === 0;


  function toggleTopic(topic) {
    let updatedTopicsArray = []
    const selected = settings.topics.includes(topic)
    if (selected) {
      updatedTopicsArray = settings.topics.filter(item => item !== topic)
      setSettings(prev => { return {...prev, topics: updatedTopicsArray }})
    }
    else {
      updatedTopicsArray = settings.topics.concat(topic)
      setSettings(prev => { return {...prev, topics: updatedTopicsArray }})
    }
  }

  function selectOpponent(opponent) {
    setSettings(prev => { return {...prev , opponent: opponent}})
  }

  function selectDifficulty(difficultyMode) {
    setSettings(prev => { return {...prev, difficultyMode: difficultyMode}})
  }
  
  return (
    <Dialog
      open={open}
      aria-describedby="game settings dialog"
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth='md'
      
      PaperProps={{
        sx: {
          height: `${0.85 * maxSquareSideLength}px`,
          width: `${0.7 * maxSquareSideLength}px`,
          minHeight: "550px",
          minWidth: "375px",
          display: 'flex',
          p: 3,
          borderRadius: 6,
          overflowY: "hidden",
        }
      }}
    >
      <OpponentSelector />
      <TopicSelector />
      <DifficultyModeSelector />
      <Box  
        borderTop='solid green 3px'
        borderColor='primary.main'
        height={inputHeight}
        display='flex'
        justifyContent='flex-end'
        mt={3}
        mb={1}
        pt={2}
        pr={1}
      >
        <CancelButton cancelNewGame={cancelNewGame} />
        <StartGameButton startNewGame={startNewGame} />
      </Box>
    </Dialog>
  )

  function OpponentSelector() {
    const OpponentIconButton = (props) => {
      const { opponent, icon } = props
      let selected = (settings.opponent === opponent)
      return (
        <IconButton
          children={<FontAwesomeIcon icon={icon} size="2x" />}
          onClick={() => selectOpponent(opponent)}
          color={selected ? "primary" : "secondary"}
        />
      )
    }
    return (
      <Box  
        height={opponentHeight}  
        display='flex' 
        flexDirection='column' 
      >
        <Typography
          variant='h5'
          align="center"
          pb={3}
          children="Play vs. Human or Bot?"
        />
        <Box display='flex' flexDirection='row' justifyContent='space-evenly' >
          <OpponentIconButton opponent='human' icon={faUserFriends} />
          <OpponentIconButton opponent='bot' icon={faRobot} />
        </Box>
      </Box>
    )
  }
  
  function TopicSelector() {
    const TopicButton = (props) => {
      const { topic, label } = props
      const selected = (settings.topics.includes(topic))
      return (
        <Button
          onClick={() => toggleTopic(topic)}
          variant={selected ? "contained" : "outlined"}
          sx={{ width: '100%', my: 1}}
          children={label}
        />
      )
    }
    const InvalidSelectionHelperText = () => {
      return (
        <Typography
          children="*** You must select at least one topic."
          variant='body1'
          align="center"
          color="error"
          display={noneSelectedError ? "flex" : "none"}
          gutterBottom
        />
      )
    }
    return (
        <Box  
          height={topicHeight}  
          display='flex' 
          flexDirection='column' 
        >
          <Typography
            variant='h5'
            align="center"
            pb={3}
            children="What math topics should we include?"
          />
            <TopicButton topic='combine' label="Combine & Split Up" />
            <TopicButton topic='multiply' label="Multiply & Factor" />
            <InvalidSelectionHelperText />
        </Box>
    )
  }

  function DifficultyModeSelector() {
    const DifficultyModeButton = (props) => {
      const { mode } = props
      const selected = (settings.difficultyMode === mode)
      return (
        <Button
          onClick={() => selectDifficulty(mode)}
          variant={selected ? "contained" : "outlined"}
          sx={{
            flex: '2 0 25%', 
            m: 1
          }}
          children={(mode === "increasing") ? "increasing difficulty" : `${mode}`}
        />
      )
    }
    return (
      <Box height={difficultyHeight} display='flex' flexDirection='column' >
        <Typography variant='h5' align="center" pb={3}
          children="How hard should the questions be?"
        />
        <Box  
          display='flex'
          justifyContent='space-between'
        >
          <DifficultyModeButton mode="easy" />
          <DifficultyModeButton mode="medium" />
          <DifficultyModeButton mode="hard" />
        </Box>
        <Box display='flex' >
          <DifficultyModeButton mode="increasing" />
        </Box>
      </Box>
    )
  }

  function CancelButton(props) {
      const { cancelNewGame } = props
      return (
          <Button
              onClick={cancelNewGame}
              variant='outlined'
              // color="error"
              disabled={noneSelectedError}
              sx={{
                  m: 1,
                  width: '42%'
              }}
              children="Cancel"
          />
      )
  }
  function StartGameButton() {
    return (
      <Button
        onClick={() => startNewGame(settings)}
        variant='contained'
        disabled={noneSelectedError}
        sx={{
            m: 1,
            width: '42%'
        }}
        children="Start Game"
      />
    )
  }
}


