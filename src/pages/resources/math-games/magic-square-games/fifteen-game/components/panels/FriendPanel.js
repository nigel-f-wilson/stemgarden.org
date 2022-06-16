import React from 'react';
import { Box, Container, Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faQuestion } from '@fortawesome/free-solid-svg-icons';

// My Components
import StatusHeader from './StatusHeader';

import HomeButton from "../buttons/HomeButton";
// import UndoMoveButton from "../buttons/UndoMoveButton";
// import ShowSolutionButton from "../buttons/ShowSolutionButton";



export default function FriendPanel(props) {
  const { moveList, showSolution, toggleShowSolution, handleUndoClick, outcomeMap } = props

  const UndoMoveButton = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleUndoClick()}
        disabled={moveList.length === 0}
        sx={{ flexGrow: 2, mx: 1 }}
      >
        <Box mr={1} display="flex" alignContent="center" >
          <FontAwesomeIcon icon={faRotateLeft} size='lg' />
        </Box>
        Undo
      </Button>
    )
  }
  
  

  return (
    <Container 
      sx={{ 
        width: '100%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box >
        <StatusHeader moveList={moveList} />
        
        
      </Box>
      <Box mb={2} height={40} display='flex' justifyContent='space-between' >
        <UndoMoveButton />
        <HomeButton />
      </Box>
    </Container>
  )
}


//////////////////////////////////////////////////////////

// import React from 'react';

// // import { moveNumber, status } from "../../logic/GameLogic";

// // Custom Components
// import StatusHeader from './Parts/StatusHeader';
// import GameNumber from './Parts/GameNumber';
// import TicTacToeRecord from '../../components/Panels/Parts/TicTacToeRecord'
// import FifteenRecord from '../../components/Panels/Parts/FifteenRecord'

// import NewGameButton from "../Buttons/NewGameButton";
// import UndoButton from "../Buttons/UndoButton";

// // MUI Components
// import {Box, Grid, Container} from '@material-ui/core';

// // Custom Styling
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     panel: {
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     infoArea: {
//         flex: '1 0 50%',
//         display: 'flex',
//         flexDirection: 'column',
//         padding: '1.0rem',
//     },
//     controls: {
//         flex: '1 0 50%',
//     },
// }));

// export default function HumanPanel(props) {
//     const classes = useStyles();
    
//     function gameOver(s = props.status) {
//         return (s === "xWins" || s === "oWins" || s === "draw")
//     }

//     let record = (props.game === "tic-tac-toe") ?
//         <TicTacToeRecord
//             playMode="humanVsHuman"
//             record={props.record}
//             status={props.status}
//         /> :
//         <FifteenRecord
//             playMode="humanVsHuman"
//             record={props.record}
//             status={props.status}
//         />

//     return (
//         <Container maxWidth='sm' className={classes.panel} >
//             <Box className={classes.infoArea} >
//                 <Box display="flex" justifyContent="center" color="textPrimary" >
//                     <GameNumber
//                         status={props.status}
//                         gameNumber={props.gameNumber}
//                     />&nbsp;&nbsp;&nbsp;
//                     <StatusHeader
//                         game={props.game}
//                         moveList={props.moveList}
//                         humanGoesFirst={props.humanGoesFirst}
//                     />
//                 </Box>
//                 {record}
//             </Box>
//             <Grid container spacing={3} className={classes.controls} >
//                 <Grid item xs={6} >
//                     <NewGameButton
//                         gameOver={gameOver()}
//                         handleNewGameClick={props.handleNewGameClick}
//                     />
//                 </Grid>
//                 <Grid item xs={6}  >
//                     <UndoButton
//                         moveList={props.moveList}
//                         gameOver={gameOver()}
//                         handleUndoClick={props.handleUndoClick}
//                     />
//                 </Grid>
//             </Grid>
//         </Container>
//     )
// }

