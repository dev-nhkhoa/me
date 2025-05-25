import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from '@mui/material/Link'

// ========================================
// THÔNG TIN CÁ NHÂN - PERSONAL INFORMATION
// ========================================
// Chỉnh sửa các thông tin dưới đây để cập nhật trang web của bạn
// Edit the information below to update your website

export const PROFILE_CONFIG = {
  // Thông tin cơ bản - Basic Information
  personalInfo: {
    fullName: 'TRUONG NGUYEN ANH KHOA',
    displayName: 'nhkhoa', // Tên hiển thị trên logo và header
    role: 'Functional Consultant Odoo ERP',
    email: 'work.nhkhoa@gmail.com', // Thêm email nếu cần
    phone: '', // Thêm số điện thoại nếu cần
    location: 'Ho Chi Minh City, Vietnam', // Thêm địa chỉ nếu cần
  },

  // Giới thiệu về bản thân - About Me
  introduction: `Hi there! I am Khoa, a young developer from Vietnam. I love to learn new things and build cool stuffs. I am currently studying Information Systems at Van Lang University. I am passionate about technology, music, art, games and furniture. I am always open to new opportunities and challenges. Feel free to contact me if you have any questions or just want to say hi. Have a nice day! Cheers.`,

  // Các câu quote yêu thích - Favorite Quotes
  quotes: [
    {
      quote: '"Learning never exhaust the mind"',
      author: 'Leonardo Da Vinci.'
    },
    {
      quote: '"Learning how to learn is the most important skill."',
      author: 'Tony Buzan.'
    },
    {
      quote: '"Always keep things simple."',
      author: 'me.'
    },
    {
      quote: '"Do not lose yourself."',
      author: 'me.'
    }
  ],

  // Kinh nghiệm làm việc - Work Experience
  workExperience: [
    {
      time: 'present',
      jobs: [
        {
          role: 'Functional Consultant Odoo ERP',
          workPlace: 'A1 Consulting',
          description: 'Working as a Functional Consultant for Odoo ERP, focusing on business process analysis, requirements gathering, and solution design.'
        }
      ]
    },
    {
      time: '2022 - may 2025',
      jobs: [
        {
          role: 'Freelancer',
          workPlace: 'Home',
          description: 'Learning and working on various projects. Currently working on a personal website and a project for VLU students.'
        }
      ]
    }
  ],

  // Học vấn - Education
  education: [
    {
      time: '2022 - now',
      school: (
        <p>
          Learning Information Systems at{' '}
          <Link 
            href="https://www.vlu.edu.vn" 
            target="_blank" 
            rel="noopener" 
            sx={{ 
              color: '#8B5A2B', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              ':hover': { textDecoration: 'underline' } 
            }}
          >
            Van Lang University.
          </Link>
        </p>
      )
    }
  ],

  // Kỹ năng - Skills
  skills: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'NextJS' },
    { name: 'ReactJS' },
    { name: 'NodeJS' },
    { name: 'ExpressJS' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'PHP' },
    { name: 'Canva' },
    { name: 'Adobe Photoshop' },
    { name: 'Adobe Premiere' },
    { name: 'Jira' },
    { name: 'Figma' },
    { name: 'Confluence' }
  ],

  // Dự án - Projects
  projects: [
    {
      name: 'TrustifyCSR - Transparent Charity Solutions',
      description: 'A platform to connect donors and charities, ensuring transparency and trust in charitable donations using Blockchain.',
      technologies: ['NextJS', 'Fabric HyperLedger', 'Figma', 'Canva'],
      liveUrl: 'https://trustifycsr.tech',
      githubUrl: '',
      detailedDescription: 'TrustifyCSR is a revolutionary platform designed to enhance transparency and trust in charitable donations. By leveraging Blockchain technology, it connects donors directly with charities, ensuring that every contribution is tracked and verified. The platform aims to eliminate fraud and build confidence in the charitable sector. Project for RA KHOI 2025.',
      image: '/src/assets/images/trustifycsr/trustifycsr-preview.png', // Hình ảnh chính
      images: [ // Gallery ảnh (tùy chọn)
        {
          src: '/src/assets/images/trustifycsr/memories-1.png',
          alt: 'TrustifyCSR memories',
          caption: 'Memories of the project development'
        },
        {
          src: '/src/assets/images/trustifycsr/memories-2.png',
          alt: 'TrustifyCSR memories',
          caption: 'Memories of the project development'
        },
        {
          src: '/src/assets/images/trustifycsr/memories-3.png',
          alt: 'TrustifyCSR memories',
          caption: 'Memories of the project development'
        }
      ],
      duration: '5 months',
      role: 'Fullstack Developer',
      timeline: [
        {          
          phase: 'Research & Planning',
          duration: '1 month',
          description: 'Conducted market research, defined project scope, and planned development phases.'
        },
        {
          phase: 'Design & Prototyping',
          duration: '1 month',
          description: 'Created wireframes and prototypes using Figma, focusing on user experience and interface design.'
        },
        {
          phase: 'Development',
          duration: '2 months',
          description: 'Developed the frontend using NextJS and integrated Blockchain functionalities with Fabric HyperLedger.'
        },
        {
          phase: 'Testing & Deployment',
          duration: '1 month',
          description: 'Conducted thorough testing, fixed bugs, and deployed the application to production.'
        }
      ],
      challenges: [
        'Ensuring data integrity and security in a decentralized environment',
        'Integrating Blockchain technology with existing web frameworks',
      ],
      achievements: [
        'Top 21 projects in RA KHOI 2025',
      ]
    },
    {
      name: 'CalendarVLU2.0',
      description: 'Convert Learning Schedule for Van Lang University students into Calendars like Google Calendar or Outlook.',
      technologies: ['NextJS', 'Google API'],
      liveUrl: 'https://calen-vlu.nhkhoa.live',
      githubUrl: 'https://github.com/dev-nhkhoa/calendarVLU2.0', // Thêm link GitHub nếu có
      // Thông tin chi tiết cho trang detail
      detailedDescription: 'CalenVLU is a comprehensive scheduling application designed specifically for Van Lang University students. It seamlessly integrates with Google Calendar to provide students with an intuitive way to manage their academic schedules, including lectures, exams, and important academic events.',
      image: '/src/assets/images/calendarvlu.png', // Hình ảnh chính của project
      images: [ // Gallery ảnh cho project (tùy chọn)
        
      ],
      duration: '3 months',
      role: 'Full-stack Developer',
      timeline: [
        
      ],
      challenges: [
        'Integrating Google Calendar API with complex university scheduling system',
       'Van Lang University\'s unique academic calendar structure',
       'Van Lang University don\'t provide API for student schedules',
      ],
      achievements: [
        'Reduced schedule management',
      ]
    },
    {
      name: 'Minimal Web',
      description: 'My personal website.',
      technologies: ['Javascript', 'ReactJS', 'Material UI'],
      liveUrl: 'https://nhkhoa.live',
      githubUrl: 'https://github.com/dev-nhkhoa/me',
      detailedDescription: 'A clean, minimalist personal portfolio website showcasing my work, skills, and journey as a developer. Built with modern web technologies and focused on performance and user experience.',
      image: '/src/assets/images/minimal-web-home.png', // Hình ảnh chính
      images: [ // Gallery ảnh (tùy chọn)
        
      ],
      duration: '2 months',
      role: 'Frontend Developer & Designer',
      timeline: [
        
      ],
      challenges: [
        
      ],
      achievements: [
        
      ]
    },
  ],

  // Mạng xã hội - Social Media
  socialMedia: [
    { 
      name: 'Facebook',
      icon: <FacebookIcon />, 
      url: 'https://www.facebook.com/nhkhoa.a/' 
    },
    { 
      name: 'GitHub',
      icon: <GitHubIcon />, 
      url: 'https://github.com/dev-nhkhoa' 
    },
    { 
      name: 'Instagram',
      icon: <InstagramIcon />, 
      url: 'https://www.instagram.com/nhkhoa.a/' 
    }
  ],

  // Sở thích - Interests
  interests: ['Music', 'Art', 'Esport', 'Furniture', 'Universe', 'Movies', 'Travel'],

  // Hình ảnh - Images
  images: {
    avatar: '/src/assets/images/avatar.jpg',
    logo: '/src/assets/images/nhkhoa-logo-nobg.png'
  },

  // Thông tin copyright - Copyright
  copyright: {
    year: '2025',
    owner: 'nhkhoa'
  }
}