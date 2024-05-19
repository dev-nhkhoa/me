import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Avatar from '~/assets/images/avatar.jpg'
import { INFO } from '~/components/Infomation'
import { randomQuote } from '~/utils/randomQuote'

function AboutMe() {
  const generateQuote = randomQuote()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="desc" sx={{ color: 'primary.text.secondary' }}>
            {generateQuote.quote}
          </Typography>
          <Typography variant="desc" sx={{ textAlign: 'right', color: 'primary.text.secondary', textDecoration: 'underline' }}>
            {generateQuote.author}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'right', sm: 'space-between' },
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            alignItems: 'start',
            cursor: 'pointer',
            ':hover': {
              fontWeight: 'bold'
            }
          }}
        >
          <Typography variant="title" sx={{ color: 'primary.text.primary' }}>
            ABOUT
          </Typography>
          <Typography
            variant="title"
            sx={{
              fontSize: '28px',
              color: 'primary.text.primary',
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
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
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'start', alignItems: 'center' }}>
            {/* role & social */}
            <Box sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
              <Typography
                sx={{
                  textAlign: { xs: 'right', sm: 'center' },
                  fontSize: { xs: '14px', sm: '18px' },
                  color: 'primary.text.third',
                  fontWeight: '900'
                }}
              >
                {INFO.fullName}
              </Typography>
              <Typography variant="desc" sx={{ fontWeight: 'bold', textAlign: 'right', color: 'primary.text.third' }}>
                {INFO.role}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: '6px',
                  justifyContent: 'right',
                  pt: '6px',
                  color: 'primary.text.secondary'
                }}
              >
                {INFO.socials.map((s, i) => {
                  return (
                    <Box sx={{ cursor: 'pointer', ':hover': { color: 'primary.text.third' } }} key={i} onClick={() => window.open(s.link)}>
                      {s.element}
                    </Box>
                  )
                })}
              </Box>
            </Box>
            <Box
              sx={{
                width: '80px',
                height: '80px',
                backgroundColor: '#999',
                borderRadius: '99999px'
              }}
            >
              <img
                src={Avatar}
                style={{
                  objectFit: 'fill',
                  width: '80px',
                  height: '80px',
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
