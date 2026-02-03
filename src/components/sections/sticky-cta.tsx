'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { getButtonClasses } from '@/components/ui';
import { cn } from '@/lib/utils';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  const shouldHide = pathname === '/demo' || pathname === '/success';

  useEffect(() => {
    if (shouldHide || isDismissed) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition > viewportHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldHide, isDismissed]);

  if (shouldHide) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={cn(
            'fixed bottom-0 left-0 right-0 z-40',
            'bg-vinyl-black/95 backdrop-blur-md',
            'border-t border-gold/20',
            'safe-area-inset-bottom'
          )}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="hidden sm:block">
                <p className="text-off-white font-medium text-sm">
                  Bereit, Ihren Laden zu transformieren?
                </p>
                <p className="text-warm-gray text-xs">
                  30 Tage kostenlos testen. Keine Kreditkarte erforderlich.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/demo"
                  className={cn(
                    getButtonClasses('primary', 'md'),
                    'flex-1 sm:flex-none'
                  )}
                >
                  Jetzt Demo anfordern
                  <ArrowRight size={18} />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-warm-gray hover:text-off-white transition-colors"
                  aria-label="Schließen"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
