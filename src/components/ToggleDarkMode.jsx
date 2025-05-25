import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import AppBarBtn from './ResponsiveAppBar/AppBarBtn'
import { useTheme } from '~/hooks'

function ToggleDarkMode() {
  const { mode, toggleTheme } = useTheme()

  return (
    <AppBarBtn 
      onClick={toggleTheme} 
      borderColor="primary.text.third" 
      backgroundColor="primary.text.third" 
      color="primary.text.primary"
    >
      {mode === 'light' ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
    </AppBarBtn>
  )
}

export default ToggleDarkMode
