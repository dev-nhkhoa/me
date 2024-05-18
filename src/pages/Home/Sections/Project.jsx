import { Box, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import Card from '~/components/Card'
import TypographyTitle from '~/components/TypographyTitle'
import { INFO } from '~/components/Infomation'

const Project = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
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
        border: '1px solid',
        borderColor: 'primary.text.third',
        backgroundColor: 'primary.text.third',
        p: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        width: '130px',
        maxHeight: '240px',
        overflow: 'hidden',
        gap: '6px',
        cursor: 'pointer',
        height: 'fit-content'
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
  )
}
