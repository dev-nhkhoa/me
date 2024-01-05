import { Box, Container } from '@mui/material'
import AboutMe from './Sections/AboutMe'
import Introduction from './Sections/Introduction'
import Work from './Sections/Work'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Project from './Sections/Project'

const Home = () => {
  return (
    <Container
      maxWidth='100%'
      disableGutters
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
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
        <Work />
        <Education />
        <Skills />
        <Project />
      </Box>
    </Container>
  )
}

export default Home
