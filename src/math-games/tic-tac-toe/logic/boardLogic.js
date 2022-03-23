import {
    status,
    xNumbers,
    oNumbers,
    trioList,
    // outcomeMap,
    intersect,
    availableNumbers,
    moveListStringToArray
} from "./gameLogic";

export function highlightWins(ml) {
    let colors = Array(10).fill('noColor')
    numbersInWin(ml).forEach(num => colors[num] = 'win')
    return colors
}

export function numbersInWin(ml) {
    let Xs = xNumbers(ml)
    let Os = oNumbers(ml)
    let winningTrios = trioList.filter(trio =>
        intersect(trio, Xs).length === 3 || intersect(trio, Os).length === 3
    )
    return winningTrios.flat()
}

export function getBoardIcons(ml) {
    let data = Array(10).fill('_');  // Start with an array representing a board of NINE empty squares
    let mlArray = moveListStringToArray(ml)
    mlArray.forEach((squareId, turn) => {
        data[squareId] = (turn % 2 === 0) ? 'x' : 'o'
    })
    return data;  // this method only deals with current board position, not hypotheticals.  Thus, it wants to use a version of helper squaresClaimedByPlayer() that does not require a moveList be explicitly passed in. 
}



export function getBoardHints(ml, outcomeMap) {
    let colors = Array(10).fill('noColor')
    availableNumbers(ml).forEach(num => {
        let outcome = outcomeMap.get(ml + num.toString())
        colors[num] = getHintColor(outcome, ml)
    })
    console.log(`COLORS: ${colors}`)
    return colors
}

function getHintColor(outcome, ml) {
    let gameStatus = status(ml)
    if (outcome === "draw") {
        return "draw"
    }
    else if (gameStatus === "xNext") {
        return (outcome === "xWins") ? "win" : "lose"
    }
    else if (gameStatus === "oNext") {
        return (outcome === "oWins") ? "win" : "lose"
    }
    else {
        console.error(`Error in Get Hint Color`);
    }
}