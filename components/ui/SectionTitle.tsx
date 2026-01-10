import { ReactNode } from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({ 
  badge, 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold-600 bg-gold-50 rounded-full border border-gold-200">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-navy-700 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
