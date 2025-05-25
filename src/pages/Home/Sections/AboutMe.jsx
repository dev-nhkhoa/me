import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

import { PROFILE_CONFIG } from '~/config/profile.jsx'
import { BRANDING_CONFIG } from '~/config/branding.js'
import { randomQuote } from '~/utils/randomQuote'

function AboutMe() {
  const { personalInfo, socialMedia, images } = PROFILE_CONFIG
  const { dimensions, typography } = BRANDING_CONFIG
  const generateQuote = randomQuote()
  const [openFullscreen, setOpenFullscreen] = useState(false)

  const handleAvatarClick = () => {
    setOpenFullscreen(true)
  }

  const handleCloseFullscreen = () => {
    setOpenFullscreen(false)
  }

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
              fontSize: typography.sizes.large,
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
          {/* Avatar & role & social */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'start', alignItems: 'center' }}>
            {/* role & social */}
            <Box sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
              <Typography
                sx={{
                  textAlign: { xs: 'right', sm: 'center' },
                  fontSize: { xs: '14px', sm: '18px' },
                  color: 'primary.text.third',
                  fontWeight: typography.weights.extraBold
                }}
              >
                {personalInfo.fullName}
              </Typography>
              <Typography variant="desc" sx={{ fontWeight: 'bold', textAlign: 'right', color: 'primary.text.third' }}>
                {personalInfo.role}
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
                {socialMedia.map((social, i) => {
                  return (
                    <Box
                      sx={{
                        cursor: 'pointer',
                        ':hover': { color: 'primary.text.third' }
                      }}
                      key={i}
                      onClick={() => window.open(social.url)}
                    >
                      {social.icon}
                    </Box>
                  )
                })}
              </Box>
            </Box>
            <Box
              sx={{
                width: dimensions.avatar.width,
                height: dimensions.avatar.height,
                backgroundColor: '#999',
                borderRadius: dimensions.borderRadius.large,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
              onClick={handleAvatarClick}
            >
              <img
                src={images.avatar}
                alt="Avatar"
                style={{
                  objectFit: 'cover',
                  width: dimensions.avatar.width,
                  height: dimensions.avatar.height,
                  borderRadius: dimensions.borderRadius.large
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Fullscreen Modal */}
      <Modal
        open={openFullscreen}
        onClose={handleCloseFullscreen}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none'
          }}
        >
          <IconButton
            onClick={handleCloseFullscreen}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={images.avatar}
            alt="Avatar fullscreen"
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '16px'
            }}
          />
        </Box>
      </Modal>
    </>
  )
}

export default AboutMe
