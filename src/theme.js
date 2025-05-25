import { experimental_extendTheme as extendTheme } from '@mui/material'
import { BRANDING_CONFIG } from '~/config/branding.js'

const { typography, colors, dimensions } = BRANDING_CONFIG

const theme = extendTheme({
  components: {
    MuiTypography: {
      styleOverrides: { 
        root: { 
          fontFamily: typography.fontFamily 
        } 
      }
    }
  },

  typography: {
    title: { 
      fontSize: typography.sizes.title, 
      fontWeight: typography.weights.semiBold 
    },
    secondTitle: { 
      fontSize: typography.sizes.secondTitle, 
      fontWeight: typography.weights.bold 
    },
    desc: { 
      fontSize: typography.sizes.description, 
      fontWeight: typography.weights.normal 
    }
  },
  
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.light.primary,
          text: {
            primary: colors.light.text.primary,
            secondary: colors.light.text.secondary,
            third: colors.light.text.accent
          },
          button: { 
            bg: colors.light.button.background, 
            text: colors.light.button.text 
          }
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: colors.dark.background,
          text: {
            primary: colors.dark.text.primary,
            secondary: colors.dark.text.secondary,
            third: colors.dark.text.accent
          },
          button: { 
            bg: colors.dark.button.background, 
            text: colors.dark.button.text 
          }
        }
      }
    }
  }
})

export { theme }
