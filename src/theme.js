// in your theme file that you call `createTheme()`
// import { Theme } from '@mui/material/styles';

// declare module '@mui/styles' {
//     interface DefaultTheme extends Theme { }
// }

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    backgrounds: {
      light: '#FFFFFF',
      dark: '#212121',
      connectFour: '#b3e5fc',
    },
    white: '#FFFFFF',
    black: '#000000',
    darkGrey: '#212121',
    
    transparent: 'rgba(0, 0, 0, 0)',
    primary: {
      light: '#669944',
      main: '#2e6b12',
      dark: '#004000',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#FFFFF',
      main: '#669944',
      dark: '#777777',
      contrastText: '#000000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    action: {
        disabledBackground: '#2e6b12',
        disabledOpacity: '0.5'
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0px',
        },
      },
    },
  },
  typography: {
    h1: {
      textShadow: '0.15rem 0.15rem 0.3rem black',
      fontWeight: 200,
    },
    pageHeader: { 
      // color: theme.palette.common.white

      textAlign: "center",

      textShadow: '0.15rem 0.15rem 0.3rem black',
      fontWeight: 200,
    },
    cardHeader: { 
      textShadow: '0.15rem 0.15rem 0.3rem black',
      fontWeight: 200,
    },
    button: {
      fontSize: '1.0rem',
      fontWeight: '700'
    }
  },
  status: {

  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  transitions: {    },
  zIndex: { }

});

theme.typography.navbarBrand = {
  color: theme.palette.common.white,
  fontWeight: 400,
  fontFamily: 'Perantent Marker, cursive',
  fontSize: 32
}
theme.typography.pageHeader = {
  color: theme.palette.common.white,
  textAlign: "center",
  textShadow: '0.15rem 0.15rem 0.3rem black',
  fontWeight: 200,
  fontSize: '2.4rem',
    '@media (min-width:450px)': {
      fontSize: '3.0rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5.0rem',
    },
}
theme.typography.pageSubheader = {
  color: theme.palette.common.white,
  textShadow: '0.15rem 0.15rem 0.3rem black',
  fontWeight: 200,
  fontSize: '0.85rem',
    '@media (min-width:450px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.35rem',
    },
}

theme.typography.cardHeader = {
  color: theme.palette.common.white,
  textShadow: '0.15rem 0.15rem 0.3rem black',
  fontWeight: 200,
  fontSize: '1.4rem',
  lineHeight: '1.6rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem',
      lineHeight: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
      lineHeight: '2.3rem',
    },
}

export default responsiveFontSizes(theme, 1.8)