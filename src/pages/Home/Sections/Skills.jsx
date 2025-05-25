import Box from '@mui/material/Box'
import Card from '~/components/Card'

import { SETTING } from '~/settings'
import { PROFILE_CONFIG } from '~/config/profile.jsx'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function Skills() {
  const { skills } = PROFILE_CONFIG

  return (
    <BackgroundSection>
      <TypographyTitle text="SKILLS" />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          gap: '6px',
          pl: SETTING.paddingLeft
        }}
      >
        {skills.map((skill, i) => {
          return <Card key={i} name={skill.name} color="primary.button.text" bgColor="primary.button.bg" />
        })}
      </Box>
    </BackgroundSection>
  )
}

export default Skills
