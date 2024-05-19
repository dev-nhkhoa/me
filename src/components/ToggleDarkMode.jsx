import { useColorScheme } from '@mui/material'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import AppBarBtn from './ResponsiveAppBar/AppBarBtn'

function ToogleDarkMode() {
  const { mode, setMode } = useColorScheme()

  const toogle = () => setMode(mode === 'light' ? 'dark' : 'light')

  return (
    <>
      <AppBarBtn onClick={toogle} borderColor="primary.text.third" backgroundColor="primary.text.third" color="primary.text.primary">
        {mode === 'light' ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
      </AppBarBtn>
    </>
  )
}

export default ToogleDarkMode
