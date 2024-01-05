import { Box, Typography } from '@mui/material'
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
        sx={{ display: 'flex', justifyContent: 'left', gap: '6px', pl: '48px' }}
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
      sx={{
        width: '100px',
        height: '17px',
        borderRadius: '6px',
        color: '#fff    ',
        fontSize: '12px',
        backgroundColor: '#80706B'
      }}
    >
      {name}
    </Typography>
  )
}
