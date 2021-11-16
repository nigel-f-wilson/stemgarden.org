import React from 'react';

// React ROUTER
import { Link as RouterLink } from "react-router-dom";

import { useScreenWidth } from "../../hooks"

// MY COMPONENTS
// import MobileMenu from "./MobileMenu";
// import TeachDropdown from "./TeachDropdown";
// import GardenDropdown from "./GardenDropdown";
// import SpacerBox from "./SpacerBox";

// Image Imports
import logo from "../../images/nsgLogoSnipped.png";

// MATERIAL-UI COMPONENTS
import { Container, 
    Box, 
    Grid,
    Typography,
    AppBar,
    Button,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuList,
    ListItem,
    // ListItemIcon,
    ListItemText,
    Icon
} from "@mui/material"


// ICONS
// import SchoolIcon from '@mui/icons-material/School';
// import EcoIcon from '@mui/icons-material/EcoIcon';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCameraIcon';

export default function Navbar(props) {
    // const classes = useStyles();
    const screenWidth = useScreenWidth()
    
    return (
        <Box sx={{ 
                width: '100vw',
                backgroundColor: 'primary.main'
            }}
        >
            {(screenWidth >= 600) ? <DesktopNavbar /> : <MobileNavbar />  }  // Same as breakpoint "md"
        </Box>
    )
}

function MobileNavbar(props) {
    return (
        <AppBar
            // className={classes.navbar, classes.mobileNavbar}
            position="fixed"
            elevation={3}
            sx={{
                height: '3.5rem',
                // width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: "primary.main", 
                color: "white",
            }}
        >
            <Grid container>
                <Grid item xs={2} >
                    <Box 
                    // className={classes.mobileLogo} 

                    />
                </Grid>
                <Grid item xs={8} >
                    <Box 
                    // className={classes.mobileBrand} 
                    >
                        <Typography variant='h3' 
                        // className={classes.businessName}
                        >
                            STEM Garden
                        </Typography>
                        {/* <Typography variant='body2' className={classes.businessType} >
                            Tutoring & Enrichment
                        </Typography> */}
                    </Box>
                </Grid>
                <Grid item xs={2} >
                    {/* <MobileMenu /> */}
                </Grid>
            </Grid>
        </AppBar>
    );
}


function DesktopNavbar(props) {
    const height = "6.0rem"
    const [openDropdown, setOpenDropdown] = React.useState("none")   // "none", "teach", "garden", "test"
    const anchorRef = React.useRef(null);

    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // }
    // const handleClose = () => {
    //     setOpen(false);
    // }
    const handleClickAway = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        // setOpen(false);
    }
    const openTeachDropdown = () => {
        setOpenDropdown("teach");
    }
    const openGardenDropdown = () => {
        setOpenDropdown("garden");
    }
    const closeAllDropdowns = () => {
        setOpenDropdown("none");
    }
    
    const setDropdownState = (newState) => {
        setOpenDropdown(newState);
    }

    // return focus to the button when we transitioned from !open -> open
    // const prevOpen = React.useRef(openDropdown);
    // React.useEffect(() => {
    //     if (prevOpen.current === true && openDropdown === "none") {
    //         anchorRef.current.focus();
    //     }
    //     prevOpen.current = openDropdown;
    // }, [openDropdown]);


    return (
        <Box display={{ xs: 'none', md: 'block' }} >
            <AppBar
                position="fixed"
                elevation={3}
                sx={{
                    height: height,
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: "primary.main", 
                }}
            >
                <Container
                    maxWidth='md'
                    sx={{
                        backgroundColor: "primary.main", 
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // alignItems: 'flex-end',
                    }}
                >
                    <Box id="DesktopBrand"
                        component={RouterLink} to='/'
                        sx={{
                            // border: 'solid red 1px',
                            textDecoration: 'none',
                            flex: '1 0 10%',
                            display: 'flex',
                        }}
                    >
                        <Box id="DesktopLogo"
                            sx={{
                                height: height,
                                paddingRight: height,
                                backgroundImage: `
                                url(${logo})  
                            `,
                                backgroundPosition: 'center bottom',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'auto 95%',
                            }}
                        />
                        <Typography id="DesktopOrgName"
                            component={RouterLink} to='/'
                            sx={{
                                textDecoration: 'none',
                                margin: 'auto 0',
                                fontSize: '2rem',
                                lineHeight: '2.2rem',
                                color: "white",
                            }}
                        >
                            STEM <br />Garden
                            {openDropdown}
                        </Typography>
                    </Box>
                    
                    <Box id="dropdownMenu"
                        sx={{
                            // border: 'solid red 1px',
                            flex: '1 0 50%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}
                    >
                        <TeachDropdown 
                            openDropdown={openDropdown}
                            setDropdownState={setDropdownState}
                        />
                        <GardenDropdown
                            open={openDropdown === "garden" }
                            openDropdown={openDropdown}
                            setDropdownState={setDropdownState}
                        />
                        <TestDropdown 
                            open={openDropdown === "test" }
                            openDropdown={openDropdown}
                            setDropdownState={setDropdownState}
                        />
                    </Box>
                </Container>
            </AppBar>
        </Box>
    );
}


function TeachDropdown(props) {
    // const [open, setOpen] = React.useState(false);
    const { openDropdown, setDropdownState } = props
    const open = (openDropdown === "teach")

    const anchorRef = React.useRef(null);

    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // }
    const handleOpen = () => {
        setDropdownState("teach")
    }
    const handleClose = () => {
        setDropdownState("none")
    }
    const handleClickAway = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return; // do nothing
        }
        setDropdownState("none")
    }
    

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <Box id="teachingServicesMenu" 
        >
            <Button
                // className={classes.dropdownButton}
                variant="text"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleOpen}
                sx={{
                    color: "white",
                    textTransform: "none",
                    textAlign: 'center',
                    paddingBottom: '0.5rem',
                }}
            >
                <Typography variant="h5">
                    Teaching<br />Services
                </Typography>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: 'center top' }}
                    >
                        <Paper 
                        // className={classes.dropdownSurface}
                            onClick={handleClose}

                            sx={{
                                border: 'solid white 1px',
                                // blurRadius: ,
                                backgroundColor: "primary.main",
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClickAway}>

                                <MenuList autoFocusItem={open}
                                    id="menu-list-grow"
                                    // onKeyDown={handleListKeyDown}
                                >
                                    <TeachingServicesList
                                        // handleClose={handleClose}
                                    />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}

function GardenDropdown() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    }
    const handleClose = (event) => {
        setOpen(false);
    }
    const handleClickAway = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    }
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open])

    return (
        <Box id="aboutTheGardenMenu" >
            <Button
                // className={classes.dropdownButton}
                sx={{
                    color: "white",
                    textTransform: "none",
                    textAlign: 'center',
                    paddingBottom: '0.5rem',
                }}
                variant="text"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Typography variant="h5">
                    About the<br />Garden
                </Typography>

            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: 'center top' }}
                    >
                        <Paper 
                        // className={classes.dropdownSurface}  
                            sx={{
                                border: 'solid white 0.1px',
                                backgroundColor: "primary.main",
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <GardenNavList
                                        handleClose={handleClose}
                                    />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}


function TeachingServicesList(props) {
    // const handleClose = props.handleClose

    return (
        <React.Fragment>
            <ListItem
                key={'tutoring services'}
                // className={classes.listItem}
                button
                // onClick={handleClose}
                component={RouterLink}
                to={{
                    pathname: '/teach',
                    state: {
                        selectedTab: 'tutoring',
                    }
                }}
            >
                <Icon className={"fas fa-brain fa-2x"}
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Math Tutoring'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>


            <ListItem
                key={'stem enrichment'}
                // className={classes.listItem}
                button
                // onClick={handleClose}
                component={RouterLink}
                to={{
                    pathname: '/teach',
                    state: {
                        selectedTab: 'enrichment',
                    }
                }}
            >
                <Icon className={"fas fa-flask fa-2x"}
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'STEM Enrichment'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'chess lessons'}
                // className={classes.listItem}
                button
                // onClick={handleClose}
                component={RouterLink}
                // to='/teach/chess'
                to={{
                    pathname: '/teach',
                    state: {
                        selectedTab: 'chess',
                    }
                }}
            >
                <Icon className={"fas fa-chess-knight fa-2x"}
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Chess Lessons'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'test prep'}
                // className={classes.listItem}
                button
                // onClick={handleClose}
                component={RouterLink}
                to={{
                    pathname: '/teach',
                    state: {
                        selectedTab: 'test_prep',
                    }
                }}

            >
                <Icon className={"fas fa-graduation-cap fa-2x"}
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Test Prep'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'Math Games'}
                // className={classes.listItem}
                button
                // onClick={handleClose}
                component={RouterLink}
                to='/math_games'
            >
                <Icon className="fas fa-laptop-code fa-2x"
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Math Games'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>



            {/* <ListItem
                key={'math_games'}
                className={classes.listItem}
                button
                onClick={handleClose}
                component={RouterLink}
                // to='/teach/math_games'
                to='/teach'
            >
                <Icon className="fas fa-dice-six fa-2x"
                    classes={{ root: classes.icon }}
                />
                <ListItemText 
                    primary={'Math Games'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem> */}


            <ListItem
                key={'puzzle_collection'}
                // className={classes.listItem}
                button
                // onClick={handleClose}
                component={RouterLink}
                // to='/teach/puzzles'
                to='/teach'
            >
                <Icon className="fas fa-puzzle-piece fa-2x"
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Puzzle Collection'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

        </React.Fragment>
    )
}



function GardenNavList(props) {
    const handleClose = props.handleClose

    return (
        <React.Fragment>
            <ListItem
                key={'our_story'}
                // className={classes.listItem}
                button
                onClick={handleClose}
                component={RouterLink}
                to={{
                    pathname: '/garden',
                    state: {
                        selectedTab: 'our_story',
                    }
                }}
            >
                <Icon className={"fas fa-leaf fa-2x"}
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Our Story'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'whats_growing'}
                // className={classes.listItem}
                button
                onClick={handleClose}
                component={RouterLink}
                to={{
                    pathname: '/garden',
                    state: {
                        selectedTab: 'whats_growing',
                    }
                }}
            >
                <Icon className="fas fa-camera fa-2x"
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={"What's Growing"}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'for_sale'}
                // className={classes.listItem}
                button
                onClick={handleClose}
                component={RouterLink}
                to='/produce_for_sale'
            >
                <Icon className="fas fa-carrot fa-2x"
                    // classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Produce for Sale'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>


        </React.Fragment>
    );
}



function LinkToContactPage() {
    return (
        <Box 
        // className={classes.desktopMenuButton}
        >
            <Button
                variant="text"
                sx={{ textTransform: "none" }}
            >
                <Typography color="white"  variant="h5">
                    Contact
                </Typography>
            </Button>
        </Box>
    );
}


function TestDropdown(props) {
    const { openDropdown, setDropdownState } = props
    const open = (openDropdown === "test")
    
    // const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // }
    // const handleClose = () => {
    //     setOpen(false);
    // }
    // const handleClickAway = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return;
    //     }
    //     setOpen(false);
    // }
    const handleOpen = () => {
        setDropdownState("test")
    }
    const handleClose = () => {
        setDropdownState("none")
    }
    const handleClickAway = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return; // do nothing
        }
        setDropdownState("none")
    }
    const toggleTestDropdown = () => {
        // if prevOpenDropdown
        setDropdownState((prevOpen) => !prevOpen);
        setDropdownState("test")
    }

    // return focus to the button when we transitioned from !open -> open
    // const prevOpen = React.useRef(open);
    // React.useEffect(() => {
    //     if (prevOpen.current === true && open === false) {
    //         anchorRef.current.focus();
    //     }
    //     prevOpen.current = open;
    // }, [open]);

    return (
        <Box id="TestDropdown"  >
            <Button
                variant="text"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleOpen}
                sx={{
                    color: "white",
                    textTransform: "none",
                    textAlign: 'center',
                    paddingBottom: '0.5rem',
                }}
            >
                <Typography variant="h5">
                    Test Menu
                </Typography>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: 'center top' }}
                    >
                        <Paper
                            // className={classes.dropdownSurface}
                            onClick={setDropdownState("none")}

                            sx={{
                                border: 'solid white 1px',
                                // blurRadius: ,
                                backgroundColor: "primary.main",
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClickAway} >

                                <MenuList autoFocusItem={open}
                                    id="menu-list-grow"
                                >
                                    <TeachingServicesList
                                    // handleClose={handleClose}
                                    />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}
