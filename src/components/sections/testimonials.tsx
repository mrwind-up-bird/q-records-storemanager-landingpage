'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui';
import { testimonials } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <Section id="testimonials" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(78, 52, 46, 0.3) 0%, transparent 40%),
                             radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)`,
          }}
        />
      </div>

      <Container>
        <SectionHeader
          title="Vertrauen Sie nicht uns – vertrauen Sie ihnen"
          subtitle="Über 200 Schallplattenläden in Deutschland, Österreich und der Schweiz nutzen Q-Records täglich."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main testimonial */}
          <div className="relative min-h-[300px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -50 : 50,
                  scale: index === currentIndex ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className={cn(
                  'absolute inset-0',
                  index !== currentIndex && 'pointer-events-none'
                )}
              >
                <div className="card-3d p-8 md:p-12 h-full flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-gold/30 mb-6" />

                  <blockquote className="text-lg md:text-xl lg:text-2xl font-serif text-off-white leading-relaxed mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-walnut/30 flex items-center justify-center text-off-white font-serif font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-off-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-warm-gray">
                        {testimonial.role}, {testimonial.store}
                      </div>
                      <div className="text-xs text-gold">{testimonial.city}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prevSlide}
              className="p-2 rounded-full border border-off-white/10 text-warm-gray hover:text-off-white hover:border-gold/30 transition-colors"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'w-8 bg-gold'
                      : 'bg-warm-gray/30 hover:bg-warm-gray/50'
                  )}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="p-2 rounded-full border border-off-white/10 text-warm-gray hover:text-off-white hover:border-gold/30 transition-colors"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <StatItem value="200+" label="Aktive Läden" />
            <StatItem value="4.9/5" label="Bewertung" />
            <StatItem value="98%" label="Kundenzufriedenheit" />
            <StatItem value="24h" label="Ø Antwortzeit" />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-serif font-bold text-gold mb-1">
        {value}
      </div>
      <div className="text-sm text-warm-gray">{label}</div>
    </div>
  );
}
