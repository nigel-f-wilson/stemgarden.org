// X always goes first! X and O will be shorthand for the player who goes First and the player who goes second.
// PlayerOne and PlayerTwo are NOT markers of who goes first or second in any given game!
// In the 15 game, PlayerOne and PlayerTWo are distinguished by dark-blue and light-blue
import { intersect } from "../_helpers/probability";
import { sumsOfTwo, complementOf, gameOver, xNumbers, oNumbers, nextPlayer, availableNumbers } from "./magicSquareHelpers";


//////////////////////////////////////////////////////////////     
//  GET  BOT  MOVE  PROTOCOLS
////////////////////////////////////////////////////////////// 
export function getBotMove(difficultyMode, moveList, humanGoesFirst, outcomeMap) {
  if (difficultyMode === "easy") {
    return easyProtocol(moveList)
  }
  else if (difficultyMode === "medium") {
    return mediumProtocol(moveList)
  }
  else if (difficultyMode === "hard") {
    return hardProtocol(moveList, humanGoesFirst, outcomeMap)
  }
  else {
    console.error(`getBotMove called with invalid difficulty mode!!!`)
  }
}
// In EASY mode: Bot wins immediately if it can and otherwise selects a random move. 
function easyProtocol(ml) {
    if (winningMoves(ml).length > 0) {
        console.log(`BOT FOUND IMMEDIEATELY WINNING MOVES: ${winningMoves(ml)}`)
        return pickRandomFromArray(winningMoves(ml))
    }
    else {
        return pickRandomFromArray(availableNumbers(ml))
    }
}
// In MEDIUM mode, Bot wins immediately if possible.
// In MEDIUM mode, Bot blocks any immediate threats but does not look any further ahead. 
function mediumProtocol(ml) {
    let wins = winningMoves(ml)
    let defensiveMoves = urgentDefensiveMoves(ml)
    if (wins.length > 0) {
        console.log(`BOT FOUND IMMEDIATELY WINNING MOVES: ${wins}`)
        return pickRandomFromArray(wins)
    }
    else if (defensiveMoves.length > 0) {
        console.log(`BOT FOUND URGENT DEFENSIVE MOVES: ${defensiveMoves}`)
        return pickRandomFromArray(defensiveMoves)
    }
    else {
        return pickRandomFromArray(availableNumbers(ml))
    }
}

// In HARD mode Bot looks for forcing moves that will allow it to make double attacks on its next move.
// In HARD mode Bot avoids letting Player make forcing moves that will lead to double attacks.
function hardProtocol(moveList, humanGoesFirst, outcomeMap) {
  let sorted = sortBotMoves(moveList, humanGoesFirst, outcomeMap)
  if (sorted.winningForBot.length > 0) {
    return pickRandomFromArray(sorted.winningForBot)
  }
  else if (sorted.drawing.length > 0) {
    return pickRandomFromArray(sorted.drawing)
  }
  else {
    return pickRandomFromArray(sorted.winningForHuman)    
  }
}

/////////////////////////////////////////////////////////////////////////
// Coach & Bot Logic: Immediately Winning & Urgent Defensive Moves 
/////////////////////////////////////////////////////////////////////////
// For NEXT Player on NEXT turn
export function winningMoves(mls) { 
  if (nextPlayer(mls) === "xNext") {
    let complements = sumsOfTwo(xNumbers(mls)).map(sum => complementOf(sum))
    return intersect(availableNumbers(mls), complements)
  }
  else {
    let complements = sumsOfTwo(oNumbers(mls)).map(sum => complementOf(sum))
    return intersect(availableNumbers(mls), complements)
  }
}
export function urgentDefensiveMoves(mls) {
  if (nextPlayer(mls) === "xNext") {
    let complements = sumsOfTwo(oNumbers(mls)).map(sum => complementOf(sum))
    return intersect(availableNumbers(mls), complements)
  }
  else {
    let complements = sumsOfTwo(xNumbers(mls)).map(sum => complementOf(sum))
    return intersect(availableNumbers(mls), complements)
  }
}
export function doubleAttackingMoves(mls) {
  let doubleAttackingMoves = availableNumbers(mls).filter(num => urgentDefensiveMoves(mls.concat(num)).length > 1)
  return doubleAttackingMoves
}
export function drawingMoves(mls) { // For NEXT Player
  if (nextPlayer(mls) === "xNext") {
    let complements = sumsOfTwo(xNumbers(mls)).map(sum => complementOf(sum))
    return intersect(availableNumbers(mls), complements)
  }
  else {
    let complements = sumsOfTwo(oNumbers(mls)).map(sum => complementOf(sum))
    return intersect(availableNumbers(mls), complements)
  }
}

export function sortBotMoves(ml, humanGoesFirst, outcomeMap) {
  let winningForBot = []
  let drawing = []
  let winningForHuman = []

  let validMoves = getValidMoves(ml)
  validMoves.forEach(move => {
    let newPosition = ml.concat(move)
    let outcome = outcomeMap.get(newPosition)
    if (outcome === "draw") {
      drawing.push(move)
    }
    else if (outcome === "xWins") {
      if (humanGoesFirst) {
        winningForHuman.push(move)
      }
      else {
        winningForBot.push(move)
      }
    }
    else if (outcome === "oWins") {
      if (humanGoesFirst) {
        winningForBot.push(move)
      }
      else {
        winningForHuman.push(move)  
      }
    }
    else {
      console.error(`Error in sortBotMoves`)
    }
  })
  return {
    "winningForBot": winningForBot,
    "drawing": drawing,
    "winningForHuman": winningForHuman,
  }
}

// Randomly selects a move from a list of possible next moves.
function pickRandomFromArray(moveSet) {
  return moveSet[Math.floor(Math.random() * moveSet.length)]
}

////////////////////////////////////////////////////////////////
// Get Children and Helpers:  An Array of move list Strings
////////////////////////////////////////////////////////////////
export function getChildren(mls) {
    let children = []
    getValidMoves(mls).forEach(move => children.push(mls + move))
    // this.validMoves(mls).forEach(move => children.push(mls + move))
    return children
}
function getValidMoves(mls) {
    return (gameOver(mls)) ? [] : availableNumbers(mls)
}

export function getParent(ml) {
    return ml.slice(0, ml.length - 1)
}

////////////////////////////////////////////////////////////////
// Opening Book
////////////////////////////////////////////////////////////////
// function getOpeningBookMove(ml) {
//     console.assert(ml.length < 2)
//     console.log(`BOT MAKING AN OPENING BOOK MOVE.`)

//     if (ml.length === 0) {
//         return pickRandomFromArray(availableNumbers(ml))
//     }
//     else if (ml[0] === 5) {
//         return pickRandomFromArray([2, 4, 6, 8])
//     }
//     else if (ml[0] % 2 === 0) {  // If player took a corner, bot must take center.
//         return [5]
//     }
//     else {
//         return pickRandomFromArray(blockingMoves(ml))
//     }
// }