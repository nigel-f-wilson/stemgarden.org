import React, { lazy, Suspense  } from 'react'

import { Route, Routes } from "react-router-dom"

// PAGES
// import { About, Contact, MathGames, ChessClubs, Services } from "./pages/index"
import Landing from './pages/Landing'
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))


const MathGames = lazy(() => import('./pages/MathGames'))
const FifteenGame = lazy(() => import('./math-games/fifteen-game/FifteenGame'))
const ConnectFour = lazy(() => import('./math-games/connect-four/ConnectFour'))


const ChessClubs = lazy(() => import('./pages/ChessClubs'))
const Services = lazy(() => import('./pages/Services'))

const renderLoader = () => <p>Loading</p>;

export default function Router() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="about" element={<About />} >
          <Route path="what_we_grow" element={<Services />} />  
          <Route path="our_story" element={<Services />} />
          <Route path="buy_our_fruit" element={<Services />} />
          <Route path="get_involved" element={<ChessClubs />} />
        </Route>
        <Route path="services" element={<Services />} >
          <Route path="tutoring" element={<Services />} />   {/* <Route path="tutoring" element={<Services activeTab="tutoring" />} /> */}
          <Route path="enrichment" element={<Services />} />
          <Route path="teacher-training" element={<Services />} />
          <Route path="web-development" element={<Services />} />

          <Route path="chess-clubs" element={<ChessClubs />} />
        </Route>
        <Route path="math-games" element={<MathGames />} >
          <Route path="the-15-game" element={<FifteenGame />} />
          <Route path="connect-four" element={<ConnectFour />} />
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
        <Route path="contact" element={<Contact />} />
    </Routes>

      </Suspense>
  );
}