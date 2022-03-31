import React, { useState, useRef, useEffect } from 'react';

// My Logical Components
import { status } from "../logic/gameLogic";
import {
    highlightWins,
    getBoardIcons,
    getBoardHints,
} from "../logic/boardLogic";

// My Components
import Square from "./Square";

// MUI  
import { useTheme } from "@mui/system";
import { 
  Box, 
} from '@mui/material';


export default function Board(props) {
    const { moveList, outcomeMap } = props
    const theme = useTheme()

    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const demoRef = useRef();

    useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setWidth(event[0].contentBoxSize[0].inlineSize);
      setHeight(event[0].contentBoxSize[0].blockSize);
    });

    if (demoRef) {
      resizeObserver.observe(demoRef.current);
    }
  }, [demoRef]);
    
  const magicSquareNumbers = [2,9,4,7,5,3,6,1,8]

  let boardIcons = getBoardIcons(moveList)
  let boardColors = getBoardColors(moveList)
  
  let squares = []
  magicSquareNumbers.forEach(num => {
    let newSquare =
      <Square
        key={num}
        number={num}
        icon={boardIcons[num]}
        color={boardColors[num]}
        handleBoardClick={props.handleBoardClick}
      />
    squares.push(newSquare);
  })

  console.log(`SQUARES: ${squares}`);

  return (
    <Box ref={demoRef}
      id='board height container'
      // border='solid green 2px' 
      height={theme.breakpoints.values.sm}
      maxHeight='50%'
      width='100%'
      display='flex'
      justifyContent='center'

    >  
      <Box id='board width container'
        height='100%'
        width={height}
        maxWidth='100%'
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

  function getBoardColors(ml) {
      let gameStatus = status(ml)
      if (gameStatus === "xWins" || gameStatus === "oWins") {
          return highlightWins(ml)
      }
      else if (props.showHints === true) {
          return getBoardHints(ml, outcomeMap)
      }
      else {
          return Array(10).fill('noColor')
      }
  }
}



// function Square(props) {
//     // const classes = useStyles();

//     let squareIcon;
//     switch (props.icon) {
//         case 'x':
//             // squareIcon = <ClearIcon className={classes.iconX} />
//             break;
//         case 'o':
//             // squareIcon = <RadioButtonUncheckedIcon className={classes.iconO} />
//             break;
//         case '_':
//             // squareIcon = <Typography variant='h3' color='textSecondary' >{props.number}</Typography> // 
//             break;
//         default:
//             console.error("Square passed symbol not 'x' 'o' or '_'");
//     }

//     let squareColorClassName;
//     // switch (props.color) {
//     //     case 'claimed':
//     //         squareColorClassName = `${classes.square} ${classes.claimed} `
//     //         break;
//     //     case 'unclaimed':
//     //         squareColorClassName = `${classes.square} ${classes.unclaimed} `
//     //         break;
//     //     case 'noColor':
//     //         squareColorClassName = `${classes.square} ${classes.noColor} `
//     //         break;
//     //     case 'draw':
//     //         squareColorClassName = `${classes.square} ${classes.draw} `
//     //         break;
//     //     case 'win':
//     //         squareColorClassName = `${classes.square} ${classes.win} `
//     //         break;
//     //     case 'lose':
//     //         squareColorClassName = `${classes.square} ${classes.lose} `
//     //         break;
//     //     default:
//     //         squareColorClassName = `${classes.square} `
//     // }

//     return (
//         <Paper
//             number={props.number}
//             elevation={4}
//             className={squareColorClassName}
//             onClick={() => props.handleBoardClick(props.number.toString())}
//         >
//             {squareIcon}
//         </Paper>
//     )
//   }