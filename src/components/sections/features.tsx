'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  CreditCard,
  RefreshCw,
  Package,
  BarChart3,
  Smartphone,
  Users,
  ChevronDown,
  Check,
} from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { features } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-6 h-6" />,
  RefreshCw: <RefreshCw className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export function Features() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="features" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-walnut/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          title="Unified Commerce für Vinyl-Händler"
          subtitle="Alle Werkzeuge, die Sie brauchen, um Ihren Laden effizienter zu führen – nahtlos integriert in einer Plattform."
        />

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              icon={iconMap[feature.icon]}
              isExpanded={expandedId === feature.id}
              onToggle={() =>
                setExpandedId(expandedId === feature.id ? null : feature.id)
              }
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-warm-gray mb-4">
            Und das ist erst der Anfang. Entdecken Sie alle Features in einer persönlichen Demo.
          </p>
          <Badge variant="outline">
            20+ weitere Funktionen verfügbar
          </Badge>
        </motion.div>
      </Container>
    </Section>
  );
}

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    description: string;
    details?: string[];
  };
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  isInView: boolean;
}

function FeatureCard({
  feature,
  icon,
  isExpanded,
  onToggle,
  index,
  isInView,
}: FeatureCardProps) {
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1 }}
      className={cn(
        'card-3d group cursor-pointer',
        isLarge && 'md:col-span-2 lg:col-span-1',
        isExpanded && 'ring-1 ring-gold/30'
      )}
      onClick={onToggle}
    >
      <div className="p-6">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-lg font-serif font-medium text-off-white mb-2 group-hover:text-gold transition-colors">
          {feature.title}
        </h3>
        <p className="text-warm-gray text-sm leading-relaxed mb-4">
          {feature.description}
        </p>

        {/* Expand button */}
        {feature.details && (
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-gold hover:text-gold-hover transition-colors"
          >
            <span>{isExpanded ? 'Weniger anzeigen' : 'Mehr erfahren'}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        )}

        {/* Expanded details */}
        <AnimatePresence>
          {isExpanded && feature.details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 pt-4 border-t border-off-white/10 space-y-2">
                {feature.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-off-white/80"
                  >
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>
    </motion.div>
  );
}
