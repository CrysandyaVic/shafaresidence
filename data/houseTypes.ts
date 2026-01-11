export interface HouseType {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  priceFrom: number;
  priceFormatted: string;
  
  // Promo & Scarcity
  promo?: {
    discount: number;
    discountFormatted: string;
    badge: string;
    validity: string;
  };
  scarcity?: {
    unitsLeft: number;
    message: string;
  };
  
  // Specifications
  specs: {
    landArea: number; // LT in m²
    buildingArea: number; // LB in m²
    bedrooms: number; // KT
    bathrooms: number; // KM
    carport: number;
    floors: string; // e.g., "2 Lantai", "2 Lantai + Rooftop"
    electricity: string; // e.g., "1300 Watt"
    waterSource: string; // e.g., "PDAM / PAM"
  };
  
  // Technical Specifications (Common for all types)
  technicalSpecs: {
    foundation: string;
    wall: string;
    roof: string;
    roofFrame: string;
    ceiling: string;
    flooring: string;
    sanitary: string;
    doorFrame: string;
    doorWindow: string;
  };
  
  // Features
  features: string[];
  
  // Target Market
  suitableFor: {
    category: string;
    description: string;
  }[];
  
  // Images (placeholders)
  images: {
    hero: string;
    render3D: string[];
    floorPlan: string;
    gallery: string[];
  };
}

// Common technical specifications for all house types
export const commonTechnicalSpecs = {
  foundation: "Batu Kali & Beton Bertulang",
  wall: "Bata Ringan, Plester & Aci",
  roof: "Genteng Beton",
  roofFrame: "Baja Ringan",
  ceiling: "Metal Puring & Gypsum",
  flooring: "Granit 60x60",
  sanitary: "Monoblok, Shower",
  doorFrame: "Aluminium",
  doorWindow: "Pintu Engineering",
};

export const houseTypes: HouseType[] = [
  {
    id: "1",
    slug: "tipe-austine",
    name: "Type Austine",
    tagline: "Hunian Eksklusif 2 Lantai + Rooftop",
    priceFrom: 850000000,
    priceFormatted: "Rp 850 Juta",
    
    promo: {
      discount: 100000000,
      discountFormatted: "100 Juta",
      badge: "Promo Launching",
      validity: "Hingga 31 Januari 2026",
    },
    
    scarcity: {
      unitsLeft: 3,
      message: "Hanya Tersisa 3 Unit",
    },
    
    specs: {
      landArea: 68,
      buildingArea: 70,
      bedrooms: 3,
      bathrooms: 2,
      carport: 1,
      floors: "2 Lantai + Rooftop",
      electricity: "1300 Watt",
      waterSource: "PDAM / PAM",
    },
    
    technicalSpecs: commonTechnicalSpecs,
    
    features: [
      "3 Kamar Tidur Lapang",
      "2 Kamar Mandi",
      "Rooftop Siap Pakai",
      "View Gunung Panderman",
      "Cluster Eksklusif",
      "Dekat Wisata (5-10 Menit)",
    ],
    
    suitableFor: [
      {
        category: "Keluarga Muda",
        description: "Ideal untuk keluarga muda dengan 1-2 anak, lengkap dengan rooftop untuk area santai keluarga.",
      },
      {
        category: "Investasi",
        description: "Lokasi strategis dekat wisata dengan potensi apresiasi tinggi.",
      },
    ],
    
    images: {
      hero: "/compressed_img/austine/aus2.webp",
      render3D: [
        "/compressed_img/austine/aus2.webp",
      ],
      floorPlan: "/compressed_img/austine/denah austine.webp",
      gallery: [
        "/compressed_img/austine/Interior Austine 001.webp",
        "/compressed_img/austine/Interior Austine 002.webp",
        "/compressed_img/austine/Interior Austine 003.webp",
        "/compressed_img/austine/Interior Austine 004.webp",
        "/compressed_img/austine/Interior Austine 005.webp",
        "/compressed_img/austine/Interior Austine 006.webp",
        "/compressed_img/austine/Interior Austine 007.webp",
      ],
    },
  },
  
  {
    id: "2",
    slug: "tipe-barryl",
    name: "Type Barryl",
    tagline: "Rumah 2 Lantai Nyaman untuk Keluarga",
    priceFrom: 1200000000,
    priceFormatted: "Rp 1.2 Miliar",
    
    promo: {
      discount: 80000000,
      discountFormatted: "80 Juta",
      badge: "Best Seller",
      validity: "Hingga 28 Februari 2026",
    },
    
    scarcity: {
      unitsLeft: 5,
      message: "Tersedia 5 Unit",
    },
    
    specs: {
      landArea: 60,
      buildingArea: 63,
      bedrooms: 3,
      bathrooms: 2,
      carport: 1,
      floors: "2 Lantai",
      electricity: "1300 Watt",
      waterSource: "PDAM / PAM",
    },
    
    technicalSpecs: commonTechnicalSpecs,
    
    features: [
      "3 Kamar Tidur",
      "2 Kamar Mandi",
      "Desain 2 Lantai Efisien",
      "View Gunung Panderman",
      "One Gate System",
      "Dekat Wisata & Fasilitas Umum",
    ],
    
    suitableFor: [
      {
        category: "Keluarga Berkembang",
        description: "Cocok untuk keluarga dengan 1-2 anak yang membutuhkan ruang nyaman dan efisien.",
      },
      {
        category: "First Home Buyer",
        description: "Pilihan tepat untuk pembeli rumah pertama dengan desain fungsional dan harga terjangkau.",
      },
    ],
    
    images: {
      hero: "/compressed_img/barly/bar2.webp",
      render3D: [
        "/compressed_img/barly/bar2.webp",
        "/compressed_img/barly/1 BARLY HOOK1.webp",
        "/compressed_img/barly/1 BARLY HOOK2.webp",
        "/compressed_img/barly/3 TIPE BARLY1.webp",
        "/compressed_img/barly/3 TIPE BARLY2.webp",
      ],
      floorPlan: "/compressed_img/barly/denah barryl.webp",
      gallery: [
        "/compressed_img/barly/Interior Barryl 001.webp",
        "/compressed_img/barly/Interior Barryl 002.webp",
        "/compressed_img/barly/Interior Barryl 003.webp",
        "/compressed_img/barly/Interior Barryl 004.webp",
        "/compressed_img/barly/Interior Barryl 005.webp",
        "/compressed_img/barly/Interior Barryl 006.webp",
        "/compressed_img/barly/Interior Barryl 007.webp",
      ],
    },
  },
  
  {
    id: "3",
    slug: "tipe-charlotte",
    name: "Type Charlotte",
    tagline: "Rumah Mezzanine Modern & Kompak",
    priceFrom: 1850000000,
    priceFormatted: "Rp 1.85 Miliar",
    
    promo: {
      discount: 150000000,
      discountFormatted: "150 Juta",
      badge: "Exclusive",
      validity: "Limited Time Offer",
    },
    
    scarcity: {
      unitsLeft: 2,
      message: "Hanya 2 Unit Terakhir",
    },
    
    specs: {
      landArea: 60,
      buildingArea: 45,
      bedrooms: 2,
      bathrooms: 2,
      carport: 1,
      floors: "2 Lantai (Mezzanine)",
      electricity: "1300 Watt",
      waterSource: "PDAM / PAM",
    },
    
    technicalSpecs: commonTechnicalSpecs,
    
    features: [
      "2 Kamar Tidur",
      "2 Kamar Mandi",
      "Desain Mezzanine Unik",
      "Ruang Efisien & Fungsional",
      "View Gunung Panderman",
      "Lokasi Strategis",
    ],
    
    suitableFor: [
      {
        category: "Pasangan Muda",
        description: "Ideal untuk pasangan baru menikah atau keluarga kecil dengan desain kompak namun modern.",
      },
      {
        category: "Investasi Villa",
        description: "Cocok untuk investasi villa wisata dengan konsep mezzanine yang menarik dan dekat destinasi wisata.",
      },
      {
        category: "Minimalist Living",
        description: "Sempurna bagi yang menginginkan gaya hidup minimalis dengan ruang yang efisien.",
      },
    ],
    
    images: {
      hero: "/compressed_img/charlotte/CHAR.webp",
      render3D: [
        "/compressed_img/charlotte/CHAR.webp",
        "/compressed_img/charlotte/charloote.webp",
        "/compressed_img/charlotte/charrr.webp",
        "/compressed_img/charlotte/1 CHARLOTTE HOOK1.webp",
        "/compressed_img/charlotte/1 CHARLOTTE HOOK2.webp",
        "/compressed_img/charlotte/2 CHARLOTTE1.webp",
        "/compressed_img/charlotte/2 CHARLOTTE2.webp",
        "/compressed_img/charlotte/2 CHARLOTTE3.webp",
      ],
      floorPlan: "/compressed_img/charlotte/denah charlotte.webp",
      gallery: [
        "/compressed_img/charlotte/Interior Charlotte 001.webp",
        "/compressed_img/charlotte/Interior Charlotte 002.webp",
        "/compressed_img/charlotte/Interior Charlotte 003.webp",
        "/compressed_img/charlotte/Interior Charlotte 004.webp",
        "/compressed_img/charlotte/Interior Charlotte 005.webp",
        "/compressed_img/charlotte/Interior Charlotte 006.webp",
        "/compressed_img/charlotte/Interior Charlotte 007.webp",
      ],
    },
  },
];
