import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

export const INFO = {
  quote: '“Keep learning every day! Be better than you yesterday.”',
  fullName: 'TRUONG NGUYEN ANH KHOA',
  role: 'DEVELOPER / VIDEO EDITOR',
  introduction:
    'I am currently a 2nd years student at Van Lang University with information Systems major. I want to be a UI / UX Designer to make a better look for web or things in real life for every one.',
  dateUpdate: '07/01/2024',
  works: [
    {
      time: '2019 - 2022',
      work: [
        {
          role: 'Founder',
          workPlace: 'SOSCRAFT.NET',
          description:
            'Self-development of my Server. I did everything by myself liked: Code base plugins for the systems, and making Youtube, and Tiktok content to attract more members. It was a difficult time but based on that I have learned a lot of things and made a bit of profit.'
        },
        {
          role: 'Administrator',
          workPlace: 'LOCM NETWORK',
          description:
            'Code Minecraft plugins to support Bedrock Edition UI Forms using Java.'
        }
      ]
    },
    {
      time: '2018 - 2019',
      work: [
        {
          role: 'Make a Minecraft Server',
          workPlace: 'Play With Friends',
          description:
            'I learned to code by creating a Minecraft server for my friends. It started as a way to make the game more fun, but I became fascinated with coding and continued to learn and improve my skills.'
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
  skills: [
    { name: 'Java' },
    { name: 'Python' },
    { name: 'PHP' },
    { name: 'Dart' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Figma' },
    { name: 'PaperMC' },
    { name: 'GeyserMC' },
    { name: 'PocketmineMP' },
    { name: 'Canva' },
    { name: 'Adobe Photoshop' },
    { name: 'Adobe Premeire' },
    { name: 'CapCut' }
  ],
  projects: [
    {
      name: 'Minimal Web CV',
      desc: 'My CV in the web',
      tool: ['Javascript', 'Figma', 'React', 'Material UI'],
      link: 'https://github.com/dev-nhkhoa/me'
    },
    {
      name: 'SOSCRAFT.NET',
      desc: 'Cross platform Minecraft Server',
      tool: ['Java', 'PaperMC', 'GeyserMC'],
      link: ''
    }
  ],
  socials: [
    { element: <FacebookIcon />, link: 'https://www.facebook.com/nhkhoa.a/' },
    { element: <GitHubIcon />, link: 'https://github.com/dev-nhkhoa' },
    { element: <InstagramIcon />, link: 'https://www.instagram.com/nhkhoa.a/' }
  ]
}
