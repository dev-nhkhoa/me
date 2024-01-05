import { Box, Typography } from '@mui/material'
import { INFO } from '~/lib/info'

const Education = () => {
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
        pl: '48px'
      }}
    >
      <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
        {time}
      </Typography>
      <Typography variant='text' sx={{ fontSize: '14px', textAlign: 'right' }}>
        {school}
      </Typography>
    </Box>
  )
}
