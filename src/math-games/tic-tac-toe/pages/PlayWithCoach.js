import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import { gameOver, generatePositionToOutcomeMap } from "../logic/gameLogic";
// import TicTacToeBoard from "../components/Boards/TicTacToeBoard";

// import CoachPanel from "../components/Panels/CoachPanel";
import Board from "../components/Board";


import { 
  Container, 
  Box 
} from '@mui/material';

export default function PlayWithCoach(props) {
  const [outcomeMap, setOutcomeMap] = useOutletContext();


  let startingPosition = "" 
  let [moveList, setMoveList] = useState(startingPosition);
  let [showHints, setShowHints] = useState(false);
  
 // CLICK HANDLERS
  function handleBoardClick(squareClicked) {
    if (gameOver(moveList)) {
      console.log("return without effects from handleSquareClick(). The Game is already over.")
      return;
    }
    if (moveList.includes(squareClicked)) {
      console.log("return without effects from handleSquareClick(). That square has already been claimed.")
      return;
    }
    let updatedMoveList = moveList.concat(squareClicked)
    setMoveList(updatedMoveList);
  }

  function handleUndoClick() {
    const shortenedMoveList = moveList.slice(0, moveList.length - 1)
    setMoveList(shortenedMoveList);
  }

  function toggleShowHints() {
    // setShowHints(!showHints)
    setShowHints(showHints => !showHints)
  }

  return (
    <Box 
      border='solid red 2px'
      width='100%' 
      height='calc(100vh - 96px)'
      overflow='hidden'
      bgcolor='common.black'
      color='common.white'
    >
      <Board 
        moveList={moveList}
        showHints={showHints}
        handleBoardClick={handleBoardClick}
        outcomeMap={outcomeMap}
      />

      {/* <CoachPanel
        moveList={moveList}
        showHints={showHints}
        toggleShowHints={toggleShowHints}
        handleUndoClick={handleUndoClick}
        outcomeMap={outcomeMap}
      /> */}

    </Box>
  )
}

