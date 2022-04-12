import React, { useState, useRef, useEffect } from 'react';

import { status, 
  moveListStringToArray, 
  numbersInWin, 
  availableNumbers, 
} from "../../magic-square-games.js/magicSquareGameSolution";

// My Components
import Square from "./Square";

// MUI  
import { useTheme } from "@mui/system"
import { Box } from '@mui/material'

export default function Board(props) {
  const { moveList, outcomeMap, showSolution, handleSquareClick } = props
  const theme = useTheme()

  const [height, setHeight] = useState(100);

  const boardRef = useRef()
  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setHeight(event[0].contentBoxSize[0].blockSize)
    })
    if (boardRef) {
      resizeObserver.observe(boardRef.current)
    }
    return () => {
      resizeObserver.disconnect()
    }
  }, [boardRef])
    

  const icons = getIcons(moveList)
  const colors = getColors(moveList, showSolution, outcomeMap)
  const magicSquareNumbers = [2,9,4,7,5,3,6,1,8]

  let squares = []
  magicSquareNumbers.forEach(num => {
    let newSquare =
      <Square
        key={num}
        number={num}
        icon={icons[num]}
        color={colors[num]}
        handleSquareClick={handleSquareClick}
      />
    squares.push(newSquare);
  })

  return (
    <Box ref={boardRef}
      id='board height container'
      height={theme.breakpoints.values.sm}
      maxHeight='50%'
      width='100%'
      display='flex'
      justifyContent='center'
      my={1}
    >  
      <Box id='board width container'
        height='100%'
        width={height}
        minWidth={height}
        // maxWidth='100%'
      >  
        <Box id='row1' 
          children={squares.slice(0,3)}
          width='100%'
          height='33.3%' 
          display='flex'
        />
        <Box id='row2' 
          children={squares.slice(3,6)}
          height='33%' 
          display='flex'
        />
        <Box id='row3' 
          children={squares.slice(6,9)}
          height='33%' 
          display='flex'
        />
      </Box>
    </Box>
  )
}

function getColors(ml, showSolution, outcomeMap) {
  let gameStatus = status(ml)
  if (gameStatus === "xWins" || gameStatus === "oWins") {
    return highlightWins(ml)
  }
  else if (showSolution === true) {
    return getBoardHints(ml, outcomeMap)
  }
  else {
    return Array(10).fill('noColor')
  }
}

function getIcons(ml) {
  let data = Array(10).fill('_');  // Start with an array representing a board of NINE empty squares
  let mlArray = moveListStringToArray(ml)
  mlArray.forEach((squareId, turn) => {
      data[squareId] = (turn % 2 === 0) ? 'x' : 'o'
  })
  return data;  
}

function highlightWins(ml) {
  let colors = Array(10).fill('noColor')
  numbersInWin(ml).forEach(num => colors[num] = 'win')
  return colors
}

function getBoardHints(ml, outcomeMap) {
  let colors = Array(10).fill('noColor')
  availableNumbers(ml).forEach(num => {
    let outcome = outcomeMap.get(ml + num.toString())
    colors[num] = getHintColor(outcome, ml)
  })
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