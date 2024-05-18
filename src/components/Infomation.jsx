import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from '@mui/material'

export const INFO = {
  quotes: [
    {
      quote: '“Learning never exhaust the mind”',
      author: 'Leonardo Da Vinci.'
    },
    {
      quote: '“Learning how to learn is the most important skill.”',
      author: 'Tony Buzan.'
    },
    {
      quote: '“Always keep things simple.”',
      author: 'me.'
    },
    {
      quote: '“Do not lose yourself.”',
      author: 'me.'
    }
  ],
  fullName: 'TRUONG NGUYEN ANH KHOA',
  role: 'DEVELOPER',
  introduction:
    'Hi there! I am Khoa, a young developer from Vietnam. I love to learn new things and build cool stuffs. I am currently studying Information Systems at Van Lang University. I am passionate about technology, music, art, games and furniture. I am always open to new opportunities and challenges. Feel free to contact me if you have any questions or just want to say hi. Have a nice day! Cheers.',
  works: [
    {
      time: '2018 - 2022',
      work: [
        {
          role: 'Minecraft Server Development',
          workPlace: 'Remote',
          description: 'Developed and maintained a cross platform Minecraft server with a team of developers.'
        }
      ]
    },
    {
      time: 'present',
      work: [
        {
          role: 'Freelancer',
          workPlace: 'Home',
          description: 'Learning and working on various projects. Currently working on a personal website and a project for VLU students.'
        }
      ]
    }
  ],
  education: [
    {
      time: '2019 - 2022',
      school: (
        <p>
          Learned at{' '}
          <Link href="https://www.facebook.com/doantruongthptphamvansang/" target="_blank" rel="noopener" sx={{ color: '#7B4F8E', fontWeight: 'bold', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
            Pham Van Sang High School.
          </Link>
        </p>
      )
    },
    {
      time: '2022 - now',
      school: (
        <p>
          Learning Information Systems at{' '}
          <Link href="https://www.vlu.edu.vn" target="_blank" rel="noopener" sx={{ color: '#7B4F8E', textDecoration: 'none', fontWeight: 'bold', ':hover': { textDecoration: 'underline' } }}>
            Van Lang University.
          </Link>
        </p>
      )
    }
  ],
  skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'ReactJS' }, { name: 'NodeJS' }, { name: 'Java' }, { name: 'PHP' }, { name: 'Adobe Photoshop' }, { name: 'Adobe Premiere' }, { name: 'Canva' }],
  projects: [
    {
      name: 'CalenVLU',
      desc: 'Learn, Exam schedules for VLU students with Google Calendar integration.',
      tool: ['ReactJS', 'Material UI', 'NodeJS', 'Google API'],
      link: 'https://calen-vlu.vercel.app'
    },
    {
      name: 'Minimal Web',
      desc: 'My personal website.',
      tool: ['Javascript', 'ReactJS', 'Material UI'],
      link: 'https://github.com/dev-nhkhoa/me'
    },
    {
      name: 'SOSCRAFT.NET',
      desc: 'A cross platform Minecraft Server.',
      tool: ['Java'],
      link: ''
    }
  ],
  socials: [
    { element: <FacebookIcon />, link: 'https://www.facebook.com/nhkhoa.a/' },
    { element: <GitHubIcon />, link: 'https://github.com/dev-nhkhoa' },
    { element: <InstagramIcon />, link: 'https://www.instagram.com/nhkhoa.a/' }
  ],
  love: ['Music', 'Art', 'Esport', 'Furniture', 'Universe', 'Movies', 'Travel']
}
