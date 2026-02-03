'use client';

import { useState, createContext, useContext, useId, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextValue {
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  children: ReactNode;
  className?: string;
  defaultExpanded?: string;
}

export function Accordion({ children, className, defaultExpanded }: AccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(defaultExpanded || null);

  return (
    <AccordionContext.Provider value={{ expandedId, setExpandedId }}>
      <div className={cn('space-y-3', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AccordionItem({ children, className, id }: AccordionItemProps) {
  const generatedId = useId();
  const itemId = id || generatedId;

  return (
    <div
      className={cn(
        'border border-off-white/10 rounded-xl overflow-hidden',
        'bg-vinyl-black/30 backdrop-blur-sm',
        'transition-colors duration-200',
        'hover:border-gold/20',
        className
      )}
      data-accordion-item={itemId}
    >
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
  itemId: string;
}

export function AccordionTrigger({ children, className, itemId }: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionTrigger must be used within Accordion');

  const { expandedId, setExpandedId } = context;
  const isExpanded = expandedId === itemId;

  return (
    <button
      type="button"
      onClick={() => setExpandedId(isExpanded ? null : itemId)}
      className={cn(
        'flex items-center justify-between w-full p-5',
        'text-left text-off-white font-medium',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset',
        'transition-colors duration-200',
        isExpanded && 'text-gold',
        className
      )}
      aria-expanded={isExpanded}
    >
      <span className="pr-4">{children}</span>
      <motion.span
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="shrink-0"
      >
        <ChevronDown className="w-5 h-5 text-warm-gray" />
      </motion.span>
    </button>
  );
}

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
  itemId: string;
}

export function AccordionContent({ children, className, itemId }: AccordionContentProps) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionContent must be used within Accordion');

  const { expandedId } = context;
  const isExpanded = expandedId === itemId;

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={cn('px-5 pb-5 text-warm-gray leading-relaxed', className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
