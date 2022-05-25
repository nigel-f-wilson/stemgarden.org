import React from 'react'
import { Box, Grid } from '@mui/material';

import { Paragraph, PageSubtitle } from "../text";

export default function Section(props) {
  const { textItems, imgUrl, imgAlign, contain } = props

  const direction = (imgAlign === "right") ? "row" :'row-reverse'
  const textGridColumns = (imgUrl) ? 8 : 12
  const imageHeight = (imgUrl) ? '100%' : 0
  const marginBottom = (imgUrl) ? '2.0rem' : 0
  const imgCrop = (contain) ? 'contain' : 'cover'

  const imageStyles = {
    width: '100%',
    height: 0,
    paddingBottom: imageHeight,
    // maxHeight: '225px',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: imgCrop,
    borderRadius: '1rem',
  }  
  
  return (
    <Grid container spacing={3} flexDirection={direction} mb={marginBottom} >
      <Grid item xs={textGridColumns} >
        {
          textItems.map((item, index) => {
            const { type, text } = item
            console.assert(type === "paragraph" || type === "heading", "invalid item type in Section")
            if (type === "paragraph") {
              return (
                <Paragraph
                  key={`${textItems[0]}-item-${index}`}
                  text={text}
                />
              )
            }
            else {
              return (
                <PageSubtitle
                  key={`${textItems[0]}-item-${index}`}
                  text={text}
                  gutterBottom
                />
              )
            }
            
          })
        }
      </Grid>
      <Grid item xs={12} sm={4}  >
        <Box width='100%' height='100%' >
          <Box sx={imageStyles} />
        </Box>
      </Grid>
    </Grid>
  )
}
