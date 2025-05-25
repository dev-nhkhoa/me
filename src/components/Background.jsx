import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { BRANDING_CONFIG } from '~/config/branding'
import Footer from './Footer'
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar'

function Background({ children }) {
  const { dimensions, spacing } = BRANDING_CONFIG

  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        pb: 4,
        pt: 10 // padding top để không bị che bởi fixed header
      }}
    >
      <Box sx={{ width: '100%' }}>
        <ResponsiveAppBar />
      </Box>
      <Box
        sx={{
          width: { 
            xs: dimensions.container.mobile, 
            md: dimensions.container.desktop 
          },
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.sectionGap,
          py: 2
        }}
      >
        {children}
      </Box>
      <Footer />
    </Container>
  )
}

export default Background
