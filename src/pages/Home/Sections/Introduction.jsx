import { Box, Typography } from '@mui/material'
import { SETTING } from '~/app/settings'
import { INFO } from '~/lib/info'

const Introduction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant='title' sx={{ textAlign: 'left' }}>
        INTRODUCE:
      </Typography>
      <Typography
        variant='desc'
        sx={{
          textAlign: 'justify',
          pl: SETTING.paddingLeft,
          textIndent: SETTING.textIndent
        }}
      >
        {INFO.introduction}
      </Typography>
    </Box>
  )
}

export default Introduction
