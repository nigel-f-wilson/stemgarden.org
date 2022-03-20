import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// MY COMPONENTS

import { common } from '@mui/material/colors';
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


export default function DesktopMenus() {
    const [openDropdown, setOpenDropdown] = React.useState("none")   // "none", "about", "services", "resources"

    const setDropdownState = (newState) => {
      // console.log(`setOpenDropdown state to: ${newState}`)
      setOpenDropdown(newState)
    }
 
    return (
        <Box 
          flexGrow='1'
          pl={24}
          pr={4}
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='flex-end'
        >
            <DesktopMenu
              name="about"
              children={aboutListData}
              open={openDropdown === "about"}
              setDropdownState={setDropdownState}
            />
            <DesktopMenu
              name="services"
              children={servicesListData}
              open={openDropdown === "services"}
              setDropdownState={setDropdownState}
            />
            <DesktopMenu
              name="resources"
              children={resourcesListData}
              open={openDropdown === "resources"}
              setDropdownState={setDropdownState}
            />
            {/* <ContactPageLink />  */}
        </Box>
    )
}

function DesktopMenu(props) {
    let { name, children, open, setDropdownState } = props
    
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
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: 'center top' }}
                    >
                        <Paper
                            onClick={handleClose}
                            elevation={3}
                            sx={{
                                border: 'solid white 1px',
                                backgroundColor: "primary.main",
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClickAway}>
                                {children}
                                <MenuList autoFocusItem={open} >
                                    <List>
                                        {
                                            children.map((item, index) => {
                                                const { label, linkTo, icon } = item
                                                return (
                                                    <ListItem
                                                        key={index}
                                                        button
                                                        component={RouterLink}
                                                        to={linkTo}
                                                    >
                                                        <FontAwesomeIcon 
                                                            icon={item.icon} 
                                                            size="2x" 
                                                            transform="shrink-2" 
                                                            color={common.white}
                                                        />
                                                        <ListItemText
                                                            primary={item.label}
                                                            primaryTypographyProps={{ 
                                                                variant: 'h5', 
                                                                color: common.white
                                                            }}
                                                            sx={{
                                                                paddingLeft: "1rem",
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
                )}
            </Popper>
        </Box>
    )
}

