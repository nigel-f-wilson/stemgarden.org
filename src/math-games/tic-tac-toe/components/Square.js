import React from 'react';

// My Logical Components

// My Components

// MUI  components
import { Box, Paper, Typography } from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faO, faXmark, faXmarkLarge } from '@fortawesome/free-solid-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons'



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

export default function Square(props) {
  const { icon, color, number, handleBoardClick } = props

    let squareIcon;
    switch (icon) {
        case 'x':
            squareIcon = <FontAwesomeIcon icon={faTimes} size='6x' />
            break;
        case 'o':
            squareIcon = <FontAwesomeIcon icon={faO} />
            break;
        case '_':
            squareIcon = <Typography variant='h3' color='textSecondary' >{props.number}</Typography> // 
            break;
        default:
            console.error("Square passed symbol not 'x' 'o' or '_'");
    }

    // let squareColorClassName;
    // switch (props.color) {
    //   case 'claimed':
    //       squareColorClassName = `${classes.square} ${classes.claimed} `
    //       break;
    //   case 'unclaimed':
    //       squareColorClassName = `${classes.square} ${classes.unclaimed} `
    //       break;
    //   case 'noColor':
    //       squareColorClassName = `${classes.square} ${classes.noColor} `
    //       break;
    //   case 'draw':
    //       squareColorClassName = `${classes.square} ${classes.draw} `
    //       break;
    //   case 'win':
    //       squareColorClassName = `${classes.square} ${classes.win} `
    //       break;
    //   case 'lose':
    //       squareColorClassName = `${classes.square} ${classes.lose} `
    //       break;
    //   default:
    //       squareColorClassName = `${classes.square} `
    // }

    return (
      <Box
        p={1}
        width='33.3%'
        height='100%'
        display='flex'
      >
        <Paper
          // className={squareColorClassName}

          number={number}
          onClick={() => handleBoardClick(number.toString())}
          sx={{
            width: '100%',
            backgroundColor: 'common.white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {squareIcon}
      </Paper>
      </Box>
    )
}
