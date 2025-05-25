import { ANIMATION_DURATION } from '~/constants'

// ========================================
// ANIMATION VARIANTS - Tập trung quản lý animations
// ========================================

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: "easeOut"
    }
  }
}

export const fadeInScale = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: "easeOut"
    }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_DURATION.STAGGER,
      delayChildren: 0.2
    }
  }
}

export const cardHover = {
  scale: 1.05,
  y: -5,
  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  transition: { duration: ANIMATION_DURATION.FAST }
}

export const cardTap = {
  scale: 0.95
}

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL
    }
  }
}

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL
    }
  }
}