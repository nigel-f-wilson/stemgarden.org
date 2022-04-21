import React, { useState, useEffect, createContext, useContext } from "react";

import { PageLayoutContext } from "../../contexts";

// import { lineToCellsMap, cellToLinesMap } from './winningLineMaps'
// import { intersect } from "../_helpers/probability";
import { cellToLinesMap } from './winningLineMaps'



export const ConnectFourContext = createContext();
// ConnectFourContext.displayName("Connect Four Context")

export const ConnectFourContextProvider = props => {

  const { maxSquareSideLength } = useContext(PageLayoutContext)


  const gameBoardConstants = {
    oneSixth: '16.665%',
    oneSeventh: '14.287%',
    sixSevenths: '85.714%',
    chipSizeRelativeToSquare: '84%',

    rowNumbers: [0, 1, 2, 3, 4, 5],
    columnNumbers: [0, 1, 2, 3, 4, 5, 6],
    columnLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],

    boardSideLength: (maxSquareSideLength - 96),
    buttonContainerHeight: 96,



  }


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

  const [nextPlayer, setNextPlayer] = useState('playerOne')
  const [gameIsOver, setGameIsOver] = useState(false)

  useEffect(() => {
    // setGameStatus(updatedGameStatus(moveList))
    // setBoardData(updatedBoardData(moveList, boardData))
    // setNextPlayer(getNextPlayer(moveList))

    setGameStatus(updatedGameStatus(moveList))
    setBoardData(getBoardData(moveList))
    setNextPlayer(getNextPlayer(moveList))

    // setGameStatus((moveList) => updatedGameStatus(moveList))
    // setBoardData((moveList, boardData) => updatedBoardData(moveList, boardData))
    // setNextPlayer((moveList) => getNextPlayer(moveList))

  },[moveList])

  useEffect(() => {
    // setNextPlayer(getNextPlayer(moveList))
    // setNextPlayer((gameStatus) => (gameStatus === 'playerOneWins' || gameStatus === 'playerTwoWins' || gameStatus === 'gameDrawn'))
    setGameIsOver((gameStatus) => (gameStatus === 'playerOneWins' || gameStatus === 'playerTwoWins' || gameStatus === 'gameDrawn'))
  },[gameStatus])


  const connectFourContext = {
    settings,
    setSettings,
    moveList,
    setMoveList,
    gameStatus,
    boardData,
    nextPlayer,
    gameIsOver,

    gameBoardConstants,

  }

  // console.log(`CONNECT FOUR CONTEXT: ${JSON.stringify(connectFourContext, null, 4)}`);
  
  return (
    <ConnectFourContext.Provider 
      value={connectFourContext} 
      children={props.children}
    />
  )
};

// Returns ENUM: 'playerOnesTurn', 'playerTwosTurn', 'playerOneWins', 'playerTwoWins', 'gameOverDraw'
// This function efficiently checks to see if the last move created a win for the player who made it.
export function updatedGameStatus(moveList) {
  console.log(`Updating Game Status with MOVE LIST --> ${moveList}`);

  if (moveList.length === 0) {
    return 'playerOnesTurn'
  }
  else if (gameDrawn(moveList)) {
    return 'gameOverDraw'
  }
  // let lastPlayerToMove = (moveList.length % 2 === 1) ? "playerOne" : "playerTwo"
  // let lastPlayersMoves = (lastPlayerToMove === "playerOne") ? playerOnesMoves(moveList) : playerTwosMoves(moveList)
  let lastMoveMade = moveList.slice(-1)
  let linesAffectedByLastMove = cellToLinesMap.get(lastMoveMade)

// console.log(`lastPlayerToMove --> ${lastPlayerToMove}`);
// console.log(`lastPlayersMoves --> ${lastPlayersMoves}`);
console.log(`lastMoveMade --> ${lastMoveMade}`);
console.log(`linesAffectedByLastMove --> ${linesAffectedByLastMove}`);


  // for (let i = 0; i < linesAffectedByLastMove.length; i++) {
  //   let line = linesAffectedByLastMove[i]
  //   let cellsInLine = lineToCellsMap.get(line)
  //   // For added efficiency I could at this point remove the lastMoveMade from cells in line and in the next line look for intersections of length 3.
  //   if (intersect(cellsInLine, lastPlayersMoves).length === 4) {
  //     return (lastPlayerToMove === 'playerOne') ? 'playerOneWins' : 'playerTwoWins'
  //   }
  // }
  // if (gameDrawn(moveList)) {
  //   return 'gameOverDraw'
  // }
  // else {
  //   return (moveList.length % 2 === 0) ? 'playerOnesTurn' : 'playerTwosTurn'
  // }
}

function gameDrawn(moveList) {
  if (moveList.length < 42) {
    return false
  }
  else {
    let nonSkippedTurns = moveList.filter(cellId => cellId !== -1)
    return (nonSkippedTurns.length === 42)
  }
}


export function cellIsUnclaimed(cellId, moveList) {
    return (!moveList.includes(cellId))
}


// function updatedBoardData(moveList, prevBoardData) {
//   let newBoardData = prevBoardData.slice()
//   const lastMove = moveList.slice(-1)
//   if (lastMove === -1) {
//     return newBoardData  
//   }
//   else {
//     const currentStatus = newBoardData[lastMove] 
//     if (currentStatus === 'unclaimed') {
//       newBoardData[lastMove] = getNextPlayer(moveList)
//     }
//     else {
//       newBoardData[lastMove] = 'unclaimed'
//     }
//   }
//   return newBoardData
// }

function getNextPlayer(moveList) {
  return (moveList.length % 2 === 0) ? "playerOne" : "playerTwo"
  // return (gameStatus === "playerOnesTurn") ? "playerOne" : gameStatus === "playerTwosTurn" ? "playerTwo" : "unclaimed"
}

export function getColumnLetter(columnIndex) {
  let columnLetter = ''
  switch (columnIndex) {
    case 0:
      columnLetter = 'A'
      break;
    case 1:
      columnLetter = 'B'
      break;
    case 2:
      columnLetter = 'C'
      break;
    case 3:
      columnLetter = 'D'
      break;
    case 4:
      columnLetter = 'E'
      break;
    case 5:
      columnLetter = 'F'
      break;
    case 6:
      columnLetter = 'G'
      break;
    default:
      columnLetter = 'error'
      break;
    }
  return columnLetter
}


// export function playerOnesMoves(moveList) {
//     return moveList.filter((cell, turn) => turn % 2 === 0).filter(cell => cell !== -1)
// }
// export function playerTwosMoves(moveList) {
//     return moveList.filter((cell, turn) => turn % 2 === 1).filter(cell => cell !== -1)
// }

export function getBoardData(moveList) {
  let data = new Array(42).fill("unclaimed")
  moveList.forEach((move, turn) => {
    if (move !== -1) {
      let player = turn % 2 === 0 ? "playerOne" : "playerTwo"
      data[move] = player
    }
  })
  return data
}
// const boardData = getBoardData(moveList)  I don't like that getColumnData is called 7 times and each time it calls getBoardData rather than caching this result and reusing it, updating it automatically only when the moveList updates. useEffect could help?
// No, simply elevating state will help. there is no reason my state needs to mbe soooo sparse... practically just the moveList.  I'll leave all the moveList updater functions as they are but add a uesEffect hook on the component that holds that state which
// will have the moveList in its dependency array.  The new position will still render quickly based on the rapid update to moveList. behind the sceenes a boardData state object will be updated. 

function getColumnData(columnIndex, moveList) {
    let boardData = getBoardData(moveList)
    return boardData.filter((claimStatus, cellId) => cellId % 7 === columnIndex)
}

export function getLowestUnclaimedCell(columnIndex, moveList) {
    let columnData = getColumnData(columnIndex, moveList)
    let lowestUnclaimedRow = columnData.indexOf("unclaimed")
    let lowestUnclaimedCell = (lowestUnclaimedRow === -1) ? -1 : (lowestUnclaimedRow * 7 + columnIndex)
    // console.log(`lowestUnclaimedCell in col ${columnIndex} is cell "${lowestUnclaimedCell}"`);
    return lowestUnclaimedCell
}

export function playerOnesMoves(moveList) {
  return moveList.filter((cell, turn) => turn % 2 === 0).filter(cell => cell !== -1)
}
export function playerTwosMoves(moveList) {
  return moveList.filter((cell, turn) => turn % 2 === 1).filter(cell => cell !== -1)
}