import { Box, Typography } from '@mui/material'
import { INFO } from '~/lib/info'
import Avatar from '~/assets/images/avatar.jpg'

const AboutMe = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: '28px'
        }}
      >
        <Typography variant='text' sx={{ fontSize: '14px' }}>
          {INFO.quote}
        </Typography>
      </Box>
      {/* About Me */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/*  about me */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}
        >
          <Typography>ABOUT</Typography>
          <Typography sx={{ fontWeight: 'semi-bold', fontSize: '28px' }}>
            ME
          </Typography>
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
              <Typography
                variant='text'
                sx={{ fontWeight: 'bold', textAlign: 'right' }}
              >
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
                    <Box
                      sx={{ cursor: 'pointer' }}
                      key={i}
                      onClick={() => window.open(s.link)}
                    >
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
