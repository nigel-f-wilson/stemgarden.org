import React from 'react'

import { Button } from '@mui/material';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// CUSTOM COMPONENTS
import { PageHeader, ButtonLabel } from "../../components/text";
import { BackgroundSection } from "../../components/backgrounds";
import { Section } from "../../components/text";

// IMAGE URLs
import { 
  early_days_trash_pile,
  tool_shed_with_zinnias,
 } from "../../cloudinaryURLs";

export default function OurStorySection(props) {
  return (
    <BackgroundSection id="our-story" bg="dark"  sectionHeight="auto" >
      <PageHeader title="Our Story" />

      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "In 2016 I bought the land that is now the STEM Garden for less than it would have cost to rent an apartment for a year. It was covered in broken glass and car parts at the time, but I could see it had potential."
          },{
            type: 'paragraph',
            text: "For the first five years, the garden was home to me, my partner Olive, our pups, and the occasional couchsurfer. I built two tiny houses, equipped them with DIY solar power and rainwater catchment systems, and brought in over 300 cubic yards of manure to compost."
          }
        ]}
        imgUrl={early_days_trash_pile}
        imgAlign="right"
        contain
      />
      <Section 
        textItems={[
          {
            type: 'paragraph',
            text: "Presently, the STEM Garden is taking the next step in its transformation. It is no longer a residence but a space dedicated to Mutual-Aid and enriching the community it is situated in. Anyone interested in using the space to host classes on garden science or any other topic is encouraged to reach out. A Co-Op is currently being formed to coordinate caring for the space and to handle logistics around harvesting and distribution. If you want to join, let us know!"
          }
        ]}
        imgUrl={tool_shed_with_zinnias}
        imgAlign="left"
        contain
      />
      <Button 
        href="our-story" 
        variant="outlined"
        sx={{ color: "white", border: "solid white 1px", margin: 1 }} 
        children={
          <ButtonLabel 
            text="Read more" 
            endIcon={faArrowCircleRight} 
          />
        } 
      />
      <Button 
        href="contact-us" 
        variant="outlined"
        sx={{ color: "white", border: "solid white 1px", margin: 1  }} 
        children={
          <ButtonLabel 
            text="Contact Us" 
            endIcon={faArrowCircleRight} 
          />
        } 
      />
    </BackgroundSection>
  ) 
}




