import { Box, Typography } from '@mui/material'
import { SETTING } from '~/app/settings'
import { INFO } from '~/app/info'

const Work = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant='title' sx={{ textAlign: 'left' }}>
        WORK:
      </Typography>
      {INFO.works.map((work, index) => {
        return <WorkCard key={index} time={work.time} work={work.work} />
      })}
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
        flexDirection: 'column',
        pl: SETTING.paddingLeft
      }}
    >
      <Typography variant='secondTitle' sx={{ textAlign: 'left' }}>
        {time}:
      </Typography>
      {work.map((w, index) => {
        return (
          <Box key={index} sx={{ pb: '6px' }}>
            <Typography variant='desc' sx={{ textAlign: 'left', color: '#000' }}>
              {w.role} - {w.workPlace}
            </Typography>
            <div
              style={{
                fontSize: '14px',
                textAlign: 'justify',
                textIndent: '20px',
                fontFamily: 'inter',
                color: '#80706B'
              }}
            >
              {w.description}
            </div>
          </Box>
        )
      })}
    </Box>
  )
}
