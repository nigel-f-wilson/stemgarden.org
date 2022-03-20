import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// MY COMPONENTS
// import FlexRow from "../../components/FlexRow";
import { aboutList, servicesList } from "./menuItems";
// import ServicesList from "./ServicesList";
import Logo from "./Logo";


import { common } from '@mui/material/colors';
import { Container, 
    Box, 
    Typography,
    AppBar,
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
import theme from '../../theme';

const chess_logo = "https://res.cloudinary.com/nola-stem-garden/image/upload/c_scale,h_150,w_150/v1647198083/stemgarden.org/nsgLogoSnipped_li5iap.png"
// const leaf_logo = "https://www.logoai.com/oss/icons/2022/03/14/fe7fdb2f7fd12c15c1bfd8441e7c346e.svg"

export default function DesktopNavbar(props) {
  const { height } = props

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{ 
        height: height,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <Box 
        width={theme.breakpoints.values.md}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Logo navbarHeight={height} />
        <DesktopBrand />
        <DesktopMenus />
      </Box>
    </AppBar>
  );
}

function DesktopBrand() {
    return (
        <Box  pt={2} >
            <Typography 
              variant='navbarBrand'
              align="left"
              // fontFamily='Permanent Marker'
              fontFamily='Special Elite'
              lineHeight='1.2'
            >
                STEM<br />Garden
            </Typography>
        </Box>
    )
}

function DesktopMenus() {
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
                items={aboutList}
                open={openDropdown === "about"}
                setDropdownState={setDropdownState}
            />
            <DesktopMenu
                name="services"
                items={servicesList}
                open={openDropdown === "services"}
                setDropdownState={setDropdownState}
            />
            <DesktopMenu
                name="resources"
                
            />
            {/* <ContactPageLink />  */}
        </Box>
    )
}

function DesktopMenu(props) {
    let { name, items, open, setDropdownState } = props
    
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
                                <MenuList autoFocusItem={open} >
                                    <List>
                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <ListItem
                                                        key={index}
                                                        button
                                                        component={RouterLink}
                                                        to={{
                                                            pathname: item.pathname,
                                                            state: {
                                                                selectedTab: item.activeTab,
                                                            }
                                                        }}
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

