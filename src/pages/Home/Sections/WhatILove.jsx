import { Box, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { INFO } from '~/app/info'
import { SETTING } from '~/app/settings'

const WhatILove = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant='title' sx={{ textAlign: 'left' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          I LOVE <FavoriteIcon fontSize='small' />:
        </Box>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          gap: '6px',
          pl: SETTING.paddingLeft
        }}
      >
        {INFO.love.map((l, i) => {
          return <LoveCard key={i} name={l} />
        })}
      </Box>
    </Box>
  )
}

const LoveCard = (props) => {
  const { name } = props
  return (
    <Typography
      variant='desc'
      sx={{
        px: '10px',
        py: '3px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '6px',
        color: '#fff',
        backgroundColor: '#80706B'
      }}
    >
      {name}
    </Typography>
  )
}

export default WhatILove
