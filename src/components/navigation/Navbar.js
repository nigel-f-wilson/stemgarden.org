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

// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import Grid from "@material-ui/core/Grid";
// import Typography from '@material-ui/core/Typography';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';



// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         backgroundColor: theme.palette.primary.main,
//         zIndex: '1200',
//     },
//     paper: {
//         marginRight: theme.spacing(2),
//     },
//     navbar: {
//         width: '100vw',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         backgroundColor: theme.palette.primary.main, // Matches Logo Background
//         display: 'flex',
//         color: theme.palette.common.white,
//     },
//     mobileNavbar: {
//         height: '3.5rem',
//     },
//     desktopNavbar: {
//         height: '7rem',
//     },

//     navbarContainer: {
//         // border: 'solid red 1px',
//         addingRight: '1.0rem',
//         height: '100%',
//         backgroundColor: theme.palette.primary.main, // Matches Logo Background
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         // alignItems: 'flex-end'

//     },

//     mobileLogo: {
//         // border: 'solid red 1px',
//         height: '100%',
//         backgroundImage: `
//             url(${logo})  
//         `,
//         backgroundPosition: 'left bottom',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'auto 95%',
//     },
//     mobileBrand: {
//         height: '100%',

//         // border: 'solid blue 1px',
//         // paddingTop: '0.4rem',
//         // paddingBottom: '0.1rem',
//         flex: '2 0 60%',
//         display: 'flex',
//         // flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     businessType: {
//         lineHeight: '1.0',
//         // paddingBottom: '0.1rem'
//     },
    


//     desktopLogo: {
//         // border: 'solid red 1px',
//         height: '100%',
//         paddingRight: '7rem',
//         backgroundImage: `
//             url(${logo})  
//         `,
//         backgroundPosition: 'center bottom',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'auto 95%',
//     },
//     desktopBrand: {
//         // border: 'solid blue 1px',
//         paddingBottom: '0.7rem',
//         flex: '1 0 10%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//         fontSize: '2rem',
//         lineHeight: '2.2rem',
//         color: theme.palette.common.white,
//         "text-decoration": ''
//     },
//     desktopMenuButtons: {
//         // border: 'solid blue 1px',
//         flex: '1 0 50%',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'flex-end',
        
//     },
//     contactButton: {
//         textTransform: "none",
//     },
    
// }));




export default function Navbar(props) {
    // const classes = useStyles();
    return (
        <Box 
        // className={classes.root}  
        >
            <MobileNavbar />
            <DesktopNavbar />
            {/* <SpacerBox /> */}
        </Box>
    )
}

function MobileNavbar(props) {
    // const classes = useStyles();
    return (
        <Box display={{ xs: 'block', md: 'none' }} >
            <AppBar
                // className={classes.navbar, classes.mobileNavbar}
                position="fixed"
                elevation={3}
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
                // className={classes.navbar, classes.desktopNavbar}
                position="fixed"
                elevation={3}
            >
                <Container
                    // className={classes.navbarContainer}
                    maxWidth='md'
                >
                    <Box 
                    // className={classes.desktopLogo} 

                    />
                    <Box 
                    // className={classes.desktopBrand} 
                    component={RouterLink} to='/' style={{ textDecoration: 'none' }} >
                        STEM <br />Garden
                    </Box>

                    <Box 
                    // className={classes.desktopMenuButtons} 
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









function ContactPageLink() {
    // const classes = useStyles();
    
    return (
        <Box 
        // className={classes.desktopMenuButton}
        >
            <Button
                // className={classes.contactButton}
                variant="text"
            >
                <Typography variant="h5">
                    Contact
                </Typography>

            </Button>
            
        </Box>
    );
}


