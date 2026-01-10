export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Umum" | "Pembelian" | "Spesifikasi" | "Lokasi" | "Legalitas";
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "Apa keunggulan lokasi The Shafa Residence?",
    answer: "The Shafa Residence terletak di Kota Batu dengan akses mudah ke berbagai destinasi wisata populer seperti Jatim Park (8 menit), Museum Angkut (9 menit), dan Selecta (15 menit). Selain itu, hunian ini menawarkan view spektakuler Gunung Panderman, Arjuno, dan city light malam hari.",
    category: "Lokasi",
  },
  {
    id: "2",
    question: "Apakah tersedia skema pembayaran cicilan atau KPR?",
    answer: "Ya, kami menyediakan berbagai skema pembayaran yang fleksibel termasuk KPR dengan bekerja sama dengan bank-bank terkemuka (BRI, Mandiri, BCA, BTN). Kami juga memiliki opsi cicilan in-house dengan DP ringan. Tim marketing kami siap membantu proses pengajuan KPR Anda.",
    category: "Pembelian",
  },
  {
    id: "3",
    question: "Dokumen legalitas apa saja yang tersedia?",
    answer: "Semua unit The Shafa Residence memiliki legalitas lengkap meliputi: Sertifikat HGB (Hak Guna Bangunan), IMB (Izin Mendirikan Bangunan), PPJB (Perjanjian Pengikatan Jual Beli) dari notaris, dan semua perizinan dari pemerintah daerah. Dokumen dapat diperiksa langsung saat survei lokasi.",
    category: "Legalitas",
  },
  {
    id: "4",
    question: "Berapa lama proses pembangunan hingga serah terima?",
    answer: "Untuk unit indent (pesanan), estimasi pembangunan adalah 6-8 bulan sejak akad. Untuk unit ready stock, serah terima dapat dilakukan segera setelah pelunasan. Kami berkomitmen pada kualitas dan ketepatan waktu sesuai perjanjian.",
    category: "Pembelian",
  },
  {
    id: "5",
    question: "Apa saja fasilitas yang tersedia di dalam cluster?",
    answer: "Cluster The Shafa Residence dilengkapi dengan: One Gate System dengan security 24 jam, CCTV di titik-titik strategis, jalan cluster lebar 6-8 meter, area hijau dan taman, musholla, dan children playground. Semua dirancang untuk kenyamanan dan keamanan keluarga Anda.",
    category: "Umum",
  },
  {
    id: "6",
    question: "Bagaimana kualitas material yang digunakan?",
    answer: "Kami hanya menggunakan material berkualitas tinggi dari supplier terpercaya. Struktur bangunan menggunakan beton bertulang dengan pondasi yang kuat. Finishing menggunakan cat premium, keramik 60x60 untuk lantai, kusen aluminium, dan sanitair berkualitas. Garansi struktur bangunan 10 tahun.",
    category: "Spesifikasi",
  },
  {
    id: "7",
    question: "Apakah properti ini cocok untuk investasi?",
    answer: "Sangat cocok! Lokasi strategis di kawasan wisata Batu membuat properti ini memiliki potensi ROI tinggi dari sewa harian/bulanan. Pertumbuhan nilai properti di Kota Batu rata-rata 15-20% per tahun. Banyak owner yang sudah merasakan return dari sewa harian mencapai 8-12% per tahun.",
    category: "Umum",
  },
  {
    id: "8",
    question: "Bagaimana kondisi akses jalan menuju lokasi?",
    answer: "Akses jalan menuju The Shafa Residence sangat baik dengan jalan aspal beberapa meter yang sudah diaspal dan dapat dilalui mobil dengan nyaman. Jarak dari jalan utama Selecta hanya beberapa menit dengan kondisi jalan yang sangat baik sepanjang tahun.",
    category: "Lokasi",
  },
  {
    id: "9",
    question: "Apakah tersedia promo atau diskon khusus?",
    answer: "Kami secara berkala memberikan promo menarik terutama pada event tertentu. Saat ini ada promo launching dengan diskon hingga 100 juta untuk pembelian unit tertentu. Hubungi marketing kami untuk info promo terbaru dan penawaran spesial yang sedang berlaku.",
    category: "Pembelian",
  },
  {
    id: "10",
    question: "Bisakah saya survei lokasi terlebih dahulu?",
    answer: "Tentu saja! Kami sangat menganjurkan calon pembeli untuk survei lokasi terlebih dahulu. Tim marketing kami siap menemani dan memberikan penjelasan detail. Silakan hubungi kami via WhatsApp untuk jadwal survei. Kami juga menyediakan virtual tour 360° untuk yang belum bisa datang langsung.",
    category: "Umum",
  },
];

// Helper function to group FAQs by category
export function getFAQsByCategory() {
  return faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQItem[]>);
}
