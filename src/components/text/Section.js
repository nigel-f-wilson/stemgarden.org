import React, { useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material';

import theme from "../../theme";
import { AppContext } from "../../AppContext";
import { PageSubtitle } from "../text";

export default function Section(props) {
  const { headerText, paragraphs, imgUrl, imgAlign } = props

  const { colorTheme } = useContext(AppContext)
  const textColor = (colorTheme === "dark") ? "white" : "black"
  const direction = (imgAlign === "right") ? "row" :'row-reverse'

  const imageStyles = {
    width: '100%',
    height: 'auto',
    minHeight: '270px',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '1rem'
  }  
  
  return (
    <Box pb='1rem' display='flex' flexDirection='column' >
      <Grid container spacing={4} flexDirection={direction} mb="1rem" >
        <Grid item xs={12} sm={8} 
          sx={{ 
            mb: 0, 
            [theme.breakpoints.up('sm')]: { m: '0 0 auto' },
          }}
        >
          <PageSubtitle 
            text={headerText}
            align="left"
          />
          {
            paragraphs.map((paragraph, index) => {
              return (
                <Typography 
                  key={`${headerText}-paragraph-${index}`}
                  color={textColor} 
                  children={paragraph}
                  variant="body1" 
                  align='justify' 
                  gutterBottom
                />
              )
            })
          }
        </Grid>
        <Grid item xs={12} sm={4}  >
          <Box sx={imageStyles} />
        </Grid>
      </Grid>
    </Box>
  )
}
