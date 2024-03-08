import { Box, Typography } from '@mui/material'
import { INFO } from '~/app/info'
import packageJson from '../../../../package.json'
const End = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end'
      }}
    >
      <Typography variant='desc' sx={{ textAlign: 'right' }}>
        Last edited at {INFO.dateUpdate}
      </Typography>
      <Typography variant='desc' sx={{ textAlign: 'right' }}>
        Version: {packageJson.version}
      </Typography>
    </Box>
  )
}

export default End
