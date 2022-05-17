import React, { lazy, Suspense  } from 'react'
import { Route, Routes } from "react-router-dom"

import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


// PAGES
import LandingPage from './pages/LandingPage'

const ContactPage = lazy(() => import('./pages/ContactPage'))

const MathGamesIndexPage = lazy(() => import('./math-games/MathGamesIndexPage'))
const ConnectFourRoot = lazy(() => import('./math-games/connect-four/ConnectFourRoot'))
const FifteenGameRoutes = lazy(() => import('./math-games/magic-square-games/fifteen-game/FifteenGameRoutes'))
const TicTacToeRoutes = lazy(() => import('./math-games/magic-square-games/tic-tac-toe/TicTacToeRoutes'))

const ServicesIndexPage = lazy(() => import('./pages/services/ServicesIndexPage'))
const TutoringPage = lazy(() => import('./pages/services/TutoringPage'))
const EnrichmentPage = lazy(() => import('./pages/services/EnrichmentPage'))
const TeacherTrainingPage = lazy(() => import('./pages/services/TeacherTrainingPage'))
const ChessClubsPage = lazy(() => import('./pages/services/ChessClubsPage'))
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'))
// const {
//   ServicesIndexPage,
//   TutoringPage,
//   EnrichmentPage,
//   TeacherTrainingPage,
//   ChessClubsPage,
//   WebDevelopmentPage
// } = lazy(() => import('./pages'))

const AboutIndexPage = lazy(() => import('./pages/about/_AboutIndexPage'))
const OurStoryPage = lazy(() => import('./pages/about/OurStoryPage'))
const WhatWeGrowPage = lazy(() => import('./pages/about/WhatWeGrowPage'))
const GetInvolvedPage = lazy(() => import('./pages/about/GetInvolvedPage'))

const renderLoader = () => <HalfMalf />


export default function MainRouter() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route path="about" >
          <Route index element={<AboutIndexPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="what-we-grow" element={<WhatWeGrowPage />} />  
          <Route path="get-involved" element={<GetInvolvedPage />} />
          {/* <Route path="buy-our-fruit" element={<BuyOurFruitPage />} /> */}
        </Route>
        
        <Route path="services"  >
          <Route index element={<ServicesIndexPage />} />
          <Route path="tutoring" element={<TutoringPage />} />   {/* <Route path="tutoring" element={<Services activeTab="tutoring" />} /> */}
          <Route path="enrichment" element={<EnrichmentPage />} />
          <Route path="teacher-training" element={<TeacherTrainingPage />} />
          <Route path="web-development" element={<WebDevelopmentPage />} />
          <Route path="chess-clubs" element={<ChessClubsPage />} />
        </Route>
        
        <Route path="resources" >
          <Route path="math-games"  >
          <Route index element={<MathGamesIndexPage />} />
          <Route path="connect-four" element={<ConnectFourRoot />} />
          <Route path="tic-tac-toe/*" element={<TicTacToeRoutes />} />
          <Route path="the-15-game/*" element={<FifteenGameRoutes />} />

          
          {/* <Route path="tic-tac-toe" element={<TicTacToeRoot />} >
            <Route index element={<Welcome />} />
            <Route path="play-with-coach" element={<PlayWithCoach />} />
            <Route path="play-vs-bot" element={<PlayVsBot />} />
          </Route> */}
          {/* <Route path="the-15-game" element={<FifteenGame />} /> */}

        </Route>
        </Route>
        {/* <Route path="garden" element={<Garden />} >
          <Route path="what_we_grow" element={<Services />} />  
          <Route path="our_story" element={<Services />} />
          <Route path="buy_our_fruit" element={<Services />} />
          <Route path="get_involved" element={<ChessClubs />} />
        </Route>
        <Route path="people" element={<People />} >
          <Route path="nigel" element={<Nigel />} />  
          <Route path="olive" element={<Olive />} />
          <Route path="you" element={<Join />} />
        </Route> */}
        <Route path="contact" element={<ContactPage />} />
      </Routes>

    </Suspense>
  );
}