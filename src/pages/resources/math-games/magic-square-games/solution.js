import { getChildren, outcome } from "./magicSquareHelpers";


const listOfPossiblePositions = getListOfPossiblePositions()
function getListOfPossiblePositions() {
  // Returns an array of arrays of strings
  // Layer 1) indices 0 thru 9 correspond to the lengths of the move lists contained there
  // Layer 2) an array containing all valid move lists of that length
  // Layer 3) Move List string representations
  let positionsList = [[""]]
  for (let parentLength = 0; parentLength < 9; parentLength++) {
      let parentPositions = positionsList[parentLength]
      let childPositions = parentPositions.map(parent => getChildren(parent)).flat()
      positionsList.push(childPositions)
  }
  return positionsList
}


// export const outcomeMap = generatePositionToOutcomeMap()
export async function generatePositionToOutcomeMap() {
  let outcomeMap = new Map()
  let list = listOfPossiblePositions
  for (let length = 9; length >= 0; length--) {
    let positions = list[length]
    for (let p = 0; p < positions.length; p++) {
      let ml = positions[p]
      outcomeMap.set(ml, outcome(ml, outcomeMap))
    }
  }
  return outcomeMap
}




