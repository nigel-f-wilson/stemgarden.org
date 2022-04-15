import React, { lazy, Suspense  } from 'react'

import { Route, Routes } from "react-router-dom"

// PAGES
// import { About, Contact, MathGames, ChessClubs, Services } from "./pages/index"
import LandingPage from './pages/LandingPage'



const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))


const MathGamesPage = lazy(() => import('./math-games/MathGamesPage'))



// const ConnectFour = lazy(() => import('./math-games/connect-four/ConnectFour'))
const ConnectFour = lazy(() => import('./math-games/connect-four/ConnectFourRoutes'))


const FifteenGameRoutes = lazy(() => import('./math-games/magic-square-games/fifteen-game/FifteenGameRoutes'))
const TicTacToeRoutes = lazy(() => import('./math-games/magic-square-games/tic-tac-toe/TicTacToeRoutes'))


const ChessClubsPage = lazy(() => import('./pages/ChessClubsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))

const renderLoader = () => <p>Loading</p>;

export default function MainRouter() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route path="about" element={<AboutPage />} >
          <Route path="what-we-grow" element={<ServicesPage />} />  
          <Route path="our-story" element={<ServicesPage />} />
          <Route path="buy-our-fruit" element={<ServicesPage />} />
          <Route path="get-involved" element={<ChessClubsPage />} />
        </Route>
        
        <Route path="services" element={<ServicesPage />} >
          <Route path="tutoring" element={<ServicesPage />} />   {/* <Route path="tutoring" element={<Services activeTab="tutoring" />} /> */}
          <Route path="enrichment" element={<ServicesPage />} />
          <Route path="teacher-training" element={<ServicesPage />} />
          <Route path="web-development" element={<ServicesPage />} />
          <Route path="chess-clubs" element={<ChessClubsPage />} />
        </Route>
        
        <Route path="math-games"  >
          <Route index element={<MathGamesPage />} />
          <Route path="connect-four" element={<ConnectFour />} />
          <Route path="tic-tac-toe/*" element={<TicTacToeRoutes />} />
          <Route path="the-15-game/*" element={<FifteenGameRoutes />} />

          
          {/* <Route path="tic-tac-toe" element={<TicTacToeRoot />} >
            <Route index element={<Welcome />} />
            <Route path="play-with-coach" element={<PlayWithCoach />} />
            <Route path="play-vs-bot" element={<PlayVsBot />} />
          </Route> */}
          {/* <Route path="the-15-game" element={<FifteenGame />} /> */}

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