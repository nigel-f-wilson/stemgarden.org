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
      <Grid container spacing={1} >
        <Grid item xs={5} >
          <CardMedia
            component="img"
            image={imgUrl}
            alt={title}
            sx={{  margin: 1, borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={6} m={3} mt={1} display='flex' flexDirection='column' justifyContent='space-between' >
          <Stack>
            <Typography 
            children={title}
            variant='cardHeader'
            color="common.white"
          />
          <Typography
            children={description}
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
