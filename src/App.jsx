import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Experimental_CssVarsProvider as MuiProvider } from '@mui/material'

import { Analytics } from '@vercel/analytics/react'

import './App.css'
import { theme } from './theme'
import { router } from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MuiProvider theme={theme}>
    <Analytics />
    <RouterProvider router={router} />
  </MuiProvider>
)
