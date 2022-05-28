import React, { useContext } from 'react'
import { Box } from '@mui/material';

import { Paragraph, PageSubtitle } from "../text";
import { AppContext } from "../../AppContext";

export default function Section(props) {
  const { screenWidth } = useContext(AppContext)
  return (
    <Box 
      width='100%'
      paddingBottom="0.5rem"
      children={(screenWidth < 650) ?  <MobileSection {...props} /> : <DesktopSection {...props} /> } 
    />
  )
}

function MobileSection(props) {
  const { textItems, imgUrl, contain } = props
  const imageHeight = (imgUrl) ? '95%' : 0
  const imgCrop = (contain) ? 'contain' : 'cover'

  const imageStyles = {
    width: imageHeight,
    margin: '0 auto',
    paddingBottom: imageHeight,
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: imgCrop,
    borderRadius: '1rem',
  }  

  return (
    <Box width='100%' pb={1} >
      {
          textItems.map((item, index) => {
            const { type, text } = item
            console.assert(type === "paragraph" || type === "heading", "invalid item type in Section")
            if (type === "paragraph") {
              return (
                <Paragraph
                  key={`${textItems[0]}-item-${index}`}
                  text={text}
                />
              )
            }
            else {
              return (
                <PageSubtitle
                  key={`${textItems[0]}-item-${index}`}
                  text={text}
                  gutterBottom
                />
              )
            }
            
          })
        }
      <Box sx={imageStyles} />
    </Box>
  )
}

function DesktopSection(props) {
  const { textItems, imgUrl, imgAlign, contain } = props

  const imageHeight = (imgUrl) ? '300px' : 0
  const imgCrop = (contain) ? 'contain' : 'cover'
  const marginRight = (imgAlign === 'right') ?  0 : '2rem'
  const marginLeft = (imgAlign === 'right') ?  '2rem' : 0
  const marginBottom = (imgUrl) ? '0.5rem' : 0

  const imageStyles = {
    width: '300px',
    maxWidth: '50%',
    paddingBottom: imageHeight,
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: imgCrop,
    borderRadius: '1rem',
    
    float: imgAlign,
    marginRight: marginRight,
    marginLeft: marginLeft,
    marginBottom: marginBottom,
  }  

  return (
    <React.Fragment>
      <Box sx={imageStyles} />
      {
          textItems.map((item, index) => {
            const { type, text } = item
            console.assert(type === "paragraph" || type === "heading", "invalid item type in Section")
            if (type === "paragraph") {
              return (
                <Paragraph
                  key={`${textItems[0]}-item-${index}`}
                  text={text}
                />
              )
            }
            else {
              return (
                <PageSubtitle
                  key={`${textItems[0]}-item-${index}`}
                  text={text}
                  gutterBottom
                />
              )
            }
            
          })
        }
    </React.Fragment>
  )
}
