import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import { fadeInUp, fadeInScale, staggerContainer } from '~/utils/animations'

// ========================================
// ANIMATED CONTAINERS - Wrapper components với animation
// ========================================

export const AnimatedContainer = ({ children, variant = 'fadeInUp', ...props }) => {
  const variants = {
    fadeInUp,
    fadeInScale,
    staggerContainer
  }

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedBox = ({ children, sx, ...motionProps }) => {
  return (
    <Box
      component={motion.div}
      sx={sx}
      {...motionProps}
    >
      {children}
    </Box>
  )
}

export const StaggeredContainer = ({ children, ...props }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}