import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

// MY images
import theme from "../../theme";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// MUI Imports
import { IconButton, Paper, Container, Box, Grid, Typography, Card, CardActions, CardMedia, CardContent, Button } from '@mui/material';

export default function BigIconButton(props) {
  const { title, linkTo, imgUrl, icon } = props.data


  return (
      <IconButton
        sx={{
            height: "100%",
            width: '100%'
        }}
        // color={theme.palette.common.white}
      >
        <FontAwesomeIcon
            icon={faCoffee}
            size="2x"
        />
      </IconButton>
      
      
      // <Card raised
      //   // component={RouterLink}
      //   // to="services/tutoring"
      //   // to={linkTo}
      // >
      //   <RouterLink to={linkTo} >
      //     <Typography 
      //       align='center' 
      //       variant="h4"
      //       noWrap
      //       children={title}
      //       padding="0.5rem 0"
      //     />
      //     {icon}
      //     {/* <CardMedia
      //       component="img"
      //       image={imgUrl}
      //       alt={title}
      //     /> */}
      //   </RouterLink>
        
        
        
        
        
      //   {/* <CardActions>
      //     <Button size="small">Share</Button>
      //     <Button size="small">Learn More</Button>
      //   </CardActions> */}
      // </Card>
  )

}
