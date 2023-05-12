
import { createTheme } from "@mui/material"
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
// import commonThemeOptions from 'styles/theme/commonThemeOptions';

// const { components: commonComponentsOptions } = commonThemeOptions;
const breakpoints = createBreakpoints({})



const theme = createTheme ({
    palette: {
        primary: {
            main: "#89345e",
            light: "#89345e74",
            contrastText: '#010D00',
        },
        secondary: {
            main: '#45A9BF',
            light: "#f2f2f2",

        },
        info: {
            main: '#010D00',

        },
        text: {
            primary: '#010D00',
            secondary: '#f2f2f2',
    
      },
    },

    typography: {
        h1: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 700,
            fontSize: "2.4rem",
            lineHeight: "3rem",
            [breakpoints.down("md")]: {
                fontSize: "2.1rem",
                lineHeight: "2.5rem"
            },
            [breakpoints.down("xs")]: {
                fontSize: "1.8rem",
                lineHeight: "2rem"
            }
        },
        h2: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 600,
            fontSize: "1.7rem",
            lineHeight: "3rem",
            [breakpoints.down("md")]: {
                fontSize: "1.5rem",
                lineHeight: "2rem"
            }
       
        },
        h3:{
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 600,
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            [breakpoints.down("md")]: {
                fontSize: "1.3rem",
                lineHeight: "1.9rem"
            }
        },     
        h4: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 600,
            fontSize: "1.4rem",
            lineHeight: "2rem",
            [breakpoints.down("md")]: {
                fontSize: "1.2rem",
                lineHeight: "1.5rem"
            }
        },
        h5: {
            fontFamily: 'Inconsolata, monospace',
            fontSize: "1.2rem",
            lineHeight: "2rem",
        [breakpoints.down("md")]: {
            fontSize: "1rem",
            }
        },
        body1: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.7rem",
        [breakpoints.down("md")]: {
            fontSize: "0.8rem",
            lineHeight: "1.2rem"
        }
    },
},
    breakpoints: {
        values: {
          xs: 500,
          sm: 920,
          md: 1200,
          lg: 1400,
          xl: 1610,
        },
      },
       
})



export default theme;
