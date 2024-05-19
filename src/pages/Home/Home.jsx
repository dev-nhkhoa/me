import AboutMe from './Sections/AboutMe'
import Introduction from './Sections/Introduction'
import Work from './Sections/Work'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Project from './Sections/Project'
import WhatILove from './Sections/WhatILove'
import Background from '~/components/Background'

function Home() {
  return (
    <Background>
      <AboutMe />
      <Introduction />
      <WhatILove />
      <Work />
      <Education />
      <Skills />
      <Project />
    </Background>
  )
}

export default Home
