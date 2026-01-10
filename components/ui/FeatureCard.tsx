import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient?: boolean;
}

export default function FeatureCard({ icon, title, description, gradient = false }: FeatureCardProps) {
  return (
    <div className={`
      group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105
      ${gradient 
        ? 'bg-gradient-to-br from-navy-900 to-navy-800 text-white' 
        : 'bg-white border-2 border-navy-100 hover:border-gold-400 hover:shadow-xl'
      }
    `}>
      {/* Icon */}
      <div className={`
        inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6
        transition-transform duration-300 group-hover:scale-110
        ${gradient 
          ? 'bg-gold-600/20 text-gold-400' 
          : 'bg-gradient-to-br from-gold-600 to-gold-500 text-white'
        }
      `}>
        <span className="text-3xl">{icon}</span>
      </div>
      
      {/* Content */}
      <h3 className={`
        text-xl font-bold mb-3
        ${gradient ? 'text-gold-400' : 'text-navy-950'}
      `}>
        {title}
      </h3>
      
      <p className={`
        leading-relaxed
        ${gradient ? 'text-navy-100' : 'text-navy-700'}
      `}>
        {description}
      </p>
      
      {/* Decorative element */}
      <div className={`
        absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10
        ${gradient ? 'bg-gold-400' : 'bg-navy-900'}
      `} />
    </div>
  );
}
