import {
    faUserFriends,
    faCamera,
    faBrain,
    faFlask,
    faLeaf,
    faCarrot,
    faPeopleCarry,
    faShovel,
    faDollarSign,
    faGraduationCap,
    faLaptopCode,
    faPuzzlePiece,
    faChessKnight
} from '@fortawesome/free-solid-svg-icons';

export const aboutList = [
    {
        label: 'Our Story',
        icon: faLeaf,
        pathname: '/our_story',
        activeTab: ''
    },
    {
        label: 'What We Grow',
        icon: faCamera,
        pathname: '/teach',
        activeTab: 'tutoring'
    },
    {
        label: 'Get Involved',
        icon: faPeopleCarry,
        pathname: '/teach',
        activeTab: 'tutoring'
    },
    {
        label: 'Get Involved',
        icon: faGraduationCap,
        pathname: '/teach',
        activeTab: 'tutoring'
    },
    // {
    //     label: 'Teaching Philosophy',
    //     icon: 'faGraduationCap',
    //     pathname: '/teach',
    //     activeTab: 'philosophy'
    // },
]

export const servicesList = [
    {
        label: 'Math Tutoring',
        icon: faGraduationCap,
        pathname: '/teach',
        activeTab: 'tutoring'
    },
    {
        label: 'Enrichment',
        icon: faPuzzlePiece,
        pathname: '/teach',
        activeTab: 'enrichment'
    },
    {
        label: 'Chess Clubs',
        icon: faChessKnight,
        pathname: '/teach',
        activeTab: 'chess'
    },
    {
        label: 'Test Prep',
        icon: faGraduationCap,
        pathname: '/teach',
        activeTab: 'test_prep'
    },
    {
        label: 'Math Games',
        icon: faLaptopCode,
        pathname: '/math_games',
        // activeTab: ''
    },
    {
        label: 'Math Games',
        icon: faPuzzlePiece,
        pathname: '/teach',
        activeTab: 'test_prep'
    },
]
