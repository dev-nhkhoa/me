import Box from '@mui/material/Box'

function BackgroundSection({ children }) {
  return <Box sx={{ display: 'flex', flexDirection: 'column' }}>{children}</Box>
}

export default BackgroundSection
