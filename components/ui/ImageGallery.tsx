'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  render3D: string[];
  floorPlan: string;
  name: string;
  promo?: {
    badge: string;
    discount: number;
    discountFormatted: string;
    validity: string;
  };
  scarcity?: {
    unitsLeft: number;
    message: string;
  };
}

export default function ImageGallery({ render3D, floorPlan, name, promo, scarcity }: ImageGalleryProps) {
  const [activeTab, setActiveTab] = useState<'render' | 'floorplan'>('render');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  return (
    <div>
      {/* Main Image/Tab Content */}
      <div className="relative mb-6">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={activeTab === 'render' ? render3D[activeImageIndex] : floorPlan}
            alt={`${name} - ${activeTab === 'render' ? '3D Render' : 'Denah'}`}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Badges */}
        {(promo || scarcity) && (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {promo && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg font-bold uppercase tracking-wide shadow-lg bg-gradient-to-r from-gold-600 to-gold-500 text-white">
                {promo.badge}
              </span>
            )}
            {scarcity && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg font-bold uppercase tracking-wide shadow-lg bg-red-600 text-white animate-pulse">
                {scarcity.message}
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('render')}
          className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === 'render'
              ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-lg'
              : 'bg-navy-50 text-navy-700 hover:bg-gold-50'
          }`}
        >
          3D Render
        </button>
        <button
          onClick={() => setActiveTab('floorplan')}
          className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === 'floorplan'
              ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-lg'
              : 'bg-navy-50 text-navy-700 hover:bg-gold-50'
          }`}
        >
          Denah Rumah
        </button>
      </div>
      
      {/* Thumbnail Gallery (only for renders) */}
      {activeTab === 'render' && (
        <div className="grid grid-cols-4 gap-4">
          {render3D.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                activeImageIndex === index
                  ? 'border-gold-500 ring-2 ring-gold-300'
                  : 'border-navy-200 hover:border-gold-300'
              }`}
            >
              <Image src={img} alt={`${name} view ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
