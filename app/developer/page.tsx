import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import CTAButton from '@/components/ui/CTAButton';
import { developerProfile } from '@/data/developerProfile';

export const metadata: Metadata = {
  title: 'Tentang Developer - The Shafa Residence',
  description: 'Ridhana Group - Developer properti terpercaya dengan pengalaman membangun hunian berkualitas di kawasan strategis',
};

export default function DeveloperPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
          <div className="container-custom text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="/compressed_img/logo/Logo Ridhana.svg" 
                alt="Ridhana Group Logo"
                className="h-24 w-auto"
              />
            </div>
            
            <SectionTitle
              badge="Tentang Kami"
              title={<span className="text-white">{developerProfile.name}</span>}
              subtitle={<span className="text-navy-200">{developerProfile.tagline}</span>}
            />
            
            <p className="text-xl text-navy-200 leading-relaxed max-w-4xl mx-auto mt-8">
              {developerProfile.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold text-gold-400 mb-2">{new Date().getFullYear() - developerProfile.establishedYear}+</p>
                <p className="text-navy-200">Tahun Pengalaman</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold text-gold-400 mb-2">{developerProfile.portfolio.length}+</p>
                <p className="text-navy-200">Proyek Sukses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold text-gold-400 mb-2">1000+</p>
                <p className="text-navy-200">Unit Terjual</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl p-8 text-white">
                <div className="w-16 h-16 bg-gold-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold-400">Visi Kami</h3>
                <p className="text-navy-100 leading-relaxed">{developerProfile.vision}</p>
              </div>
              
              <div className="bg-navy-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gold-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-950">Misi Kami</h3>
                <ul className="space-y-3">
                  {developerProfile.mission.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="section-padding bg-navy-50">
          <div className="container-custom">
            <SectionTitle
              badge="Nilai-Nilai Kami"
              title="Komitmen Terhadap Kualitas"
              subtitle="Prinsip yang kami pegang dalam setiap proyek dan layanan"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {developerProfile.values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-navy-100 hover:border-gold-400">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-950 mb-3">{value.title}</h4>
                  <p className="text-navy-700 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Portfolio */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              badge="Portofolio"
              title="Proyek yang Telah Kami Bangun"
              subtitle="Berbagai proyek properti berkualitas yang telah kami selesaikan"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {developerProfile.portfolio.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-navy-100 hover:border-gold-400 hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        project.status === 'Completed' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gold-600 text-white'
                      }`}>
                        {project.status === 'Completed' ? 'Selesai' : 'Sedang Berjalan'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-navy-950 mb-2">{project.name}</h4>
                    <p className="text-sm text-navy-600 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-navy-700">{project.units} Unit</span>
                      <span className="text-gold-600 font-semibold">{project.yearCompleted}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Achievements */}
        <section className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
          <div className="container-custom">
            <SectionTitle
              badge="Pencapaian"
              title={<span className="text-white">Penghargaan & Prestasi</span>}
              subtitle={<span className="text-navy-200">Pengakuan atas dedikasi dan kualitas layanan kami</span>}
            />
            
            <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
              {developerProfile.achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-gold-400 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gold-400 font-bold text-lg mb-2">{achievement.year}</p>
                      <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                      <p className="text-navy-200 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Legal Documents */}
        <section className="section-padding bg-navy-50">
          <div className="container-custom">
            <SectionTitle
              badge="Legalitas"
              title="Dokumen Legal Lengkap & Terpercaya"
              subtitle="Semua izin dan sertifikat resmi untuk menjamin keamanan investasi Anda"
            />
            
            <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
              {developerProfile.legalDocuments.map((doc, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-navy-100 hover:border-gold-400 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-navy-950 mb-2">{doc.name}</h4>
                      <p className="text-sm text-navy-600 mb-1">{doc.number}</p>
                      <p className="text-xs text-navy-500">Diterbitkan oleh {doc.issuedBy}</p>
                      <p className="text-xs text-gold-600 font-medium mt-2">Tanggal: {doc.issuedDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-gold-600 to-gold-500">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Mari Wujudkan Hunian Impian Anda Bersama Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Hubungi tim kami untuk konsultasi gratis, jadwalkan kunjungan, atau dapatkan informasi lebih lanjut
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton 
                message="Halo, saya ingin berkonsultasi tentang proyek The Shafa Residence dan PT Shafa Properti Indonesia."
                variant="secondary"
                size="lg"
              />
              <a
                href={`mailto:${developerProfile.contact.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-navy-50 text-navy-950 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Email
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
