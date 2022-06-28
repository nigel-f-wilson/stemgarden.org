import React from 'react'
import { Box, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ButtonLabel(props) {
  const { text, 
    fontFamily= 'roboto', 
    align = 'center',
    startIcon,
    endIcon, 
    iconSize = 'lg',
  } = props
  
  const paddingLeft = (startIcon) ? "0.5rem" : "0"
  const paddingRight = (endIcon) ? "0.5rem" : "0"

  const textColor = "white"
  const iconBgColor = "darkGrey" // This hack relies on the borderRadius of 50% which only works for icons that are circular, as in the "Scroll to top button". This bg would need reworked to take borderRadius as a prop in case it has to work with other icon shapes.

  return (
    <Box id="button-label"
      display="flex" 
      alignItems="center"
      bgcolor={iconBgColor} 
      borderRadius='50%' 
      lineHeight={0} 
    >
        {
          startIcon ? (
            <FontAwesomeIcon icon={startIcon} color={textColor} size={iconSize} />
          ) : (
            <></>
          )
        }
        {
          text ? (
            <Typography 
              children={text}
              color={textColor}
              align={align}
              fontFamily={fontFamily}
              sx={{
                paddingLeft: paddingLeft,
                paddingRight: paddingRight, 
                fontWeight: 700,
                fontSize: '1.2rem',
                lineHeight: '1.8rem',
                // '@media (min-width: 600px)': {
                //   fontSize: '4.2rem',
                //   lineHeight: '4.7rem',
                // },
                // '@media (min-width: 900px)': {
                //   fontSize: '5.0rem',
                //   lineHeight: '6.0rem', 
                // },
              }}
            />
          ) : (
            <></>
          )
        }
        {
          endIcon ? (
            <FontAwesomeIcon icon={endIcon} color={textColor} size={iconSize} />
          ) : (
            <></>
          )
        }
    </Box>
  )
}