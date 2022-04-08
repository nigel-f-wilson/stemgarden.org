import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import { status, gameOver } from "../logic/gameLogic";
import { getBotMove } from "../logic/botLogic";
// import TicTacToeBoard from "../components/Boards/TicTacToeBoard";

// import CoachPanel from "../components/Panels/CoachPanel";
import Board from "../components/Board";
import BotPanel from "../components/panels/BotPanel";

import {  Box } from '@mui/material';

export default function PlayVsBot(props) {
  const [outcomeMap, moveList, setMoveList] = useOutletContext();
  const startingPosition = ""
  
  
  let [humanGoesFirst, setHumanGoesFirst] = useState(true);
    

  let [gameNumber, setGameNumber] = useState(1);
  let [record, setRecord] = useState([0, 0, 0]);

  let [difficultyMode, setDifficultyMode] = useState("hard") 


  // CLICK HANDLERS
  function handleSquareClick(squareClicked) {
    if (gameOver(moveList)) {
      console.log("return without effects from handleSquareClick(). The Game is already over.")
      return;
    }
    if (moveList.includes(squareClicked)) {
      console.log("return without effects from handleSquareClick(). That square has already been claimed.")
      return;
    }
    let updatedMoveList = moveList.concat(squareClicked)
    setMoveList(updatedMoveList)
  }

  function newGame() {
    setGameNumber(++gameNumber)
    setHumanGoesFirst(true)
    setMoveList(startingPosition)
  }

  function letBotGoFirst() {
    console.assert(moveList.length === 0, `handleLetBotGoFirstClick was called but it is not the frst move of the game!`)
    setHumanGoesFirst(false)
    handleBotsTurn('') // if the bot is going first the movelist is empty.
  }

  function changeDifficultyMode(newDifficulty) {
    // console.log(`Difficulty set to ${newDifficulty}`);
    setGameNumber(1)
    setHumanGoesFirst(true)
    setRecord([0, 0, 0])
    setMoveList(startingPosition)
    setDifficultyMode(newDifficulty)
  }

  // Find and make a move for the Bot with a slight delay. 
  function handleBotsTurn(moveList) {
    let botMove = getBotMove(difficultyMode, moveList, humanGoesFirst, outcomeMap)
    let updatedMoveList = moveList.concat(botMove)
    setTimeout(() => {
      setMoveList(updatedMoveList)
      if (gameOver(updatedMoveList)) {
        handleGameOver(updatedMoveList)
        return 1
      }
    }, 600)
  }

  function handleGameOver(ml) {
    let result = status(ml)

    if (result === "draw") {
        setRecord([record[0], record[1], ++record[2]])
    }
    else if (result === "xWins") {
        if (humanGoesFirst) {
            setRecord([++record[0], record[1], record[2]])
        }
        else {
            setRecord([record[0], ++record[1], record[2]])
        }
    }
    else if (result === "oWins") {
        if (humanGoesFirst) {
            setRecord([record[0], ++record[1], record[2]])
        }
        else {
            setRecord([++record[0], record[1], record[2]])
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
        outcomeMap={outcomeMap}
        newGame={newGame}
        letBotGoFirst={letBotGoFirst}
        difficultyMode={difficultyMode}
        changeDifficultyMode={changeDifficultyMode}

      />

    </Box>
  )
}
