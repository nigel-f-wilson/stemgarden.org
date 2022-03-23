import React from 'react';

// My Logical Components
import { status } from "../logic/gameLogic";
import {
    highlightWins,
    getBoardIcons,
    getBoardHints,
} from "../logic/boardLogic";

// My Components
// import Square from "./Square";

// MUI  
import { useTheme } from "@mui/system";
import { 
  Box, 
} from '@mui/material';
import { Paper } from '@mui/material';


export default function Board(props) {
    const { moveList, outcomeMap } = props
    const theme = useTheme()
    
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

    return (
        <Box 
          border='solid green 2px' 
          height={theme.breakpoints.values.sm}
          maxHeight='50%'
        >  
          <Box   >
              {squares.slice(0,3)}
          </Box>
          <Box   >
              {squares.slice(3, 6)}
          </Box>
          <Box  >
              {squares.slice(6, 9)}
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



function Square(props) {
    // const classes = useStyles();

    let squareIcon;
    switch (props.icon) {
        case 'x':
            // squareIcon = <ClearIcon className={classes.iconX} />
            break;
        case 'o':
            // squareIcon = <RadioButtonUncheckedIcon className={classes.iconO} />
            break;
        case '_':
            // squareIcon = <Typography variant='h3' color='textSecondary' >{props.number}</Typography> // 
            break;
        default:
            console.error("Square passed symbol not 'x' 'o' or '_'");
    }

    let squareColorClassName;
    // switch (props.color) {
    //     case 'claimed':
    //         squareColorClassName = `${classes.square} ${classes.claimed} `
    //         break;
    //     case 'unclaimed':
    //         squareColorClassName = `${classes.square} ${classes.unclaimed} `
    //         break;
    //     case 'noColor':
    //         squareColorClassName = `${classes.square} ${classes.noColor} `
    //         break;
    //     case 'draw':
    //         squareColorClassName = `${classes.square} ${classes.draw} `
    //         break;
    //     case 'win':
    //         squareColorClassName = `${classes.square} ${classes.win} `
    //         break;
    //     case 'lose':
    //         squareColorClassName = `${classes.square} ${classes.lose} `
    //         break;
    //     default:
    //         squareColorClassName = `${classes.square} `
    // }

    return (
        <Paper
            number={props.number}
            elevation={4}
            className={squareColorClassName}
            onClick={() => props.handleBoardClick(props.number.toString())}
        >
            {squareIcon}
        </Paper>
    )
  }