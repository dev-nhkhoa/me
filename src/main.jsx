import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import { experimental_extendTheme as extendTheme } from '@mui/material'
import { Experimental_CssVarsProvider as MuiProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const theme = extendTheme({
  colorSchemes: {
    light: {},
    dark: {}
  }
})

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MuiProvider theme={theme} />
    </RouterProvider>
  </React.StrictMode>
)
