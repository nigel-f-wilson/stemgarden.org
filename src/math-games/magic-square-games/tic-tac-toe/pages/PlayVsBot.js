import React, { useState } from 'react';
// import { useOutletContext } from "react-router-dom";

import { status, gameOver, nextPlayer  } from "../../solution";
import { getBotMove } from "../botLogic";
import Board from "../components/Board";
import BotPanel from "../components/panels/BotPanel";

import { Box } from '@mui/material';

export default function PlayVsBot(props) {
  const { outcomeMap } = props
  // const [outcomeMap] = useOutletContext();
  
  const startingPosition = "" 
  const [moveList, setMoveList] = useState(startingPosition)
  
  const [humanGoesFirst, setHumanGoesFirst] = useState(true);
  const [gameNumber, setGameNumber] = useState(1);
  const [winLossDrawRecord, setWinLossDrawRecord] = useState([0, 0, 0]);
  const [difficultyMode, setDifficultyMode] = useState("hard") 

  function humanGoesNext(moveList) {  
    if (humanGoesFirst) {
      return (nextPlayer(moveList) === "xNext")
    } 
    else {
      return (nextPlayer(moveList) === "oNext")
    }
  }

  // CLICK HANDLERS
  function handleSquareClick(squareClicked) {
    if (!humanGoesNext(moveList)) {
      console.warn("NO EFFECT. Be patient, the bot takes a second to move. ")
      return 1
    }
    else if (moveList.includes(squareClicked)) {
      console.warn("NO EFFECT. That number has already been claimed.")
      return 1
    }
    else if (gameOver(moveList)) {
      console.warn("NO EFFECT. The Game is already over.")
      return 1
    }
    else {
      let updatedMoveList = moveList.concat(squareClicked)
      setMoveList(updatedMoveList)
      if (gameOver(updatedMoveList)) {
        handleGameOver(updatedMoveList)
      } else {
        handleBotsTurn(updatedMoveList)
      }
      return 0
    }
  }

  function newGame() {
    setGameNumber(gameNumber => ++gameNumber)
    setHumanGoesFirst(true)
    setMoveList(startingPosition)
  }

  function letBotGoFirst() {
    console.assert(moveList.length === 0, `handleLetBotGoFirstClick was called but it is not the frst move of the game!`)
    setHumanGoesFirst(false)
    handleBotsTurn('') // if the bot is going first the movelist is empty.
  }

  function changeDifficultyMode(newDifficulty) {
    if (newDifficulty !== difficultyMode) {
      setGameNumber(1)
      setHumanGoesFirst(true)
      setWinLossDrawRecord([0, 0, 0])
      setMoveList(startingPosition)
      setDifficultyMode(newDifficulty)
    }
  }

  // Find and make a move for the Bot with a slight delay. 
  function handleBotsTurn(moveList) {
    let botMove = getBotMove(difficultyMode, moveList, humanGoesFirst, outcomeMap)
    let updatedMoveList = moveList.concat(botMove)
    setTimeout(() => {
      setMoveList(updatedMoveList)
      if (gameOver(updatedMoveList)) {
        handleGameOver(updatedMoveList)
      }
    }, 600)
  }

  function handleGameOver(ml) {
    let result = status(ml)
    if (result === "draw") {
      setWinLossDrawRecord([winLossDrawRecord[0], winLossDrawRecord[1], ++winLossDrawRecord[2]])
    }
    else if (result === "xWins") {
      if (humanGoesFirst) {
        setWinLossDrawRecord([++winLossDrawRecord[0], winLossDrawRecord[1], winLossDrawRecord[2]])
      }
      else {
        setWinLossDrawRecord([winLossDrawRecord[0], ++winLossDrawRecord[1], winLossDrawRecord[2]])
      }
    }
    else if (result === "oWins") {
      if (humanGoesFirst) {
        setWinLossDrawRecord([winLossDrawRecord[0], ++winLossDrawRecord[1], winLossDrawRecord[2]])
      }
      else {
        setWinLossDrawRecord([++winLossDrawRecord[0], winLossDrawRecord[1], winLossDrawRecord[2]])
      }
    }
    else {
        console.error(`handleGameOver called with invalid game result: ${result}. `)
    }
  }

  return (
    <Box 
      width='100%' 
      height='calc(100vh - 96px)'
      overflow='hidden'
      bgcolor='common.black'
      color='common.white'
    >
      <Board 
        moveList={moveList}
        showSolution={false}
        handleSquareClick={handleSquareClick}
        outcomeMap={outcomeMap}
      />

      <BotPanel
        moveList={moveList}
        winLossDrawRecord={winLossDrawRecord}
        humanGoesFirst={humanGoesFirst}
        newGame={newGame}
        letBotGoFirst={letBotGoFirst}
        difficultyMode={difficultyMode}
        changeDifficultyMode={changeDifficultyMode}
        gameNumber={gameNumber}
      />

    </Box>
  )
}
