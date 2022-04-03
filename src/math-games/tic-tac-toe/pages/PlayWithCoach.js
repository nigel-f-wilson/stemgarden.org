import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import { gameOver } from "../logic/gameLogic";
// import TicTacToeBoard from "../components/Boards/TicTacToeBoard";

// import CoachPanel from "../components/Panels/CoachPanel";
import Board from "../components/Board";
import CoachPanel from "../components/panels/CoachPanel";

import {  Box } from '@mui/material';

export default function PlayWithCoach(props) {
  const [outcomeMap, moveList, setMoveList] = useOutletContext();


  
  let [showSolution, setShowSolution] = useState(false);

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
    setShowSolution(false)
  }

  function handleUndoClick() {
    const shortenedMoveList = moveList.slice(0, moveList.length - 1)
    setMoveList(shortenedMoveList)
  }

  function toggleShowSolution() {
    setShowSolution(showSolution => !showSolution)
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
        showSolution={showSolution}
        handleSquareClick={handleSquareClick}
        outcomeMap={outcomeMap}
      />

      <CoachPanel
        moveList={moveList}
        showSolution={showSolution}
        toggleShowSolution={toggleShowSolution}
        handleUndoClick={handleUndoClick}
        outcomeMap={outcomeMap}
      />

    </Box>
  )
}

