import React from 'react'
import { Box, Card, Typography, Button, Stack } from '@mui/material';



export default function CopyDriveFileCard(props) {
  const { cardTitle, imgUrl, googleDriveFileId } = props.cardData 

  const googleDrivePreviewUrl = `https://docs.google.com/document/d/${googleDriveFileId}/preview`
  const googleDriveCopyUrl = `https://docs.google.com/document/d/${googleDriveFileId}/copy`
  
  const imageStyles = {
    width: '100%',
    paddingTop: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }  
  return (
    <Card raised
      sx={{ height: '100%', borderRadius: 1, 
        bgcolor: 'white'
      }}
    >
      <Stack height='100%' display='flex' justifyContent='space-between' p={1} >
        <Box display='flex' justifyContent='center' alignItems='center' minHeight="4.3rem" >
          <Typography 
            children={cardTitle}
            color="black"
            align='center'
            fontSize='1.5rem'
            lineHeight='1.9rem'
          />
        </Box>
        <Box sx={{ backgroundImage: `url(${imgUrl})`, ...imageStyles}} />
        <Button 
          children="Preview"
          href={googleDrivePreviewUrl}
          variant='contained'
          sx={{ mt: 1 }}
        />
        <Button 
          children="Make a Copy"
          href={googleDriveCopyUrl}
          variant='contained'
          sx={{ mt: 1 }}
        />
      </Stack>
    </Card>
  )
}
