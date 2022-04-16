import React, { lazy, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import {  Container,  Box } from '@mui/material';


// My Components
// import App from './App'
import { GameBoard } from "./GameBoard";
import { WelcomeModal } from "./modals/WelcomeModal";
import { InGameMenu } from "./modals/InGameMenu";
import { SettingsModal } from "./modals/SettingsModal";
import { MathQuestionModal } from "./modals/MathQuestionModal";
// import Welcome from './pages/Welcome'
// const PlayWithCoach = lazy(() => import('./pages/PlayWithCoach'))
// const PlayVsBot = lazy(() => import('./pages/PlayVsBot')) 

// Game Logic
import { gameIsOver, getGameStatus as updatedGameStatus, nextPlayersMoves, nextPlayerColor, playerOnesMoves, playerTwosMoves } from './gameLogic'
import { generateQuestion, testQuestion } from './questionGenerators/questionGenerator'
import { chooseRandomFromArray } from '../_helpers/low-level'
import { getBotMove } from "./getBotMove";

import { waysToSayCorrect } from "../_helpers/commentary";

// Custom Hooks
import { useScreenWidth, useScreenHeight } from "../../hooks"


export default function ConnectFourRoutes(props) {
  // SETTINGS
  const defaultSettings = {
    opponent: 'human',
    topics: ['combine', 'multiply'],    // One of 'doubleTriple', 'halfThird'
    difficultyMode: "increasing"        // One of "easy" "medium" "hard" "increasing"
  }
  const [settings, setSettings] = useState(defaultSettings)
  useEffect(() => {
    }

  return (
    <Box 
      width='100vw' 
      height='calc(100vh - 48px)'
      overflow='hidden'
      bgcolor='common.black'
      color='common.white'
    >
      <Container maxWidth='sm' disableGutters >
        <Routes >
          <Route index element={<App />} />
          {/* <Route path="play-with-coach" element={<PlayWithCoach outcomeMap={outcomeMap} />} /> */}
          {/* <Route path="play-vs-bot" element={<PlayVsBot outcomeMap={outcomeMap} />} /> */}
        </Routes>
      </Container>
    </Box>
  )
}