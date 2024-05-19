import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Logo from '../Logo'
import { pages } from './ResponsiveAppBar'
import ToogleDarkMode from '../ToggleDarkMode'

function DesktopDisplay() {
  return (
    <>
      <Logo />
      <Box sx={{ display: 'flex', gap: 3 }}>
        {pages.map((page) => (
          <Typography
            key={page.name}
            onClick={() => {}}
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
    </>
  )
}

export default DesktopDisplay
