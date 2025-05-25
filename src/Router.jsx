import Home from './pages/Home/Home'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/project/:projectName', element: <ProjectDetail /> }
])

export { router }
