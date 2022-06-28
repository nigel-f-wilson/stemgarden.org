import React from 'react'

// CUSTOM COMPONENTS
import TopLandingSection from "./TopLandingSection";
import OurStorySection from "./OurStorySection";
import WhatWeGrowSection from "./WhatWeGrowSection";
import { Footer, ScrollToTopButton } from "../../components/navigation";

export default function LandingPage() {
  return (
    <React.Fragment>
      <TopLandingSection />
      <OurStorySection />
      <WhatWeGrowSection />
      <ScrollToTopButton />
      <Footer />
    </React.Fragment>
  )
}

//   {
//     title: "Math Tutoring",
//     linkTo: "services/tutoring",
//     imgUrl: practicing_math_facts

//   },
//   {
//     title: "Math Games",
//     linkTo: "resources/math-games",
//     // imgUrl: playing_the_15_game,
//     imgUrl: girls_playing_connect_four,
//   },
//   {
//     title: "Chess Clubs",
//     linkTo: "services/tutoring",
//     imgUrl: chess_at_college_track
//   },
//   {
//     title: "STEM Enrichment",
//     linkTo: "services/tutoring",
//     imgUrl: bike_gear_ratio_tutoring,
//   },
//   {
//     title: "What We Grow",
//     linkTo: "about",
//     imgUrl: banana_papaya_turmeric_flower,
//   },
//   {
//     title: "Study Materials",
//     linkTo: "/services/tutoring",
//     imgUrl: guitar_fret_measuring,
//   },
//   {
//     title: "Our Story",
//     linkTo: "/garden/story",
//     imgUrl: mushroom_background,
//   },
//   {
//     title: "Buy Our Fruit",
//     linkTo: "/garden/for_sale",
//     imgUrl: banana_papaya_pile,
//   },
//   {
//     title: "Get Involved",
//     linkTo: "/garden/get_involved",
//     imgUrl: profile_with_hoe,
//   },
// ]