# The Shafa Residence - Landing Page

Website landing page profesional untuk perumahan **The Shafa Residence** di Kota Batu menggunakan Next.js 15, TypeScript, dan Tailwind CSS.

## 🏡 Fitur Utama

- **Landing Page Lengkap** dengan funnel conversion (Awareness → Engagement → Conversion)
- **5 Halaman Utama**:
  - Home (Hero, Keunggulan, Lokasi & Wisata, Tipe Rumah, Galeri, Testimoni, FAQ)
  - Tipe Rumah (Listing + Detail per tipe)
  - Developer Profile
  - Contact
- **WhatsApp Integration** dengan toggle nomor aktif
- **Responsive Design** mobile-first
- **SEO Optimized** dengan metadata per halaman
- **Premium UI/UX** dengan brand color navy + gold

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone atau extract project ke folder Anda

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:3000
```

## 📱 Konfigurasi WhatsApp

### Mengganti Nomor WhatsApp Aktif

Buka file `data/siteConfig.ts` dan ubah nilai `activePhone`:

```typescript
whatsapp: {
  activePhone: 'primary', // atau 'secondary'
  phones: {
    primary: '6282288856560',    // 0822-888-560
    secondary: '6287754551555',  // 0877-5455-1555
  },
}
```

**Cara Kerja:**
- Hanya 1 nomor yang aktif pada satu waktu
- Semua CTA WhatsApp di seluruh website akan menggunakan nomor yang aktif
- Ubah `activePhone` ke `'primary'` atau `'secondary'` sesuai kebutuhan

### Menambah atau Mengubah Nomor

```typescript
phones: {
  primary: '62812XXXXYYYY',   // Format: kode negara + nomor tanpa 0
  secondary: '62877XXXXZZZZ',
}
```

## 🏠 Manajemen Tipe Rumah

### Menambah Tipe Rumah Baru

Edit file `data/houseTypes.ts`:

```typescript
export const houseTypes: HouseType[] = [
  // ... tipe existing
  {
    id: "4",
    slug: "tipe-ruby",  // URL slug: /house-types/tipe-ruby
    name: "Tipe Ruby",
    tagline: "Tagline rumah",
    priceFrom: 950000000,
    priceFormatted: "Rp 950 Juta",
    
    promo: {
      discount: 50000000,
      discountFormatted: "50 Juta",
      badge: "New Launch",
      validity: "Hingga 31 Maret 2026",
    },
    
    scarcity: {
      unitsLeft: 5,
      message: "Tersisa 5 Unit",
    },
    
    specs: {
      landArea: 100,        // m²
      buildingArea: 60,     // m²
      bedrooms: 2,          // Kamar Tidur
      bathrooms: 1,         // Kamar Mandi
      carport: 1,           // Jumlah mobil
      floors: 1,            // Lantai
      electricity: "1300 Watt",
      waterSource: "PDAM",
    },
    
    features: [
      "Fitur 1",
      "Fitur 2",
      // dst...
    ],
    
    suitableFor: [
      {
        category: "Target Market",
        description: "Deskripsi cocok untuk siapa",
      },
    ],
    
    images: {
      hero: "https://images.unsplash.com/...",
      render3D: ["url1", "url2"],
      floorPlan: "url",
      gallery: ["url1", "url2", "url3", "url4"],
    },
  },
];
```

### Mengubah Promo

Edit bagian `promo` pada tipe rumah yang diinginkan:

```typescript
promo: {
  discount: 100000000,              // Jumlah diskon
  discountFormatted: "100 Juta",    // Tampilan diskon
  badge: "Promo Launching",          // Label badge
  validity: "Hingga 31 Januari 2026", // Masa berlaku
},
```

Untuk menghapus promo, set nilai `promo` menjadi `undefined`:

```typescript
promo: undefined,
```

### Kelangkaan (Scarcity)

```typescript
scarcity: {
  unitsLeft: 3,
  message: "Sisa 3 Unit",
},
```

## 🎨 Kustomisasi Warna & Desain

### Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    // ... shades dari 50-950
    900: '#1e2749',  // Deep Navy
    950: '#0A1128',  // Darkest Navy - Base
  },
  gold: {
    // ... shades
    600: '#D4AF37',  // Metallic Gold - Primary Accent
  },
}
```

### Typography

Font default: Plus Jakarta Sans (Google Fonts)

Untuk mengganti font, edit:
1. `app/globals.css` - URL import font
2. `tailwind.config.ts` - konfigurasi fontFamily

## 📊 Manajemen Konten

### Mengubah Informasi Site

Edit `data/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: "The Shafa Residence",
  tagline: "Hunian dekat sejuta wisata.",
  
  // Promo default
  promo: {
    headline: "Diskon 100 Juta",
    validity: "Hanya Bulan Ini",
    badge: "Promo Terbatas",
  },
  
  // Kelangkaan
  scarcity: {
    unitsLeft: 3,
    message: "Sisa 3 Unit",
  },
  
  contact: {
    email: "info@shafaresidence.com",
    address: "Jl. Raya Selecta, Kota Batu, Jawa Timur",
    operationalHours: "Senin - Minggu: 08.00 - 17.00 WIB",
  },
};
```

### Destinasi Wisata

Edit `data/attractions.ts` untuk menambah/mengubah wisata terdekat.

### Testimoni

Edit `data/testimonials.ts` untuk mengelola testimoni pelanggan.

### FAQ

Edit `data/faqs.ts` untuk menambah/mengubah pertanyaan umum.

### Developer Profile

Edit `data/developerProfile.ts` untuk info perusahaan developer.

## 🖼️ Mengganti Gambar

### Menggunakan Gambar Lokal

1. Letakkan gambar di folder `public/images/`
2. Update path di data files:

```typescript
images: {
  hero: "/images/tipe-emerald-hero.jpg",
  render3D: [
    "/images/tipe-emerald-1.jpg",
    "/images/tipe-emerald-2.jpg",
  ],
  // ...
}
```

### Menggunakan Gambar dari URL Eksternal

Pastikan domain sudah di-whitelist di `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    // Tambahkan domain lain jika perlu
  ],
},
```

## 🚀 Production Build

### Build untuk production:

```bash
npm run build
```

### Test production build locally:

```bash
npm run start
```

### Deploy

Website ini dapat di-deploy ke:
- **Vercel** (Recommended - creator Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**
- atau hosting Node.js lainnya

#### Deploy ke Vercel (Easiest):

1. Push code ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Deploy otomatis ✅

## 📁 Struktur Folder

```
ShafaResidence/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── house-types/         # Tipe rumah pages
│   │   ├── page.tsx         # Listing
│   │   └── [slug]/          # Detail page (dynamic)
│   ├── developer/           # Developer page
│   ├── contact/             # Contact page
│   └── not-found.tsx        # 404 page
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                  # Reusable UI components
│       ├── CTAButton.tsx
│       ├── SectionTitle.tsx
│       ├── PromoBadge.tsx
│       ├── FeatureCard.tsx
│       ├── TestimonialCard.tsx
│       ├── FAQAccordion.tsx
│       ├── HouseTypeCard.tsx
│       └── MapWithPins.tsx
├── data/                     # Data & configuration
│   ├── siteConfig.ts        # Site config & WhatsApp
│   ├── houseTypes.ts        # Tipe rumah data
│   ├── attractions.ts       # Wisata terdekat
│   ├── developerProfile.ts  # Developer info
│   ├── testimonials.ts      # Testimoni
│   └── faqs.ts              # FAQ
├── public/                   # Static assets
│   └── images/              # Image placeholders
├── next.config.ts           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── package.json             # Dependencies
```

## 🎯 SEO

Setiap halaman sudah memiliki metadata dasar. Untuk meningkatkan SEO:

1. Update metadata di setiap page:
```typescript
export const metadata: Metadata = {
  title: 'Judul Halaman - The Shafa Residence',
  description: 'Deskripsi halaman...',
  keywords: 'kata, kunci, relevan',
};
```

2. Tambahkan `robots.txt` di folder `public/`
3. Buat `sitemap.xml` untuk submit ke Google Search Console

## 📱 Responsive Design

Website sudah responsive untuk:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

Test di berbagai device menggunakan browser DevTools.

## 🔧 Troubleshooting

### Build Error

```bash
# Clear cache dan reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Image tidak muncul

- Pastikan URL gambar valid
- Untuk eksternal, pastikan domain sudah di whitelist di `next.config.ts`

### WhatsApp link tidak bekerja

- Pastikan format nomor: `62` + nomor tanpa `0` di depan
- Contoh benar: `6282288856560`
- Contoh salah: `082288856560`

## 📞 Support

Untuk pertanyaan atau bantuan lebih lanjut:
- Email: dev@shafaresidence.com
- WhatsApp: Sesuai nomor aktif di website

## 📄 License

© 2026 The Shafa Residence. All rights reserved.

---

**Developed with ❤️ for The Shafa Residence**
