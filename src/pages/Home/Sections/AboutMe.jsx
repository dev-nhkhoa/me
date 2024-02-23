import { Box, Typography } from '@mui/material'
import { INFO } from '~/app/info'
import Avatar from '~/assets/images/avatar.jpg'
import { SETTING } from '~/app/settings'
import { randomQuote } from '~/utils/randomQuote'

const AboutMe = () => {
  const generateQuote = randomQuote()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: SETTING.paddingTop
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='desc'>{generateQuote.quote}</Typography>
          <Typography variant='desc' sx={{ textAlign: 'right' }}>
            {generateQuote.author}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}
        >
          <Typography>ABOUT</Typography>
          <Typography sx={{ fontSize: '28px' }}>ME</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end'
          }}
        >
          {/* Avater & role & social */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'end' }}>
            {/* role & social */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='title'>{INFO.fullName}</Typography>
              <Typography variant='desc' sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                {INFO.role}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: '6px',
                  justifyContent: 'right',
                  pt: '6px'
                }}
              >
                {INFO.socials.map((s, i) => {
                  return (
                    <Box sx={{ cursor: 'pointer' }} key={i} onClick={() => window.open(s.link)}>
                      {s.element}
                    </Box>
                  )
                })}
              </Box>
            </Box>
            <Box
              sx={{
                width: '60px',
                height: '60px',
                backgroundColor: '#999',
                borderRadius: '99999px',
                border: '1px solid #000'
              }}
            >
              <img
                src={Avatar}
                style={{
                  objectFit: 'fill',
                  width: '60px',
                  height: '60px',
                  borderRadius: '99999px'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutMe
