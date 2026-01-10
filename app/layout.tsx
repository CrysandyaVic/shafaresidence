import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Shafa Residence - Hunian Dekat Sejuta Wisata Batu",
  description: "Perumahan premium di Kota Batu dengan view Gunung Panderman & Arjuno. Dekat wisata Jatim Park, Museum Angkut, dan Selecta. Investasi terbaik untuk keluarga Anda.",
  keywords: "perumahan batu, rumah kota batu, hunian wisata, the shafa residence, property malang",
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
