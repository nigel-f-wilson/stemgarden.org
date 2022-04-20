import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'


// My Components
import { Chip } from "./Chip";
import { InfoHeaderRow } from "./InfoHeaderRow";
import { RoundedBorder } from "./RoundedBorder";
import { ColumnOfSquaresWithHoles } from "./ColumnOfSquaresWithHoles";



// Logic
// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';


export function GameBoard(props) {
  const { handleColumnClick } = props

  const { moveList, boardData, gameStatus, nextPlayer, gameBoardConstants } = useContext(ConnectFourContext)
  const { columnNumbers, oneSeventh, sixSevenths, boardSideLength } = gameBoardConstants
  

  // console.log(`RENDERING GAME BOARD with BOARD DATA: ${boardData}`);
  console.log(`RENDERING GAME BOARD with MOVE LIST: ${moveList}`);

  const lastMoveMade = moveList.slice(-1)
  console.log(`LAST MOVE MADE: ${lastMoveMade}`);


  
  return (
    <Box id="game_board"
      position='relative'
      height={boardSideLength}
      width={boardSideLength}
      display='flex'
      flexDirection='row'
      alignItems='flex-end'
    >
      <InfoHeaderRow />  
      {columnNumbers.map((columnIndex) => {
        return (
          <Column 
            key={columnIndex}
            index={columnIndex}
            handleColumnClick={handleColumnClick}
          />
        )
      })}
      <RoundedBorder />
    </Box>
  )
}






function Column(props) {
  const { index, handleColumnClick } = props
  const { moveList, boardData, gameStatus, gameIsOver, nextPlayer, gameBoardConstants } = useContext(ConnectFourContext)
  const { columnLetters, oneSeventh } = gameBoardConstants

  const chipColors = []



  let columnLetter = gameIsOver ? '' : columnLetters[index]

  let lastMoveMade = moveList.slice(-1)
  
  return (
    <Box id="column" 
      onClick={() => handleColumnClick(index)}
      position='relative'
      width={oneSeventh}
      height='100%'
      zIndex={9}
      sx={{
        '&:hover #hoverChip': {
          backgroundColor: `connectFour.${nextPlayer}`,
        },
      }}
    >
      <HoverChipArea 
        columnLetter={columnLetter} 
      />
      <ChipContainer 
        chipColors={chipColors} 
        lastMoveMade={lastMoveMade}
      />
      <ColumnOfSquaresWithHoles />
    </Box>
  );
}
// Column.propTypes = {
//     index: PropTypes.number.isRequired,
//     nextPlayer: PropTypes.oneOf(['playerOne', 'playerTwo', 'unclaimed']),
//     handleColumnClick: PropTypes.func,
// }



function HoverChipArea(props) {
  const { columnLetter } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, chipSizeRelativeToSquare } = gameBoardConstants

  return (
    <Box id="hoverChipContainer"
      height={oneSeventh}
      zIndex={8}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box id="hoverChip"
        bgcolor='background'
        width={chipSizeRelativeToSquare}
        height={chipSizeRelativeToSquare}
        borderRadius='50%'
        zIndex={8}
        display='flex'
        justifyContent='center'
        alignItems='flex-end'
        fontSize='2rem'
      >
        <Typography variant='h4' color='connectFour.text'  >
          {columnLetter}  
        </Typography>
      </Box>
    </Box>
  )
}

function ChipContainer(props) {
  const { chipColors, lastMoveMade } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, sixSevenths  } = gameBoardConstants


  const containerRef = React.useRef(null);


    return (
        <Box 
          ref={containerRef}
          width='100%'
          position='absolute'
          top={oneSeventh}
          bgcolor='transparent'
          height={sixSevenths}
          zIndex={8}
          display='flex'
          flexDirection='column-reverse'
        >
          {chipColors.map((color, index) => {
            return (
              <Chip
                key={index}
                id={index}
                containerRef={containerRef}
                color={color}
                lastMoveMade={lastMoveMade}
                gameBoardConstants={gameBoardConstants}
                // transition={false}
              />
            )
          })}
        </Box>
    )
}

// function Chip(props) {
//   const { id, lastMoveMade, color, containerRef, gameBoardConstants } = props
//   const { oneSixth, oneSeventh, chipSizeRelativeToSquare } = gameBoardConstants
  
//   // const iWasLast = (id === lastMoveMade)
//   // console.log(`I was the last move made! ID: ${id}`);
  
//   // let claimed = (color !== "unclaimed")
//   let bgcolor = `connectFour.${color}`
//   return (
//     <Slide 
//       in={true} 
//       // in={iWasLast} 
//       direction="down"
//       container={containerRef.current}
//       // easing="easing.parabolicAcceleration"
//       // easing={{ enter: 'transitions.easing.easeOut', exit: 'transitions.easing.sharp' }}
//     >
//       <Box id="transparentSquareFrame"
//         width='100%'
//         height={oneSixth}
//         display='flex'
//         justifyContent='center'
//         alignItems='center'
//       >
//         <Box id="chip"
//           borderRadius='50%'
//           zIndex='chip'
//           bgcolor={bgcolor}
//           width={chipSizeRelativeToSquare}
//           height={chipSizeRelativeToSquare}
//           children={id}
//           color='#fff'
//         />
//       </Box>
//     </Slide>

//   )
// }
// // Chip.propTypes = {
// //   id: PropTypes.number.isRequired,
// //   color: PropTypes.oneOf(['playerOne', 'playerTwo', 'unclaimed']),
// // }


// function InfoHeaderRow(props) {
//   let { gameStatus, oneSeventh } = props

//   const { gameIsOver } = useContext(ConnectFourContext)


//   let message = ""
//   if (gameIsOver) {
//     message = (gameStatus === "playerOneWins" ? "Red Wins!" : "Yellow Wins!")
//   }
  
//   return (
//     <Box id='infoHeaderRow'
//       sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: oneSeventh,
//         zIndex: 15,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Zoom in={message !== ""} style={{ transitionDelay: '300ms' }} >
//         <Typography color='connectFour.text' variant='h2' align='center' >
//           {message}
//         </Typography>
//       </Zoom>
//     </Box>
//   )
// }