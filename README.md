# Portfolio Website - Hướng dẫn sử dụng

Đây là trang web portfolio cá nhân được xây dựng với Vite & Material UI. Website đã được cấu trúc lại để dễ dàng chỉnh sửa thông tin cá nhân thông qua các file config.

## 🚀 Cách chạy dự án

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build
```

## 📝 Cách chỉnh sửa thông tin cá nhân

### 1. File cấu hình chính: `src/config/profile.js`

Đây là file quan trọng nhất - chứa TẤT CẢ thông tin cá nhân của bạn:

#### Thông tin cơ bản
```javascript
personalInfo: {
  fullName: 'TÊN ĐẦY ĐỦ CỦA BẠN',
  displayName: 'Tên hiển thị', // Tên trên logo và header
  role: 'VỊ TRÍ CÔNG VIỆC',
  email: 'email@example.com',
  phone: '+84 xxx xxx xxx',
  location: 'Thành phố, Quốc gia'
}
```

#### Giới thiệu về bản thân
```javascript
introduction: `Viết giới thiệu về bản thân ở đây...`
```

#### Câu quote yêu thích
```javascript
quotes: [
  {
    quote: '"Câu nói yêu thích"',
    author: 'Tác giả'
  }
]
```

#### Kinh nghiệm làm việc
```javascript
workExperience: [
  {
    time: '2022 - now',
    jobs: [
      {
        role: 'Vị trí công việc',
        workPlace: 'Công ty',
        description: 'Mô tả công việc...'
      }
    ]
  }
]
```

#### Học vấn
```javascript
education: [
  {
    time: '2022 - now',
    school: 'Tên trường học hoặc JSX component'
  }
]
```

#### Kỹ năng
```javascript
skills: [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' }
]
```

#### Dự án
```javascript
projects: [
  {
    name: 'Tên dự án',
    description: 'Mô tả dự án',
    technologies: ['ReactJS', 'NodeJS'],
    liveUrl: 'https://example.com', // Link demo
    githubUrl: 'https://github.com/...' // Link GitHub
  }
]
```

#### Mạng xã hội
```javascript
socialMedia: [
  { 
    name: 'Facebook',
    icon: <FacebookIcon />, 
    url: 'https://facebook.com/...' 
  }
]
```

#### Sở thích
```javascript
interests: ['Music', 'Art', 'Programming']
```

#### Hình ảnh
```javascript
images: {
  avatar: '/src/assets/images/avatar.jpg',
  logo: '/src/assets/images/logo.png'
}
```

#### Copyright
```javascript
copyright: {
  year: '2024',
  owner: 'Tên của bạn'
}
```

### 2. File cấu hình giao diện: `src/config/branding.js`

File này chứa tất cả thiết lập về màu sắc, font chữ, và giao diện:

#### Font chữ
```javascript
typography: {
  fontFamily: 'monospace', // Đổi font chữ
  sizes: {
    title: '18px',
    secondTitle: '12px',
    description: '14px',
    large: '28px'
  }
}
```

#### Màu sắc
```javascript
colors: {
  light: {
    primary: '#fff',
    background: '#fff',
    text: {
      primary: '#000',
      secondary: '#252525',
      accent: '#CFB997'
    }
  },
  dark: {
    // Màu cho theme tối
  }
}
```

#### Kích thước và khoảng cách
```javascript
dimensions: {
  avatar: { width: '80px', height: '80px' },
  logo: { width: '32px', height: '32px' }
}
```

## 🎨 Thay đổi hình ảnh

1. **Avatar**: Thay thế file `src/assets/images/avatar.jpg`
2. **Logo**: Thay thế file `src/assets/images/nhkhoa-logo-nobg.png`
3. Cập nhật đường dẫn trong `profile.js` nếu cần:
```javascript
images: {
  avatar: '/src/assets/images/your-avatar.jpg',
  logo: '/src/assets/images/your-logo.png'
}
```

## 🔧 Tùy chỉnh nâng cao

### Thêm trang mới
1. Tạo component mới trong `src/pages/`
2. Thêm route trong `src/Router.jsx`
3. Cập nhật menu trong `src/components/ResponsiveAppBar/ResponsiveAppBar.jsx`

### Thêm section mới
1. Tạo component trong `src/pages/Home/Sections/`
2. Import và sử dụng trong `src/pages/Home/Home.jsx`

## 📁 Cấu trúc thư mục

```
src/
├── config/          # 🔧 File cấu hình chính
│   ├── profile.js   # Thông tin cá nhân
│   └── branding.js  # Màu sắc, font chữ
├── components/      # Các component UI
├── pages/          # Các trang
├── assets/         # Hình ảnh, icon
└── utils/          # Utility functions
```

## 💡 Tips

1. **Chỉ chỉnh sửa các file trong thư mục `config/`** để thay đổi thông tin cá nhân
2. **Backup dự án** trước khi thay đổi lớn
3. **Test trên localhost** trước khi deploy
4. **Sử dụng Git** để quản lý phiên bản

## 🚀 Deploy

```bash
# Build production
npm run build

# Deploy lên Vercel, Netlify, hoặc hosting khác
```

---

*Được tạo bởi Nhkhoa - Cấu trúc lại để dễ dàng customize*
