import { Box, Typography } from '@mui/material'
import { INFO } from '~/lib/info'
import CircleIcon from '@mui/icons-material/Circle'
import { SETTING } from '~/app/settings'

const Project = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant='title' sx={{ textAlign: 'left' }}>
        PROJECT:
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
          pl: SETTING.paddingLeft,
          justifyContent: 'start'
        }}
      >
        {INFO.projects.map((p, index) => {
          return (
            <ProjectCard
              key={index}
              name={p.name}
              desc={p.desc}
              tools={p.tool}
              link={p.link}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default Project

const ProjectCard = (props) => {
  const { name, desc, tools, link } = props
  return (
    <Box
      sx={{
        borderRadius: '16px',
        border: '1px solid #80706B',
        p: '15px',
        display: 'flex',
        flexDirection: 'column',
        width: '130px',
        gap: '6px',
        cursor: 'pointer'
      }}
      onClick={() => {
        // Liên kết link
        window.open(link)
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          gap: '2px'
        }}
      >
        {name}
        {link !== '' ? (
          <CircleIcon sx={{ width: '5px', height: '5px', color: 'green' }} />
        ) : (
          ''
        )}
      </Box>
      <Typography
        variant='desc'
        sx={{ fontSize: '14px', textAlign: 'left', pb: '15px' }}
      >
        {desc}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          width: '100%'
        }}
      >
        {tools.map((t, i) => {
          return (
            <Box
              key={i}
              sx={{
                backgroundColor: '#ECECEC',
                color: '#000',
                width: 'fit-content',
                borderRadius: '16px',
                px: '10px',
                fontWeight: 'semi-bold'
              }}
            >
              {t}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
