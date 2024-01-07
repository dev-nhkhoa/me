import { Box, Typography } from '@mui/material'
import { SETTING } from '~/app/settings'
import { INFO } from '~/lib/info'

const Education = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant='title' sx={{ textAlign: 'left' }}>
        EDUCATION:
      </Typography>
      {INFO.education.map((e, i) => {
        return <EducationCard key={i} time={e.time} school={e.school} />
      })}
    </Box>
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
        pl: SETTING.paddingLeft
      }}
    >
      <Typography variant='secondTitle' sx={{ fontWeight: 'bold' }}>
        {time}:
      </Typography>
      <Typography variant='desc' sx={{ fontSize: '14px', textAlign: 'right' }}>
        {school}
      </Typography>
    </Box>
  )
}
