import { 
  faLeaf,
  faPeopleCarry,
  faCamera,
  faPuzzlePiece,
  // faYinYang,
  // faQuestion,
  // faGuitar,
  // faGamepad,
  faHourglass,
  
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
  
]


export const resourcesListData = [
  {
    label: "Math Games",
    icon: faDice,
    // icon: faCards
    linkTo: "math-games",
  },
  {
    label: "Puzzles",
    icon: faPuzzlePiece,
    linkTo: "services/tutoring",
  },
  {
    label: "Lesson Plans",
    icon: faCopy,
    linkTo: "services/chess-clubs",
  },
  
]
