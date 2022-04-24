import React, { useContext } from 'react'

// MUI  components
import { Box, Button, IconButton, Dialog, Zoom, Typography } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faRobot } from '@fortawesome/free-solid-svg-icons';

// CONTEXT 
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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
})

export function SettingsModal(props) {
  const { open, startNewGame, cancelNewGame } = props
  const { settings, setSettings } = useContext(ConnectFourContext)

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
          // height: `${0.9 * maxSquareSideLength}px`,
          // width: `${0.75 * maxSquareSideLength}px`,
          height: '90%',
          width: '85%',
          maxHeight: '600px',
          maxWidth: '450px',
          display: 'flex',
          p: 3,
          borderRadius: 6,
          overflowY: "scroll",
        }
      }}
    >
      <OpponentSelector />
      <TopicSelector />
      <DifficultyModeSelector />
      <StartAndCancelButtons />
      
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
        display='flex' 
        flex='1 1 25%'
        flexDirection='column' 
      >
        <Typography
          variant='h5'
          align="center"
          children="Play vs. Human or Bot?"
        />
        <Box display='flex' flexDirection='row' justifyContent='space-evenly' p={1} >
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
          sx={{ m: '0.25rem' }}
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
          color={noneSelectedError ? "error" : "transparent"}
          // display={noneSelectedError ? "flex" : "none"}
          gutterBottom
        />
      )
    }
    return (
        <Box  
          display='flex' 
          flex='1 1 25%'  
          flexDirection='column' 
        >
          <Typography
            variant='h5'
            align="center"
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
            m: '0.25rem'
          }}
          children={(mode === "increasing") ? "increasing difficulty" : `${mode}`}
        />
      )
    }
    return (
      <Box 
        display='flex' 
        flex='1 1 25%'
        flexDirection='column' 
        pb={2}
      >
        <Typography variant='h5' align="center"
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

  function StartAndCancelButtons() {
    return (
      <Box  
        borderTop='solid green 3px'
        borderColor='primary.main'
        display='flex'
        flex='1 1 20%'
        justifyContent='center'
      >
        <CancelButton cancelNewGame={cancelNewGame} />
        <StartGameButton startNewGame={startNewGame} />
      </Box>
    )
  }

  function CancelButton(props) {
    const { cancelNewGame } = props
    return (
      <Button
        onClick={cancelNewGame}
        variant='outlined'
        disabled={noneSelectedError}
        sx={{
          m: 1,
          mt: 3,
          width: '40%'
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
          mt: 3,
          width: '40%'
        }}
        children="Start Game"
      />
    )
  }
}


