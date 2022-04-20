import React, { useContext } from 'react'
import { Box, Button } from '@mui/material'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Undo } from "@mui/icons-material";

import { ConnectFourContext } from '../ConnectFourContext';

export function NewGameAndUndoButtons(props) {
  const { openSettingsModal, undoMove } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { buttonContainerHeight } = gameBoardConstants

  return (
    <Box 
      height={buttonContainerHeight}
      width='100%'
      display='flex'
      justifyContent='space-evenly'
      alignItems='flex-end'
    >
      <NewGameButton  openSettingsModal={openSettingsModal} />
      <UndoMoveButton undoMove={undoMove} />
    </Box>
  )
}

function NewGameButton(props) {
  const { openSettingsModal } = props
  return (
    <Button
      variant="contained"
      startIcon={<FontAwesomeIcon icon={faArrowRotateLeft} size='lg' />}
      onClick={() => openSettingsModal()}
      sx={{
        flex: '1 0 25%',
        mx: 2
      }}
    >
      New&nbsp;Game
    </Button>
  )
}

function UndoMoveButton(props) {
  const { undoMove } = props
  return (
    <Button
      variant="contained"
      startIcon={<Undo />}
      onClick={() => undoMove()}
      sx={{
        flex: '1 0 25%',
        mx: 2
      }}
    >
        Undo&nbsp;Move
    </Button>
  )
}


