'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { siteConfig } from '@/data/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Halo, saya ${formData.name}.\n\nNomor HP: ${formData.phone}\n\nPesan:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${siteConfig.getActiveWhatsApp()}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
          <div className="container-custom text-center">
            <SectionTitle
              badge="Hubungi Kami"
              title={<span className="text-white">Mari Berdiskusi Tentang Hunian Impian Anda</span>}
              subtitle={<span className="text-navy-200">Tim kami siap membantu Anda menemukan properti yang tepat</span>}
            />
          </div>
        </section>
        
        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-navy-50 rounded-2xl p-8 border-2 border-navy-100">
                  <h3 className="text-2xl font-bold text-navy-950 mb-2">
                    Formulir Kontak
                  </h3>
                  <p className="text-navy-700 mb-8">
                    Isi formulir di bawah ini dan kami akan menghubungi Anda segera via WhatsApp
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy-950 mb-2">
                        Nama Lengkap <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all duration-300"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-950 mb-2">
                        Nomor WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all duration-300"
                        placeholder="Contoh: 08123456789"
                      />
                      <p className="text-xs text-navy-600 mt-2">
                        Pastikan nomor WhatsApp aktif agar kami dapat menghubungi Anda
                      </p>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-navy-950 mb-2">
                        Pesan <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border-2 border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all duration-300 resize-none"
                        placeholder="Ceritakan kebutuhan Anda, tipe rumah yang diminati, atau pertanyaan lainnya..."
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-600/30 flex items-center justify-center gap-2"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Kirim via WhatsApp
                    </button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-gold-50 border-2 border-gold-200 rounded-xl">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-navy-950 mb-1">Privasi Terjamin</p>
                        <p className="text-xs text-navy-700 leading-relaxed">
                          Data Anda aman bersama kami. Informasi yang Anda berikan hanya digunakan untuk keperluan komunikasi terkait The Shafa Residence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Info & Map */}
              <div className="space-y-8">
                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/80 mb-1">WhatsApp (Respon Cepat)</p>
                        <p className="text-2xl font-bold">{siteConfig.getDisplayPhone()}</p>
                        <a
                          href={`https://wa.me/${siteConfig.getActiveWhatsApp()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-sm font-semibold hover:underline"
                        >
                          Klik untuk chat →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="bg-navy-950 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-navy-300 mb-1">Email</p>
                        <p className="text-lg font-semibold break-all">{siteConfig.contact.email}</p>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="inline-block mt-2 text-sm font-semibold text-gold-400 hover:underline"
                        >
                          Kirim email →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="bg-navy-50 rounded-2xl p-6 border-2 border-navy-100">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-navy-600 mb-1">Alamat Lokasi</p>
                        <p className="text-navy-950 font-semibold mb-2">{siteConfig.contact.address}</p>
                        <p className="text-sm text-navy-700 mb-3">
                          <strong>Jam Operasional:</strong><br />
                          {siteConfig.contact.operationalHours}
                        </p>
                        <a
                          href="https://maps.google.com/?q=The+Shafa+Residence+Batu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          Buka di Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="bg-navy-100 rounded-2xl h-80 overflow-hidden border-2 border-navy-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-navy-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-navy-600 font-medium">Lokasi The Shafa Residence</p>
                      <p className="text-sm text-navy-500 mt-2">Kota Batu, Jawa Timur</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(to right, #1e2749 1px, transparent 1px),
                      linear-gradient(to bottom, #1e2749 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    opacity: 0.1
                  }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Info */}
        <section className="section-padding bg-gradient-to-br from-navy-950 to-navy-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Kami Siap Membantu Anda 24/7
              </h2>
              <p className="text-xl text-navy-200 mb-8 leading-relaxed">
                Tim customer service kami selalu siap menjawab pertanyaan Anda, memberikan informasi detail, 
                membantu proses pembelian, hingga jadwalkan kunjungan ke lokasi.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <span className="text-4xl mb-3 block">⚡</span>
                  <h4 className="font-bold mb-2">Respon Cepat</h4>
                  <p className="text-sm text-navy-200">Balasan dalam hitungan menit</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <span className="text-4xl mb-3 block">🤝</span>
                  <h4 className="font-bold mb-2">Konsultasi Gratis</h4>
                  <p className="text-sm text-navy-200">Tanpa biaya konsultasi</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <span className="text-4xl mb-3 block">📍</span>
                  <h4 className="font-bold mb-2">Kunjungan Lokasi</h4>
                  <p className="text-sm text-navy-200">Antar ke lokasi proyek</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
