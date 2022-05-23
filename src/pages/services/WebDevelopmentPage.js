import React from 'react'
import { 
  // Box, 
  Container, 
  // Grid 
} from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, Section } from '../../components/text';

import { code_editor_screenshot } from "../../cloudinaryURLs";

export default function WebDevelopmentPage(props) {
  return (
    <Background >
      <Container maxWidth='md' >
        <PageHeader 
          title="Web Development"
        />
        <HowIGotIntoProgrammingSection />
        <OfferingSection />
        {/* <FreelanceProjectsSection /> */}
        <TechnologiesSection />
        {/* <HireMeSection /> */}
        {/* <ExperienceSection /> */}
      </Container>
    </Background>
  )
}

function HowIGotIntoProgrammingSection() {
  const headerText = "How I Got Into Programming"
  const par1 = "The guy who ran the chess club I went to as a kid was a programmer. In middle school I tinkered with transistors and other loose electronics components in an effort to build a pocket calculator from scratch. I didn't have my first experience writing code though until I was a freshman at Ohio University studying physics and my advisor said I should take a course on programming in C because it would look good on my resume. I did well in the class but as it went on I got more and more bored and by the end of the semester I had resoved not to put programming on my resume because I did not want to do it at all!"
  const par2 = "Flash forward eight years, I'm building a tiny house and listening to NPR podcasts. An interview comes on with Andy Hunt, who happens to be a woodworker and a coauthor of the book 'The Pragmatic Programmer'. He was speaking my language. We had in common a love of logic puzzles and a love of building things out of wood. In that interview, Hunt helped me see how programming was really at the intersection of these two loves: Writing code is building things out of pure logic. The experience made me decide it was time to give programming a second try, only this time I wouldn't get bored following someone else's syllabus, I'd be self taught, I'd go at my own pace and build things simply becuase I wanted them to exist."
  const par3 = "To schedule a lesson, email nigel@stemgarden.org"
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={code_editor_screenshot}
      imgAlign="right"
    />
  )
}

function OfferingSection() {
  const headerText = "Offering & Booking"
  const par1 = "I had a lot of fun building this website, so I'm looking for more work of this type."
  const par2 = "To schedule a lesson, email nigel@stemgarden.org"
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={code_editor_screenshot}
      imgAlign="right"
    />
  )
}

function TechnologiesSection() {
  const headerText = "Technologies I Work With"
  const par1 = "I am always open to adding a new tool to my toolbox when I have a job that makes it worthwhile, so this list is not exhaustive by any means, just an indication of what I have been up to lately."
  const par2 = "To schedule a lesson, email nigel@stemgarden.org"
  return (
    <Section 
      headerText={headerText}
      paragraphs={[ par1, par2 ]}
      imgUrl={code_editor_screenshot}
      imgAlign="right"
    />
  )
}
