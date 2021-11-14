import React from 'react';
import { Link as RouterLink } from "react-router-dom";


// MY components
// import Navbar from "../components/Navbar/Navbar";
// import LandingCards from "../components/LandingCards";

// MY images
import leaves from "../images/leaves_cropped_for_mobile.jpg";

// MUI Imports
import { Container, Box, Typography } from '@mui/material';



// LandingPage is responsible for rendering a Navbar and either the Mobile or Desktop version
// depending on screen width. The Navbar contains its own M.vs.D. rendering logic. 
export function LandingPage(props) {
    return (
        <React.Fragment >
            {/* <Navbar /> */}
            <MobileLandingPage />
            <DesktopLandingPage />
        </React.Fragment>
    )
}

function MobileLandingPage(props) {
    return (
        <Box id="MobileLandingPage"
            sx={{ 
                display: { xs: 'block', md: 'none' }, 
                height: 'auto',
                width: '100%',
                minHeight: '100vh',
                backgroundImage: `
                        linear-gradient(90deg, 
                            rgba(58,94,22,0.70) 0%, 
                            rgba(58,94,22,0.80) 100%),
                        url(${leaves})
                    `,
                backgroundPosition: 'center top',
                backgroundRepeat: 'repeat-y',
                backgroundSize: 'cover',
            }}
            
        >
            <Typography  align='center' 
                color='white' 
                // component='h1' variant='h2' 
                sx={{
                    padding: '4.0rem 3.0rem',
                    textShadow: '0.15rem 0.15rem 0.3rem black',
                    fontSize: 'min(2.5rem, 8vw)',
                    fontWeight: 'light',

                }}
            >
                Sowing the seeds of life&#8209;long learning and DIY&#8209;spirit
                with a focus on math, chess, gardening, woodworking, and programming.
            </Typography>
            <Typography
                align='justify'
                color='primary.contrastText'
                // component='h2'
                // variant='body1'
                sx={{
                    padding: '0.0rem 4.0rem',
                    textShadow: '0.12rem 0.12rem 0.20rem black',
                    fontWeight: 'light',

                }}
            >
                The STEM Garden is an off-grid urban teaching garden, rooted in New Orleans.
                The STEM Garden is dedicated to 
                We offer private tutoring and small group lessons, both in the garden and online.
                We help students meet all common core math standards but see learning math as
                so much more than that! We emphacize the playful side of mathematical thinking and
                use many puzzles, games, hands-on projects to engage young imaginations.
            </Typography>
            <Box p={2} >
                {/* <LandingCards /> */}
            </Box>
        </Box>
    )
}


function DesktopLandingPage(props) {
    return (
        <Box
            id="DesktopLandingPage"
            sx={{
                display: { xs: 'none', md: 'block' },
                height: 'auto',
                minHeight: '100vh',
                width: '100%',
                backgroundImage: `
                    linear-gradient(90deg, 
                        rgba(58,94,22,0.70) 0%, 
                        rgba(58,94,22,0.80) 100%),
                    url(${leaves})
                `,
                backgroundPosition: 'center top',
                backgroundRepeat: 'repeat-y',
                backgroundSize: 'cover',
            }}
        >
            <Container
                id="MaxWidthContainer"
                maxWidth='md'
                sx={{
                    height: 'auto',
                    minHeight: '100vh',
                    backgroundImage: `
                        linear-gradient(90deg, 
                            rgba(58,100,22,0.00) 0%, 
                            rgba(58,100,22,0.50) 11%,
                            rgba(58,100,22,0.70) 14%, 
                            rgba(58,100,22,0.70) 86%,
                            rgba(58,100,22,0.50) 89%,
                            rgba(58,100,22,0.00) 100%)
                    `,
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'repeat-y',
                    backgroundSize: 'cover',
                    padding: '0rem 9rem'
                }}
            >
                <Typography
                    id="TitleText"
                    align='center'
                    color='white'
                    variant='h2'
                    sx={{
                        padding: '4.0rem 3.0rem',
                        textShadow: '0.15rem 0.15rem 0.3rem black',
                        fontSize: 'min(2rem, 6vw)',
                        fontWeight: 'light',
                    }}
                >
                    Sowing the seeds of life&#8209;long learning and DIY&#8209;spirit
                    through integrated teaching of math, physics, chess, gardening, woodworking,
                    and computer programming.
                </Typography>

                <Typography
                    align='justify'
                    color='white'
                    // component='h2'
                    variant='h5'
                    sx={{
                        padding: '0.0rem 4.0rem',
                        textShadow: '0.12rem 0.12rem 0.20rem black',
                        fontWeight: 'light',

                    }}
                >
                    The STEM Garden is an off-grid urban teaching garden rooted in New Orleans.
                    We offer private tutoring and small group lessons, both in the garden and online.
                    We help students excell on the SAT and ACT and meet all Common Core math standards,
                    but we see learning math as so much more than that! We emphacize the playful side of
                    mathematical thinking and make use of many puzzles, games, and hands-on projects to engage young imaginations.
                </Typography>

                <Box p={2} >
                    {/* <LandingCards /> */}
                </Box>
            </Container>
        </Box>

    )
}

