import { Box } from '@mui/material'
import { SETTING } from '~/settings'
import Card from '~/components/Card'
import TypographyTitle from '~/components/TypographyTitle'
import { INFO } from '~/components/Infomation'

const Skills = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
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
    </Box>
  )
}

export default Skills
