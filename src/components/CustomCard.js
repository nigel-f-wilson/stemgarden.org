import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

import { useScreenWidth } from "../hooks"
// MY images
import leafy_background from "../images/leafy_background.jpg";

// MUI Imports
import { Paper, Container, Box, Grid, Typography, Card, CardActions, CardMedia, CardContent, Button } from '@mui/material';
import theme from '../theme';


export default function CustomCard(props) {
  const { title, linkTo, imgUrl } = props.data

  const cardStyles = { 
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    textDecoration: 'none',
  }
  const linkStyles = { 
    // position: 'absolute',
    color: theme.palette.common.white,
    textDecoration: 'none',
  }

  console.log(`LINK: `, linkTo);
  return (
      <Card raised style={cardStyles}
        // component={RouterLink}
        // to="services/tutoring"
        // to={linkTo}
        sx={{ position: 'static' }}
      >
        <RouterLink to={linkTo} style={linkStyles} >
          <Typography 
            align='center' 
            variant="h4"
            noWrap
            children={title}
            padding="0.5rem 0"
          />
          <CardMedia
            component="img"
            image={imgUrl}
            alt={title}
          />
        </RouterLink>
        
        
        
        
        
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
  )

}
