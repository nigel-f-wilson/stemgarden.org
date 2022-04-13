import { intersect } from "../_helpers/probability";


////////////////////////////////////////////////////////////////
//  Current Game Status: "xWins", "oWins", "draw",  "xNext", or "oNext"
////////////////////////////////////////////////////////////////
export function status(ml) {
  if (xHasWon(ml)) {
    return ("xWins")
  }
  else if (oHasWon(ml)) {
    return ("oWins")
  }
  else if (ml.length === 9) {
    return ("draw")
  }
  else {
    return nextPlayer(ml)  // "xNext" || "oNext"
  }
}
////////////////////////////////////////////////////////////////
// Game Status Helpers: BOOLEAN
////////////////////////////////////////////////////////////////
export function nextPlayer(ml) {
  return (ml.length % 2 === 0) ? "xNext" : "oNext"
}
export function gameOverUsingStatus(status) {
  return (status === "xWins" || status === "oWins" || status === "draw")
}
export function gameOver(ml) {
  return (ml.length === 9 || gameHasBeenWon(ml)) ? true : false
}
function gameHasBeenWon(ml) {
  return (xHasWon(ml) || oHasWon(ml)) ? true : false
}
export function xHasWon(ml) {
  return sumsOfThree(xNumbers(ml)).includes(15)
}
export function oHasWon(ml) {
  return sumsOfThree(oNumbers(ml)).includes(15)
}
export function gameDrawn(ml) {
  return (ml.length === 9 && !gameHasBeenWon(ml))
}
export function moveNumber(ml) {
  return (ml.length + 1)
}

export function complementOf(num) {
  return 15 - num
}

export function numbersInWin(ml) {
  let Xs = xNumbers(ml)
  let Os = oNumbers(ml)
  let winningTrios = trioList.filter(trio =>
    intersect(trio, Xs).length === 3 || intersect(trio, Os).length === 3
  )
  return winningTrios.flat()
}


////////////////////////////////////////////////////////////////
//  Predicted and Final Game Outcomes: "xWins", "oWins", "draw"
////////////////////////////////////////////////////////////////
export function outcome(ml, outcomeMap) {
    return (gameOver(ml)) ? finalOutcome(ml) : predictedOutcome(ml, outcomeMap)
}
function finalOutcome(ml) {
    let outcome = "error"
    if (xHasWon(ml)) {
        outcome = "xWins"
    }
    else if (oHasWon(ml)) {
        outcome = "oWins"
    }
    else if (ml.length === 9) {
        outcome = "draw"
    }
    return outcome
}
function predictedOutcome(ml, outcomeMap) {
    let outcome = "error"
    let childrensOutcomes = getChildren(ml).map(child => outcomeMap.get(child))
    // console.log(`Position: ${position} --> childrensOutcomes: ${childrensOutcomes}`)
    if (nextPlayer(ml) === "xNext") {
        if (childrensOutcomes.includes("xWins")) {
            outcome = "xWins"
        }
        else if (childrensOutcomes.includes("draw")) {
            outcome = "draw"
        }
        else {
            outcome = "oWins"
        }
    }
    else {
        if (childrensOutcomes.includes("oWins")) {
            outcome = "oWins"
        }
        else if (childrensOutcomes.includes("draw")) {
            outcome = "draw"
        }
        else {
            outcome = "xWins"
        }
    }
    return outcome
}

////////////////////////////////////////////////////////////////
// Isolate each players' claimed numbers: ARRAY(NUM)
////////////////////////////////////////////////////////////////
export function xNumbers(ml) {
  return moveListStringToArray(ml).filter((move, turn) => turn % 2 === 0)
}
export function oNumbers(ml) {
  return moveListStringToArray(ml).filter((move, turn) => turn % 2 === 1)
}

export function moveListStringToArray(ml) {               // "123" --> [1,2,3]
  return Array.from(ml).map(e => Number(e))
}

export function getChildren(ml) {
  let children = []
  getValidMoves(ml).forEach(move => children.push(ml + move))
  return children
}

export function getValidMoves(ml) {
  return (gameOver(ml)) ? [] : availableNumbers(ml)
}

export function availableNumbers(ml) {
  let availableNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  for (let i = 0; i < ml.length; i++) {
    availableNumbers.delete(parseInt(ml.charAt(i)))
  }
  return Array.from(availableNumbers)
}
export function getParent(ml) {
    return ml.slice(0, ml.length - 1)
}

////////////////////////////////////////////////////////////////
// Lowest Level Logic
////////////////////////////////////////////////////////////////

function sumsOfThree(moveSet) {
  let sums = []
  if (moveSet.length < 3) {
      return sums
  }
  for (let i = 0; i < moveSet.length - 2; i++) {
      for (let j = i + 1; j < moveSet.length - 1; j++) {
          for (let k = j + 1; k < moveSet.length; k++) {
              let sum = moveSet[i] + moveSet[j] + moveSet[k]
              sums.push(sum)
          }
      }
  }
  return sums
}
export function sumsOfTwo(moveSet) {
    let sums = []
    if (moveSet.length < 2) {
        return sums
    }
    for (let i = 0; i < moveSet.length - 1; i++) {
        for (let j = i + 1; j < moveSet.length; j++) {
            let sum = moveSet[i] + moveSet[j]
            sums.push(sum)
        }
    }
    return sums
}


