'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Container, getButtonClasses, VinylDisc, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-vinyl-black via-vinyl-black/95 to-deep-charcoal" />

        {/* Radial gradient for spotlight effect */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Badge variant="gold" className="mb-6">
              Neu: Discogs-Integration 2.0
            </Badge>

            <h1 className="text-off-white mb-6">
              Die Präzision, die Ihre{' '}
              <span className="text-gradient-gold">Sammlung verdient</span>
            </h1>

            <p className="text-warm-gray text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Schluss mit Excel-Chaos und manuellen Bestandszählungen. Q-Records
              synchronisiert Ihren Plattenladen in Echtzeit – von der Kasse bis zu Discogs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/demo"
                className={cn(getButtonClasses('primary', 'lg'), 'group')}
              >
                Demo anfragen
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <button
                type="button"
                className={cn(getButtonClasses('outline', 'lg'), 'group')}
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Video ansehen
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-warm-gray">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Kostenlose 30-Tage-Demo
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                DSGVO-konform
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Über 200 Läden vertrauen uns
              </div>
            </div>
          </motion.div>

          {/* Vinyl Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind vinyl */}
              <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
                  transform: 'scale(1.5)',
                }}
              />

              {/* Album sleeve (partially visible) */}
              <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 rounded-lg bg-gradient-to-br from-walnut to-walnut-light shadow-2xl"
                style={{
                  transform: 'translateY(-50%) rotateY(10deg)',
                }}
              >
                <div className="absolute inset-4 border border-off-white/10 rounded" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-2 bg-off-white/20 rounded mb-2 w-3/4" />
                  <div className="h-2 bg-off-white/10 rounded w-1/2" />
                </div>
              </motion.div>

              {/* Main vinyl */}
              <VinylDisc size="xl" spinning className="relative z-10" />

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 md:-right-8 top-8 glass rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-serif font-bold text-gold">+47%</div>
                <div className="text-xs text-warm-gray">Effizienzsteigerung</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 md:-left-8 bottom-8 glass rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-serif font-bold text-off-white">12.847</div>
                <div className="text-xs text-warm-gray">Artikel synced/Tag</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-warm-gray/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
