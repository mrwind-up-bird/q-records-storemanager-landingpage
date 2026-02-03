'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Container,
  Section,
  SectionHeader,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  getButtonClasses,
} from '@/components/ui';
import { faqItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="faq" className="relative">
      <Container size="md">
        <SectionHeader
          title="Häufig gestellte Fragen"
          subtitle="Alles, was Sie über Q-Records wissen müssen – und noch mehr."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Accordion defaultExpanded={faqItems[0]?.id}>
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem id={item.id}>
                  <AccordionTrigger itemId={item.id}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent itemId={item.id}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="card-3d p-8 md:p-12">
            <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-serif text-off-white mb-2">
              Noch Fragen?
            </h3>
            <p className="text-warm-gray mb-6 max-w-md mx-auto">
              Unser Team steht Ihnen gerne für eine persönliche Beratung zur Verfügung.
              Wir beantworten alle Ihre Fragen – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className={cn(getButtonClasses('primary', 'md'), 'group')}
              >
                Demo vereinbaren
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="mailto:kontakt@q-records.de"
                className={getButtonClasses('outline', 'md')}
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
