import { Box, Typography } from '@mui/material'
import { INFO } from '~/lib/info'
import packageJson from '../../../../package.json'
const End = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'end',
        flexDirection: 'column'
      }}
    >
      <Typography variant='desc'>
        This CV made by me (nhkhoa) | Last edited at {INFO.dateUpdate}
      </Typography>
      <Typography variant='desc'>Version: {packageJson.version}</Typography>
    </Box>
  )
}

export default End
