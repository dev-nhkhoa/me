import Typography from '@mui/material/Typography'
import { PROFILE_CONFIG } from '~/config/profile.jsx'

function Footer() {
  const { copyright } = PROFILE_CONFIG

  return (
    <Typography variant="desc" sx={{ color: 'primary.text.third', textAlign: 'center' }}>
      © {copyright.year} {copyright.owner}. All Rights Reserved.
    </Typography>
  )
}

export default Footer
