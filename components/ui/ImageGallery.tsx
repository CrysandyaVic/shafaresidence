'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  render3D: string[];
  floorPlan: string;
  gallery: string[];
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

export default function ImageGallery({ render3D, floorPlan, gallery, name, promo, scarcity }: ImageGalleryProps) {
  const [activeTab, setActiveTab] = useState<'render' | 'floorplan' | 'gallery'>('render');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Combine all render images
  const allImages = activeTab === 'render' ? render3D : activeTab === 'gallery' ? gallery : [floorPlan];
  
  return (
    <div>
      {/* Main Image/Tab Content */}
      <div className="relative mb-6">
        <div className={`relative h-[500px] rounded-2xl overflow-hidden ${
          activeTab === 'floorplan' ? 'bg-white' : ''
        }`}>
          <Image
            src={allImages[activeImageIndex]}
            alt={`${name} - ${activeTab === 'render' ? '3D Render' : activeTab === 'gallery' ? 'Gallery' : 'Denah'}`}
            fill
            className={activeTab === 'floorplan' ? 'object-contain' : 'object-cover'}
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
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => { setActiveTab('render'); setActiveImageIndex(0); }}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === 'render'
              ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-lg'
              : 'bg-navy-50 text-navy-700 hover:bg-gold-50'
          }`}
        >
          Eksterior
        </button>
        <button
          onClick={() => { setActiveTab('gallery'); setActiveImageIndex(0); }}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === 'gallery'
              ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-lg'
              : 'bg-navy-50 text-navy-700 hover:bg-gold-50'
          }`}
        >
          Interior
        </button>
        <button
          onClick={() => { setActiveTab('floorplan'); setActiveImageIndex(0); }}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === 'floorplan'
              ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-lg'
              : 'bg-navy-50 text-navy-700 hover:bg-gold-50'
          }`}
        >
          Denah
        </button>
      </div>
      
      {/* Thumbnail Gallery */}
      {activeTab !== 'floorplan' && (
        <div className="grid grid-cols-4 gap-4">
          {allImages.map((img, index) => (
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
