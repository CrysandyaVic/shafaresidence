'use client';

import type { Attraction } from '@/data/attractions';

interface MapWithPinsProps {
  attractions: Attraction[];
}

export default function MapWithPins({ attractions }: MapWithPinsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Map Placeholder */}
      <div className="md:col-span-2">
        <div className="relative bg-navy-50 rounded-2xl overflow-hidden border-2 border-navy-200 h-[500px]">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-50">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                linear-gradient(to right, #1e2749 1px, transparent 1px),
                linear-gradient(to bottom, #1e2749 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Center Marker - The Shafa Residence */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative animate-pulse">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-gold-300">
                <span className="text-2xl">🏡</span>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-navy-950 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                  The Shafa Residence
                </div>
              </div>
            </div>
          </div>
          
          {/* Sample pins scattered around */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.1s' }}>
            <span className="text-sm">🎡</span>
          </div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm">🚗</span>
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
            <span className="text-sm">🌺</span>
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.4s' }}>
            <span className="text-sm">🦁</span>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <p className="text-xs text-navy-600 mb-2 font-semibold">Jarak ke wisata terdekat:</p>
            <p className="text-sm text-navy-950 font-bold">5-15 menit berkendara</p>
          </div>
        </div>
      </div>
      
      {/* Attractions List */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {attractions.map((attraction) => (
          <div 
            key={attraction.id}
            className="bg-white p-4 rounded-xl border-2 border-navy-100 hover:border-gold-400 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-600 to-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{attraction.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-navy-950 mb-1">{attraction.name}</h4>
                <p className="text-xs text-gold-600 font-semibold mb-1">
                  {attraction.distance} • {attraction.estimatedTime}
                </p>
                <p className="text-xs text-navy-600 leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b8962e;
        }
      `}</style>
    </div>
  );
}
