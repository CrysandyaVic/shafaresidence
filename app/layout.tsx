import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Shafa Residence - Perumahan Kota Batu Dekat Wisata dengan View Gunung",
  description: "Hunian dekat wisata Batu dengan view gunung Panderman & Arjuno. Perumahan kota Batu premium akses 5-15 menit ke Jatim Park, Museum Angkut, Selecta. Rumah dekat wisata Batu dengan city light view, udara sejuk pegunungan. Investasi properti terbaik.",
  keywords: [
    "perumahan kota batu",
    "rumah dekat wisata batu",
    "hunian view gunung batu",
    "property batu malang",
    "perumahan view gunung panderman",
    "rumah kota wisata batu",
    "hunian dekat jatim park",
    "investasi property batu",
    "rumah view arjuno",
    "perumahan sejuk batu",
  ],
  openGraph: {
    title: "The Shafa Residence - Hunian Dekat Sejuta Wisata Batu",
    description: "Perumahan kota Batu dengan view gunung Panderman & Arjuno. Dekat wisata, udara sejuk, investasi menguntungkan.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shafa Residence - Perumahan Kota Batu Dekat Wisata",
    description: "Hunian view gunung Batu dekat sejuta wisata. Akses mudah ke Jatim Park, Museum Angkut, Selecta.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
