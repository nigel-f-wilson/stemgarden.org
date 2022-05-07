import React from 'react'

export default function TutoringPage(props) {
  return (
    <Background >
      <PageHeader />
      <Offering />
      <Subjects />
      <Pricing />
      <Testimony />
      <Experience />
    </Background>
  )
}

function Background(props) {
  const { narrowScreen } = useContext(PageLayoutContext)
  const padding = narrowScreen ? '0rem' : '2rem 1rem 3rem'
  return (
    <Box 
      width='100%'
      minHeight='100vh'
      bgcolor="darkGrey"
      display='flex'
      flexDirection='column'
      padding={padding}
    >
      <Container maxWidth='sm'>
        { props.children }
      </Container>
    </Box>
  )
}
function PageHeader() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography align="center" variant="pageHeader" >
        Tutoring
      </Typography>
    </Box>
  )
}


function Offering() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Offering & Booking
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I offer one-on-one tutoring and small group lessons in math and physics. I teach in person and over Zoom. In person lessons are offered in New Orleans, Louisiana and Athens, Ohio depending on the time of year. 
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        To schedule a lesson, email nigel@stemgarden.org 
      </Typography>
    </Box>
  )
}

function Subjects() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Subjects
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I teach foundational number sense, algebra, geometry, trigonometry, calculus, statistics, discrete math, and probability. Tutoring generally focuses on book-work. 
        If you are interesten in a more hands-on experience, be sure to check out the STEM Enrichment page. 
        {/* I also love to support homeschooling families and collectives.  */}
      </Typography>
    </Box>
  )
}

function Pricing() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Pricing
      </Typography>
      <Typography  variant="body1" align='justify' color='white' gutterBottom >
        My base reate for one-on-one tutoring is $50 per hour. For tutoring in AP and college level material I charge $65 per hour.
        For groups of 2-8 students, pricing depends on group size and meeting location.
      </Typography>
      <Typography  variant="body1" align='justify' color='white' >
        I believe that high-quality math instruction should be available to any student with the drive to learn. If affordability is an issue, 
        don't hesitate to reach out. I can usually make it work through a combination of group discounts and work-trade agreements. I also coach
        parents on how to best support their kids in math. This can be a more affordable option for families with kids up to high school.
      </Typography>
    </Box>
  )
}

function Testimony() {
  return (
    <Box pb='2rem' display='flex' flexDirection='column' >
      <Typography  variant="pageSubheader" >
        Testimony
      </Typography>

      <Quote
        quote="I wouldn't have made it through my first semester of grad school without Nigel. I had tried several other tutors before him so I can say he has a unique tallent for breaking concepts down clearly. After working with him, I could even explain the concepts to the other people in my study group. He listened to me vent about my professor, then redirected to keep me positive and on track."
        citation="Julie Richelson, MBA Student at UNO"
      />


// LandingPage is responsible for rendering a Navbar and either the Mobile or Desktop version
// depending on screen width. The Navbar contains its own M.vs.D. rendering logic. 
export default function TutoringPage(props) {
  return (
    <React.Fragment >
     Tutoring Page
    </React.Fragment>
  )
}

