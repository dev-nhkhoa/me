import Box from '@mui/material/Box'
import { BRANDING_CONFIG } from '~/config/branding.js'

function AppBarBtn(props) {
  const { children, onClick, ariaLabel, ariaControls, ariaHaspopup, color, borderColor, backgroundColor } = props
  const { dimensions } = BRANDING_CONFIG

  return (
    <Box
      sx={{ 
        width: dimensions.button.width, 
        height: dimensions.button.height, 
        border: '1px solid', 
        borderColor: borderColor, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: dimensions.borderRadius.small, 
        color: color, 
        backgroundColor: backgroundColor || '' 
      }}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-haspopup={ariaHaspopup}
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

export default AppBarBtn
