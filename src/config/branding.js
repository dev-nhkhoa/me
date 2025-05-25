// ========================================
// CÁC THIẾT LẬP VỀ GIAO DIỆN - BRANDING & THEME CONFIG
// ========================================
// Chỉnh sửa các thiết lập dưới đây để thay đổi màu sắc và font chữ
// Edit the settings below to change colors and fonts

export const BRANDING_CONFIG = {
  // Font chữ - Typography
  typography: {
    // Google Fonts - Minimalist fonts
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
    
    // Kích thước font
    sizes: {
      title: '18px',
      secondTitle: '12px',
      description: '14px',
      large: '28px'
    },
    
    // Font weight - Minimized bold usage
    weights: {
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700'
    }
  },

  // Màu sắc - Colors
  colors: {
    // Theme sáng - Light Theme
    light: {
      primary: '#fff', 
      background: '#fff',
      
      text: {
        primary: '#333333',
        secondary: '#333333',
        accent: '#8B5A2B'
      },
      
      button: {
        background: '#8B5A2B',
        text: '#eee'
      },
      
      border: '#8B5A2B',
      hover: '#f5f5f5'
    },
    
    // Theme tối - Dark Theme
    dark: {
      primary: '#95cce7',
      background: '#023047',
      
      text: {
        primary: '#eee',
        secondary: '#eee',
        accent: '#95cce7'
      },
      
      button: {
        background: '#95cce7',
        text: '#023047'
      },
      
      border: '#95cce7',
      hover: '#034a61'
    },
    
    // Màu đặc biệt - Special Colors
    special: {
      link: '#7B4F8E',
      success: 'green',
      warning: '#ff9800',
      error: '#f44336'
    }
  },

  // Khoảng cách - Spacing
  spacing: {
    paddingTop: '28px',
    paddingLeft: '20px',
    textIndent: '20px',
    sectionGap: '28px',
    cardGap: '6px',
    elementGap: '8px'
  },

  // Kích thước - Dimensions
  dimensions: {
    // Kích thước avatar
    avatar: {
      width: '80px',
      height: '80px'
    },
    
    // Kích thước logo
    logo: {
      width: '32px',
      height: '32px'
    },
    
    // Kích thước button
    button: {
      width: '32px',
      height: '32px'
    },
    
    // Chiều rộng container - Updated for ProjectDetail
    container: {
      mobile: '300px',
      desktop: '450px',
      maxWidth: '80vw' // 4/5 of screen width
    },
    
    // Border radius
    borderRadius: {
      small: '8px',
      medium: '16px',
      large: '99999px'
    }
  },

  // Hiệu ứng - Effects
  effects: {
    // Transition
    transition: 'all 0.6s ease',
    
    // Box shadow
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    
    // Hover scale
    hoverScale: 'scale(1.05)',
    
    // Opacity
    opacity: '0.9'
  }
}