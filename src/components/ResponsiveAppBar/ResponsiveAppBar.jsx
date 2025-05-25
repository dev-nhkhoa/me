import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useColorScheme } from '@mui/material'
import { BRANDING_CONFIG } from '~/config/branding.js'
import MobileDisplay from './MobileDisplay'
import DesktopDisplay from './DesktopDisplay'

// eslint-disable-next-line react-refresh/only-export-components
export const pages = [
  // { name: 'Home', navigate: '/' },
  // { name: 'Stories', navigate: '/stories' }
]

function ResponsiveAppBar() {
  const { dimensions } = BRANDING_CONFIG
  const { mode } = useColorScheme()

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)' 
          : 'rgba(2, 48, 71, 0.8)', // dark mode background
        backdropFilter: 'blur(10px)', // hiệu ứng blur
        WebkitBackdropFilter: 'blur(10px)', // tương thích webkit
        borderBottom: mode === 'light' 
          ? '1px solid rgba(0, 0, 0, 0.1)' 
          : '1px solid rgba(149, 204, 231, 0.3)',
        zIndex: 1000,
        py: 1
      }}
    >
      <Container disableGutters sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ 
          px: '15px', 
          width: dimensions.container.maxWidth,
          display: 'flex',
          alignItems: 'center'
        }}>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, width: '100%' }}>
            <MobileDisplay />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}>
            <DesktopDisplay />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default ResponsiveAppBar
