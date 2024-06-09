import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import LogoImage from '~/assets/images/nhkhoa-logo-nobg.png'

function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={LogoImage} style={{ width: '32px', height: '32px' }} />
      <Typography sx={{ textDecoration: 'underline', color: 'primary.text.primary', cursor: 'pointer' }}>Nhkhoa</Typography>
    </Box>
  )
}

export default Logo
