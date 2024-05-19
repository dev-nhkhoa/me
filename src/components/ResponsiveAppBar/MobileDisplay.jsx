import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { useNavigate } from 'react-router-dom'
import { pages } from './ResponsiveAppBar'

import Logo from '../Logo'
import AppBarBtn from './AppBarBtn'
import ToogleDarkMode from '../ToggleDarkMode'

function MobileDisplay() {
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
    <>
      <Logo />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <AppBarBtn color="primary.text.third" borderColor="primary.text.primary" ariaLabel="menu icon" ariaControls="menu-appbar" ariaHaspopup="true" onClick={handleOpenNavMenu}>
          <MenuIcon color="inherit" />
        </AppBarBtn>
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
    </>
  )
}

export default MobileDisplay
