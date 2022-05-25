import React from 'react'
import {  Container,  } from '@mui/material';

import { Background } from "../../components/backgrounds";
import { PageHeader, Section } from '../../components/text';

import { 
  code_editor_screenshot, 
  react_logo_svg, 
  all_my_tools,
  material_ui_logo, 
  mongo_logo_svg, 
  aws_logo_svg, 
  node_logo_svg,
  pragmatic_programmer_book
} from "../../cloudinaryURLs";
import PictureRow from '../../components/text/PictureRow';

export default function WebDevelopmentPage(props) {
  return (
    <Background >
      <Container maxWidth='md'  >
        <PageHeader title="Web Development"  />
        <OfferingSection />
        <TechnologiesSection />
        <HowIGotIntoProgrammingSection />
        {/* <FreelanceProjectsSection /> */}
      </Container>
    </Background>
  )
}

function OfferingSection() {
  // It is a great fit for both my personality and my intellectual disposition.
  // I am still pretty new to the programming, but I love it and I am excited to keep learning for a long time to come.
  return (
    <Section 
      textItems={[ 
        {
          type: 'heading',
          text: 'What I Offer'
        },
        {
          type: 'paragraph',
          text: "I taught myself everything I needed to know to build and deploy this site . I am currently accepting new clients for freelance work and seeking fulltime employment. If you have an idea but you are not sure "
        },
        {
          type: 'paragraph',
          text: "Have an opening on your development team or a design that you want made into a live website? Email me at nigel@stemgarden.org"
        },
      ]}
      imgUrl={all_my_tools}
      imgAlign="right"
    />
  )
}
function TechnologiesSection() {
  return (
    <React.Fragment>
      <Section 
        textItems={[ 
          {
            type: 'heading',
            text: 'Technologies I Work With'
          },
          {
            type: 'paragraph',
            text: "Recently I have been putting most of my energy into improving as front end developer, working in React. I also have experience working in Java and in C. I'm currently building a full stack app with a Mongo backend to simplify the logistics for people running chess clubs."
          },
          {
            type: 'paragraph',
            text: "I am always open to adding a new tool to my toolbox when I have a job that makes it worthwhile, so this list is not exhaustive by any means, just an indication of what I have been up to lately."
          },
        ]}
        imgUrl={null}
      />
      <PictureRow 
        imgUrls={[
          react_logo_svg, 
          mongo_logo_svg, 
          material_ui_logo, 
          aws_logo_svg, 
          node_logo_svg, 
        ]} 
      />
    </React.Fragment>
  )
}

function HowIGotIntoProgrammingSection() {
  return (
    <React.Fragment>
      <Section 
        textItems={[
          {
            type: 'heading',
            text: 'How I Got Into Programming'
          },
          {
            type: 'paragraph',
            text: "I have always loved logic puzzles and building things that work, but I had little exposure to programming as a kid. The man who ran the chess club I went to was a database administrator and when I was in middle school I spent some time tinkering with transistors and other loose electronic components in an effort to build a pocket calculator from scratch. The first time I actually wrote any code wasn't until I was a freshman at Ohio University."
          },
        ]}
      />
      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "I was studying physics and my advisor said I should take a course on programming in C because it would look good on my resume. I did, and I did well in the class but as the semester dragged on I got more and more bored. I decided not to put it on my resume because I did not want to do it at all!"
          },
          {
            type: 'paragraph',
            text: "Flash forward eight years, I'm building a tiny house in my garden and listening to NPR podcasts. An interview comes on with Andy Hunt, who happens to be a woodworker and a coauthor of the book 'The Pragmatic Programmer'. He was speaking my language."
          },
        ]}
        imgUrl={pragmatic_programmer_book}
        imgAlign="right"
      />
      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "Hunt and I have in common a love of logic puzzles and a love of building things out of wood. In that interview he helped me see how programming was at the intersection of these two loves: Writing code is building things out of pure logic. The experience made me decide it was time to give programming a second try, only this time I wouldn't get bored following someone else's syllabus, I'd be self-taught. I'd go at my own pace and build things simply becuase I wanted them to exist."
          },
        ]}
        imgUrl={code_editor_screenshot}
        imgAlign="left"
      />
    </React.Fragment>
  )
}