import React from 'react'
import { Box, Container, Grid, Card, Typography, Button, Stack } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader } from "../../components/text";

import { lessonPlanData } from "./lessonPlanData"

export default function LessonPlansPage() {
  return (
    <Background>
      <Container maxWidth="md" sx={{ pb: '3rem' }} >
        <PageHeader 
          title="Lesson Plans"
          subtitle="Find math in everyday objects! Each of these lessons can be tied into multiple mathematical practices and concepts. They are readily adaptable for students at many levels of experience."
        />
        <Grid container spacing={2} >
          {
            lessonPlanData.filter(cardData => {
              return true
            }).map(cardData => {
              return (
                <Grid item xs={6} sm={4} key={cardData.title} >
                  <LessonPlanCard cardData={cardData}  />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Background>
  )
}

function LessonPlanCard(props) {
  const { title, imgUrl, googleDriveCopyUrl } = props.cardData 
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
            children={title}
            color="black"
            align='center'
            fontSize='1.5rem'
            lineHeight='1.9rem'
          />
        </Box>
        <Box sx={{ backgroundImage: `url(${imgUrl})`, ...imageStyles}} />
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
