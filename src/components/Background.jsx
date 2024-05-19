import { Box, Container } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import Footer from './Footer'

function Background({ children }) {
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
        pb: 4
      }}
    >
      <Box sx={{ width: '100%' }}>
        <ResponsiveAppBar />
      </Box>
      <Box
        sx={{
          width: { xs: '300px', md: '450px' },
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
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
