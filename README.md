# GhostAgent-nodejs
Generator User-Agent ringan dan tangguh tanpa dependensi eksternal. Didesain untuk performa tinggi dan deteksi bot yang minimal.

## Instalasi
Tidak perlu instalasi via npm. Cukup salin folder `src/` dan `data.json` ke proyek Anda.

## Penggunaan
```javascript
const uaGenerator = require('./src/index');

// Generate untuk desktop (default)
const desktopUA = uaGenerator({ device: 'desktop' });

// Generate untuk mobile
const mobileUA = uaGenerator({ device: 'mobile' });
```
