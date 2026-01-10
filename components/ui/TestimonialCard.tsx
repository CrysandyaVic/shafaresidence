import Image from 'next/image';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-navy-100 hover:border-gold-400 transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Content */}
      <p className="text-navy-700 leading-relaxed mb-6 italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t-2 border-navy-100">
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-400">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-navy-950">{testimonial.name}</h4>
          <p className="text-sm text-navy-600">{testimonial.role}</p>
          {testimonial.location && (
            <p className="text-xs text-gold-600 font-medium mt-1">{testimonial.location}</p>
          )}
        </div>
      </div>
    </div>
  );
}
