import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/ui/CTAButton';
import HouseTypeCard from '@/components/ui/HouseTypeCard';
import ImageGallery from '@/components/ui/ImageGallery';
import { houseTypes } from '@/data/houseTypes';

export default async function HouseTypeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const houseType = houseTypes.find(ht => ht.slug === slug);
  
  if (!houseType) {
    notFound();
  }
  
  // Get related house types (other types)
  const relatedTypes = houseTypes.filter(ht => ht.slug !== slug).slice(0, 2);
  
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-6 bg-navy-50 border-b border-navy-100">
          <div className="container-custom">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-navy-600 hover:text-gold-600 transition-colors">
                Beranda
              </Link>
              <span className="text-navy-400">/</span>
              <Link href="/house-types" className="text-navy-600 hover:text-gold-600 transition-colors">
                Tipe Rumah
              </Link>
              <span className="text-navy-400">/</span>
              <span className="text-navy-950 font-semibold">{houseType.name}</span>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Images */}
              <div>
                <ImageGallery 
                  render3D={houseType.images.render3D}
                  floorPlan={houseType.images.floorPlan}
                  gallery={houseType.images.gallery}
                  name={houseType.name}
                  promo={houseType.promo}
                  scarcity={houseType.scarcity}
                />
              </div>
              
              {/* Right Column - Details */}
              <div>
                <h1 className="text-4xl font-bold text-navy-950 mb-2">{houseType.name}</h1>
                <p className="text-xl text-gold-600 font-medium mb-6">{houseType.tagline}</p>
                
                {/* Price */}
                <div className="bg-gradient-to-r from-navy-950 to-navy-900 rounded-2xl p-6 mb-8">
                  <p className="text-navy-300 text-sm mb-2">Harga Mulai Dari</p>
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="text-4xl font-bold text-white">{houseType.priceFormatted}</p>
                    {houseType.promo && (
                      <span className="text-lg text-gold-400 font-semibold">
                        Hemat {houseType.promo.discountFormatted}!
                      </span>
                    )}
                  </div>
                  {houseType.promo && (
                    <p className="text-gold-300 text-sm">
                      * Promo berlaku hingga {houseType.promo.validity}
                    </p>
                  )}
                </div>
                
                {/* Specs */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-navy-950 mb-4">Spesifikasi</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-navy-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">📏</span>
                        <span className="text-sm text-navy-600">Luas Tanah</span>
                      </div>
                      <p className="text-2xl font-bold text-navy-950">{houseType.specs.landArea} m²</p>
                    </div>
                    <div className="bg-navy-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🏠</span>
                        <span className="text-sm text-navy-600">Luas Bangunan</span>
                      </div>
                      <p className="text-2xl font-bold text-navy-950">{houseType.specs.buildingArea} m²</p>
                    </div>
                    <div className="bg-navy-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🛏️</span>
                        <span className="text-sm text-navy-600">Kamar Tidur</span>
                      </div>
                      <p className="text-2xl font-bold text-navy-950">{houseType.specs.bedrooms} KT</p>
                    </div>
                    <div className="bg-navy-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🚿</span>
                        <span className="text-sm text-navy-600">Kamar Mandi</span>
                      </div>
                      <p className="text-2xl font-bold text-navy-950">{houseType.specs.bathrooms} KM</p>
                    </div>
                    <div className="bg-navy-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🚗</span>
                        <span className="text-sm text-navy-600">Carport</span>
                      </div>
                      <p className="text-2xl font-bold text-navy-950">{houseType.specs.carport} Mobil</p>
                    </div>
                    <div className="bg-navy-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">⚡</span>
                        <span className="text-sm text-navy-600">Listrik</span>
                      </div>
                      <p className="text-xl font-bold text-navy-950">{houseType.specs.electricity}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-navy-700">
                    <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Lantai:</strong> {houseType.specs.floors} Lantai</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy-700">
                    <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span><strong>Sumber Air:</strong> {houseType.specs.waterSource}</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-navy-950 mb-4">Keunggulan</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {houseType.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-navy-700">
                        <svg className="w-5 h-5 text-gold-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="sticky top-24 bg-gradient-to-br from-gold-600 to-gold-500 rounded-2xl p-6 shadow-2xl">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Tertarik dengan {houseType.name}?
                  </h4>
                  <p className="text-white/90 mb-6">
                    Hubungi kami sekarang untuk info lebih detail, jadwalkan survei lokasi, atau konsultasi pembelian!
                  </p>
                  <CTAButton 
                    message={`Halo, saya tertarik dengan ${houseType.name} di The Shafa Residence. Bisa minta info detail dan jadwal survei?`}
                    variant="secondary"
                    size="lg"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Suitable For Section */}
        <section className="section-padding bg-navy-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-navy-950 mb-4 text-center">
              Cocok Untuk Siapa?
            </h2>
            <p className="text-navy-700 text-center mb-12 max-w-2xl mx-auto">
              {houseType.name} dirancang khusus untuk memenuhi kebutuhan berbagai segmen keluarga
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {houseType.suitableFor.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border-2 border-navy-100 hover:border-gold-400 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gold-600 mb-3">{item.category}</h3>
                  <p className="text-navy-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Types */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-navy-950 mb-4 text-center">
              Tipe Rumah Lainnya
            </h2>
            <p className="text-navy-700 text-center mb-12">
              Lihat pilihan tipe rumah lainnya yang mungkin sesuai untuk Anda
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedTypes.map((type) => (
                <HouseTypeCard key={type.id} houseType={type} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/house-types"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-950 hover:bg-navy-900 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-gold-600"
              >
                Lihat Semua Tipe
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

// Generate static params for all house types
export async function generateStaticParams() {
  return houseTypes.map((houseType) => ({
    slug: houseType.slug,
  }));
}
