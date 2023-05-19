import { createTheme, responsiveFontSizes  } from '@mui/material/styles'

let customTheme = createTheme({

  typography: {
    fontFamily: ["Crimson Text"].join(","),
    fontSize: 16,
  },
  
  unstable_sxConfig:{
    p:"1.5rem",
 
  display: "flex",
  rowGap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap"
 },
 palette: {
  primary: {

    main: '#713A3A',
 
  },
  secondary: {
    light: 'rgba(255, 195, 161, 0.1)',
    main: 'rgba(255, 195, 161, 0.02)',

  },
  // Provide every color token (light, main, dark, and contrastText) when using
  // custom colors for props in Material UI's components.
  // Then you will be able to use it like this: `<Button color="custom">`
  // (For TypeScript, you need to add module augmentation for the `custom` value)
  custom: {
    light: '#fff',
    main: '#F1F1F1',
    dark: 'gray',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

},

});

customTheme = responsiveFontSizes(customTheme);

export default customTheme;