import React, { useState, useEffect, useContext, createContext } from 'react'
import { Box } from '@mui/material';


// My Components
import { GameBoard } from "./GameBoard";
import { WelcomeModal } from "./modals/WelcomeModal";
import { InGameMenu } from "./modals/InGameMenu";
import { SettingsModal } from "./modals/SettingsModal";
import { MathQuestionModal } from "./modals/MathQuestionModal";

// Game Logic
import { gameIsOver, updatedGameStatus, playerOnesMoves, playerTwosMoves } from './gameLogic'
import { generateQuestion, testQuestion } from './questionGenerators/questionGenerator'
import { chooseRandomFromArray } from '../_helpers/low-level'
import { getBotMove } from "./getBotMove";

import { waysToSayCorrect } from "../_helpers/commentary";

// LAYOUT
import { PageLayoutContext } from "../../contexts";

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
  

  // LAYOUT CONTEXT
  const { maxSquareSideLength } = useContext(PageLayoutContext)
  const boardSideLength = maxSquareSideLength


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
    openMathQuestionModal(cell)
  }

  function lowestUnclaimedCellInColumn(columnIndex) {
    let columnData = getColumnData(columnIndex)
    // console.log(`Column Data: ${columnData}`);
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
    const thisPlayersMoves = (player === "playerOne") ? playerOnesMoves(moveList) : playerTwosMoves(moveList)
    return thisPlayersMoves.length
  }

  function nextPlayer() {
    return (moveList.length % 2 === 0) ? "playerOne" : "playerTwo"
  }
  function nextPlayerColor() {
    return (gameStatus === "playerOnesTurn") ? "playerOne" : gameStatus === "playerTwosTurn" ? "playerTwo" : "unclaimed"
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

  

  
  // Takes a settings object with same three fileds required as in defaultSettings
  function startNewGame(settings) {
    // console.log(`STARTING NEW GAME with SETTINGS: ${JSON.stringify(settings, null, 4)}`);
    setSettings(settings)
    setMoveList([])
    setGameStatus('playerOnesTurn')
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

  

  return (
    // <LayoutContextProvider >

      <Box 
        border='solid red 2px'
        width='100%' 
        height='calc(100% - 120px)'
        overflow='hidden'
        bgcolor='connectFour.background'
        color='connectFour.board'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='flex-start'
      >
        {/* <Routes >
          <Route index element={<App />} />
          <Route path="welcome" element={<WelcomeModal />} />
          <Route path="settings" element={<SettingsModal />} />
        </Routes> */}
        {/* <Box 
          border='solid green 2px'
          id='play-page' 
          sx={{
            // height:  boardSideLength,
            // width:  boardSideLength,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
          }}
        > */}
          <WelcomeModal
            open={(openModal === "welcome")}
            openSettingsModal={openSettingsModal}
          />

          <SettingsModal 
            open={(openModal === "settings")}
            settings={settings}
            startNewGame={startNewGame}
            cancelNewGame={cancelNewGame}
          />

            {/* <InGameMenu
                open={(openModal === "menu")}
                openSettingsModal={openSettingsModal}
                openInGameMenu={openInGameMenu}
                handleNewGameClick={handleNewGameClick}
                handleUndoClick={undoMove}
            /> */}

            <MathQuestionModal
                open={(openModal === "question")}
                nextPlayerColor={nextPlayerColor()}
                gameStatus={gameStatus}
                question={question}
                headerText={headerText}
                handleAnswerSubmit={handleAnswerSubmit}
            />

            {/* <GameBoard
              moveList={moveList}
              gameStatus={gameStatus}
              handleColumnClick={handleColumnClick}
              nextPlayerColor={nextPlayerColor()}
            /> */}
                
        {/* </Box> */}
      </Box>
    // </LayoutContextProvider>

  )
}