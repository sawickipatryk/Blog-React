import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})
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
      main: '#fff'
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
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
    fontFamily: roboto.style.fontFamily,
    fontWeightBold: '700',
    fontWeightMedium: '500',
    fontWeightRegular: '400',
    fontWeightLight: '300',
    h1: {
      fontSize: '48px',
      color: '#fff'
    },
    h2: {
      fontSize: '42px',
      color: '#fff'
    },
    h3: {
      fontSize: '38px',
      color: '#fff'
    },
    h4: {
      fontSize: '32px',
      color: '#fff'
    },
    h5: {
      fontSize: '28px',
      color: '#fff'
    },
    h6: {
      fontSize: '22px',
      color: '#fff'
    },
    subtitle1: {
      fontSize: '24px',
      color: '#fff'
    },
    body1: {
      fontSize: '20px',
      color: '#fff',
      letterSpacing: '0.3px'
    },
    body2: {
      fontSize: '16px',
      color: '#fff'
    },
    button: {
      fontSize: '16px',
      fontWeight: '700',
      letterSpacing: '1.3px'
    }
  }

})

export default responsiveFontSizes(theme)
