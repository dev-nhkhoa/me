import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

import { SETTING } from '~/settings'
import { PROFILE_CONFIG } from '~/config/profile.jsx'

function Work() {
  const { workExperience } = PROFILE_CONFIG

  return (
    <BackgroundSection>
      <TypographyTitle text="WORK" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {workExperience.map((work, index) => {
          return <WorkCard key={index} time={work.time} jobs={work.jobs} />
        })}
      </Box>
    </BackgroundSection>
  )
}

export default Work

const WorkCard = (props) => {
  const { time, jobs } = props
  return (
    <Box
      sx={{
        display: 'flex',
        pl: SETTING.paddingLeft,
        justifyContent: 'space-between'
      }}
    >
      <Typography variant="secondTitle" sx={{ textAlign: 'left', color: 'primary.text.third', width: '20%' }}>
        {time}:
      </Typography>
      <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {jobs.map((job, index) => {
          return (
            <Box key={index} sx={{ pb: '6px', display: 'flex', justifyContent: 'right', flexDirection: 'column' }}>
              <Typography variant="desc" sx={{ textAlign: 'right', color: 'primary.text.primary', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>
                {job.role}:
              </Typography>
              <Box sx={{ textAlign: 'justify', textIndent: SETTING.textIndent }}>
                <Typography
                  variant="desc"
                  sx={{
                    color: 'primary.text.secondary'
                  }}
                >
                  {job.description}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
