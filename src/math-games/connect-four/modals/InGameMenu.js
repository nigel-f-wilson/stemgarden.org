import React from 'react';
import { Popover, Button, Menu, MenuItem, } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft, faBars  } from '@fortawesome/free-solid-svg-icons';

// Icons
import { Undo } from "@mui/icons-material";

export function InGameMenu(props) {
  let { 
    open, 
    openInGameMenu,
    handleNewGameClick, 
    handleUndoClick } = props
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
    openInGameMenu()
  }
  const closeMenu = () => {
    setAnchorEl(null);
  } 
  const id = open ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
        <Button 
          variant="text"
          aria-describedby={id} 
          onClick={openMenu}
          sx={{
            color: 'common.black',
            bgcolor: 'background',
            position: 'absolute',
            top: '1%',
            right: '1%',
            zIndex: 9999,
            padding: 0,
            minWidth: '10px',
          }}
        >
          <FontAwesomeIcon icon={faBars} size='lg' />
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={closeMenu}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{ 
                vertical: 'top', 
                horizontal: 'right', 
            }}
        >
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
                onClick={closeMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <NewGameButton 
                        handleClick={handleNewGameClick}
                    />
                </MenuItem>
                <MenuItem>
                    <UndoButton 
                        handleClick={handleUndoClick}
                    />
                </MenuItem>
            </Menu>
        </Popover>
    </React.Fragment>
  );
}


function NewGameButton(props) {
    let { handleClick } = props
    return (
        <Button
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faArrowRotateLeft} size='lg' />}
            onClick={() => handleClick()}
            sx={{
                width: '100%'
            }}
        >
            New&nbsp;Game
        </Button>
    )
}

function UndoButton(props) {
    let { handleClick } = props
    return (
        <Button
            variant="outlined"
            startIcon={<Undo />}
            onClick={() => handleClick()}
            sx={{
                width: '100%'
            }}
        >
            Undo&nbsp;Move
        </Button>
    )
}