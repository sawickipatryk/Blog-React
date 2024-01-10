import { createTheme, responsiveFontSizes } from '@mui/material/styles'
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#111',
      white: '#fff'
    },
    primary: {
      main: '#C69749'
    },
    secondary: {
      main: '#111'
    },
    text: {
      primary: 'rgba(1, 1, 1, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)'
    },
    background: {
      firstBackgroundColor: '#fff',
      secondBackgroundColor: '#111',
      navBarBackgroundColor: '#111'
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightBold: '700',
    fontWeightMedium: '500',
    fontWeightRegular: '400',
    fontWeightLight: '300',
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '42px'
    },
    h3: {
      fontSize: '38px'
    },
    h4: {
      fontSize: '32px'
    },
    h5: {
      fontSize: '28px'
    },
    h6: {
      fontSize: '22px'
    },
    subtitle1: {
      fontSize: '24px'
    },
    body1: {
      fontSize: '20px',
      letterSpacing: '0.3px'
    },
    body2: {
      fontSize: '16px'
    },
    button: {
      fontSize: '16px',
      fontWeight: '700',
      letterSpacing: '1.3px'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            color: 'black'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#C69749'
            },
            '&:hover fieldset': {
              borderColor: '#C69749'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#C69749'
            }
          }
        }
      }
    }
  }

})

export default responsiveFontSizes(theme)
