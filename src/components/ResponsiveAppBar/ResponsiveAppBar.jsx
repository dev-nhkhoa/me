import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MobileDisplay from './MobileDisplay'
import DesktopDisplay from './DesktopDisplay'

// eslint-disable-next-line react-refresh/only-export-components
export const pages = [
  { name: 'Home', navigate: '/' },
  { name: 'Works', navigate: '' },
  { name: 'Moments', navigate: '' },
  { name: 'Stories', navigate: '' }
]

function ResponsiveAppBar() {
  return (
    <Container disableGutters sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ opacity: '0.9', px: '15px', width: '600px' }}>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <MobileDisplay />
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'space-between', alignItems: 'center' } }}>
          <DesktopDisplay />
        </Box>
      </Box>
    </Container>
  )
}
export default ResponsiveAppBar
