import { lineToCellsMap, cellToLinesMap } from './winningLineMaps'
import { intersect } from "../_helpers/probability";



// export function getColumnLetter(columnIndex) {
//   let columnLetter = ''
//   switch (columnIndex) {
//     case 0:
//       columnLetter = 'A'
//       break;
//     case 1:
//       columnLetter = 'B'
//       break;
//     case 2:
//       columnLetter = 'C'
//       break;
//     case 3:
//       columnLetter = 'D'
//       break;
//     case 4:
//       columnLetter = 'E'
//       break;
//     case 5:
//       columnLetter = 'F'
//       break;
//     case 6:
//       columnLetter = 'G'
//       break;
//     default:
//       columnLetter = 'error'
//       break;
//     }
//   return columnLetter
// }


// // export function playerOnesMoves(moveList) {
// //     return moveList.filter((cell, turn) => turn % 2 === 0).filter(cell => cell !== -1)
// // }
// // export function playerTwosMoves(moveList) {
// //     return moveList.filter((cell, turn) => turn % 2 === 1).filter(cell => cell !== -1)
// // }

// export function getBoardData(moveList) {
//     let data = new Array(42).fill("unclaimed")
//     moveList.forEach((move, turn) => {
//         if (move !== -1) {
//             let player = turn % 2 === 0 ? "playerOne" : "playerTwo"
//             data[move] = player
//         }
//     })
//     return data
// }
// // const boardData = getBoardData(moveList)  I don't like that getColumnData is called 7 times and each time it calls getBoardData rather than caching this result and reusing it, updating it automatically only when the moveList updates. useEffect could help?
// // No, simply elevating state will help. there is no reason my state needs to mbe soooo sparse... practically just the moveList.  I'll leave all the moveList updater functions as they are but add a uesEffect hook on the component that holds that state which
// // will have the moveList in its dependency array.  The new position will still render quickly based on the rapid update to moveList. behind the sceenes a boardData state object will be updated. 

// function getColumnData(columnIndex, moveList) {
//     let boardData = getBoardData(moveList)
//     return boardData.filter((claimStatus, cellId) => cellId % 7 === columnIndex)
// }

// export function getLowestUnclaimedCell(columnIndex, moveList) {
//     let columnData = getColumnData(columnIndex, moveList)
//     let lowestUnclaimedRow = columnData.indexOf("unclaimed")
//     let lowestUnclaimedCell = (lowestUnclaimedRow === -1) ? -1 : (lowestUnclaimedRow * 7 + columnIndex)
//     // console.log(`lowestUnclaimedCell in col ${columnIndex} is cell "${lowestUnclaimedCell}"`);
//     return lowestUnclaimedCell
// }


// export function nextPlayer(gameStatus) {
//     if (gameIsOver(gameStatus)) {
//         console.error(`Do not call nextPlayer() when the game is over.`);
//     }
//     return (gameStatus === "playerOnesTurn") ? "playerOne" : "playerTwo"
// } 
// export function nextPlayersMoves(gameStatus, moveList) {
//     if (gameIsOver(gameStatus)) {
//       console.error(`Do not call nextPlayersMoves() when the game is over.`);
//     }
//     return (gameStatus === "playerOnesTurn") ? playerOnesMoves(moveList) : playerTwosMoves(moveList)
// }



// // Returns ENUM: 'playerOnesTurn', 'playerTwosTurn', 'playerOneWins', 'playerTwoWins', 'gameOverDraw'
// // This function efficiently checks to see if the last move created a win for the player who made it.
// export function updatedGameStatus(moveList) {
//   let lastPlayerToMove = (moveList.length % 2 === 1) ? "playerOne" : "playerTwo"
//   let lastPlayersMoves = (lastPlayerToMove === "playerOne") ? playerOnesMoves(moveList) : playerTwosMoves(moveList)
//   let lastMoveMade = Number(lastPlayersMoves.slice(-1))
//   let linesAffectedByLastMove = cellToLinesMap.get(lastMoveMade)
//   for (let i = 0; i < linesAffectedByLastMove.length; i++) {
//     let line = linesAffectedByLastMove[i]
//     let cellsInLine = lineToCellsMap.get(line)
//     // For added efficiency I could at this point remove the lastMoveMade from cells in line and in the next line look for intersections of length 3.
//     if (intersect(cellsInLine, lastPlayersMoves).length === 4) {
//       return (lastPlayerToMove === 'playerOne') ? 'playerOneWins' : 'playerTwoWins'
//     }
//   }
//   if (gameDrawn(moveList)) {
//     return 'gameOverDraw'
//   }
//   else {
//     return (moveList.length % 2 === 0) ? 'playerOnesTurn' : 'playerTwosTurn'
//   }
// }



// function gameDrawn(moveList) {
//   let nonSkippedTurns = moveList.filter(cellId => cellId !== -1)
//   return (nonSkippedTurns.length === 42)
// }


// export function cellIsUnclaimed(cellId, moveList) {
//     return (!moveList.includes(cellId))
// }
