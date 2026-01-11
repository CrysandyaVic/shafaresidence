import Image from 'next/image';
import Link from 'next/link';
import type { HouseType } from '@/data/houseTypes';
import PromoBadge from './PromoBadge';

interface HouseTypeCardProps {
  houseType: HouseType;
  featured?: boolean;
}

export default function HouseTypeCard({ houseType, featured = false }: HouseTypeCardProps) {
  return (
    <Link href={`/house-types/${houseType.slug}`}>
      <div className={`
        group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-navy-100
        transition-all duration-300 hover:shadow-2xl hover:border-gold-400 hover:-translate-y-2
        ${featured ? 'ring-4 ring-gold-400' : ''}
      `}>
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={houseType.images.hero}
            alt={houseType.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {houseType.promo && (
              <PromoBadge 
                text={houseType.promo.badge}
                variant="discount"
                size="md"
              />
            )}
            {houseType.scarcity && (
              <PromoBadge 
                text={houseType.scarcity.message}
                variant="scarcity"
                size="sm"
              />
            )}
          </div>
          
          {/* Type name overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-1">{houseType.name}</h3>
            <p className="text-gold-400 text-sm font-medium">{houseType.tagline}</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Price */}
          <div className="mb-6">
            <p className="text-sm text-navy-600 mb-1">Mulai dari</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-navy-950">{houseType.priceFormatted}</p>
              {houseType.promo && (
                <span className="text-sm text-gold-600 font-semibold">
                  Diskon {houseType.promo.discountFormatted}
                </span>
              )}
            </div>
          </div>
          
          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b-2 border-navy-100">
            <div className="flex items-center gap-2">
              <span className="text-gold-600">📏</span>
              <div>
                <p className="text-xs text-navy-600">Luas Tanah</p>
                <p className="font-semibold text-navy-950">{houseType.specs.landArea} m²</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-600">🏠</span>
              <div>
                <p className="text-xs text-navy-600">Luas Bangunan</p>
                <p className="font-semibold text-navy-950">{houseType.specs.buildingArea} m²</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-600">🛏️</span>
              <div>
                <p className="text-xs text-navy-600">Kamar Tidur</p>
                <p className="font-semibold text-navy-950">{houseType.specs.bedrooms}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-600">🚿</span>
              <div>
                <p className="text-xs text-navy-600">Kamar Mandi</p>
                <p className="font-semibold text-navy-950">{houseType.specs.bathrooms}</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <button className="w-full py-3 px-6 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold rounded-xl transition-all duration-300 transform group-hover:scale-105">
            Lihat Detail
          </button>
        </div>
        
        {featured && (
          <div className="absolute top-4 right-4">
            <PromoBadge text="Best Seller" variant="bestseller" size="sm" />
          </div>
        )}
      </div>
    </Link>
  );
}
