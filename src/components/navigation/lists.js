import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faPeopleCarry,
  faCamera,
  faPuzzlePiece,
  faQuestion,
  faChalkboardTeacher,
  faFlask,
  faChessKnight,
  faGraduationCap,
  faLaptopCode,
  // faCalculator,
  // faBrain,
  // faFlask,
  // faScaleBalanced,
 } from '@fortawesome/free-solid-svg-icons'

export const aboutListData = [
  {
    label: "Our Story",
    icon: faLeaf,
    linkTo: "about/our-story",
  },
  {
    label: 'What We Grow',
    icon: faCamera,
    linkTo: "about/gallery",
  },
  {
    label: 'Get Involved',
    icon: faPeopleCarry,
    linkTo: "get-involved",
  },
  // {
  //   label: 'Philosophy',
  //   icon: faQuestion,
  //   linkTo: 'philosophy',
  // },
]


export const servicesListData = [
  {
    label: "Math Tutoring",
    icon: faPuzzlePiece,
    linkTo: "services/tutoring",
  },
  // {
  //   label: 'STEM Enrichment',
  //   icon: faFlask,
  //   linkTo: '/services/enrichment',
  // },
  {
    label: "Chess Clubs",
    icon: faChessKnight,
    linkTo: "services/chess-clubs",
  },
  // {
  //   label: 'Test Prep',
  //   icon: faGraduationCap,
  //   linkTo: 'services/tutoring',
  // },
  // {
  //   label: "Teacher Training",
  //   icon: faChalkboardTeacher,
  //   linkTo: "services/teacher-training",
  // },
  {
    label: "Web Development",
    icon: faLaptopCode,
    linkTo: "services/web-development",
  },
  
]


export const resourcesListData = [
  {
    label: "Math Games",
    icon: faPuzzlePiece,
    linkTo: "math-games",
  },
  {
    label: "Math Tutoring",
    icon: faGraduationCap,
    linkTo: "services/tutoring",
  },
  {
    label: "Chess Clubs",
    icon: faChessKnight,
    linkTo: "services/chess-clubs",
  },
  {
    label: "Teacher Training",
    icon: faChalkboardTeacher,
    linkTo: "services/teacher-training",
  },
  {
    label: "Web Development",
    icon: faLaptopCode,
    linkTo: "services/web-development",
  },
  
]
