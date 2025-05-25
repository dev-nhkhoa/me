// ========================================
// UTILITY FUNCTIONS - Các hàm tiện ích
// ========================================

// Format functions
export const formatters = {
  // Tạo slug từ string
  createSlug: (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  },

  // Truncate text
  truncateText: (text, maxLength = 100) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  },

  // Format date
  formatDate: (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date))
  }
}

// Validation functions
export const validators = {
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  isValidUrl: (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },

  isEmpty: (value) => {
    return !value || value.trim() === ''
  }
}

// Array utilities
export const arrayUtils = {
  // Chunk array into smaller arrays
  chunk: (array, size) => {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  },

  // Shuffle array
  shuffle: (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  },

  // Get random item from array
  getRandomItem: (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }
}

// DOM utilities
export const domUtils = {
  // Scroll to element
  scrollToElement: (elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  },

  // Copy to clipboard
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  },

  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    )
  }
}

// Performance utilities
export const performanceUtils = {
  // Debounce function
  debounce: (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  },

  // Throttle function
  throttle: (func, limit) => {
    let lastFunc
    let lastRan
    return function(...args) {
      if (!lastRan) {
        func.apply(this, args)
        lastRan = Date.now()
      } else {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(() => {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(this, args)
            lastRan = Date.now()
          }
        }, limit - (Date.now() - lastRan))
      }
    }
  }
}