# 🚀 HƯỚNG DẪN NHANH - QUICK START

## Bước 1: Chỉnh sửa thông tin cá nhân
Mở file `src/config/profile.js` và chỉnh sửa:

```javascript
personalInfo: {
  fullName: 'TÊN CỦA BẤN',           // ← Đổi thành tên của bạn
  displayName: 'Nickname',          // ← Tên hiển thị
  role: 'VỊ TRÍ CÔNG VIỆC',         // ← Vị trí của bạn
  // ... các thông tin khác
}
```

## Bước 2: Thay đổi màu sắc và font
Mở file `src/config/branding.js` và chỉnh sửa:

```javascript
colors: {
  light: {
    text: {
      primary: '#000',      // ← Màu chữ chính
      secondary: '#252525', // ← Màu chữ phụ
      accent: '#CFB997'     // ← Màu nhấn
    }
  }
}
```

## Bước 3: Thay ảnh avatar và logo
1. Thay file `src/assets/images/avatar.jpg`
2. Thay file `src/assets/images/nhkhoa-logo-nobg.png`

## Bước 4: Test
```bash
npm run dev
```

Xem hướng dẫn chi tiết trong `README.md`