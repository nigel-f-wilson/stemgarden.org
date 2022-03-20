import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography, Button, Stack } from '@mui/material';
import theme from '../../theme';

export default function MathGameCard(props) {
  const { title, description, linkTo, imgUrl, disabled } = props.data

  const cardStyles = { 
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textDecoration: 'none',
  }

  return (
    <Card raised style={cardStyles}
      sx={{   borderRadius: 1, }}
    >
      <Grid container p={2} spacing={2} >
        <Grid item xs={12} sm={5} >
          <CardMedia
            component="img"
            image={imgUrl}
            alt={title}
            sx={{ borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={7}   display='flex' flexDirection='column' justifyContent='space-between' >
          <Stack p={1} >
            <Typography 
            children={title}
            variant='cardHeader'
            color="common.white"
          />
          <Typography
            children={description}
            variant='body1'

            color="common.white"
          />
          
          </Stack>
          <Button 
            component={RouterLink} 
            to={linkTo}
            disabled={disabled}
            children="Play Now!"
            variant='contained'
          />

        </Grid>
      </Grid>
    </Card>
  )
}
