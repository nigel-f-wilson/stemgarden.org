import React, { useContext } from 'react'
import { Box } from '@mui/material';

import { AppContext } from "../../AppContext";
import { leafy_background } from "../../cloudinaryURLs";

export default function LeafyBackground(props) {
  const { children } = props
  const { narrowScreen } = useContext(AppContext)

  // var parent = document.getElementById('scrollParent');
  // var child = document.getElementById('scrollChild');
  // const paddingRight = child.offsetWidth - child.clientWidth + "px";

  // console.log(`scroll bar width: ${paddingRight}`);

  const gradient = (narrowScreen) ?
    "linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)"
    : "linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)"

  const backgroundStyles = {
    width: 'auto',
    minHeight: '100vh',
    height: 'auto',
    backgroundImage: `
      ${gradient},
      url(${leafy_background})
    `,
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    // paddingRight: paddingRight,
  }  
  return (
    // <Box id="scrollParent" >
      <Box 
        id="scrollChild"
        sx={backgroundStyles} 
        children={children}
        // mr="-50px" /* maximum width of scrollbar */
        // pr="50px" /* maximum width of scrollbar */
        // overflowY="scroll"
      />
    // </Box> 
      
  )
}