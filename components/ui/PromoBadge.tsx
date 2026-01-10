interface PromoBadgeProps {
  text: string;
  variant?: 'discount' | 'scarcity' | 'new' | 'bestseller';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PromoBadge({ 
  text, 
  variant = 'discount',
  size = 'md',
  className = '' 
}: PromoBadgeProps) {
  const variantClasses = {
    discount: 'bg-gradient-to-r from-gold-600 to-gold-500 text-white',
    scarcity: 'bg-red-600 text-white animate-pulse',
    new: 'bg-green-600 text-white',
    bestseller: 'bg-navy-900 text-gold-400 border-2 border-gold-400',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  return (
    <span className={`
      inline-flex items-center gap-1 rounded-lg font-bold uppercase tracking-wide
      shadow-lg
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `}>
      {variant === 'discount' && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      {variant === 'scarcity' && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      {text}
    </span>
  );
}
