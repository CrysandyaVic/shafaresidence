export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: "Keluarga Muda" | "Pensiunan" | "Investor" | "Profesional";
  rating: number;
  date: string;
  content: string;
  avatar: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rizki & Ayu Wulandari",
    role: "Keluarga Muda dengan 2 Anak",
    category: "Keluarga Muda",
    rating: 5,
    date: "15 November 2025",
    content: "Alhamdulillah akhirnya punya rumah impian di Batu. Anak-anak sangat senang karena weekend bisa langsung main ke Jatim Park tanpa perlu menginap. Viewnya juga luar biasa, setiap pagi bangun langsung lihat Gunung Panderman. Developer sangat amanah dan responsif!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    location: "Tipe Emerald",
  },
  {
    id: "2",
    name: "Bp. Sudarmo & Ibu Sudarmi",
    role: "Pensiunan PNS",
    category: "Pensiunan",
    rating: 5,
    date: "8 Oktober 2025",
    content: "Setelah pensiun, kami mencari tempat yang sejuk dan tenang. The Shafa Residence sangat sempurna. Udaranya sejuk, pemandangan indah, dan yang paling penting dekat dengan cucu-cucu yang sering berkunjung. Mereka senang karena banyak tempat wisata terdekat. Investasi terbaik untuk masa tua kami.",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop",
    location: "Tipe Sapphire",
  },
  {
    id: "3",
    name: "Dr. Andika Pratama",
    role: "Profesional & Investor",
    category: "Investor",
    rating: 5,
    date: "22 September 2025",
    content: "Sebagai investor properti, saya sangat puas dengan The Shafa Residence. Lokasinya strategis di kawasan wisata yang terus berkembang, konstruksi berkualitas, dan yang terpenting adalah legalitas yang lengkap. ROI dari sewa harian sangat menjanjikan. Highly recommended untuk investasi jangka panjang!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    location: "Tipe Diamond",
  },
  {
    id: "4",
    name: "Fitri Handayani",
    role: "Ibu Rumah Tangga",
    category: "Keluarga Muda",
    rating: 5,
    date: "5 Desember 2025",
    content: "Rumah yang sangat nyaman untuk keluarga. Cluster-nya aman dengan one gate system dan CCTV. Anak-anak bisa main dengan aman di dalam komplek. Suami juga senang karena akses ke tempat kerja di Malang tidak terlalu jauh. Terima kasih Shafa Properti!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    location: "Tipe Emerald",
  },
  {
    id: "5",
    name: "Bambang Susilo, S.E.",
    role: "Pengusaha",
    category: "Profesional",
    rating: 5,
    date: "18 Agustus 2025",
    content: "Kualitas bangunan sangat baik, material yang digunakan premium. Proses pembelian juga transparan dan mudah. Tim marketing sangat membantu dari awal survei sampai serah terima kunci. Puas dengan pelayanan dan hasil akhirnya!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    location: "Tipe Sapphire",
  },
  {
    id: "6",
    name: "Lia & Dimas Rahman",
    role: "Pasangan Baru Menikah",
    category: "Keluarga Muda",
    rating: 5,
    date: "30 Juni 2025",
    content: "Rumah pertama kami dan kami tidak salah pilih! Lokasinya sejuk, view cantik, dan sangat cocok untuk newlywed couple. Developer juga kasih promo menarik saat launching. Alhamdulillah sudah KPR approved dan tinggal tunggu serah terima. Excited!",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    location: "Tipe Emerald",
  },
];

// Helper function to get testimonials by category
export function getTestimonialsByCategory(category: Testimonial['category']) {
  return testimonials.filter(t => t.category === category);
}

// Helper function to get featured testimonials (highest rated)
export function getFeaturedTestimonials(count: number = 3) {
  return testimonials
    .filter(t => t.rating === 5)
    .slice(0, count);
}
