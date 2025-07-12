import React from 'react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonUrl,
  className = ''
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="bg-gradient-cta rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-portfolio-navy mb-4">
            {title}
          </h2>
          <p className="text-portfolio-navy/80 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href={buttonUrl}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};