import React from 'react'
import { Route, Routes } from "react-router-dom"

// PAGES
import { Landing, About, Contact, MathGames, ChessClubs, Services } from "./pages/index"

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="about" element={<About />} />

        <Route path="tutoring-services" element={<Services />} />   {/* <Route path="tutoring" element={<Services activeTab="tutoring" />} /> */}

      <Route path="services" element={<Services />} >
        <Route path="tutoring" element={<Services />} />   {/* <Route path="tutoring" element={<Services activeTab="tutoring" />} /> */}
        <Route path="enrichment" element={<Services />} />
        <Route path="professional-development" element={<Services />} />
        <Route path="chess-clubs" element={<ChessClubs />} />
      </Route>
      <Route path="math-games" element={<MathGames />} >
        <Route path="the-15-game" element={<Services />} />
        <Route path="connect-four" element={<Services />} />
      </Route>
      <Route path="contact" element={<Contact />} />

    </Routes>
  );
}