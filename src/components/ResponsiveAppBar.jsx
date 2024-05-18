import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'
import ToogleDarkMode from './ToggleDarkMode'

const pages = [
  { name: 'Home', navigate: '/' },
  { name: 'Works', navigate: '' },
  { name: 'Moments', navigate: '' },
  { name: 'Stories', navigate: '' }
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (page) => {
    navigate(page)
    setAnchorElNav(null)
  }

  return (
    <Container disableGutters sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ opacity: '0.9', px: '15px', width: '600px' }}>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ textDecoration: 'underline', color: 'primary.text.primary', cursor: 'pointer' }}>Nhkhoa</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box
              sx={{ width: '32px', height: '32px', border: '1px solid', borderColor: 'primary.text.primary', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', color: 'primary.text.third' }}
              aria-label="menu icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon color="inherit" />
            </Box>
            <ToogleDarkMode />
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.navigate)}>
                <Typography textAlign="center" sx={{ color: 'primary.text.primary' }}>
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'space-between', alignItems: 'center' } }}>
          <Typography sx={{ textDecoration: 'underline', color: 'primary.text.primary', cursor: 'pointer' }}>Nhkhoa</Typography>
          <Box sx={{ maxWidth: '600px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', gap: 3 }}>
            {pages.map((page) => (
              <Typography
                key={page.name}
                onClick={() => handleCloseNavMenu(page.navigate)}
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
      </Box>
    </Container>
  )
}
export default ResponsiveAppBar
