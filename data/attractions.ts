export interface Attraction {
  id: string;
  name: string;
  category: "Theme Park" | "Museum" | "Natural" | "Shopping" | "Recreation";
  distance: string;
  estimatedTime: string;
  description: string;
  icon: string; // emoji or icon name
}

export const attractions: Attraction[] = [
  {
    id: "1",
    name: "Jatim Park 1",
    category: "Theme Park",
    distance: "3.5 km",
    estimatedTime: "8 menit berkendara",
    description: "Taman hiburan keluarga dengan wahana edukatif dan science center",
    icon: "🎡",
  },
  {
    id: "2",
    name: "Jatim Park 2",
    category: "Theme Park",
    distance: "4.2 km",
    estimatedTime: "10 menit berkendara",
    description: "Batu Secret Zoo dan Museum Satwa terbesar di Indonesia",
    icon: "🦁",
  },
  {
    id: "3",
    name: "Museum Angkut",
    category: "Museum",
    distance: "3.8 km",
    estimatedTime: "9 menit berkendara",
    description: "Museum transportasi terlengkap di Asia Tenggara",
    icon: "🚗",
  },
  {
    id: "4",
    name: "Jatim Park 3 (Dino Park)",
    category: "Theme Park",
    distance: "5.5 km",
    estimatedTime: "12 menit berkendara",
    description: "Taman dinosaurus dengan teknologi animatronik",
    icon: "🦕",
  },
  {
    id: "5",
    name: "Selecta",
    category: "Recreation",
    distance: "6.8 km",
    estimatedTime: "15 menit berkendara",
    description: "Taman rekreasi legendaris dengan kolam renang dan taman bunga",
    icon: "🌺",
  },
  {
    id: "6",
    name: "Alun-Alun Batu",
    category: "Recreation",
    distance: "2.5 km",
    estimatedTime: "6 menit berkendara",
    description: "Pusat kota dengan kuliner dan city light malam",
    icon: "🌃",
  },
  {
    id: "7",
    name: "BNS (Batu Night Spectacular)",
    category: "Theme Park",
    distance: "4.5 km",
    estimatedTime: "11 menit berkendara",
    description: "Taman lampion dan wahana malam hari",
    icon: "💡",
  },
  {
    id: "8",
    name: "Eco Green Park",
    category: "Natural",
    distance: "4.0 km",
    estimatedTime: "10 menit berkendara",
    description: "Taman edukasi lingkungan dengan bird park",
    icon: "🦜",
  },
  {
    id: "9",
    name: "Coban Rondo",
    category: "Natural",
    distance: "12 km",
    estimatedTime: "25 menit berkendara",
    description: "Air terjun alami di kaki Gunung Panderman",
    icon: "💧",
  },
  {
    id: "10",
    name: "Pasar Wisata Batu",
    category: "Shopping",
    distance: "2.8 km",
    estimatedTime: "7 menit berkendara",
    description: "Pusat oleh-oleh khas Batu dan kuliner lokal",
    icon: "🛍️",
  },
];

// Grouping by category for UI display
export const attractionsByCategory = attractions.reduce((acc, attraction) => {
  if (!acc[attraction.category]) {
    acc[attraction.category] = [];
  }
  acc[attraction.category].push(attraction);
  return acc;
}, {} as Record<string, Attraction[]>);
