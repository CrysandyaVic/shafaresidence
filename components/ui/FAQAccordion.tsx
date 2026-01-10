'use client';

import { useState } from 'react';
import type { FAQItem } from '@/data/faqs';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  
  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div 
          key={faq.id}
          className="bg-white rounded-xl border-2 border-navy-100 overflow-hidden transition-all duration-300 hover:border-gold-400"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-300 hover:bg-gold-50"
          >
            <span className="font-semibold text-navy-950 flex-1">
              {faq.question}
            </span>
            <svg
              className={`w-6 h-6 text-gold-600 flex-shrink-0 transition-transform duration-300 ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === faq.id ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 text-navy-700 leading-relaxed border-t border-navy-100">
              <p className="pt-4">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
