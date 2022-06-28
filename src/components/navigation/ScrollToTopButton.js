import React from "react";

import { HashLink } from 'react-router-hash-link';
import { Box, Fade } from '@mui/material';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

import { useScrollPosition } from "../../hooks";
import { ButtonLabel } from "../text";

export default function ScrollToTopButton(props) {
  let scrollPosition = useScrollPosition()

  return (
    <Fade in={(scrollPosition > 500)} >
      <Box 
        display="flex"
        position='fixed' 
        bottom='1.0rem' 
        right='1.0rem' 
        width='2.0rem' 
        flexDirection='row' 
        justifyContent='start' 
        alignItems='center' 
        zIndex={9000}
        // bgcolor="darkGrey"
        // borderRadius="50%"
      >
        <HashLink smooth to="#top">
          <ButtonLabel startIcon={faArrowCircleUp} iconSize="2x" />
        </HashLink>
      </Box>
    </Fade>
    
  )
}