import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import SvgLogo from '../SvgLogo'
import { pages } from './ResponsiveAppBar'
import ToogleDarkMode from '../ToggleDarkMode'
import { useNavigate } from 'react-router-dom'

function DesktopDisplay() {
  const navigate = useNavigate()

  const handlePageClick = (page) => {
    navigate(page.navigate)
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      width: '100%'
    }}>
      <SvgLogo />
      
      <Box sx={{ 
        display: 'flex', 
        gap: 3,
        alignItems: 'center'
      }}>
        {pages.map((page) => (
          <Typography
            key={page.name}
            onClick={() => handlePageClick(page)}
            sx={{
              px: '2px',
              color: 'primary.button.bg',
              cursor: 'pointer',
              '&:hover': {
                color: 'primary.text.secondary',
                fontWeight: 'bold',
                textDecoration: 'underline'
              }
            }}
          >
            {page.name}
          </Typography>
        ))}
      </Box>

      <ToogleDarkMode />
    </Box>
  )
}

export default DesktopDisplay
