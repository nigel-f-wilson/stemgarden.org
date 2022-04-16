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

  // GAME State
  const [moveList, setMoveList] = useState([])  // The ids of the cells claimed in order with -1 indicating skipped turns
  const [gameStatus, setGameStatus] = useState('playerOnesTurn')  // Enum ['playerOnesTurn', 'playerTwosTurn', 'playerOneWins', 'playerTwoWins', 'gameOverDraw'
  const [boardData, setBoardData] = useState(new Array(42).fill('unclaimed')) // Indices correspond to cell ids, each value is one of "unclaimed" "playerOne" or "playerTwo"
  useEffect(() => {
    setGameStatus(updatedGameStatus(moveList))
    setBoardData(updatedBoardData(moveList))
  },[moveList])

    }
  function updatedBoardData(moveList) {
    let newBoardData = boardData.slice()
    const lastMove = moveList.slice(-1)
    if (lastMove === -1) {
      return newBoardData  
    }
    else {
      const currentStatus = newBoardData[lastMove] 
      if (currentStatus === 'unclaimed') {
        newBoardData[lastMove] = nextPlayer()
      }
      else {
        newBoardData[lastMove] = 'unclaimed'
      }
    }
    return newBoardData
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