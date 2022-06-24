import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

// MUI Components
import { Box, Button, Typography } from '@mui/material';



export default function HomeButton() {
  return (
    <Button
      component={RouterLink}
      to='../'
      variant="contained"
      color="primary"
      sx={{ flexGrow: 1 }}
    >
      <Box display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faHouse} size='lg' />
      </Box>
      <Typography children="Home" variant="button" ml={1} display={{ xs: 'none', sm: 'block' }}  />
    </Button>
  )
}