import React from 'react';

// React ROUTER
import { Link as RouterLink } from "react-router-dom";


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
    ListItemIcon,
    ListItemText,
    Icon
} from "@mui/material"


// ICONS
import SchoolIcon from '@mui/icons-material/School';
// import EcoIcon from '@mui/icons-material/EcoIcon';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCameraIcon';

export default function Navbar(props) {
    // const classes = useStyles();
    return (
        <Box 
            sx={{ 
                color: 'white',
                backgroundColor: 'primary.main'
            }}
        >
            <MobileNavbar />
            <DesktopNavbar />
        </Box>
    )
}

function MobileNavbar(props) {
    return (
        <Box display={{ xs: 'block', md: 'none' }} >
            <AppBar
                // className={classes.navbar, classes.mobileNavbar}
                position="fixed"
                elevation={3}
                sx={{
                    height: '3.5rem',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: "primary.main", // Matches Logo Background
                    display: 'flex',
                    color: "white",
                }}
            >
                <Container
                    // className={classes.navbarContainer}
                    maxWidth='md'
                    disableGutters
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
                </Container>
            </AppBar>
        </Box>
    );
}


function DesktopNavbar(props) {
    // const classes = useStyles();
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
                    <Box id="DesktopBrand"
                        component={RouterLink} to='/' 
                        sx={{
                            textDecoration: 'none',
                            paddingBottom: '0.7rem',
                            flex: '1 0 10%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            fontSize: '2rem',
                            lineHeight: '2.2rem',
                            color: "white",
                        }}
                    >
                        STEM <br />Garden
                    </Box>

                    <Box 
                    // className={classes.desktopMenuButtons} 
                        sx={{
                            flex: '1 0 50%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}
                    >
                        
                        {/* <TeachDropdown />

                        <GardenDropdown /> */}

                        <ContactPageLink />

                    </Box>
                </Container>
            </AppBar>
        </Box>
    );
}



                // className={classes.dropdownButton}
                sx={{
                    color: "white",
                    textTransform: "none",
                    textAlign: 'center',
                    paddingBottom: '0.5rem',
                }}
                        // className={classes.dropdownSurface}
                            sx={{
                                border: 'solid white 1px',
                                // blurRadius: ,
                                backgroundColor: "primary.main",
                            }}

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



function ContactPageLink() {
    // const classes = useStyles();
    
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
                // className={classes.listItem}
                    // classes={{ root: classes.icon }}
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


