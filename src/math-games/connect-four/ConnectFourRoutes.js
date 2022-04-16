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

  // useEffect(() => {
  //   handleBotsTurn(moveList)
  // },[gameStatus])

  // TURN & QUESTION State
  const [openModal, setOpenModal] = React.useState("welcome") // Enum: "none", "question", "settings", "welcome", "inGameMenu"
  const [activeCell, setActiveCell] = React.useState(null) 

  const [question, setQuestion] = React.useState(testQuestion())
  const [headerText, setHeaderText] = React.useState("")
  

  // LAYOUT
  const height = useScreenHeight()
  // console.log(`height ${height}`);
  const width = useScreenWidth()
  const boardSideLength = (height <= width) ? height : width

  ///////////////////////////////////////////////////////
  // CLICK HANDLERS
  ///////////////////////////////////////////////////////
  function handleColumnClick(columnIndex) {
    if (gameIsOver()) {
      console.log(`handleColumnClick() had NO EFFECT since game is already over!`)
      return 
    }
    let cell = lowestUnclaimedCellInColumn(columnIndex)
    if (cell === -1) {
      console.log(`handleColumnClick() had NO EFFECT since column is full!`)
      return
    }
    openMathQuestionModal(lowestUnclaimedCellInColumn)
  }

  function lowestUnclaimedCellInColumn(columnIndex) {
    let columnData = getColumnData(columnIndex)
    console.log(`Column Data: ${columnData}`);
    let lowestUnclaimedRow = columnData.indexOf("unclaimed")
    let lowestUnclaimedCell = (lowestUnclaimedRow === -1) ? -1 : (lowestUnclaimedRow * 7 + columnIndex)
    console.log(`lowestUnclaimedCell in col ${columnIndex} is cell "${lowestUnclaimedCell}"`);
    return lowestUnclaimedCell
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
  
  function getColumnData(columnIndex) {
    return boardData.filter((claimStatus, cellId) => cellId % 7 === columnIndex)
  }

  

  

  function openMathQuestionModal(activeCell) {
    let difficulty = determineDifficulty()
    let topic = chooseRandomFromArray(settings.topics)

    // My first Promise     
    generateQuestion(topic, difficulty).then(newQuestion => {
      // console.log(`Opening Modal with Question --> ${JSON.stringify(newQuestion, null, 4)}`);
      setQuestion(newQuestion)
      setHeaderText(newQuestion.instructions)
      setOpenModal("question")
      setActiveCell(activeCell)
    })
  }

  function determineDifficulty() {
    if (settings.difficultyMode === "increasing") {
      const score = getScore()
      if (score < 7) {
        return "easy"
      }
      else if (score < 14) {
        return "medium"
      }
      else if (score >= 14) {
        return "hard"
      }
      else {
        console.error(`Invalid number of question right so far: ${score}`);
        return "error"
      }
    }
    else {
      return settings.difficultyMode
    }
  }

  function getScore(player = nextPlayer()) {
    const ml = moveList
    const moves = (player === "playerOne") ? playerOnesMoves(ml) : playerTwosMoves(ml)
    return moves.length
  }

  function nextPlayer() {
    return (moveList.length % 2 === 0) ? "playerOne" : "playerTwo"
  }


  
  function handleAnswerSubmit(playersAnswer) {
    const answerIsCorrect = (Number(playersAnswer.trim()) === question.correctAnswer)
    const answerFeedbackHeaderText = (answerIsCorrect ? chooseRandomFromArray(waysToSayCorrect) : `Nope. It was ${question.correctAnswer}.`)
    setHeaderText(answerFeedbackHeaderText)

    // if (answerIsCorrect) {

    // }
    // else {
      
    // }

    let moveToAdd = (answerIsCorrect) ? activeCell : -1
    
    let updatedMoveList = moveList.concat(moveToAdd)
    // let newGameStatus = updatedGameStatus(updatedMoveList)
    
    setTimeout(() => {
      setOpenModal("none")
    }, 1500);
    setTimeout(() => {
      setMoveList(updatedMoveList)
      // setGameStatus(newGameStatus)
      // updateBoardData(moveToAdd)
      setActiveCell(null)
    }, 1850)

    // Handle Bot'sTurn
    if (settings.opponent === "bot" && !gameIsOver(updatedGameStatus)) {
      let botMove = getBotMove(updatedMoveList)
      let moveListAfterBot = updatedMoveList.concat(botMove)
      let gameStatusAfterBot = updatedGameStatus(moveListAfterBot)
      console.log(`Adding Bot Move: ${botMove} to the moveList. Game status: ${gameStatusAfterBot}`);
      setTimeout(() => {
          setMoveList(moveListAfterBot)
          setGameStatus(gameStatusAfterBot)
      }, 2200)
    }
      
  }

  // function handleBotsTurn() {
  //   // Handle Bot'sTurn
  //   if (settings.opponent === "bot" && gameStatus) {
  //     let botMove = getBotMove(updatedMoveList)
  //     let moveListAfterBot = updatedMoveList.concat(botMove)
  //     let gameStatusAfterBot = getGameStatus(moveListAfterBot)
  //     console.log(`Adding Bot Move: ${botMove} to the moveList. Game status: ${gameStatusAfterBot}`);
  //     setTimeout(() => {
  //         setMoveList(moveListAfterBot)
  //         setGameStatus(gameStatusAfterBot)
  //     }, 2200)
  //   }
  // }

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
  // function toggleCombine() {
  //   setSettings(prev => {...prev, topics})
  // }
  // function toggleMultiply() {
  //   setMathTopics(prev => { return { ...prev, multiply: !prev.multiply } })
  // }
  function selectOpponent(opponent) {
    // setOpponent(opponent)
    setSettings(prev => { return {...prev, opponent: opponent }})
  }
  function selectDifficulty(difficulty) {
    // setDifficultyMode(difficulty)
    setSettings(prev => { return {...prev, difficulty: difficulty }})
  }

  
  // Takes a settings opbect with same three fileds required as in defaultSettings
  function startNewGame(settings) {
    const { opponent, topics, difficultyMode } = settings
    console.log(`STARTING NEW GAME with ...`);
    console.log(`opponent: "${opponent}"`);
    console.log(`mathTopics: "${JSON.stringify(topics, null, 4)}", `);
    console.log(`difficultyMode: "${difficultyMode}"`);

    setSettings(settings)
    
    setMoveList([])
    // setGameStatus('playerOnesTurn')
    setOpenModal("none")
    setActiveCell(null)
  }

  function cancelNewGame() {
    setOpenModal("none")
  }

  function undoMove() {
    let updatedMoveList = moveList.slice(0, -1)
    setMoveList(updatedMoveList)
    // let newGameStatus = getGameStatus(updatedMoveList)
    // let newBoardData = boardData.slice(0, -1)
    // setGameState({
    //   moveList: updatedMoveList,
    //   status: newGameStatus,
    //   boardData: newBoardData
    // })
    // setOpenModal("none")
  }

  function openSettingsModal() {
    setOpenModal("settings")
  }
  function handleNewGameClick() {
    setOpenModal("settings")
  }
  function openInGameMenu() {
    setOpenModal("menu")
  }

  const App = () => {
    return (
      <Box 
      border='solid green 2px'
      id='play-page' 
              sx={{
                  height:  boardSideLength,
                  width:  boardSideLength,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative'
          }}>

              <WelcomeModal
                  open={(openModal === "welcome")}
                  openSettingsModal={openSettingsModal}
                  boardSideLength={boardSideLength}
              />

              <InGameMenu
                  open={(openModal === "menu")}
                  openSettingsModal={openSettingsModal}
                  openInGameMenu={openInGameMenu}
                  handleNewGameClick={handleNewGameClick}
                  handleUndoClick={undoMove}
              />

              <SettingsModal 
                  open={(openModal === "settings")}
                  startNewGame={startNewGame}
                  cancelNewGame={cancelNewGame}
                  boardSideLength={boardSideLength}

                  opponent={settings.opponent}
                  topics={settings.topics}
                  difficultyMode={settings.difficultyMode}

                  toggleTopic={toggleTopic}
                  toggleCombine={toggleTopic}
                  toggleMultiply={toggleTopic}
                  // toggleCombine={toggleCombine}
                  // toggleMultiply={toggleMultiply}
                  selectOpponent={selectOpponent}
                  selectDifficulty={selectDifficulty}

              />

              <MathQuestionModal
                  open={(openModal === "question")}
                  nextPlayerColor={nextPlayerColor(gameStatus)}
                  gameStatus={gameStatus}
                  question={question}
                  headerText={headerText}
                  handleAnswerSubmit={handleAnswerSubmit}
                  boardSideLength={boardSideLength}
              />

              <GameBoard
                  moveList={moveList}
                  gameStatus={gameStatus}
                  handleColumnClick={handleColumnClick}
              />
              
          </Box>
    )
  }

  return (
    <Box 
      border='solid red 2px'
      width='100vw' 
      height='calc(100vh - 96px)'
      overflow='hidden'
      bgcolor='backgrounds.connectFour'
      color='common.white'
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Routes >
        <Route index element={<App />} />
        {/* <Route path="play-with-coach" element={<PlayWithCoach outcomeMap={outcomeMap} />} /> */}
        {/* <Route path="play-vs-bot" element={<PlayVsBot outcomeMap={outcomeMap} />} /> */}
      </Routes>
    </Box>
  )
}