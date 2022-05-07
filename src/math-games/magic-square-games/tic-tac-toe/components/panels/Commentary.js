import React from 'react';

import { nextPlayer, status, getParent } from "../../../magicSquareHelpers";
import { winningMoves, urgentDefensiveMoves, doubleAttackingMoves } from "../../../getBotMove";


import { Box, Typography } from '@mui/material';

export default function Commentary(props) {
  const { moveList, outcomeMap } = props

  let next = (nextPlayer(moveList) === "xNext") ? "X" : "O"
  let prev = (nextPlayer(moveList) === "xNext") ? "O" : "X"

  let commentLabel = getCommentLabel(moveList)

  return (
    <Box sx={{ 
        color: 'common.white',
        width: '100%',
    }}>
      <Typography align='justify' component='p' variant='body1' gutterBottom>
        {getCommentary(commentLabel, next)}
      </Typography>
    </Box>
  )

  function getCommentLabel(moveList) {  
    let currentStatus = status(moveList)
    let currentOutcome = outcomeMap.get(moveList)
    let previousOutcome = outcomeMap.get(getParent(moveList));
    
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

  function getCommentary(commentLabel, next) {
    let comment = `Error in get commentary.  Called with commentLabel: ${commentLabel}`
    switch (commentLabel) {
        case "newGame":
            comment = `New Game. X always goes first. It may look like X has 9 different 
            options but, considering symmetry, there are really only 3: Center, Edge, or Corner. 
            Do any of them set X up to force a win? Is there any move for X that would be a 'mistake'?`
            break;
        case "centerOpening":
            comment = `The Center Opening is the most popular. I think this is because there are more three-in-a-rows that
            include the center square than the edges and corners. Though X is still on track for a draw, the center opening
            is the easiest for O to defend against because, considering symmetry, O really only has two options, edge or corner.
            One is good and keeps O on track for a draw. The other is bad and opens the door for X to force a win.`
            break;
        case "cornerOpening":
            comment = `The Corner Opening can lead X to a winning double attack if O makes a mistake on their first move. 
            O has 5 non-symetrical options in this position, however, the only sound move that O has in this position is also the most
            intuitive one. Proove this to yourself by going through O's 4 losing options and finding a plan that guarantees X 
            a victory in each one.`
            break;
        case "edgeOpening":
            comment = `The Edge Opening is my personal favorite. It is the least commonly played and is the most complex to analyze.
            There are many tricks and traps in this opening that both players can take advantage of!
            O has five non-symmetrical options. Don't settle for just finding one move that lets O guarantee a draw,
            dig into each of the five options and find the ones that maximize the chances X will make a mistake!`
            break;
        case "immediateWin":
            comment = `${next} goes next and has the ability to win immediately! That means ${prev} must have made a mistake 
            earlier in the game. Go back and see if you can find the mistake and choose the better option instead.`
            break;
        case "urgentDefence":
            comment = `${next} goes next and has an urgent defensive move they must make in order to not lose on the next turn!`
            break;
        case "losing":
            comment = `${next} goes next, has no immediate way to win and ${prev} has more than one threat, meaning ${next} cannot 
            defend against them all. Defeat is on its way no matter what ${next} does now. This move is not the mistake though! 
            Go back and find the mistake that allowed ${prev} to create this double attack.`
            break;
        case "doubleAttack":
            comment = `Though ${next} cannot win this turn, they can create a double attack, setting up for a
            guaranteed win on their next turn no matter what ${prev} does. Don't settle for a move that only creates 
            one threat, you need to make two simultaneous threats in order to win.`
            break;
        case "mistake":
            comment = `A mistake! Before that last move ${prev} was on track for a draw. That last move  
            has given ${next} the opportunity to force a win. ${next} cannot create a double attack quite yet, so they will
            have to look further into the future to see what forced continuations can lead them to making a double attack on
            their next move. Don't settle for a draw anymore! Make the most of your opponent's mistake.`
            break;
        case "missedWin":
            comment = `${next} made the first mistake and gave ${prev} a chance to force a win, but ${prev} replied with
            another mistake and now they have missed missed that chance to win! Look for forcing moves that lead to double
            attacks and you will avoid mistakes like the one ${prev} just made.`
            break;
        case "sound":
            comment = `Good. The last move by ${prev} was "sound" meaning it has not hurt their worst case outcome: previously
            on track for a draw, still on track for a draw.`
            break;
        case "xWins":
            comment = `X has won the game! That means O must have made a mistake along the way.
            Go back and see if you can find it on your own. If not, check the hints. In starting position, all 9 squares are Yellow, 
            indicating that no matter which one X chooses they will be on track for a draw. When Red squares appear in the hints these 
            indicate moves that would be mistakes, moves that would grant the opponent a chance to win.  When Green squares appear in 
            the hints these indicate moves that either win immediately or force a win in the next few moves.
            Choosing a red square always a "mistake", but so is choosing a yellow square when you had a green option!`
            break;
        case "oWins":
            comment = `O has won the game! That means X must have made a mistake along the way.
            Go back and see if you can find it on your own. If not, check the hints. In starting position, all 9 squares are Yellow, 
            indicating that no matter which one X chooses they will be on track for a draw. When Red squares appear in the hints these 
            indicate moves that would be mistakes, moves that would grant the opponent a chance to win.  When Green squares appear in 
            the hints these indicate moves that either win immediately or force a win in the next few moves.
            Choosing a red square always a "mistake", but so is choosing a yellow square when you had a green option!`
            break;
        case "draw":
            comment = `The game has ended a draw. What did you expect? `
            break;
        default:
            break;
      }
      return comment

  }
}