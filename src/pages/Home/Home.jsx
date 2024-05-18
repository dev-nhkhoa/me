import AboutMe from './Sections/AboutMe'
import Introduction from './Sections/Introduction'
import Work from './Sections/Work'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Project from './Sections/Project'
import WhatILove from './Sections/WhatILove'
import Background from '~/components/Background'

const Home = () => {
  // NOTE:
  // loại bỏ setting
  // tạo component cho Skill Card, love card children : bgColor & color done
  // fix footer done
  // project card fixed height, nếu nhiều card con quá thì hiện ...
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
