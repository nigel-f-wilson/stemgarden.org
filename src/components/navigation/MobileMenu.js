import React from 'react';

// MY COMPONENTS
// import { aboutList, servicesList } from "./menuItems";
import ServicesList from "./ServicesList";

// MUI imports
import { 
    Box, 
    IconButton,
    Drawer
} from "@mui/material"

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function MobileMenu() {
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
