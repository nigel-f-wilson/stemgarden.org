import React from 'react';

// My Logical Components

// My Components

// MUI  components
import { Paper } from '@mui/material';

import { ClearIcon, RadioButtonUncheckedIcon } from '@mui/icons-material';

// Custom Styling
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     square: {
//         width: '15vh',
//         backgroundColor: theme.palette.common.white,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     iconX: {
//         width: '100%',
//         height: '100%',
//         color: theme.palette.common.black
//     },
//     iconO: {
//         width: '80%',
//         height: '80%',
//         color: theme.palette.common.black
//     },
//     noColor: {
//         backgroundColor: '#ddd',
//     },
//     win: {
//         backgroundColor: '#3B3'
//     },
//     draw: {
//         backgroundColor: '#FF3'
//     },
//     lose: {
//         backgroundColor: '#F44'
//     },
// }));

// export default function Square(props) {
//     // const classes = useStyles();

//     let squareIcon;
//     switch (props.icon) {
//         case 'x':
//             squareIcon = <ClearIcon className={classes.iconX} />
//             break;
//         case 'o':
//             squareIcon = <RadioButtonUncheckedIcon className={classes.iconO} />
//             break;
//         case '_':
//             // squareIcon = <Typography variant='h3' color='textSecondary' >{props.number}</Typography> // 
//             break;
//         default:
//             console.error("Square passed symbol not 'x' 'o' or '_'");
//     }

//     let squareColorClassName;
//     switch (props.color) {
//         case 'claimed':
//             squareColorClassName = `${classes.square} ${classes.claimed} `
//             break;
//         case 'unclaimed':
//             squareColorClassName = `${classes.square} ${classes.unclaimed} `
//             break;
//         case 'noColor':
//             squareColorClassName = `${classes.square} ${classes.noColor} `
//             break;
//         case 'draw':
//             squareColorClassName = `${classes.square} ${classes.draw} `
//             break;
//         case 'win':
//             squareColorClassName = `${classes.square} ${classes.win} `
//             break;
//         case 'lose':
//             squareColorClassName = `${classes.square} ${classes.lose} `
//             break;
//         default:
//             squareColorClassName = `${classes.square} `
//     }

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
// }
