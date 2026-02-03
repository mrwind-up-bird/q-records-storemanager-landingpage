'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VinylDiscProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  spinning?: boolean;
  className?: string;
  labelColor?: string;
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-80 h-80 md:w-96 md:h-96',
};

export function VinylDisc({
  size = 'lg',
  spinning = true,
  className,
  labelColor = '#D4AF37',
}: VinylDiscProps) {
  return (
    <motion.div
      className={cn(
        sizeMap[size],
        'relative rounded-full',
        className
      )}
      animate={spinning ? { rotate: 360 } : undefined}
      transition={
        spinning
          ? {
              duration: 8,
              ease: 'linear',
              repeat: Infinity,
            }
          : undefined
      }
    >
      {/* Outer rim */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl" />

      {/* Grooves */}
      <div className="absolute inset-2 rounded-full overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-zinc-700/30"
            style={{
              transform: `scale(${1 - i * 0.025})`,
            }}
          />
        ))}
      </div>

      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
        }}
      />

      {/* Center label */}
      <div
        className="absolute top-1/2 left-1/2 w-[35%] h-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${labelColor}, ${labelColor}99)`,
          boxShadow: `inset 0 2px 10px rgba(0,0,0,0.3), 0 0 20px ${labelColor}33`,
        }}
      >
        {/* Label text circle */}
        <div className="absolute inset-3 rounded-full border border-black/20 flex items-center justify-center">
          <div className="text-vinyl-black font-serif font-bold text-[0.5em] tracking-widest">
            Q-REC
          </div>
        </div>
      </div>

      {/* Center hole */}
      <div className="absolute top-1/2 left-1/2 w-[8%] h-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900 shadow-inner" />
    </motion.div>
  );
}

export function VinylStack({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      {/* Background vinyl */}
      <div className="absolute -top-4 -left-4 opacity-50 blur-sm">
        <VinylDisc size="lg" spinning={false} labelColor="#4E342E" />
      </div>
      {/* Foreground vinyl */}
      <VinylDisc size="lg" spinning labelColor="#D4AF37" />
    </div>
  );
}
