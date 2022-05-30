import React from 'react'
import { Container, Grid } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, PageSubtitle } from "../../components/text";
import { CopyDriveFileCard } from "../../components/cards";

export default function FluencyDrillsPage() {
  return (
    <Background>
      <Container maxWidth="lg" sx={{ pb: '3rem' }} >
        <PageHeader  title="Fluency Drills" />
          <FluencyDrillSection 
            sectionTitle="Addition and Subtraction"
            cardsData={addition_and_subtraction_card_data}
          />
          <FluencyDrillSection 
            sectionTitle="Double, Triple, Half"
            cardsData={double_triple_half_card_data}
          />
          <FluencyDrillSection 
            sectionTitle="Multiplication & Division"
            cardsData={multiplication_and_division_card_data}
          />
          <FluencyDrillSection 
            sectionTitle="Factor Families"
            cardsData={factor_families_card_data}
          />

          
      </Container>
    </Background>
  )
}

function FluencyDrillSection(props) {
  const { sectionTitle, cardsData } = props
  return (
    <Grid container spacing={2} sx={{ pb: '2rem' }} >
      <Grid item xs={12} >
        <PageSubtitle text={sectionTitle} />
      </Grid>
      {
        cardsData.map(cardData => {
          return (
            <Grid item xs={6} sm={3} key={cardData.cardTitle} >
              <CopyDriveFileCard cardData={cardData}  />
            </Grid>
          )
        })
      }
    </Grid>
  )
}


const addition_and_subtraction_card_data = [
  {
    cardTitle: "Add To Make Ten",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930146/stemgarden.org/fluency_drill_screenshots/add_to_make_ten_or_double_qlt3ze.png",
    googleDriveFileId: "18C7gmcq8rQfTP_-paYZ4TvNkPr3rBNkPvMEOdkPCEHY",
  },{
    cardTitle: "Double Single Digits",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930146/stemgarden.org/fluency_drill_screenshots/add_to_make_ten_or_double_qlt3ze.png",
    googleDriveFileId: "18C7gmcq8rQfTP_-paYZ4TvNkPr3rBNkPvMEOdkPCEHY",
  },{
    cardTitle: "All the Ways to Break Apart",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930146/stemgarden.org/fluency_drill_screenshots/all_the_ways_to_break_apart_hifdsd.png",
    googleDriveFileId: "1JhNia8uePKhvVdw2xrztPdPXoB0apkUNPuRvUIUfPog",
  },{
    cardTitle: "Break Up Big Digits",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930142/stemgarden.org/fluency_drill_screenshots/break_up_big_digits_f6zdqp.png",
    googleDriveFileId: "1k1ExxEnYJiIKE5BEdotBNFOgr1fRQA8pGaq6BGPKErA",
  },{
    cardTitle: "Skip Count",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930145/stemgarden.org/fluency_drill_screenshots/skip_count_d8rvl4.png",
    googleDriveFileId: "1kB1TNm4_XNkP5affc5I_ej0iRSb5A8rVdl03sTtJblw",
  },
]

const double_triple_half_card_data = [
  {
    cardTitle: "Double Double Double",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930142/stemgarden.org/fluency_drill_screenshots/double_double_double_tfisyg.png",
    googleDriveFileId: "1S2HVDsP_20rherVVVl3D_8xktML3CwUTZWFMUbdT3Sw",
  },{
    cardTitle: "What's Half Of ...",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930146/stemgarden.org/fluency_drill_screenshots/add_to_make_ten_or_double_qlt3ze.png",
    googleDriveFileId: "1j9cN5NhoJZc-N_pdTn4YGtK38G1GBTvJ5BYVVraE-Ng",
  },{
    cardTitle: "Multiply and Factor Maps",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930145/stemgarden.org/fluency_drill_screenshots/multiply_and_factor_maps_mzvk40.png",
    googleDriveFileId: "1wbJpxvDMs7xiWq8tTdqfrhGGjtuyebgv8NJRMHFW0rA",
  },
]

const multiplication_and_division_card_data = [
  {
    cardTitle: "Multiplication Facts 2 thru 9",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930143/stemgarden.org/fluency_drill_screenshots/multiplication_facts_two_thru_nine_xmykta.png",
    googleDriveFileId: "1h0n_WB-NmwXHNd6TbBLQTTZablyq5CuGdfNjQ7Z7zE8",
  },
  {
    cardTitle: "Perfect Squares to 16",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930144/stemgarden.org/fluency_drill_screenshots/perfect_squares_thru_sixteen_k5gxre.png",
    googleDriveFileId: "10Qw1ElAKWFjstNaIZ-WjWgjtD6TqJUrF6f5i8tl9oQQ",
  },{
    cardTitle: "Non-Square Multiplication Facts 2 thru 9",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930143/stemgarden.org/fluency_drill_screenshots/non_square_multiplication_facts_two_thru_nine_uxka3h.png",
    googleDriveFileId: "1G1isSUYGQB4ZXK1FR0hViQDGMSLY8D2u9c9VtbY66Aw",
  },{
    cardTitle: "Times Fact Triangle - 9",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653936068/stemgarden.org/fluency_drill_screenshots/times_fact_triangle_nine_wzljrl.png",
    googleDriveFileId: "1ENTKgFuXe6S4fD9k6QDTAapAKP_1mKlAhDXJVuxSIwU",
  },{
    cardTitle: "Times Fact Triangle - 12",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930145/stemgarden.org/fluency_drill_screenshots/times_fact_triangle_twelve_lvoz3f.png",
    googleDriveFileId: "1CwK7xV1uVzaBdV0KCYkt0c5Ws2iEmy38A-2J2PYHX1M",
  },{
    cardTitle: "Extra Practice with 6, 7, and 8",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930142/stemgarden.org/fluency_drill_screenshots/extra_practice_with_six_seven_and_eight_gfvndo.png",
    googleDriveFileId: "1zj2KrrTcBrozxyQIJaLWMMs5b1i0C7IS7NjCJQNP9aQ",
  },{
    cardTitle: "Extra Practice with 9's",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930142/stemgarden.org/fluency_drill_screenshots/extra_practice_with_nines_p5thgu.png",
    googleDriveFileId: "1hz9wqJ7FdFUltchthmUQUxZkyWp35n89LgA2otFXwto",
  },{
    cardTitle: "Division Facts (part A)",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653935314/stemgarden.org/fluency_drill_screenshots/division_facts_a_kzpv0r.png",
    googleDriveFileId: "1J496vdsIeFdmAvpjrfqiYzJXqfjbrar6hWSgwpGjWCQ",
  },{
    cardTitle: "Division Facts (part B)",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653935314/stemgarden.org/fluency_drill_screenshots/division_facts_b_re2mve.png",
    googleDriveFileId: "1eIwD7IGVgSsJS8rDP5ipfT4jA82Tyg_sE5UJVAn8Epk",
  },
]

const factor_families_card_data = [
  {
    cardTitle: "Factor Family 64: The Chessboard Facts",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930143/stemgarden.org/fluency_drill_screenshots/factor_family_64_inxhy0.png",
    googleDriveFileId: "16a0u8O0KT0jei1p2kLI02o79LH5mi9UdEPZZbeK8BPE",
  },{
    cardTitle: "Factor Family 84",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930143/stemgarden.org/fluency_drill_screenshots/factor_family_84_y1cwdv.png",
    googleDriveFileId: "1AKURrUhjx3bgqMC63H7xGnfJTgvwvTHEK-qffhzZS8k",
  },{
    cardTitle: "Factor Family 144",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930143/stemgarden.org/fluency_drill_screenshots/factor_family_144_oyn1nv.png",
    googleDriveFileId: "1yErekciE5mP4lLVKHFoyq2vxMY_0uhonXb0xM1xuI9Q",
  },{
    cardTitle: "Factor Family 360: The Circle Facts",
    imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930144/stemgarden.org/fluency_drill_screenshots/factor_family_360_wgeo0i.png",
    googleDriveFileId: "1Sat4MUYOVZRL3clg8kKKtuYrxD7BqgsCUjQ5Gw84QSE",
  },
]

// const fractions_card_data = [
//   {
//     cardTitle: "Simplify Sixty Fourths",
//     imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653938645/stemgarden.org/fluency_drill_screenshots/simplify_sixty_fourths_wb8weq.png",
//     googleDriveFileId: "1kLlJm79NQlo2EIfDjhxM6FnmTSDgs3_DlmDki7LosnU",
//   },{
//     cardTitle: "",
//     imgUrl: "",
//     googleDriveFileId: "",
//   },{
//     cardTitle: "",
//     imgUrl: "",
//     googleDriveFileId: "",
//   },
// ]

// const prime_factorization_card_data = [
//   {
//     cardTitle: "Prime Number Introduction",
//     imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930145/stemgarden.org/fluency_drill_screenshots/prime_number_warm_up_o7ukdy.png",
//     googleDriveFileId: "1hjE8ZuWtjk0wnp-ckIkKTPoufRCUcNhD666Ng9bPFDE",
//   },
// ]

// const exponents_card_data = [
//   {
//     cardTitle: "Posers of Two thru Five",
//     imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653930144/stemgarden.org/fluency_drill_screenshots/powers_of_two_thru_five_iis3fr.png",
//     googleDriveFileId: "16m2eDeHawDfDe8obFb-OKBFoCto9HMvdr1iucNz3fpU",
//   },
// ]

//  const algebra_card_data = [
//   {
//     cardTitle: "Input-Output Relationships",
//     imgUrl: "https://res.cloudinary.com/nola-stem-garden/image/upload/v1653938861/stemgarden.org/fluency_drill_screenshots/input_output_relationships_vfgolx.png",
//     googleDriveFileId: "16NkJvctRrixTNARIKzlzLL6cUsiC-i-vpHC_JW8h5Kw",
//   },{
//     cardTitle: "",
//     imgUrl: "",
//     googleDriveFileId: "",
//   },{
//     cardTitle: "",
//     imgUrl: "",
//     googleDriveFileId: "",
//   },
// ]
