import React from 'react';

// MY COMPONENTS
import MobileMenuList from "./MobileMenuList";

// MUI imports
import { 
    Box, 
    IconButton,
    Drawer,
    Typography
} from "@mui/material"

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@emotion/react';
import { aboutListData, servicesListData, resourcesListData } from './lists';

export default function MobileMenu() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
      }
      setOpen((prev) => !prev)
  };
  
  return (
    <React.Fragment>
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
        <Box
          width='280px'
          height='100vh'
          padding={1}
          color={theme.palette.common.white}
          backgroundColor={theme.palette.primary.main}
        >
          <Typography variant='h3' children='About' />
          <MobileMenuList 
            listData={aboutListData} 
            handleClose={toggleDrawer} 
          />

          <Typography variant='h3' children='Services' />
          <MobileMenuList 
            listData={servicesListData} 
            handleClose={toggleDrawer} 
          />
          <Typography variant='h3' children='Resources' />
          <MobileMenuList 
            listData={resourcesListData} 
            handleClose={toggleDrawer} 
          />
        </Box>
      </Drawer>
    </React.Fragment>
    );
}
