import React from 'react'
import { Box } from '@mui/material';

export default function PictureRow(props) {
  const { imgUrls, roundedCorners } = props
  const sideLengthPercent = `${Math.floor(100 / imgUrls.length) - 2}%`

  const borderRadius = (roundedCorners) ? '1rem' : 0

  return (
    <Box
      display='flex' 
      flexDirection='row' 
      justifyContent='space-between' 
      pb='2rem'
    >
      {
        imgUrls.map((url, index) => {
          return (
            <SquareImage 
              key={url}
              imgUrl={url}  
              sideLengthPercent={sideLengthPercent}
              borderRadius={borderRadius}
            />
          )
        })
      }
    </Box>
  )
}

function SquareImage(props) {
  const { imgUrl, sideLengthPercent, borderRadius } = props


  const imageStyles = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderRadius: borderRadius
  }  

  return (
    <Box 
      width={sideLengthPercent} 
      paddingTop={sideLengthPercent}
      position='relative'
    >
      <Box 
        position='absolute'
        top='0'
        width='100%'
        padding='4px'
        height='100%'
        boxSizing='border-box'
      >
          <Box 
            sx={imageStyles}
         />
      </Box>
    </Box>
  )
}