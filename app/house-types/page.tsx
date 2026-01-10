import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import HouseTypeCard from '@/components/ui/HouseTypeCard';
import { houseTypes } from '@/data/houseTypes';

export const metadata: Metadata = {
  title: 'Tipe Rumah - The Shafa Residence',
  description: 'Pilihan tipe rumah premium di The Shafa Residence Kota Batu dengan berbagai ukuran dan spesifikasi',
};

export default function HouseTypesPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
          <div className="container-custom">
            <SectionTitle
              badge="Pilihan Tipe"
              title={<span className="text-white">Tipe Rumah The Shafa Residence</span>}
              subtitle={<span className="text-navy-200">Temukan tipe rumah yang sesuai dengan kebutuhan dan impian keluarga Anda</span>}
            />
          </div>
        </section>
        
        {/* Filter Section - Simple */}
        <section className="py-8 bg-white border-b-2 border-navy-100">
          <div className="container-custom">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="text-navy-700 font-medium">Filter:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-gold-600 text-white rounded-lg font-medium transition-all duration-300">
                  Semua Tipe
                </button>
                <button className="px-4 py-2 bg-navy-50 hover:bg-gold-50 text-navy-700 hover:text-gold-700 rounded-lg font-medium transition-all duration-300">
                  3 Kamar
                </button>
                <button className="px-4 py-2 bg-navy-50 hover:bg-gold-50 text-navy-700 hover:text-gold-700 rounded-lg font-medium transition-all duration-300">
                  4 Kamar
                </button>
                <button className="px-4 py-2 bg-navy-50 hover:bg-gold-50 text-navy-700 hover:text-gold-700 rounded-lg font-medium transition-all duration-300">
                  5+ Kamar
                </button>
                <button className="px-4 py-2 bg-navy-50 hover:bg-gold-50 text-navy-700 hover:text-gold-700 rounded-lg font-medium transition-all duration-300">
                  Ada Promo
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* House Types Grid */}
        <section className="section-padding bg-navy-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {houseTypes.map((houseType, index) => (
                <HouseTypeCard 
                  key={houseType.id} 
                  houseType={houseType}
                  featured={index === 1}
                />
              ))}
            </div>
            
            {/* Info Box */}
            <div className="mt-16 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Tidak Menemukan Tipe yang Sesuai?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Kami dapat membantu Anda menemukan tipe rumah yang tepat atau bahkan menyesuaikan desain sesuai kebutuhan Anda. Hubungi tim kami sekarang!
              </p>
              <a
                href={`https://wa.me/6282288856560?text=${encodeURIComponent('Halo, saya ingin konsultasi mengenai pilihan tipe rumah di The Shafa Residence.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-navy-50 text-navy-950 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
