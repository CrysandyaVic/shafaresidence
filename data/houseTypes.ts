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
    floors: number;
    electricity: string; // e.g., "2200 Watt"
    waterSource: string; // e.g., "PDAM + Sumur Bor"
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

export const houseTypes: HouseType[] = [
  {
    id: "1",
    slug: "tipe-emerald",
    name: "Tipe Emerald",
    tagline: "Hunian Ideal Keluarga Muda",
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
      landArea: 120,
      buildingArea: 70,
      bedrooms: 3,
      bathrooms: 2,
      carport: 1,
      floors: 2,
      electricity: "2200 Watt",
      waterSource: "PDAM + Sumur Bor",
    },
    
    features: [
      "View Gunung Panderman",
      "Row Jalan 6 Meter",
      "Cluster Eksklusif",
      "One Gate System",
      "CCTV 24 Jam",
      "Dekat Wisata (5-10 Menit)",
    ],
    
    suitableFor: [
      {
        category: "Keluarga Muda",
        description: "Ideal untuk pasangan muda dengan 1-2 anak, ruang cukup untuk tumbuh kembang keluarga.",
      },
      {
        category: "Investasi",
        description: "Lokasi strategis dekat wisata menjadikan properti ini memiliki nilai investasi tinggi.",
      },
    ],
    
    images: {
      hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      render3D: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      ],
      floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
      ],
    },
  },
  
  {
    id: "2",
    slug: "tipe-sapphire",
    name: "Tipe Sapphire",
    tagline: "Ruang Lebih Luas untuk Keluarga Berkembang",
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
      landArea: 150,
      buildingArea: 95,
      bedrooms: 4,
      bathrooms: 3,
      carport: 2,
      floors: 2,
      electricity: "3500 Watt",
      waterSource: "PDAM + Sumur Bor",
    },
    
    features: [
      "View Gunung Arjuno & Panderman",
      "Rooftop Garden Ready",
      "Smart Home Ready",
      "Row Jalan 8 Meter",
      "Private Garden",
      "Walking Distance ke Wisata",
    ],
    
    suitableFor: [
      {
        category: "Keluarga Berkembang",
        description: "Cocok untuk keluarga dengan 2-3 anak, dilengkapi ruang tambahan untuk ruang bermain atau home office.",
      },
      {
        category: "Pensiunan Aktif",
        description: "Lingkungan sejuk dan tenang, ideal untuk menikmati masa pensiun dengan akses mudah ke berbagai destinasi.",
      },
    ],
    
    images: {
      hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      render3D: [
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      ],
      floorPlan: "https://images.unsplash.com/photo-1509643492803-0e4276f49061?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600566753229-f7b0c0b1e5b5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
      ],
    },
  },
  
  {
    id: "3",
    slug: "tipe-diamond",
    name: "Tipe Diamond",
    tagline: "Premium Living dengan View Terbaik",
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
      landArea: 200,
      buildingArea: 140,
      bedrooms: 5,
      bathrooms: 4,
      carport: 2,
      floors: 2,
      electricity: "5500 Watt",
      waterSource: "PDAM + Sumur Bor + Penampungan Air",
    },
    
    features: [
      "360° Mountain & City View",
      "Rooftop Lounge",
      "Smart Home System",
      "Private Pool Ready",
      "Home Theater Ready",
      "Premium Finishing",
      "Hook Location",
    ],
    
    suitableFor: [
      {
        category: "Keluarga Besar",
        description: "Sempurna untuk keluarga besar atau multigenerasi dengan kamar tamu dan ruang entertainment lengkap.",
      },
      {
        category: "Executive Family",
        description: "Hunian premium dengan fasilitas lengkap untuk keluarga eksekutif yang menghargai kualitas dan privasi.",
      },
      {
        category: "Investasi Premium",
        description: "Properti eksklusif dengan potensi apresiasi tinggi di kawasan wisata berkembang.",
      },
    ],
    
    images: {
      hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      render3D: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      ],
      floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      ],
    },
  },
];
