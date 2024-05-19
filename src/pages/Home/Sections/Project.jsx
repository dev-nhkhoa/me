import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import CircleIcon from '@mui/icons-material/Circle'
import Card from '~/components/Card'

import { INFO } from '~/components/Infomation'

import TypographyTitle from '~/components/TypographyTitle'
import BackgroundSection from '~/components/BackgroundSection'

function Project() {
  return (
    <BackgroundSection>
      <TypographyTitle text="PROJECTS" />
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {INFO.projects.map((p, index) => {
            if (index % 2 === 0) return <ProjectCard key={index} name={p.name} desc={p.desc} tools={p.tool} link={p.link} />
          })}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {INFO.projects.map((p, index) => {
            if (index % 2 !== 0) return <ProjectCard key={index} name={p.name} desc={p.desc} tools={p.tool} link={p.link} />
          })}
        </Box>
      </Box>
    </BackgroundSection>
  )
}

export default Project

const ProjectCard = (props) => {
  const { name, desc, tools, link } = props
  return (
    <Tooltip title={link && 'Nhấn để xem'} placement="top">
      <Box
        sx={{
          borderRadius: '16px',
          border: '1px solid',
          borderColor: 'primary.text.third',
          backgroundColor: 'primary.text.third',
          p: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          width: '130px',
          maxHeight: '250px',
          overflow: 'hidden',
          gap: '6px',
          cursor: 'pointer',
          height: 'fit-content',
          ':hover': {
            transform: 'scale(1.05)',
            transition: 'all 0.6s ease',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          }
        }}
        onClick={() => {
          if (link !== '') window.open(link)
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2px',
            pb: '15px'
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '18px' },
              color: 'primary.text.primary',
              textAlign: 'left'
            }}
          >
            {name}
          </Typography>
          <Typography>{link && <CircleIcon sx={{ width: '5px', height: '5px', color: 'green' }} />}</Typography>
        </Box>
        <Typography variant="desc" sx={{ textAlign: 'left', pb: '15px', color: 'primary.text.secondary', fontSize: '12px' }}>
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
            return <Card key={i} name={t} color="primary.button.text" bgColor="primary.button.bg" />
          })}
        </Box>
      </Box>
    </Tooltip>
  )
}
