import { experimental_extendTheme as extendTheme } from '@mui/material'

const theme = extendTheme({
  components: {
    MuiTypography: {
      styleOverrides: { root: { fontFamily: 'monospace' } }
    }
  },

  typography: {
    title: { fontSize: '18px', fontWeight: 'semi-bold' },
    secondTitle: { fontSize: '12px', fontWeight: 'bold' },
    desc: { fontSize: '14px', fontWeight: 'normal' }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fff',
          text: {
            primary: '#000',
            secondary: '#252525',
            third: '#CFB997'
          },
          button: {
            bg: '#000',
            text: '#fff'
          }
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#333333',
          text: {
            primary: '#4e88ca',
            secondary: '#f5f5f5',
            third: '#b2b2b2'
          },
          button: {
            bg: '#c2bdb5',
            text: '#252525'
          }
        }
      }
    }
  }
})

export { theme }
