import React, { useContext } from 'react' 
import { Box } from '@mui/material';

import { chooseRandomFromArray} from '../_helpers/low-level';

// My Components
import { MaxSquareArea } from "./components/MaxSquareArea";
import { WelcomeModal } from "./modals/WelcomeModal";
import { SettingsModal } from "./modals/SettingsModal";
import { MathQuestionModal } from "./modals/MathQuestionModal";
import { GameBoard } from "./components/GameBoard";
import { NewGameAndUndoButtons } from "./components/NewGameAndUndoButtons";

// Game Logic
import { generateQuestion } from './questionGenerators/questionGenerator'

import { waysToSayCorrect } from "../_helpers/commentary";

// CONTEXT
import { PageLayoutContext } from "../../contexts";
import { ConnectFourContext } from "./ConnectFourContext";
import { getGameStatus, getBotMove } from "./moveListHelpers";

export default function ConnectFourController(props) {
  const { availableHeight  } = useContext(PageLayoutContext)
  const { 
    settings, setSettings,
    moveList, setMoveList,
    playerOnesMoves, playerTwosMoves,
    nextPlayer, gameIsOver, 
    lowestUnclaimedCells,  

    openModal, setOpenModal,
    activeCell, setActiveCell,
    question, setQuestion,
    headerText, setHeaderText,

  } = useContext(ConnectFourContext)

  ///////////////////////////////////////////////////////
  // CLICK HANDLERS
  ///////////////////////////////////////////////////////
  function handleColumnClick(columnIndex) {
    // console.log(`handleColumnClick for col ${columnIndex} with MOVE LIST: ${moveList}`);
    if (gameIsOver) {
      console.log(`handleColumnClick() had NO EFFECT since game is already over!`)
      return 
    }
    let cell = lowestUnclaimedCells[columnIndex]
    if (cell === -1) {
      console.log(`handleColumnClick() had NO EFFECT since column is full!`)
      return
    }
    setActiveCell(cell)
    openMathQuestionModal(cell)
  }

  function openMathQuestionModal() {
    let difficulty = determineDifficulty()
    let topic = chooseRandomFromArray(settings.topics)
    generateQuestion(topic, difficulty).then(newQuestion => {
      setQuestion(newQuestion)
      setHeaderText(newQuestion.instructions)
      setOpenModal("question")
    })
  }

  function handleAnswerSubmit(playersAnswer) {
    const answerIsCorrect = (Number(playersAnswer.trim()) === question.correctAnswer)
    const answerFeedback = answerIsCorrect ? 
      chooseRandomFromArray(waysToSayCorrect) : 
      `Nope. It was ${question.correctAnswer}.`
    setHeaderText(answerFeedback)

    let moveToAdd = (answerIsCorrect) ? activeCell : -1
    let updatedMoveList = moveList.concat(moveToAdd)
    let updatedGameStatus = getGameStatus(updatedMoveList)
    console.log(`updated game status : ${updatedGameStatus}`);
    // Close the question modal after the player has had time too see the feedback
    setTimeout(() => { 
      setOpenModal("none")
    }, 1400);
    setTimeout(() => {
      setMoveList(updatedMoveList)
    }, 1850)

    // if () {

    // }

    // Handle Bot'sTurn
    if (settings.opponent === "bot" && updatedGameStatus === 'playerTwosTurn') {
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
    const thisPlayersMoves = (player === "playerOne") ? playerOnesMoves : playerTwosMoves
    return thisPlayersMoves.length
  }

  function startNewGame(settings) {
    // console.log(`STARTING NEW GAME with SETTINGS: ${JSON.stringify(settings, null, 4)}`);
    setSettings(settings)
    setMoveList([])
    setOpenModal("none")
  }

  function cancelNewGame() {
    setOpenModal("none")
  }

  function undoMove() {
    let updatedMoveList = (settings.opponent === 'bot') ? moveList.slice(0, -2) : moveList.slice(0, -1)
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
        question={question}
        headerText={headerText}
        handleAnswerSubmit={handleAnswerSubmit}
      />

      <MaxSquareArea >
        <GameBoard handleColumnClick={handleColumnClick} />
        <NewGameAndUndoButtons 
          openSettingsModal={openSettingsModal}
          undoMove={undoMove}
        />
      </MaxSquareArea>
    </Box>
  )
}