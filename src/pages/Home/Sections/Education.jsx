import { Box, Typography } from '@mui/material'
import { SETTING } from '~/settings'
import TypographyTitle from '~/components/TypographyTitle'
import { INFO } from '~/components/Infomation'

const Education = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TypographyTitle text="EDUCATION" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {INFO.education.map((e, i) => {
          return <EducationCard key={i} time={e.time} school={e.school} />
        })}
      </Box>
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
