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
    List,
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

function Logo(props) {
  const navbarHeight = "3.0rem"
  return (
    <Box
      sx={{
        height: navbarHeight,
        width: navbarHeight,
        backgroundImage: `url(${chess_logo})`,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 95%',
      }}
    />
  );
}

function MobileMenu() {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen((prev) => !prev)
    };
    
    return (
        <Box  >
            <IconButton 
                onClick={() => setOpen(true)}
                aria-controls="simple-menu"
                aria-haspopup="true"
            >
              <FontAwesomeIcon
                  icon={faBars} 
                  color='white'
              />
            </IconButton>   
            <Drawer 
              open={open} 
              anchor='right' 
              role="navigation"
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
            >
              <ServicesList />
            </Drawer>
        </Box>
    );
}
