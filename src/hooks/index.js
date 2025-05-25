import { useState, useEffect } from 'react'
import { useColorScheme } from '@mui/material'

// Hook for managing responsive breakpoints
export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 600)
      setIsTablet(width >= 600 && width < 960)
      setIsDesktop(width >= 960)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile, isTablet, isDesktop }
}

// Hook for theme management
export const useTheme = () => {
  const { mode, setMode } = useColorScheme()
  
  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const isDark = mode === 'dark'
  const isLight = mode === 'light'

  return {
    mode,
    setMode,
    toggleTheme,
    isDark,
    isLight
  }
}

// Hook for project navigation
export const useProjectNavigation = () => {
  const createProjectSlug = (projectName) => {
    return projectName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  }

  const getProjectDetailPath = (projectName) => {
    return `/project/${createProjectSlug(projectName)}`
  }

  return {
    createProjectSlug,
    getProjectDetailPath
  }
}