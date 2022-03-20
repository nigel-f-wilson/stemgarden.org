import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// MATERIAL-UI COMPONENTS
import { 
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MobileMenuList(props) {
  const { listData, handleClose } = props
    
  return (
    <List >
      {listData.map((item, index) => {
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
      })}
    </List>
  )
}