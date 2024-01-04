import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import { experimental_extendTheme as extendTheme } from '@mui/material'
import { Experimental_CssVarsProvider as MuiProvider } from '@mui/material'

const theme = extendTheme({
  colorSchemes: {
    light: {},
    dark: {}
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiProvider theme={theme}>
      <Home />
    </MuiProvider>
  </React.StrictMode>
)
