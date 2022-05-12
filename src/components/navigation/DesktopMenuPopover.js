import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import {  
  Box, 
  Typography,
  Button,
  Menu,
  ListItem,
  ListItemText,
} from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DesktopMenuPopover(props) {
  let { name, listData } = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? `${name} popover` : undefined;

  const capitalize = (string) => {
    return  string[0].toUpperCase() + string.slice(1).toLowerCase()
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment  >
      <Button
        onClick={handleClick}
        variant="text"
        sx={{
          paddingLeft: 8,
          paddingBottom: '0.5rem',
          color: "white",
          textTransform: "none",
          textAlign: 'center',
        }}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        aria-describedby={id}  
      >
          <Typography variant="h5" children={capitalize(name)} />
      </Button>
      
      <Menu
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        MenuListProps={{
          autoFocusItem: open, 
          sx: { 
            backgroundColor: "primary.main",
            color: 'common.white',
            pb: 1,
            boxSizing: 'border-box',
            borderRadius: 1,
            border: 'solid white 1px',
          } 
        }}
      >
        {
          listData.map((item, index) => {
            const { label, linkTo, icon } = item
            return (
              <ListItem
                key={index}
                button
                onClick={handleClose}
                component={RouterLink}
                to={linkTo}
              >
                <Box  width={24} pr={2} display='flex' justifyContent='center' >
                  <FontAwesomeIcon
                    icon={icon} 
                    color='white'
                    size='lg'
                  />
                </Box>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ 
                    variant: 'h5',
                    paddingLeft: 1 
                  }}
                />
              </ListItem>
            )
          })
        }
      </Menu>
    </React.Fragment>
  )
}

