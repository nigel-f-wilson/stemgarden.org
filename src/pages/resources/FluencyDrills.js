import React from 'react'
import { Box, Container, Grid } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, PageSubtitle } from "../../components/text";
import { CopyDriveFileCard } from "../../components/cards";


import { lessonPlanData } from "./lessonPlanData"

import { 
  chess_at_college_track,
  chess_at_college_track_2,
  // chess_at_bric,
  chess_demo_board,
  simul_at_bric,
  handout_rules_of_chess,
  poster_rules_of_chess,
  knight_coloring_quilt,
 } from "../../cloudinaryURLs";


export default function FluencyDrillsPage() {
  return (
    <Background>
      <Container maxWidth="md" sx={{ pb: '3rem' }} >
        <PageHeader  title="Fluency Drills" />
        <Grid container spacing={2} >
          {/* <Grid item xs={6} sm={4} key={cardData.title} >
            <CopyDriveFileCard cardData={cardData}  />
          </Grid> */}
          <FluencyDrillSection 
            title="Early Addition and Subtraction"
            imgUrl=""
            googleDriveCopyUrl=""
          />
          <FluencyDrillSection 
            title="Addition and Subtraction -> generated"
            imgUrl=""
            googleDriveCopyUrl=""
          />
          <FluencyDrillSection 
            title="Multiplication and Factoring"
            imgUrl=""
            googleDriveCopyUrl=""
          />
          <FluencyDrillSection 
            title="Fractions and Division"
            imgUrl=""
            googleDriveCopyUrl=""
          />
          <FluencyDrillSection 
            title="Exponents"
            imgUrl=""
            googleDriveCopyUrl=""
          />
          <FluencyDrillSection 
            title="Non-Decimal Bases"
            imgUrl=""
            googleDriveCopyUrl=""
          />
          
          {
            lessonPlanData.filter(cardData => {
              return true
            }).map(cardData => {
              return (
                <Grid item xs={6} sm={4} key={cardData.title} >
                  <CopyDriveFileCard cardData={cardData}  />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Background>
  )
}

function FluencyDrillSection(props) {
  const { title, imgUrl, googleDriveCopyUrl } = props
  return (
    <Box>
      <PageSubtitle text={title} />
      <ChessTeachingMaterialsSection />
    </Box>
  )
}

function ChessTeachingMaterialsSection() {
  return (
    <Grid container spacing={2} sx={{ pb: '2rem' }} >
      <Grid item xs={12} >
        <PageSubtitle text="Printable Chess Teaching Resources" />
      </Grid>
      {
        chessTeachingMaterials.filter(cardData => {
          return true
        }).map(cardData => {
          return (
            <Grid item xs={6} sm={4} key={cardData.title} >
              <CopyDriveFileCard cardData={cardData}  />
            </Grid>
          )
        })
      }
    </Grid>
  )
}
const chessTeachingMaterials = [
  {
    title: "Rules of Chess Handout",
    imgUrl: handout_rules_of_chess,
    googleDriveCopyUrl: "https://docs.google.com/document/d/1wLQb0hd7IGSsqOCa1ui8eyOQZDYkt3nzcq34qpHNc3I/copy",
  },{
    title: "Rules of Chess Posters",
    imgUrl: poster_rules_of_chess,
    googleDriveCopyUrl: "https://docs.google.com/document/d/10YYxbGb21AhLhDbFLkpnQ_3RsZy4FeuRsMneFkBlYAQ/copy",
  },{
    title: "Knight Coloring Quilt",
    imgUrl: knight_coloring_quilt,
    googleDriveCopyUrl: "https://docs.google.com/document/d/1_0r_X2OVDNPV6SCykmdW-l7zvoimjEScxCIOHbiRbRY/copy",
  },
]