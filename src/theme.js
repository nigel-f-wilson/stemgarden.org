// in your theme file that you call `createTheme()`
// import { Theme } from '@mui/material/styles';

// declare module '@mui/styles' {
//     interface DefaultTheme extends Theme { }
// }

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        white: '#FFFFFF',
        black: '#000000',
        connectFourBackground: '#b3e5fc',
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
        MuiPaper: {
            
        },
    },
    typography: {
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

export default responsiveFontSizes(theme)