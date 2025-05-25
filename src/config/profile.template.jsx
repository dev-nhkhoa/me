// ========================================
// TEMPLATE CẤU HÌNH - COPY VÀ CHỈNH SỬA
// ========================================
// File này là template mẫu. Copy nội dung này vào profile.js và chỉnh sửa theo thông tin của bạn
// This file is a template. Copy this content to profile.js and edit with your information

import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import Link from '@mui/material/Link'

export const PROFILE_CONFIG = {
  // ========================================
  // THÔNG TIN CÁ NHÂN - PERSONAL INFO
  // ========================================
  personalInfo: {
    fullName: 'HỌ VÀ TÊN CỦA BẠN',
    displayName: 'Nickname', // Tên hiển thị trên logo
    role: 'VỊ TRÍ CÔNG VIỆC CỦA BẠN',
    email: 'email@example.com',
    phone: '+84 xxx xxx xxx',
    location: 'Thành phố, Quốc gia',
  },

  // ========================================
  // GIỚI THIỆU BẢN THÂN - INTRODUCTION
  // ========================================
  introduction: `Viết đoạn giới thiệu về bản thân ở đây. Bạn có thể nói về background, đam mê, mục tiêu nghề nghiệp, v.v. Hãy viết một cách tự nhiên và thể hiện được cá tính của mình.`,

  // ========================================
  // QUOTES YÊU THÍCH - FAVORITE QUOTES
  // ========================================
  quotes: [
    {
      quote: '"Câu nói yêu thích số 1"',
      author: 'Tác giả'
    },
    {
      quote: '"Câu nói yêu thích số 2"',
      author: 'Tác giả khác'
    },
    // Thêm nhiều quotes khác...
  ],

  // ========================================
  // KINH NGHIỆM LÀM VIỆC - WORK EXPERIENCE
  // ========================================
  workExperience: [
    {
      time: '2023 - hiện tại',
      jobs: [
        {
          role: 'Vị trí công việc hiện tại',
          workPlace: 'Tên công ty',
          description: 'Mô tả công việc, trách nhiệm, thành tựu...'
        }
      ]
    },
    {
      time: '2022 - 2023',
      jobs: [
        {
          role: 'Vị trí công việc trước đó',
          workPlace: 'Tên công ty cũ',
          description: 'Mô tả công việc trước đó...'
        }
      ]
    },
    // Thêm kinh nghiệm khác...
  ],

  // ========================================
  // HỌC VẤN - EDUCATION
  // ========================================
  education: [
    {
      time: '2020 - 2024',
      school: (
        <p>
          Tốt nghiệp tại{' '}
          <Link 
            href="https://university-website.com" 
            target="_blank" 
            rel="noopener" 
            sx={{ 
              color: '#7B4F8E', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              ':hover': { textDecoration: 'underline' } 
            }}
          >
            Tên trường đại học
          </Link>
        </p>
      )
    },
    {
      time: '2017 - 2020',
      school: 'Tên trường trung học'
    },
    // Thêm học vấn khác...
  ],

  // ========================================
  // KỸ NĂNG - SKILLS
  // ========================================
  skills: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'ReactJS' },
    { name: 'NodeJS' },
    { name: 'Python' },
    { name: 'Java' },
    { name: 'SQL' },
    // Thêm kỹ năng khác...
  ],

  // ========================================
  // DỰ ÁN - PROJECTS
  // ========================================
  projects: [
    {
      name: 'Tên dự án 1',
      description: 'Mô tả ngắn gọn về dự án, tính năng chính...',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB'],
      liveUrl: 'https://demo-link.com', // Link demo
      githubUrl: 'https://github.com/username/repo' // Link GitHub
    },
    {
      name: 'Tên dự án 2',
      description: 'Mô tả dự án thứ 2...',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      liveUrl: '', // Để trống nếu không có demo
      githubUrl: 'https://github.com/username/repo2'
    },
    // Thêm dự án khác...
  ],

  // ========================================
  // MẠNG XÃ HỘI - SOCIAL MEDIA
  // ========================================
  socialMedia: [
    { 
      name: 'Facebook',
      icon: <FacebookIcon />, 
      url: 'https://facebook.com/your-profile' 
    },
    { 
      name: 'GitHub',
      icon: <GitHubIcon />, 
      url: 'https://github.com/your-username' 
    },
    { 
      name: 'LinkedIn',
      icon: <LinkedInIcon />, 
      url: 'https://linkedin.com/in/your-profile' 
    },
    { 
      name: 'Instagram',
      icon: <InstagramIcon />, 
      url: 'https://instagram.com/your-profile' 
    },
    { 
      name: 'Twitter',
      icon: <TwitterIcon />, 
      url: 'https://twitter.com/your-profile' 
    },
    // Xóa những mạng xã hội không dùng
  ],

  // ========================================
  // SỞ THÍCH - INTERESTS
  // ========================================
  interests: [
    'Lập trình', 
    'Âm nhạc', 
    'Phim ảnh', 
    'Du lịch', 
    'Đọc sách', 
    'Game', 
    'Thể thao'
    // Thêm sở thích khác...
  ],

  // ========================================
  // HÌNH ẢNH - IMAGES
  // ========================================
  images: {
    avatar: '/src/assets/images/your-avatar.jpg', // Đường dẫn avatar
    logo: '/src/assets/images/your-logo.png' // Đường dẫn logo
  },

  // ========================================
  // COPYRIGHT
  // ========================================
  copyright: {
    year: '2024',
    owner: 'Tên của bạn'
  }
}