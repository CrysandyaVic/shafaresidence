import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/ui/CTAButton';
import SectionTitle from '@/components/ui/SectionTitle';
import PromoBadge from '@/components/ui/PromoBadge';
import FeatureCard from '@/components/ui/FeatureCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import HouseTypeCard from '@/components/ui/HouseTypeCard';
import MapWithPins from '@/components/ui/MapWithPins';
import MobileStickyCTA from '@/components/ui/MobileStickyCTA';
import { siteConfig } from '@/data/siteConfig';
import { houseTypes } from '@/data/houseTypes';
import { attractions } from '@/data/attractions';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { faqs } from '@/data/faqs';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perumahan Kota Batu Dekat Wisata - The Shafa Residence',
  description: 'Hunian dekat wisata Batu dengan view gunung Panderman & Arjuno. Akses 5-15 menit ke Jatim Park, Museum Angkut, Selecta. Perumahan kota Batu premium dengan city light view malam hari. Investasi properti terbaik.',
  keywords: [
    'perumahan kota batu',
    'rumah dekat wisata batu',
    'hunian view gunung batu',
    'property batu malang',
    'perumahan view gunung panderman',
  ],
};

export default function HomePage() {
  const featuredHouseTypes = houseTypes.slice(0, 3);
  const featuredTestimonials = getFeaturedTestimonials(3);
  const displayFaqs = faqs.slice(0, 6);

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'The Shafa Residence',
    description: 'Perumahan kota Batu dekat wisata dengan view gunung Panderman dan Arjuno',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'Kota Batu',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    telephone: siteConfig.getDisplayPhone(),
    email: siteConfig.contact.email,
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-17:00',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <MobileStickyCTA />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
              alt="Perumahan kota batu dekat wisata dengan view gunung Panderman"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/60 to-navy-950/90" />
          </div>
          
          {/* Content */}
          <div className="container-custom relative z-10 text-center text-white py-20">
            <PromoBadge 
              text="Lokasi Premium Kota Batu"
              variant="discount"
              size="lg"
              className="mb-6"
            />
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Hunian Dekat Sejuta Wisata</span>
              <span className="block text-gold-400">View Gunung Panderman & Arjuno</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Perumahan Kota Batu dengan akses 5-15 menit ke Jatim Park, Museum Angkut, Selecta. 
              Nikmati udara sejuk pegunungan dan pemandangan city light di malam hari.
            </p>
            
            {/* Lifestyle Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <div className="text-3xl mb-1">🏔️</div>
                <p className="text-sm font-semibold text-white">View Gunung</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <div className="text-3xl mb-1">🎡</div>
                <p className="text-sm font-semibold text-white">Dekat Wisata</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <div className="text-3xl mb-1">🌃</div>
                <p className="text-sm font-semibold text-white">City Light View</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <div className="text-3xl mb-1">❄️</div>
                <p className="text-sm font-semibold text-white">Udara Sejuk</p>
              </div>
            </div>
            
            {/* Promo Banner */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-gold-600 to-gold-500 px-8 py-4 rounded-2xl mb-8 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-white">{siteConfig.promo.headline}</p>
                <p className="text-sm text-white/90">{siteConfig.promo.validity}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 bg-red-600 px-6 py-3 rounded-xl mb-10 animate-pulse inline-flex">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white font-bold text-lg">{siteConfig.scarcity.message}</p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton 
                message="Halo, saya tertarik dengan lokasi The Shafa Residence yang dekat wisata. Bisa info lebih detail?"
                variant="primary"
                size="lg"
              >
                Tanya Lokasi via WhatsApp
              </CTAButton>
              <CTAButton 
                message="Halo, saya ingin booking kunjungan ke The Shafa Residence. Kapan bisa?"
                variant="secondary"
                size="lg"
              >
                Booking Kunjungan
              </CTAButton>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
        
        {/* Keunggulan Section */}
        <section id="keunggulan" className="section-padding bg-navy-50">
          <div className="container-custom">
            <SectionTitle
              badge="Mengapa Memilih Kami?"
              title="Keunggulan Perumahan Kota Batu"
              subtitle="Hunian view gunung Batu dengan lokasi strategis dekat wisata, fasilitas lengkap, dan investasi menguntungkan"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <FeatureCard
                icon="🏔️"
                title="View Gunung Panderman & Arjuno"
                description="Hunian view gunung Batu dengan pemandangan langsung Gunung Panderman dan Arjuno. Nikmati city light view malam hari dan udara sejuk pegunungan."
              />
              <FeatureCard
                icon="🎡"
                title="Dekat Sejuta Wisata Batu"
                description="Rumah dekat wisata Batu dengan akses 5-15 menit ke Jatim Park, Museum Angkut, Selecta. Cocok untuk hunian sekaligus investasi properti wisata."
                gradient
              />
              <FeatureCard
                icon="👨‍👩‍👧‍👦"
                title="Lingkungan Keluarga"
                description="Cluster aman dengan one gate system, CCTV 24 jam, dan area bermain anak. Sempurna untuk tumbuh kembang keluarga."
              />
              <FeatureCard
                icon="🔒"
                title="Keamanan Terjamin"
                description="Sistem keamanan 24/7 dengan security profesional, CCTV di titik strategis, dan akses terkontrol."
              />
              <FeatureCard
                icon="🏗️"
                title="Kualitas Premium"
                description="Material berkualitas tinggi, desain modern, dan finishing premium. Garansi struktur bangunan 10 tahun."
                gradient
              />
              <FeatureCard
                icon="📈"
                title="Investasi Menguntungkan"
                description="Potensi ROI tinggi dari sewa harian/bulanan. Apresiasi properti 15-20% per tahun di kawasan wisata Batu."
              />
            </div>
          </div>
        </section>
        
        {/* Funnel Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              badge="Cara Kerja"
              title="Langkah Mudah Menuju Hunian Impian"
              subtitle="Proses yang transparan dan mudah dari awareness hingga kepemilikan"
            />
            
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-600 via-gold-500 to-gold-400 hidden lg:block" />
                
                {/* Steps */}
                <div className="space-y-12">
                  {[
                    {
                      step: 1,
                      title: "Awareness - Kenali The Shafa Residence",
                      description: "Pelajari keunggulan lokasi, fasilitas, dan tipe rumah yang tersedia. Lihat foto, denah, dan spesifikasi lengkap.",
                      icon: "👁️",
                    },
                    {
                      step: 2,
                      title: "Engagement - Kunjungi & Konsultasi",
                      description: "Jadwalkan kunjungan lokasi, bertemu tim marketing, dan konsultasikan kebutuhan Anda. Kami siap membantu memilih tipe terbaik.",
                      icon: "🤝",
                    },
                    {
                      step: 3,
                      title: "Conversion - Booking & Proses KPR",
                      description: "Lakukan booking unit pilihan, urus proses KPR dengan bantuan kami, dan tunggu hunian impian Anda dibangun.",
                      icon: "✅",
                    },
                    {
                      step: 4,
                      title: "Delight - Serah Terima & After Sales",
                      description: "Terima kunci rumah Anda, nikmati hunian baru, dan dapatkan layanan after sales untuk kepuasan jangka panjang.",
                      icon: "🔑",
                    },
                  ].map((item, index) => (
                    <div key={item.step} className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                        <div className="inline-block px-4 py-2 bg-gold-100 rounded-full mb-4">
                          <span className="text-gold-700 font-bold">Tahap {item.step}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-navy-950 mb-3">{item.title}</h3>
                        <p className="text-navy-700 leading-relaxed">{item.description}</p>
                      </div>
                      
                      {/* Icon */}
                      <div className={`flex justify-center ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                        <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-gold-600 to-gold-500 rounded-full flex items-center justify-center shadow-2xl ring-8 ring-white">
                          <span className="text-4xl">{item.icon}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Lokasi & Wisata Section */}
        <section id="lokasi-wisata" className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
          <div className="container-custom">
            <SectionTitle
              badge="Lokasi Strategis"
              title={
                <span className="text-white">
                  Rumah Dekat <span className="text-gold-400">10+ Destinasi Wisata Batu</span>
                </span>
              }
              subtitle={
                <span className="text-navy-200">
                  Perumahan kota Batu dengan akses mudah ke berbagai tempat wisata populer - Jatim Park, Museum Angkut, Selecta hanya 5-15 menit berkendara
                </span>
              }
            />
            
            {/* Google Maps Embed */}
            <div className="mt-16">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1jLfwhVwAaE5q_wQjV3S2d49ZUwDQ6Bc&ehbc=2E312F&noprof=1"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wisata Dekat The Shafa Residence"
                  className="w-full"
                ></iframe>
              </div>
              <p className="text-center text-navy-300 mt-4 text-sm">
                📍 Lokasi strategis dengan akses mudah ke berbagai destinasi wisata populer di Kota Batu
              </p>
            </div>
            
            {/* Wisata List */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
                Destinasi Wisata Terdekat
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attractions.map((attraction) => (
                  <div 
                    key={attraction.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{attraction.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{attraction.name}</h4>
                        <p className="text-gold-400 text-sm font-semibold mb-2">
                          {attraction.distance} • {attraction.estimatedTime}
                        </p>
                        <p className="text-navy-200 text-sm leading-relaxed">
                          {attraction.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://maps.app.goo.gl/SUG8cZaCf8vq1jw5A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-navy-50 text-navy-950 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 min-h-[44px] shadow-lg"
              >
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Lihat di Google Maps
              </a>
              <CTAButton 
                message="Halo, saya ingin tahu lebih detail tentang lokasi The Shafa Residence dan akses ke wisata terdekat."
                variant="primary"
                size="lg"
              >
                Tanya Lokasi Detail
              </CTAButton>
              <CTAButton 
                message="Halo, saya mau booking kunjungan ke The Shafa Residence. Kapan bisa survey lokasi?"
                variant="secondary"
                size="lg"
              >
                Survey Lokasi Sekarang
              </CTAButton>
            </div>
          </div>
        </section>
        
        {/* Tipe Rumah Preview Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              badge="Pilihan Tipe Rumah"
              title="Tipe Rumah View Gunung yang Tepat untuk Keluarga"
              subtitle="Berbagai pilihan tipe hunian dengan desain modern, spesifikasi premium, dan view gunung spektakuler"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {featuredHouseTypes.map((houseType, index) => (
                <HouseTypeCard 
                  key={houseType.id} 
                  houseType={houseType}
                  featured={index === 1}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/house-types"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-950 hover:bg-navy-900 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-gold-600"
              >
                Lihat Semua Tipe Rumah
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Galeri Humanis Section */}
        <section className="section-padding bg-navy-50">
          <div className="container-custom">
            <SectionTitle
              badge="Gaya Hidup"
              title="Hunian Dekat Wisata untuk Momen Berharga Keluarga"
              subtitle="Ciptakan kenangan indah di perumahan kota Batu dengan lingkungan nyaman, aman, dan pemandangan gunung yang memukau"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                {
                  image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
                  title: "Keluarga Muda Bahagia",
                  description: "Ruang tumbuh kembang anak yang ideal",
                  alt: "Keluarga muda bahagia di hunian perumahan kota batu",
                },
                {
                  image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop",
                  title: "Momen Bersama Cucu",
                  description: "Lansia menikmati masa pensiun dengan nyaman",
                  alt: "Lansia menikmati masa pensiun di rumah dekat wisata batu",
                },
                {
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
                  title: "Quality Time Keluarga",
                  description: "Lingkungan mendukung kedekatan keluarga",
                  alt: "Quality time keluarga di hunian view gunung batu",
                },
                {
                  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
                  title: "Halaman Bermain",
                  description: "Area luas untuk aktivitas outdoor",
                  alt: "Halaman luas untuk bermain di perumahan kota batu",
                },
                {
                  image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop",
                  title: "Suasana Sejuk",
                  description: "Udara pegunungan yang menyegarkan",
                  alt: "Udara sejuk pegunungan di hunian dekat wisata batu",
                },
                {
                  image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&h=400&fit=crop",
                  title: "View Spektakuler",
                  description: "Pemandangan gunung dari teras rumah",
                  alt: "View gunung Panderman dan Arjuno dari perumahan kota batu",
                },
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-72">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-navy-100 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Tertarik dengan Hunian Dekat Wisata Batu?
                </h3>
                <p className="text-white/90 mb-6">
                  Jadwalkan kunjungan Anda sekarang dan rasakan langsung keindahan view gunung serta akses mudah ke destinasi wisata populer.
                </p>
                <CTAButton 
                  message="Halo, saya tertarik setelah lihat foto. Mau jadwalkan kunjungan ke The Shafa Residence."
                  variant="secondary"
                  size="lg"
                >
                  Chat Marketing Sekarang
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fasilitas Umum & Gate Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              badge="Fasilitas"
              title="Fasilitas Umum & Keamanan"
              subtitle="Nikmati berbagai fasilitas dan keamanan 24 jam untuk kenyamanan keluarga Anda"
            />
            
            {/* Gate/Security Section */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-950 mb-8 text-center">
                🔒 Keamanan 24 Jam dengan One Gate System
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { src: "/compressed_img/gate/5 GATE1.webp", alt: "Gate utama The Shafa Residence" },
                  { src: "/compressed_img/gate/5 GATE2.webp", alt: "Sistem keamanan 24 jam" },
                  { src: "/compressed_img/gate/5 GATE3.webp", alt: "Akses masuk cluster eksklusif" },
                  { src: "/compressed_img/gate/5 GATE4.webp", alt: "Pos keamanan perumahan" },
                ].map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Playground/Fasum Section */}
            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-950 mb-8 text-center">
                🎪 Playground & Area Bermain Anak
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: "/compressed_img/fasum/4 PLAYGROUND1.webp", alt: "Playground anak di The Shafa Residence" },
                  { src: "/compressed_img/fasum/4 PLAYGROUND2.webp", alt: "Area bermain outdoor yang aman" },
                  { src: "/compressed_img/fasum/4 PLAYGROUND3.webp", alt: "Taman bermain dengan perosotan" },
                  { src: "/compressed_img/fasum/4 PLAYGROUND4.webp", alt: "Fasilitas playground lengkap" },
                  { src: "/compressed_img/fasum/1655478418138.webp", alt: "Fasilitas umum perumahan" },
                  { src: "/compressed_img/fasum/1655478418148.webp", alt: "Area taman dan fasum" },
                ].map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-navy-950 to-navy-900 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Fasilitas Lengkap untuk Keluarga
                </h3>
                <p className="text-navy-200 mb-6">
                  Dengan keamanan 24 jam dan fasilitas playground, The Shafa Residence adalah pilihan tepat untuk keluarga yang mengutamakan kenyamanan dan keamanan.
                </p>
                <CTAButton 
                  message="Halo, saya tertarik dengan fasilitas di The Shafa Residence. Bisa info lebih detail?"
                  variant="primary"
                  size="lg"
                >
                  Tanya Fasilitas Lainnya
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimoni Section */}
        <section id="testimoni" className="section-padding bg-navy-50">
          <div className="container-custom">
            <SectionTitle
              badge="Kata Mereka"
              title="Testimoni Penghuni & Investor"
              subtitle="Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <CTAButton 
                message="Halo, saya sudah baca testimoni dan tertarik dengan The Shafa Residence. Bisa info lebih lanjut?"
                variant="primary"
                size="lg"
              >
                Pesan Sekarang via WhatsApp
              </CTAButton>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="section-padding bg-navy-50">
          <div className="container-custom">
            <SectionTitle
              badge="Pertanyaan Umum"
              title="FAQ - Frequently Asked Questions"
              subtitle="Jawaban atas pertanyaan yang sering diajukan tentang The Shafa Residence"
            />
            
            <div className="max-w-4xl mx-auto mt-16">
              <FAQAccordion faqs={displayFaqs} />
            </div>
            
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Masih Ada Pertanyaan?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Tim kami siap membantu menjawab semua pertanyaan Anda. Hubungi kami sekarang!
              </p>
              <CTAButton 
                message="Halo, saya punya beberapa pertanyaan tentang The Shafa Residence. Bisa dibantu?"
                variant="secondary"
                size="lg"
              />
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <PromoBadge 
                text="Promo Terbatas"
                variant="scarcity"
                size="lg"
                className="mb-8"
              />
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Wujudkan Hunian Impian di Kota Wisata Batu!
              </h2>
              
              <p className="text-xl text-navy-200 mb-8 leading-relaxed">
                Hanya {siteConfig.scarcity.unitsLeft} unit tersisa! Dapatkan rumah dekat wisata Batu dengan view gunung Panderman 
                dan promo spesial {siteConfig.promo.headline}. Perumahan kota Batu terbaik untuk investasi dan hunian keluarga.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <CTAButton 
                  message={`Halo, saya tertarik dengan promo ${siteConfig.promo.headline} di The Shafa Residence. Bisa minta info lengkap dan jadwalkan survei lokasi?`}
                  variant="primary"
                  size="lg"
                >
                  Chat Marketing Sekarang
                </CTAButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-navy-50 text-navy-950 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 min-h-[44px]"
                >
                  Formulir Kontak
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <p className="text-sm text-gold-400 font-medium">
                📞 {siteConfig.getDisplayPhone()} | 📧 {siteConfig.contact.email}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
