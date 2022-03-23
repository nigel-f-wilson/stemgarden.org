// X always goes first! X and O will be shorthand for the player who goes First and the player who goes second.
// PlayerOne and PlayerTwo are NOT markers of who goes first or second in any given game!
// In the 15 game, PlayerOne and PlayerTWo are distinguished by dark-blue and light-blue
import { generatePositionToOutcomeMap, sumsOfTwo, complementOf, intersect, gameOver, xNumbers, oNumbers, nextPlayer, availableNumbers } from "./GameLogic";
// const outcomeMap = generatePositionToOutcomeMap()


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


export function winningMovesForBot(mls, humanPlaysX) {
    availableNumbers(mls)
    
}

export function sortBotMoves(ml, humanPlaysX, outcomeMap) {
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
            if (humanPlaysX) {
                winningForHuman.push(move)
            }
            else {
                winningForBot.push(move)
            }
        }
        else if (outcome === "oWins") {
            if (humanPlaysX) {
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


////////////////////////////////////////////////////////////////
// Isolate each players' claimed numbers: ARRAY(NUM)
////////////////////////////////////////////////////////////////
// function botsNumbers(ml, humanPlaysX) {  // Always the Human
//     return (humanPlaysX) ? oNumbers(ml) : xNumbers(ml)
// }


// Randomly selects a move from a list of possible next moves.
export function selectMoveRandomly(moveSet) {
    return moveSet[Math.floor(Math.random() * moveSet.length)]
}

/////////////////////////////////////////////////////////////////////////
// Coach & Bot Logic: Immediately Winning & Urgent Defensive Moves 
/////////////////////////////////////////////////////////////////////////




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
// export function availableNumbers(mls) {
//     let availableNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
//     for (let i = 0; i < mls.length; i++) {
//         availableNumbers.delete(parseInt(mls.charAt(i)))
//     }
//     // console.log(`Available Squares: ${availableNumbers}`)
//     return Array.from(availableNumbers)
// }
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
//         return selectMoveRandomly(availableNumbers(ml))
//     }
//     else if (ml[0] === 5) {
//         return selectMoveRandomly([2, 4, 6, 8])
//     }
//     else if (ml[0] % 2 === 0) {  // If player took a corner, bot must take center.
//         return [5]
//     }
//     else {
//         return selectMoveRandomly(blockingMoves(ml))
//     }
// }