import { Box, Typography } from '@mui/material'
import { INFO } from '~/lib/info'

const Introduction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        sx={{ fontSize: '18px', fontWeight: '500', textAlign: 'left' }}
      >
        INTRODUCE:
      </Typography>
      <Typography
        variant='text'
        sx={{
          textAlign: 'justify',
          pl: '48px',
          textIndent: '20px',
          fontSize: '14px'
        }}
      >
        {INFO.introduction}
      </Typography>
    </Box>
  )
}

export default Introduction
