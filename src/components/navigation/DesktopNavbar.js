import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// MY COMPONENTS
// import FlexRow from "../../components/FlexRow";
import { aboutList, servicesList } from "./menuItems";
// import ServicesList from "./ServicesList";

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

const chess_logo = "https://res.cloudinary.com/nola-stem-garden/image/upload/c_scale,h_150,w_150/v1647198083/stemgarden.org/nsgLogoSnipped_li5iap.png"
// const leaf_logo = "https://www.logoai.com/oss/icons/2022/03/14/fe7fdb2f7fd12c15c1bfd8441e7c346e.svg"

export default function DesktopNavbar() {
    return (
        <AppBar id="DesktopNavbar"
            position="fixed"
            elevation={3}
            sx={{ height: "6rem" }}
        >
            <Container maxWidth='lg'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <DesktopBrand />
                <DesktopMenus />
            </Container>
        </AppBar>
    );
}
function DesktopBrand() {
    return (
        <Box component={RouterLink} to='/'
            sx={{
                textDecoration: 'none',
                flex: '1 1 45%',
                display: 'flex',
            }}
        >
            <Box id="Logo"
                sx={{
                    height: "6rem",
                    paddingRight: "6rem",
                    backgroundImage: `url(${chess_logo})`,
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto 95%',
                }}
            />
            <Typography id="OrgName"
                sx={{
                    textDecoration: 'none',
                    margin: 'auto 0',
                    fontSize: '2rem',
                    lineHeight: '2.2rem',
                    color: "white",
                }}
            >
                STEM<br />Garden
            </Typography>
        </Box>
    )
}
function DesktopMenus() {
    const [openDropdown, setOpenDropdown] = React.useState("none")   // "none", "about", "teach", "garden", "contact"

    const setDropdownState = (newState) => {
        console.log(`setOpenDropdown state to: ${newState}`)
        setOpenDropdown(newState)
    }
 
    return (
        <Box sx={{
            flex: '1 1 55%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        }}>
          <Container maxWidth='md' id="navbar-container" >
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
            {/* <ContactPageLink />  */}
          </Container>
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
        <Box >
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

