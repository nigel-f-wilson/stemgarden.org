import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from "@mui/system";

// My Components
import NumberCard from "./NumberCard";

// Magic Square Helpers
import { status, numbersInWin, availableNumbers } from "../../magicSquareHelpers";

export default function FifteenGameBoard(props) {
  const theme = useTheme()
  const { moveList, handleNumberCardClick } = props
  
  const cardNumbers = [1,2,3,4,5,6,7,8,9]
  const cardsWithWinBorder = numbersInWin(moveList)
  const cardsData = cardNumbers.map(num => {
    let claimStatus = getCardClaimStatus(num, moveList)
    let isInWin = cardsWithWinBorder.includes(num)
    
    return ({
      key: num,
      number: num,
      claimStatus: claimStatus,
      isInWin: isInWin
    })
  })
  
  let cards = cardsData.map(card => {
    return (
      <NumberCard
        key={card.number}
        number={card.number}
        claimStatus={card.claimStatus}
        isInWin={card.isInWin}
        borderColor={card.borderColor}
        handleNumberCardClick={handleNumberCardClick}
      />
    )
  })

  return (
    <Box  
      id='board height container'
      height={theme.breakpoints.values.sm}
      maxHeight='50%'
      width='100%'
      maxWidth='100vw'
      display='flex'
      padding='0.5rem'
    >  
      <Box id='board width container'
        height='100%'
        width='100%'
      >  
        <Box id='row1' 
          children={cards.slice(0,5)}
          width='100%'
          height='50%' 
          display='flex'
          justifyContent='center'
        />
        <Box id='row2' 
          children={cards.slice(5,9)}
          height='50%' 
          display='flex'
          justifyContent='center'
          marginX='10%'
        />
      </Box>
    </Box>
  )
}


function getCardClaimStatus(cardNum, moveList) {
  let turn = moveList.indexOf(cardNum)
  if (turn === -1) {
    return 'unclaimed'
  }
  else {
    return (turn % 2 === 0) ? 'playerOne' : 'playerTwo'
  }
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