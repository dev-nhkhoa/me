import { Box, Typography } from '@mui/material'
import { INFO } from '~/lib/info'

const Work = () => {
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
      sx={{ display: 'flex', flexDirection: 'column', pl: '48px', pb: '20px' }}
    >
      <Typography
        sx={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}
      >
        {time}:
      </Typography>
      {work.map((w, index) => {
        return (
          <Box key={index}>
            <Typography sx={{ fontSize: '14px', textAlign: 'left' }}>
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
