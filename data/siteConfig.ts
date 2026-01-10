// Site Configuration
export const siteConfig = {
  name: "The Shafa Residence",
  tagline: "Hunian dekat sejuta wisata.",
  description: "Perumahan premium di Kota Batu dengan view Gunung Panderman & Arjuno. Dekat wisata Jatim Park, Museum Angkut, dan Selecta.",
  
  // WhatsApp Configuration - Toggle between two numbers
  whatsapp: {
    activePhone: 'primary' as 'primary' | 'secondary',
    phones: {
      primary: '6282288856560', // 0822-888-560
      secondary: '6287754551555', // 0877-5455-1555
    },
  },
  
  // Get active WhatsApp number with country code
  getActiveWhatsApp(): string {
    return this.whatsapp.phones[this.whatsapp.activePhone];
  },
  
  // Get formatted display number
  getDisplayPhone(): string {
    const phone = this.whatsapp.phones[this.whatsapp.activePhone];
    if (phone === '6282288856560') return '0822-888-560';
    return '0877-5455-1555';
  },
  
  // Default promo configuration
  promo: {
    headline: "Diskon 100 Juta",
    validity: "Hanya Bulan Ini",
    badge: "Promo Terbatas",
  },
  
  // Scarcity messaging
  scarcity: {
    unitsLeft: 3,
    message: "Sisa 3 Unit",
  },
  
  // Contact information
  contact: {
    email: "info@shafaresidence.com",
    address: "Jl. Raya Selecta, Kota Batu, Jawa Timur",
    operationalHours: "Senin - Minggu: 08.00 - 17.00 WIB",
  },
  
  // Social media
  social: {
    instagram: "https://instagram.com/shafaresidence",
    facebook: "https://facebook.com/shafaresidence",
    youtube: "https://youtube.com/@shafaresidence",
  },
};

export type SiteConfig = typeof siteConfig;
