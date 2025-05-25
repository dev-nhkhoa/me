import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { SETTING } from '~/settings'
import { PROFILE_CONFIG } from '~/config/profile.jsx'
import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function Education() {
  const { education } = PROFILE_CONFIG

  return (
    <BackgroundSection>
      <TypographyTitle text="EDUCATION" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {education.map((e, i) => {
          return <EducationCard key={i} time={e.time} school={e.school} />
        })}
      </Box>
    </BackgroundSection>
  )
}

export default Education

const EducationCard = (props) => {
  const { time, school } = props
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pl: SETTING.paddingLeft,
        gap: 3
      }}
    >
      <Typography variant="secondTitle" sx={{ fontWeight: 'bold', color: 'primary.text.third', width: '20%' }}>
        {time}:
      </Typography>
      <Typography variant="desc" sx={{ fontSize: '14px', textAlign: 'right', color: 'primary.text.secondary', width: '80%' }}>
        {school}
      </Typography>
    </Box>
  )
}
