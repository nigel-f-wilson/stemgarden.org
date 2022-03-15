import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from '@mui/styles';

// MATERIAL-UI COMPONENTS
import { 
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain,
  // faFlask,
  faChessKnight,
  faGraduationCap,
  faLaptopCode,
  faPuzzlePiece,
  // faCalculator,
  faChalkboardTeacher
 } from '@fortawesome/free-solid-svg-icons'


const servicesList = [
  {
    label: "Math Games",
    linkTo: "services/tutoring",
    icon: faPuzzlePiece
  },
  {
    label: "Math Tutoring",
    linkTo: "services/tutoring",
    icon: faGraduationCap
  },
  {
    label: "Chess Clubs",
    linkTo: "services/chess-clubs",
    icon: faChessKnight
  },
  {
    label: "Teacher Training",
    linkTo: "services/teacher-training",
    icon: faChalkboardTeacher
  },
  {
    label: "Web Development",
    linkTo: "services/web-development",
    icon: faLaptopCode
  },
  
]


export default function TeachingServicesList(props) {
  const { handleClose } = props
  const theme = useTheme()

  return (
    <List sx={{ 
      width: '280px',
      height: '100vh',
      padding: 0,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }}>
      {servicesList.map(item => {
          return (
            <ListItem
              key={item.label}
              button
              onClick={handleClose}
              component={RouterLink}
              to={item.linkTo}
            >
              <Box  sx={{ width: '2.0rem' }} >
                <FontAwesomeIcon
                  icon={item.icon} 
                  color='white'
                  size='lg'
                />
              </Box>
              <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ 
                    variant: 'h5',
                    paddingLeft: 1 
                  }}
              />
            </ListItem>
          )
        })}
    </List>
  )
}