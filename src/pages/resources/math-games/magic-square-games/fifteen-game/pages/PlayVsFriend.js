import React, { useState } from 'react';
import { Box } from '@mui/material';

// My Components
import FifteenGameBoard from "../components/FifteenGameBoard";
import FriendPanel from "../components/panels/FriendPanel";

// Game Logic
import { status, gameOver } from "../../magicSquareHelpers";

export default function PlayVsFriend(props) {
  const { outcomeMap } = props
  
  const startingPosition = "" 
  const [moveList, setMoveList] = useState(startingPosition)
  
  const [gameNumber, setGameNumber] = useState(1);
  const [winLossDrawRecord, setWinLossDrawRecord] = useState([0, 0, 0]);


  // CLICK HANDLERS
  function handleNumberCardClick(squareClicked) {
    if (moveList.includes(squareClicked)) {
      console.warn("NO EFFECT. That number has already been claimed.")
    }
    else if (gameOver(moveList)) {
      console.warn("NO EFFECT. The Game is already over.")
    }
    else {
      let updatedMoveList = moveList.concat(squareClicked)
      setMoveList(updatedMoveList)
      if (gameOver(updatedMoveList)) {
        handleGameOver(updatedMoveList)
      } 
    }
  }

  function handleUndoClick() {
    const updatedMoveList = moveList.slice(0,-1)
    setMoveList(updatedMoveList)
  }

  function handleNewGameClick() {
    setGameNumber(gameNumber => ++gameNumber)
    setMoveList(startingPosition)
  }


  function handleGameOver(moveList) {
    const playerOneWentFirst = (gameNumber % 2 === 1)
    let result = status(moveList)
    const playerOneWins = playerOneWentFirst ? (result === "xWins") : (result === "oWins")  
    const playerTwoWins = playerOneWentFirst ? (result === "oWins") : (result === "xWins")  
    console.assert((result !== "xNext" && result !== "oNext"), `handleGameOver got invalid result when calling status(ml).`)
    if (result === "draw") {
      setWinLossDrawRecord([winLossDrawRecord[0], winLossDrawRecord[1], ++winLossDrawRecord[2]])
    }
    else if (playerOneWins) {
      setWinLossDrawRecord([++winLossDrawRecord[0], winLossDrawRecord[1], winLossDrawRecord[2]])
    }
    else if (playerTwoWins) {
      setWinLossDrawRecord([winLossDrawRecord[0], ++winLossDrawRecord[1], winLossDrawRecord[2]])
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
      <FifteenGameBoard 
        moveList={moveList}
        showSolution={false}
        handleNumberCardClick={handleNumberCardClick}
        outcomeMap={outcomeMap}
      />

      <FriendPanel
        moveList={moveList}
        winLossDrawRecord={winLossDrawRecord}
        handleNewGameClick={handleNewGameClick}
        gameNumber={gameNumber}
        handleUndoClick={handleUndoClick}
      />

    </Box>
  )
}
