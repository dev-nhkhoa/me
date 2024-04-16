import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { experimental_extendTheme as extendTheme } from '@mui/material'
import { Experimental_CssVarsProvider as MuiProvider } from '@mui/material'
import '@fontsource/inter'
import DashBoard from '../pages/DashBoard/DashBoard'
import VluHelper from '~/pages/VluHelper/VluHelper'
import '../global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />
  },
  {
    path: '/vlu-helper',
    element: <VluHelper />
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
      fontSize: '18px',
      fontWeight: 'semi-bold',
      color: '#000'
    },
    secondTitle: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#000'
    },
    desc: {
      fontSize: '14px',
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
