import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import CircleIcon from '@mui/icons-material/Circle'
import Card from '~/components/Card'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { PROFILE_CONFIG } from '~/config/profile.jsx'
import { BRANDING_CONFIG } from '~/config/branding.js'
import { useProjectNavigation } from '~/hooks'
import { AnimatedContainer, StaggeredContainer } from '~/components/ui/AnimatedComponents'
import { fadeInUp, cardHover, cardTap } from '~/utils/animations'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function Project() {
  const { projects } = PROFILE_CONFIG

  return (
    <BackgroundSection>
      <TypographyTitle text="PROJECTS" />
      <StaggeredContainer>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            maxWidth: '600px',
            gap: 4,
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))}
        </Box>
      </StaggeredContainer>
    </BackgroundSection>
  )
}

export default Project

const ProjectCard = ({ project, index }) => {
  const { name, description, technologies, liveUrl, githubUrl } = project
  const { dimensions } = BRANDING_CONFIG
  const navigate = useNavigate()
  const { getProjectDetailPath } = useProjectNavigation()
  
  const projectUrl = liveUrl || githubUrl
  const hasUrl = projectUrl && projectUrl !== ''

  const handleCardClick = () => {
    navigate(getProjectDetailPath(name))
  }

  return (
    <AnimatedContainer variant="fadeInUp">
      <motion.div
        whileHover={cardHover}
        whileTap={cardTap}
        style={{
          borderRadius: dimensions.borderRadius.medium,
          overflow: 'hidden'
        }}
      >
        <Tooltip title="Nhấn để xem chi tiết" placement="top">
          <Box
            sx={{
              borderRadius: dimensions.borderRadius.medium,
              border: '1px solid',
              borderColor: 'primary.text.third',
              background: `linear-gradient(135deg, 
                rgba(139, 90, 43, 0.1) 0%, 
                rgba(139, 90, 43, 0.05) 100%)`,
              backdropFilter: 'blur(10px)',
              p: '15px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              gap: '6px',
              cursor: 'pointer',
              height: 'fit-content',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.6s ease',
                zIndex: 1
              },
              '&:hover::before': {
                transform: 'translateX(100%)'
              }
            }}
            onClick={handleCardClick}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '2px',
                pb: '15px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '18px' },
                  color: 'primary.text.primary',
                  textAlign: 'left',
                  fontWeight: 'bold'
                }}
              >
                {name}
              </Typography>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {hasUrl && <CircleIcon sx={{ width: '8px', height: '8px', color: '#4ade80' }} />}
              </motion.div>
            </Box>
            <Typography 
              variant="desc" 
              sx={{ 
                textAlign: 'left', 
                pb: '15px', 
                color: 'primary.text.secondary', 
                fontSize: '12px',
                position: 'relative',
                zIndex: 2
              }}
            >
              {description}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                width: '100%',
                position: 'relative',
                zIndex: 2
              }}
            >
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Card name={tech} color="primary.button.text" bgColor="primary.button.bg" />
                </motion.div>
              ))}
            </Box>
          </Box>
        </Tooltip>
      </motion.div>
    </AnimatedContainer>
  )
}
