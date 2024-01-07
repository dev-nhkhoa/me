import { Box, Typography } from '@mui/material'
import { SETTING } from '~/app/settings'
import { INFO } from '~/lib/info'

const Skills = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        sx={{ fontSize: '18px', fontWeight: '500', textAlign: 'left' }}
      >
        SKILLS:
      </Typography>
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
          return <SkillCard key={i} name={skill.name} />
        })}
      </Box>
    </Box>
  )
}

export default Skills

const SkillCard = (props) => {
  const { name } = props
  return (
    <Typography
      variant='desc'
      sx={{
        px: '10px',
        py: '3px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '6px',
        color: '#fff',
        backgroundColor: '#80706B'
      }}
    >
      {name}
    </Typography>
  )
}
