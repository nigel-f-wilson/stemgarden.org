import React, { useState, useEffect, createContext, useContext } from "react";
import { PageLayoutContext } from "../../contexts";

import { 
  getBoardData,
  getGameStatus,
  getLowestUnclaimedCells
 } from "./moveListHelpers";

import { testQuestion } from './questionGenerators/questionGenerator'

export const ConnectFourContext = createContext();
// ConnectFourContext.displayName("Connect Four Context")

export const ConnectFourContextProvider = props => {
  const { maxSquareSideLength } = useContext(PageLayoutContext)

  const gameBoardConstants = {
    oneSixth: '16.665%',
    oneSeventh: '14.287%',
    sixSevenths: '85.714%',
    chipSizeRelativeToSquare: '84%',
    rowNumbers: [0, 1, 2, 3, 4, 5],
    columnNumbers: [0, 1, 2, 3, 4, 5, 6],
    columnLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    boardSideLength: (maxSquareSideLength - 96),
    buttonContainerHeight: 96,
    zIndex: {
      chip: 100,
      board: 200,
    }

  }

  const defaultSettings = {
    opponent: 'human',
    topics: ['combine', 'multiply'],    // One of 'doubleTriple', 'halfThird'
    difficultyMode: "increasing"        // One of "easy" "medium" "hard" "increasing"
  }
  const [settings, setSettings] = useState(defaultSettings)

  // GAME State
  const [moveList, setMoveList] = useState([])  // The ids of the cells claimed in order with -1 indicating skipped turns
  
  const [gameStatus, setGameStatus] = useState('playerOnesTurn')  // Enum ['playerOnesTurn', 'playerTwosTurn', 'playerOneWins', 'playerTwoWins', 'gameOverDraw'
  const [boardData, setBoardData] = useState(new Array(42).fill('unclaimed')) // Indices correspond to cell ids, each value is one of "unclaimed" "playerOne" or "playerTwo"
  const [nextPlayer, setNextPlayer] = useState('playerOne')
  const [gameIsOver, setGameIsOver] = useState(false)
  const [lowestUnclaimedCells, setLowestUnclaimedCells] = useState(gameBoardConstants.columnNumbers)
  const [playerOnesMoves, setPlayerOnesMoves] = useState([])
  const [playerTwosMoves, setPlayerTwosMoves] = useState([])

  const [openModal, setOpenModal] = useState("welcome") // Enum: "none", "question", "settings", "welcome"
  const [activeCell, setActiveCell] = useState(null) 
  const [question, setQuestion] = useState(testQuestion())
  const [headerText, setHeaderText] = useState("")

  const [isBotsTurn, setIsBotsTurn] = useState(false)

  useEffect(() => {
    const updatedGameStatus = getGameStatus(moveList)
    setGameStatus(updatedGameStatus)
    setBoardData(getBoardData(moveList))
    setNextPlayer((moveList.length % 2 === 0) ? "playerOne" : "playerTwo")
    setGameIsOver(['gameOverDraw','playerOneWins', 'playerTwoWins'].includes(updatedGameStatus))

    setPlayerOnesMoves(moveList.filter((cell, turn) => turn % 2 === 0).filter(cell => cell !== -1))
    setPlayerTwosMoves(moveList.filter((cell, turn) => turn % 2 === 1).filter(cell => cell !== -1))

    setLowestUnclaimedCells(getLowestUnclaimedCells(moveList))

    setActiveCell(null) 
    setOpenModal("none")
    setHeaderText("")

  },[moveList])

  const connectFourContext = {
    settings, setSettings,
    moveList, setMoveList,
    
    gameStatus,
    boardData,
    nextPlayer,
    gameIsOver,
    playerOnesMoves,
    playerTwosMoves,

    lowestUnclaimedCells,

    gameBoardConstants,


    openModal, setOpenModal,
    activeCell, setActiveCell,
    question, setQuestion,
    headerText, setHeaderText,

    isBotsTurn, setIsBotsTurn

  }

  return (
    <ConnectFourContext.Provider 
      value={connectFourContext} 
      children={props.children}
    />
  )
};

