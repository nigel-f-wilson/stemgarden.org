import React from 'react';

import { status, getParent } from "../logic/gameLogic";
import { winningMoves, urgentDefensiveMoves, doubleAttackingMoves } from "../logic/botLogic";


// Custom Components
import StatusHeader from './Parts/StatusHeader';
import CoachsCommentary from "./Parts/CoachsCommentary";

import UndoButton from "../Buttons/UndoButton";
import ShowHintsButton from "../Buttons/ShowHintsButton";

// MUI Components
import { Box, Container, Grid} from '@mui/material';

// Custom Styling
import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     panel: {
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     infoArea: {
//         flex: '1 0 60%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     buttonArea: {
//         flex: '1 0 20%',
//         display: 'flex',
//     },
// }));

export default function CoachPanel(props) {
    const { outcomeMap } = props
    
    // const classes = useStyles();

    
     // TODO 
     // Move this function to the file GetCommentary
     // Remove all JSX from getCommentary and instead of exporting a component export a function that takes the moveList
     // and returns commentary as a string.
    function getCommentLabel(moveList) {  
        
        let currentStatus = status(moveList)
        let currentOutcome = outcomeMap.get(moveList)
        let previousOutcome = outcomeMap.get(getParent(moveList));
        console.log(`getCommentLabel called with moveList: ${moveList}`);
        console.log(`Current Outcome ${currentOutcome}`);
        console.log(`Previous Outcome ${previousOutcome}`);
        
        let label = "error"
        if (moveList.length === 0) {
            label = "newGame"
        }
        else if (currentStatus === "xWins") {
            label = "xWins"
        }
        else if (currentStatus === "oWins") {
            label = "oWins"
        }
        else if (currentStatus === "draw") {
            label = "draw"
        }
        else if (moveList.length === 1) {
            if (moveList.charAt(0) === "5") {
                label = "centerOpening"
            }
            else if (Number(moveList.charAt(0)) % 2 === 0) {
                label = "cornerOpening"
            }
            else {
                label = "edgeOpening"
            }
        } 
        else if (winningMoves(moveList).length > 0 ) {
            label = "immediateWin"
        }
        else if (urgentDefensiveMoves(moveList).length === 1) {         
            label = "urgentDefence"
        }
        else if (urgentDefensiveMoves(moveList).length === 2) {
            label = "losing"
        }
        else if (doubleAttackingMoves(moveList).length > 0) {
            label = "doubleAttack"
        }
        else if (previousOutcome === "draw" && currentOutcome === "draw") { 
            label = "sound"
        }
        else if (previousOutcome === "draw" && (currentOutcome === "xWins" || currentOutcome === "oWins")) {  // in testing
            label = "mistake"
        }
        else if (previousOutcome === "oWins" && (currentOutcome === "xWins" || currentOutcome === "draw")) {   // in testing
            label = "mistake"
        }
        else if (previousOutcome === "xWins" && (currentOutcome === "oWins" || currentOutcome === "draw")) {   // in testing
            label = "mistake"
        }
        else if (currentOutcome === "draw" && (previousOutcome === "xWins" || previousOutcome === "oWins")) {
            label = "missedWin"
        }
        return label
    }
    let commentLabel = getCommentLabel(props.moveList)

    return (
        <Container maxWidth='sm' 
        // className={classes.panel} 
        >
            <Box 
            // className={classes.infoArea} 
            >
                <StatusHeader
                    moveList={props.moveList}
                />
                <CoachsCommentary
                    moveList={props.moveList}
                    commentLabel={commentLabel}
                /> 
            </Box>
            <Grid container spacing={2} 
            // className={classes.buttonArea} 
            >
                <Grid item xs={7}   >
                    <ShowHintsButton 
                        showHints={props.showHints}
                        toggleShowHints={props.toggleShowHints}
                    />
                </Grid>
                <Grid item xs={5}  >
                    <UndoButton
                        gameOver={false}
                        moveList={props.moveList}
                        handleUndoClick={props.handleUndoClick}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
