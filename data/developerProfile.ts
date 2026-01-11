export interface DeveloperProfile {
  name: string;
  tagline: string;
  establishedYear: number;
  description: string;
  
  vision: string;
  mission: string[];
  
  values: {
    title: string;
    description: string;
  }[];
  
  achievements: {
    year: number;
    title: string;
    description: string;
  }[];
  
  portfolio: {
    id: string;
    name: string;
    location: string;
    type: string;
    units: number;
    yearCompleted: number;
    status: "Completed" | "Ongoing" | "Planning";
    image: string;
  }[];
  
  legalDocuments: {
    name: string;
    number: string;
    issuedBy: string;
    issuedDate: string;
  }[];
  
  team: {
    name: string;
    position: string;
    description: string;
    image: string;
  }[];
  
  contact: {
    office: string;
    phone: string;
    email: string;
  };
}

export const developerProfile: DeveloperProfile = {
  name: "Ridhana Group",
  tagline: "Membangun Hunian, Mewujudkan Impian",
  establishedYear: 2015,
  description: "Ridhana Group adalah developer properti terpercaya dengan fokus pada pengembangan hunian berkualitas di kawasan wisata dan strategis. Kami berkomitmen menghadirkan hunian yang tidak hanya nyaman, tetapi juga memiliki nilai investasi jangka panjang.",
  
  vision: "Menjadi developer properti terkemuka yang menghadirkan hunian berkualitas premium dengan konsep modern dan ramah lingkungan di kawasan strategis Indonesia.",
  
  mission: [
    "Mengembangkan hunian berkualitas tinggi dengan harga terjangkau",
    "Memastikan kepuasan pelanggan melalui pelayanan terbaik",
    "Menerapkan standar konstruksi dan material terbaik di setiap proyek",
    "Berkontribusi pada pengembangan kawasan strategis dan wisata",
    "Menjaga kelestarian lingkungan dalam setiap pengembangan",
  ],
  
  values: [
    {
      title: "Integritas",
      description: "Kami berkomitmen pada transparansi dan kejujuran dalam setiap aspek bisnis",
    },
    {
      title: "Kualitas",
      description: "Menggunakan material terbaik dan standar konstruksi tertinggi",
    },
    {
      title: "Inovasi",
      description: "Terus berinovasi dalam desain dan konsep hunian modern",
    },
    {
      title: "Kepuasan Pelanggan",
      description: "Mengutamakan kepuasan dan kepercayaan pelanggan",
    },
  ],
  
  achievements: [
    {
      year: 2023,
      title: "Best Developer Award",
      description: "Penghargaan sebagai developer terbaik kategori perumahan wisata",
    },
    {
      year: 2022,
      title: "Green Building Certification",
      description: "Sertifikasi bangunan ramah lingkungan untuk proyek The Shafa Residence",
    },
    {
      year: 2020,
      title: "1000+ Unit Terjual",
      description: "Mencapai milestone penjualan 1000 unit di berbagai proyek",
    },
    {
      year: 2018,
      title: "Top Property Developer",
      description: "Masuk 10 besar developer properti wilayah Jawa Timur",
    },
  ],
  
  portfolio: [
    {
      id: "1",
      name: "The Shafa Residence",
      location: "Kota Batu, Jawa Timur",
      type: "Perumahan Premium",
      units: 85,
      yearCompleted: 2024,
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    },
    {
      id: "2",
      name: "Shafa Garden Residence",
      location: "Malang, Jawa Timur",
      type: "Cluster Eksklusif",
      units: 120,
      yearCompleted: 2022,
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
    {
      id: "3",
      name: "Shafa Mountain View",
      location: "Batu, Jawa Timur",
      type: "Villa Resort",
      units: 45,
      yearCompleted: 2021,
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    },
    {
      id: "4",
      name: "Shafa City Homes",
      location: "Surabaya, Jawa Timur",
      type: "Rumah Modern",
      units: 200,
      yearCompleted: 2020,
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    },
  ],
  
  legalDocuments: [
    {
      name: "Sertifikat HGB (Hak Guna Bangunan)",
      number: "HGB No. 12345/2024",
      issuedBy: "Badan Pertanahan Nasional Kota Batu",
      issuedDate: "15 Januari 2024",
    },
    {
      name: "IMB (Izin Mendirikan Bangunan)",
      number: "IMB No. 503/IMB/2024",
      issuedBy: "Dinas PUPR Kota Batu",
      issuedDate: "20 Februari 2024",
    },
    {
      name: "PPJB (Perjanjian Pengikatan Jual Beli)",
      number: "PPJB/TSR/2024",
      issuedBy: "Notaris Andi Wijaya, S.H., M.Kn",
      issuedDate: "10 Maret 2024",
    },
    {
      name: "SIUP (Surat Izin Usaha Perdagangan)",
      number: "SIUP No. 678/SIUP/2015",
      issuedBy: "Dinas Perindustrian dan Perdagangan",
      issuedDate: "5 Mei 2015",
    },
  ],
  
  team: [
    {
      name: "Ir. Ahmad Fauzi",
      position: "Direktur Utama",
      description: "Berpengalaman 20+ tahun di industri properti",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Siti Rahmawati, S.T., M.M.",
      position: "Project Manager",
      description: "Ahli manajemen proyek dengan track record sukses 50+ proyek",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Budi Santoso, S.T.",
      position: "Site Manager",
      description: "Spesialis konstruksi dengan pengalaman 15 tahun",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop",
    },
  ],
  
  contact: {
    office: "Jl. Soekarno Hatta No. 123, Malang, Jawa Timur 65141",
    phone: "0341-555-7890",
    email: "info@shafaproperti.co.id",
  },
};
