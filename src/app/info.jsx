import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import { getDate } from '~/utils/getCurrentDate'

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
    }
  ],
  fullName: 'TRUONG NGUYEN ANH KHOA',
  role: 'DEVELOPER',
  introduction:
    'I am currently a 2nd years student at Van Lang University with information Systems major.',
  dateUpdate: getDate(),
  works: [
    {
      time: '2018 - 2022',
      work: [
        {
          role: 'Minecraft Server Development',
          workPlace: 'Remote',
          description:
            'Code plugins using Java, PHP for Startup Minecraft Server. ( LOCM NETWORK, SOSCRAFT.NET, GACHCRAFT.NET )'
        }
      ]
    }
  ],
  education: [
    {
      time: '2022 - now',
      school: 'Learning Information Systems at Van Lang University.'
    }
  ],
  skills: [{ name: 'JavaScript' }],
  projects: [
    {
      name: 'Minimal Web CV',
      desc: 'My CV in the web',
      tool: ['ReactJS', 'Material UI'],
      link: 'https://github.com/dev-nhkhoa/me'
    },
    {
      name: 'SOSCRAFT.NET',
      desc: 'Cross platform Minecraft Server',
      tool: ['Java'],
      link: ''
    }
  ],
  socials: [
    { element: <FacebookIcon />, link: 'https://www.facebook.com/nhkhoa.a/' },
    { element: <GitHubIcon />, link: 'https://github.com/dev-nhkhoa' },
    { element: <InstagramIcon />, link: 'https://www.instagram.com/nhkhoa.a/' }
  ],
  love: ['Tech', 'Music', 'Art', 'Games', 'Furniture']
}
