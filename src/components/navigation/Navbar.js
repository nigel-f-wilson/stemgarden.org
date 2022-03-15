import React from 'react';
import { useScreenWidth } from "../../hooks";

// MY COMPONENTS
import DesktopNavbar from "./DesktopNavbar";
import FlexRow from "../../components/FlexRow";
import ServicesList from "./ServicesList";

import { Container, 
    Box, 
    Typography,
    AppBar,
    IconButton,
    Drawer
} from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const chess_logo = "https://res.cloudinary.com/nola-stem-garden/image/upload/c_scale,h_150,w_150/v1647198083/stemgarden.org/nsgLogoSnipped_li5iap.png"
// const leaf_logo = "https://www.logoai.com/oss/icons/2022/03/14/fe7fdb2f7fd12c15c1bfd8441e7c346e.svg"

export default function Navbar(props) {
    const screenWidth = useScreenWidth()
    return (
      <Box 
        sx={{ 
          width: '100vw',
          backgroundColor: 'primary.main'
        }}
      >
        <Container maxWidth='md'  >
          {/* <MobileNavbar /> */}
        {(screenWidth >= 600) ? <DesktopNavbar /> : <MobileNavbar />  }  

        </Container>
      </Box>
    )
}

function MobileNavbar(props) {
  const height = "3.0rem"
  return (
    <AppBar
      elevation={4}
      sx={{
        height: height,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "primary.main", 
        color: "white",
      }}
    >
      <FlexRow justify='space-between' maxWidth='lg' >
        <FlexRow justify='start'  >
        <Logo />
        <Typography sx={{ paddingLeft: '1rem' }} variant='h3'   >
            STEM Garden
        </Typography>
        </FlexRow>
        <MobileMenu />
      </FlexRow>
            
    </AppBar>
  );
}


