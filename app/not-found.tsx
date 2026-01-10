import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 to-navy-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-9xl">🏡</span>
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gold-400 mb-6">Halaman Tidak Ditemukan</h2>
        <p className="text-xl text-navy-200 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak ada. Mungkin sudah dipindahkan atau dihapus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Kembali ke Beranda
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-navy-50 text-navy-950 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
