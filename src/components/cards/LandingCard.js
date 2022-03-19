import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardHeader, CardMedia } from '@mui/material';
import theme from '../../theme';

export default function CustomCard(props) {
  const { title, linkTo, imgUrl } = props.data

  const cardStyles = { 
    backgroundColor: theme.palette.darkGrey,
    color: theme.palette.common.white,
    textDecoration: 'none',
  }
  const linkStyles = { 
    color: theme.palette.common.white,
    textDecoration: 'none',
  }
  return (
    <RouterLink to={linkTo} style={linkStyles} >
      <Card raised style={cardStyles}
        sx={{ 
          position: 'relative', 
          paddingTop: '112%',
          borderRadius: "1rem"
        }}
      >
        <CardHeader 
          title={title}
          titleTypographyProps={{
            align: 'center', 
            variant: 'cardHeader',
            noWrap: true,
          }}
          sx={{ 
              position: 'absolute', 
              top: 0,
              zIndex: 20,
              width: "100%",
              padding: "2% 0 6%",
              backgroundColor: "rgb(32,32,32)",
              background: "linear-gradient(180deg, rgba(32,32,32,1) 80%, rgba(32,32,32,0.5) 93%, rgba(32,32,32,0.1) 100%)",
            }}
        />
        <CardMedia
          component="img"
          image={imgUrl}
          alt={title}
          sx={{ 
            position: 'absolute', 
            bottom: "0%",
            zIndex: 10
          }}
        />
      </Card>
    </RouterLink>
  )
}
