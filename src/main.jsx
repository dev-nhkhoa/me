import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { experimental_extendTheme as extendTheme } from '@mui/material'
import { Experimental_CssVarsProvider as MuiProvider } from '@mui/material'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

const theme = extendTheme({
  nhkhoa: {},
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
    <MuiProvider theme={theme} />
    <RouterProvider router={router} />
  </React.StrictMode>
)
