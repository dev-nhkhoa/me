import { Box, Typography } from '@mui/material'
import { SETTING } from '~/app/settings'
import { INFO } from '~/lib/info'

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
        pl: SETTING.paddingLeft,
        pb: '20px'
      }}
    >
      <Typography variant='secondTitle' sx={{ textAlign: 'left' }}>
        {time}:
      </Typography>
      {work.map((w, index) => {
        return (
          <Box key={index}>
            <Typography
              variant='desc'
              sx={{ textAlign: 'left', color: '#000' }}
            >
              {w.role} at {w.workPlace}
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
