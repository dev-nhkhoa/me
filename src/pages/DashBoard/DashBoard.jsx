import { Box, Container } from '@mui/material'
import AboutMe from './Sections/AboutMe'
import Introduction from './Sections/Introduction'
import Work from './Sections/Work'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Project from './Sections/Project'
import End from './Sections/End'
import WhatILove from './Sections/WhatILove'
import ResponsiveAppBar from '~/components/AppBar/ResponsiveAppBar'

const DashBoard = () => {
  return (
    <Container
      maxWidth='100%'
      disableGutters
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container maxWidth='md' disableGutters>
        <ResponsiveAppBar />
      </Container>
      <Box
        sx={{
          width: { md: '600px', sm: '450px', xs: '350px' },
          display: 'flex',
          flexDirection: 'column',
          gap: '28px'
        }}
      >
        <AboutMe />
        <Introduction />
        <WhatILove />
        <Work />
        <Education />
        <Skills />
        <Project />
        <End />
      </Box>
    </Container>
  )
}

export default DashBoard
