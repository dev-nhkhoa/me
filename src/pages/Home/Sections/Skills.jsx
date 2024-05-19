import Box from '@mui/material/Box'
import Card from '~/components/Card'

import { SETTING } from '~/settings'
import { INFO } from '~/components/Infomation'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function Skills() {
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
        {INFO.skills.map((skill, i) => {
          return <Card key={i} name={skill.name} color="primary.button.text" bgColor="primary.button.bg" />
        })}
      </Box>
    </BackgroundSection>
  )
}

export default Skills
