import { Box, Typography } from '@mui/material'
import { INFO } from '~/app/info'
import packageJson from '../../../../package.json'
const End = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        gap: '15px'
      }}
    >
      <Typography variant='desc' sx={{ textAlign: 'left' }}>
        This CV made by me (nhkhoa)
      </Typography>
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
    </Box>
  )
}

export default End
