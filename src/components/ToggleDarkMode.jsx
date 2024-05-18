import { useColorScheme, Box } from '@mui/material'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

function ToogleDarkMode() {
  const { mode, setMode } = useColorScheme()
  return (
    <Box
      sx={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', backgroundColor: 'primary.text.third', border: '1px solid', borderColor: 'primary.text.third' }}
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
    </Box>
  )
}

export default ToogleDarkMode
