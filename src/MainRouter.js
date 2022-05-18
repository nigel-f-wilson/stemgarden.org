import React, { lazy, Suspense  } from 'react'
import { Route, Routes } from "react-router-dom"

import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


// PAGES
import LandingPage from './pages/LandingPage'

const ContactPage = lazy(() => import('./pages/ContactPage'))


// ABOUT
const AboutIndexPage = lazy(() => import('./pages/about/AboutIndexPage'))
const OurStoryPage = lazy(() => import('./pages/about/OurStoryPage'))
const WhatWeGrowPage = lazy(() => import('./pages/about/WhatWeGrowPage'))
const GetInvolvedPage = lazy(() => import('./pages/about/GetInvolvedPage'))

// SERVICES
const ServicesIndexPage = lazy(() => import('./pages/services/ServicesIndexPage'))
const TutoringPage = lazy(() => import('./pages/services/TutoringPage'))
const EnrichmentPage = lazy(() => import('./pages/services/EnrichmentPage'))
const TeacherTrainingPage = lazy(() => import('./pages/services/TeacherTrainingPage'))
const ChessClubsPage = lazy(() => import('./pages/services/ChessClubsPage'))
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'))

// RESOURCES
const PuzzlesIndexPage = lazy(() => import('./pages/resources/PuzzlesIndexPage'))
const LessonPlansIndexPage = lazy(() => import('./pages/resources/LessonPlansIndexPage'))
const MathGamesIndexPage = lazy(() => import('./math-games/MathGamesIndexPage'))

// Math Games
const ConnectFourRoot = lazy(() => import('./math-games/connect-four/ConnectFourRoot'))
const FifteenGameRoutes = lazy(() => import('./math-games/magic-square-games/fifteen-game/FifteenGameRoutes'))
const TicTacToeRoutes = lazy(() => import('./math-games/magic-square-games/tic-tac-toe/TicTacToeRoutes'))

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
          </Route>

          <Route path="puzzles"  >
            <Route index element={<PuzzlesIndexPage />} />
          </Route>
          {/* <Route path="puzzles" element={<PuzzlesIndexPage />} /> */}

          <Route path="lesson-plans"  >
            <Route index element={<LessonPlansIndexPage />} />
            <Route path="connect-four" element={<ConnectFourRoot />} />
            <Route path="tic-tac-toe/*" element={<TicTacToeRoutes />} />
            <Route path="the-15-game/*" element={<FifteenGameRoutes />} />
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