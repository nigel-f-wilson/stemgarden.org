import { 
  faLeaf,
  faPeopleCarry,
  faCamera,
  faPuzzlePiece,
  // faYinYang,
  // faQuestion,
  // faGuitar,
  // faGamepad,
  // faHourglass,
  faEnvelope,
  // faChalkboardTeacher,
  // faPersonChalkboard, // not free
  // faFlask,
  // faCards,  // not free
  faDice,
  faChessKnight,
  faGraduationCap,
  // faDisplayCode,  // not free
  faLaptopCode,
  faCopy,
  faDivide,
  // faCalculator,
  // faBrain,
  // faHeadSideBrain  PRO
  // faFlask,
  // faScaleBalanced,
 } from '@fortawesome/free-solid-svg-icons'

//  import PsychologyIcon from '@mui/icons-material/Psychology';

export const aboutListData = [
  {
    label: "Our Story",
    icon: faLeaf,
    linkTo: "our-story",
  },
  {
    label: 'What We Grow',
    icon: faCamera,
    linkTo: "what-we-grow",
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
    // icon: faPuzzlePiece,
    icon: faGraduationCap,
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
  {
    label: "Contact Us",
    icon: faEnvelope,
    linkTo: "contact-us",
  },
]


export const resourcesListData = [
  {
    label: "Math Games",
    icon: faDice,
    // icon: faCards
    linkTo: "resources/math-games",
  },
  {
    label: "Puzzles",
    icon: faPuzzlePiece,
    linkTo: "resources/puzzles",
  },
  {
    label: "Fluency Drills",
    icon: faCopy,  // faHeadSideBrain
    linkTo: "resources/fluency-drills",
  },
  {
    label: "Lesson Plans",
    icon: faCopy,
    linkTo: "resources/lesson-plans",
  },
  {
    label: "Divisibility Playground",
    icon: faDivide,
    linkTo: "resources/divisibility-playground",
  },
]
