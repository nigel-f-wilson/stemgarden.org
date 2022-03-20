import React from 'react';
import { Link as RouterLink } from "react-router-dom";


import {  
    Box, 
    Typography,
    Button,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    List,
    MenuList,
    ListItem,
    ListItemText,
} from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { aboutListData,servicesListData, resourcesListData } from './lists';


export default function DesktopPopper(props) {
  console.log("PROPS: ", JSON.stringify(props,null,4));  
  let { name, listData, open, setDropdownState } = props
    
    const anchorRef = React.useRef(null);

    const handleClickAway = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return; // do nothing, not a click "away"
      }
      setDropdownState("none")
    }
    const handleToggle = () => {
      if (open) { setDropdownState("none") }
      else { setDropdownState(name)}
    }
    const handleClose = () => {
      setDropdownState("none") 
    }
    const capitalize = (string) => {
      return  string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
      <Box border='solid red 1px' >
        <Button
          onClick={handleToggle}
          variant="text"
          sx={{
              color: "white",
              textTransform: "none",
              textAlign: 'center',
              paddingBottom: '0.5rem',
          }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
        >
            <Typography variant="h5" children={capitalize(name)} />
        </Button>

        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role="menu" // What values can this take?
            transition
            disablePortal
        >
          <Grow style={{ transformOrigin: 'center top' }} >
              <Paper
                  onClick={handleClose}
                  elevation={3}
                  sx={{
                      border: 'solid white 1px',
                      backgroundColor: "primary.main",
                  }}
              >
                <ClickAwayListener onClickAway={handleClickAway}>
                    {/* {children} */}
                    <MenuList autoFocusItem={open} >
                        <List>
                            {
                                listData.map((item, index) => {
                                    const { label, linkTo, icon } = item
                                    return (
                                        <ListItem
                                            key={index}
                                            button
                                            component={RouterLink}
                                            to={linkTo}
                                        >
                                            <FontAwesomeIcon 
                                              icon={icon} 
                                              size="2x" 
                                              transform="shrink-2" 
                                              color="common.white"
                                            />
                                            <ListItemText
                                              primary={label}
                                              primaryTypographyProps={{ 
                                                  variant: 'h5', 
                                                  color: "common.white",
                                                  paddingLeft: 1 
                                              }}
                                            />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </MenuList>
                </ClickAwayListener>
              </Paper>
          </Grow>
        </Popper>
      </Box>
    )
}

