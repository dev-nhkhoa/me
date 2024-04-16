import { Box, Container } from '@mui/material'
import ResponsiveAppBar from '~/components/AppBar/ResponsiveAppBar'

const VluHelper = () => {
  return (
    <Container
      maxWidth='100%'
      disableGutters
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box
        sx={{
          width: { md: '600px', sm: '450px', xs: '350px' },
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          py: 2
        }}>
        <Box sx={{ width: '100%' }}>
          <ResponsiveAppBar />
        </Box>
      </Box>
    </Container>
  )
}

export default VluHelper
