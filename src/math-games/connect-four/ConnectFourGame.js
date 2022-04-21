import React, { useContext } from 'react' // useState, useEffect, 
import { Box } from '@mui/material';


// My Components
import { MaxSquareArea } from "./components/MaxSquareArea";
// import { GameArea } from "./GameArea";
import { WelcomeModal } from "./modals/WelcomeModal";
import { SettingsModal } from "./modals/SettingsModal";
import { MathQuestionModal } from "./modals/MathQuestionModal";
import { GameBoard } from "./components/GameBoard";
import { NewGameAndUndoButtons } from "./components/NewGameAndUndoButtons";


// Game Logic
// import { updatedGameStatus, playerOnesMoves, playerTwosMoves } from './gameLogic'
import { updatedGameStatus, playerOnesMoves, playerTwosMoves } from './ConnectFourContext'
import { generateQuestion, testQuestion } from './questionGenerators/questionGenerator'
import { chooseRandomFromArray } from '../_helpers/low-level'
import { getBotMove } from "./getBotMove";

import { waysToSayCorrect } from "../_helpers/commentary";

// CONTEXT
import { PageLayoutContext } from "../../contexts";
import { ConnectFourContext } from "./ConnectFourContext";



export default function ConnectFourGame(props) {

  const { 
    settings, setSettings,
    moveList, setMoveList,
    gameStatus,
    boardData,
    nextPlayer,
    gameIsOver,
    // openModal,
    // activeCell,
    // question,
    // headerText
    gameBoardConstants
  
  } = useContext(ConnectFourContext)
  const { rowNumbers } = gameBoardConstants

  const [openModal, setOpenModal] = React.useState("welcome") // Enum: "none", "question", "settings", "welcome", "inGameMenu"
  const [activeCell, setActiveCell] = React.useState(null) 

  const [question, setQuestion] = React.useState(testQuestion())
  const [headerText, setHeaderText] = React.useState("")

  // LAYOUT CONTEXT
  const { availableHeight  } = useContext(PageLayoutContext)

  ///////////////////////////////////////////////////////
  // CLICK HANDLERS
  ///////////////////////////////////////////////////////
  function handleColumnClick(columnIndex) {
    console.log(`handleColumnClick for col ${columnIndex} with MOVE LIST: ${moveList}`);
    if (gameIsOver) {
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
    const cellsInColumn = rowNumbers.map(row => 7 * row + columnIndex)
    const columnData = cellsInColumn.map(cellId => boardData[cellId])
    const lowestUnclaimedCell = columnData.indexOf('unclaimmed')
    // let columnData = getColumnData(columnIndex)
    // console.log(`Column Data: ${columnData}`);


    // let lowestUnclaimedRow = columnData.find(cell => cell.claimStatus !== "unclaimed")
    // let lowestUnclaimedCell = (lowestUnclaimedRow === -1) ? -1 : (lowestUnclaimedRow * 7 + columnIndex)
    // let lowestUnclaimedCell = boardData.find((claimStatus, cellId) => (cellId % 7 === columnIndex && claimStatus === "unclaimed"))

    console.log(`cellsInColumn in col ${columnIndex}: [${cellsInColumn}]"`);
    console.log(`columnData in col ${columnIndex}: [${columnData}]"`);
    console.log(`lowestUnclaimedCell in col ${columnIndex} is cell "${lowestUnclaimedCell}"`);
    return lowestUnclaimedCell
  }

  function getCellsInColumn(columnIndex) {
    
  }
  
  // function getColumnData(columnIndex) {
  //   let columnData = []
  //   boardData.forEach((claimStatus, cellId) => {
  //     if (cellId % 7 === columnIndex) {
  //       columnData = columnData.concat({
  //         claimStatus,
  //         cellId
  //       })
  //     }
  //   })
  //   console.log(`COLUMN DATA for col ${columnIndex} --> ${JSON.stringify(columnData, null, 4)}`);
  //   return columnData
  // }

  

  

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

  function getScore(player = nextPlayer) {
    const thisPlayersMoves = (player === "playerOne") ? playerOnesMoves(moveList) : playerTwosMoves(moveList)
    return thisPlayersMoves.length
  }
  
  function handleAnswerSubmit(playersAnswer) {
    const answerIsCorrect = (Number(playersAnswer.trim()) === question.correctAnswer)
    const answerFeedbackHeaderText = (answerIsCorrect ? chooseRandomFromArray(waysToSayCorrect) : `Nope. It was ${question.correctAnswer}.`)
    setHeaderText(answerFeedbackHeaderText)

    let moveToAdd = (answerIsCorrect) ? activeCell : -1
    
    let updatedMoveList = moveList.concat(moveToAdd)
    
    setTimeout(() => {
      setOpenModal("none")
    }, 1500);
    setTimeout(() => {
      setMoveList(updatedMoveList)
      // setActiveCell(null)
    }, 1850)

    // Handle Bot'sTurn
    if (settings.opponent === "bot" && !gameIsOver) {
      let botMove = getBotMove(updatedMoveList)
      let moveListAfterBot = updatedMoveList.concat(botMove)
      // let gameStatusAfterBot = updatedGameStatus(moveListAfterBot)
      console.log(`Adding Bot Move: ${botMove} to the moveList.`);
      setTimeout(() => {
        setMoveList(moveListAfterBot)
        // setGameStatus(gameStatusAfterBot)
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
    // setGameStatus('playerOnesTurn')
    setOpenModal("none")
    setActiveCell(null)
  }

  function cancelNewGame() {
    setOpenModal("none")
  }

  function undoMove() {
    let updatedMoveList = moveList.slice(0, -1)
    console.log(`MOVELIST AFTER UNDO: ${updatedMoveList}`);
    setMoveList(updatedMoveList)
  }

  function openSettingsModal() {
    setOpenModal("settings")
  }
  

  return (
    <Box 
      id='connect_four_background'
      width='100%' 
      height={availableHeight}
      overflow='hidden'
      bgcolor='connectFour.background'
      color='connectFour.board'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      // position='relative'
    >
      
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

      <MathQuestionModal
        open={(openModal === "question")}
        gameStatus={gameStatus}
        question={question}
        headerText={headerText}
        handleAnswerSubmit={handleAnswerSubmit}
      />

      {/* <GameArea
        handleColumnClick={handleColumnClick}
        openSettingsModal={openSettingsModal}
        undoMove={undoMove}
      /> */}
      <MaxSquareArea >
        <GameBoard 
          // boardData={boardData}
          // gameStatus={gameStatus}
          // nextPlayer={nextPlayer}
          // gameBoardConstants={gameBoardConstants} 
          handleColumnClick={handleColumnClick}
          // lastMoveMade={lastMoveMade}
        />
          
        <NewGameAndUndoButtons 
          // gameBoardConstants={gameBoardConstants} 
          openSettingsModal={openSettingsModal}
          undoMove={undoMove}
        />
      </MaxSquareArea>
            
    </Box>
  )
}