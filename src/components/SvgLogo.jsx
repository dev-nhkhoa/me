import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { PROFILE_CONFIG } from '~/config/profile.jsx'
import { BRANDING_CONFIG } from '~/config/branding.js'

// SVG Logo component
const PersonIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="7"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

function SvgLogo() {
  const { personalInfo } = PROFILE_CONFIG
  const { dimensions } = BRANDING_CONFIG

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      pt: 2 // padding top cho logo
    }}>
      <Box sx={{ 
        color: 'primary.text.primary',
        width: dimensions.logo.width,
        height: dimensions.logo.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <PersonIcon />
      </Box>
      <Typography sx={{ 
        textDecoration: 'underline', 
        color: 'primary.text.primary', 
        cursor: 'pointer',
        ml: 1
      }}>
        {personalInfo.displayName}
      </Typography>
    </Box>
  )
}

export default SvgLogo