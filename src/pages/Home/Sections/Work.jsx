import { Box, Typography } from '@mui/material'
import { INFO } from '~/components/Infomation'
import TypographyTitle from '~/components/TypographyTitle'
import { SETTING } from '~/settings'

const Work = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TypographyTitle text="WORK" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {INFO.works.map((work, index) => {
          return <WorkCard key={index} time={work.time} work={work.work} />
        })}
      </Box>
    </Box>
  )
}

export default Work

const WorkCard = (props) => {
  const { time, work } = props
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
        {work.map((w, index) => {
          return (
            <Box key={index} sx={{ pb: '6px', display: 'flex', justifyContent: 'right', flexDirection: 'column' }}>
              <Typography variant="desc" sx={{ textAlign: 'right', color: 'primary.text.primary', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>
                {w.role}:
              </Typography>
              <Box sx={{ textAlign: 'justify', textIndent: SETTING.textIndent }}>
                <Typography
                  variant="desc"
                  sx={{
                    color: 'primary.text.secondary'
                  }}
                >
                  {w.description}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
