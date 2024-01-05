import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { experimental_extendTheme as extendTheme } from '@mui/material'
import { Experimental_CssVarsProvider as MuiProvider } from '@mui/material'
import '@fontsource/inter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

const theme = extendTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          fontFamily: 'Inter'
        }
      }
    }
  },

  typography: {
    title: {
      fontSize: '12px',
      fontWeight: 'semi-bold',
      color: '#000'
    },
    text: {
      fontSize: '10px',
      fontWeight: 'normal',
      color: '#80706B'
    }
  },
  colorSchemes: {
    light: {
      palette: {}
    },
    dark: {
      palette: {}
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiProvider theme={theme}>
      <RouterProvider router={router} />
    </MuiProvider>
  </React.StrictMode>
)
