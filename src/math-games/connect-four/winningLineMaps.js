// A "line" is a set of four cellIds that together form a win.
// There are four 'types' of Line: 'vertical', 'horizontal', 'upslash', 'downslash'
// There are 69 lines and 42 cells. 
// This module exports two high-level constants that map these two types of id to one another.
// 1) lineIdToCellIdsMap  could be renamed "cellsInLine". It takes a lineId 0-63 and gives back the four cells in it.
// 2) cellIdToLineIdsMap  could be renamed "linesThatIncludeCell". It takes a cellId 0-41 and gives back the 3 to 13 lines that cell is part of.

// Low-level Constants
const cellsPerCol = 6;
const cellsPerRow = 7;
const totalCells = cellsPerCol * cellsPerRow;

export const cellsInLine = getCellsInLinesArray()

function getCellsInLinesArray() {
  let array = []
  let currentLineId = 0
  // To go effectively through each line we will actually go through each cell and in the process of doing so go through 
  // each of the four types of line it could be the 'starting' cell of.  
  for (let cell = 0; cell < totalCells; cell++) {
    if (isStartOfVerticalLine(cell)) {
      let line = verticalLineByStartCell(cell)
      array[currentLineId++] = line
    }
    if (isStartOfHorizontalLine(cell)) {
      let line = horizontalLineByStartCell(cell)
      array[currentLineId++] = line
    }
    if (isStartOfUpslashLine(cell)) {
      let line = upslashLineByStartCell(cell)
      array[currentLineId++] = line
    }
    if (isStartOfDownslashLine(cell)) {
      let line = downslashLineByStartCell(cell)
      array[currentLineId++] = line
    }
  }
  console.log(`Mapped each of the ${array.length} LineIds to the set of Cells in it --> `)
  // console.log(array);
  return array
}

export const numberOfLines = cellsInLine.length

export const linesThatContainCell = getCellsContainingLinesArray()

function getCellsContainingLinesArray() {
  let array = new Array(totalCells).fill([])
  for (let lineId = 0; lineId < numberOfLines; lineId++) {
    let cells = cellsInLine[lineId]
    // console.log(`Looking at line ${lineId} found cells in line to be: [${cells}]`);
    cells.forEach(cell => {
      array[cell] = array[cell].concat(lineId)
    })
  }
  console.log(`Mapped each of the ${totalCells} CellIds to the set of all Lines that include it.`)
  // console.log(array)
  return array
}

function verticalLineByStartCell(cellId) {
    let line = [
        cellId + (0 * cellsPerRow),
        cellId + (1 * cellsPerRow),
        cellId + (2 * cellsPerRow),
        cellId + (3 * cellsPerRow)
    ]
    return line
}
function horizontalLineByStartCell(cellId) {
    let line = [
        cellId + 0,
        cellId + 1,
        cellId + 2,
        cellId + 3
    ]
    return line
}
function upslashLineByStartCell(cellId) {
    let line = [
        cellId + (0 * cellsPerRow) + 0,
        cellId + (1 * cellsPerRow) + 1,
        cellId + (2 * cellsPerRow) + 2,
        cellId + (3 * cellsPerRow) + 3
    ]
    return line
}
function downslashLineByStartCell(cellId) {
    let line = [
        cellId - (0 * cellsPerRow) + 0,
        cellId - (1 * cellsPerRow) + 1,
        cellId - (2 * cellsPerRow) + 2,
        cellId - (3 * cellsPerRow) + 3
    ]
    return line
}


function isStartOfVerticalLine(cellId) {
    const rowNumber = getRowByCellId(cellId)
    return (cellsPerCol - rowNumber >= 4)
}
function isEndOfVerticalLine(cellId) {
    const rowNumber = getRowByCellId(cellId)
    return (rowNumber >= 3)
}
function isStartOfHorizontalLine(cellId) {
    // If we are in the 0-th row then the minimum cellsPerCol that should return true is 4
    const colNumber = getColByCellId(cellId)
    return (cellsPerRow - colNumber >= 4)
}
function isStartOfUpslashLine(cellId) {
    // A cell is the Start Of an Upslash Line IFF it is BOTH the "start" of a vertical line AND the "start" of a horizontal line.  
    return (isStartOfVerticalLine(cellId) && isStartOfHorizontalLine(cellId));
}
function isStartOfDownslashLine(cellId) {
    // A cell is the Start Of an Downslash Line IFF it is BOTH the "end" of a vertical line AND the "start" of a horizontal line.  
    return (isEndOfVerticalLine(cellId) && isStartOfHorizontalLine(cellId));
}

// LOWEST LEVEL CELL-ROW-COL HELPERS
function getRowByCellId(id) {
    return (Math.floor(id / cellsPerRow))
}
function getColByCellId(id) {
    return (id % cellsPerRow)
}
// function getCellIdByRowCol(row, col) {
//     return (row * cellsPerRow + col);
// }

