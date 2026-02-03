import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Play, ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { Container, Section, getButtonClasses, VinylDisc } from '@/components/ui';
import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Anfrage erhalten',
  description:
    'Vielen Dank für Ihre Demo-Anfrage. Wir werden uns in Kürze bei Ihnen melden.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <Section className="pt-24 md:pt-32 min-h-screen flex items-center">
      <Container size="md">
        <div className="text-center">
          {/* Success icon with animation */}
          <div className="relative inline-flex mb-8">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
          </div>

          <h1 className="text-off-white mb-4">
            Ihre Anfrage ist{' '}
            <span className="text-gradient-gold">angekommen</span>
          </h1>

          <p className="text-warm-gray text-lg mb-8 max-w-lg mx-auto">
            Vielen Dank für Ihr Interesse an Q-Records. Ihr Laden wird bereits
            analysiert – erwarten Sie einen persönlichen Anruf innerhalb von 24 Stunden.
          </p>

          {/* Video Preview */}
          <div className="card-3d p-1 mb-12 max-w-2xl mx-auto overflow-hidden">
            <div className="relative aspect-video bg-deep-charcoal rounded-xl overflow-hidden group cursor-pointer">
              {/* Vinyl animation as placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-vinyl-black to-deep-charcoal">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                  <VinylDisc size="xl" spinning />
                </div>

                {/* Play button */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                  <Play className="w-8 h-8 text-gold fill-gold" />
                </div>

                {/* Video label */}
                <div className="absolute bottom-4 left-4 bg-vinyl-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-xs text-warm-gray">60-Sekunden Sneak Peek</div>
                  <div className="text-sm text-off-white font-medium">
                    So funktioniert Q-Records
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-vinyl-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-gold" />
                  <span className="text-xs text-off-white">0:60</span>
                </div>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="card-3d p-8 mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-xl font-serif text-off-white mb-6 text-center">
              Was passiert als Nächstes?
            </h2>

            <div className="space-y-6">
              <TimelineItem
                step={1}
                title="Analyse Ihrer Anforderungen"
                description="Unser Team prüft Ihre Angaben und bereitet eine maßgeschneiderte Demo vor."
                icon={<Mail className="w-5 h-5" />}
                active
              />
              <TimelineItem
                step={2}
                title="Persönlicher Anruf"
                description="Ein Vinyl-Experte meldet sich bei Ihnen, um einen Termin zu vereinbaren."
                icon={<Phone className="w-5 h-5" />}
                time="In 24h"
              />
              <TimelineItem
                step={3}
                title="Live-Demo"
                description="30-minütige Demo, zugeschnitten auf Ihren Laden und Ihre Workflows."
                icon={<Play className="w-5 h-5" />}
                time="Nach Vereinbarung"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className={cn(getButtonClasses('outline', 'md'))}
            >
              Zurück zur Startseite
            </Link>
            <a
              href={`mailto:team@${siteConfig.url.replace('https://', '')}`}
              className={cn(getButtonClasses('ghost', 'md'))}
            >
              Fragen? Schreiben Sie uns
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-off-white/10">
            <p className="text-sm text-warm-gray mb-4">
              Sie möchten nicht warten? Rufen Sie uns direkt an:
            </p>
            <a
              href="tel:+4930123456789"
              className="text-xl font-serif font-medium text-gold hover:text-gold-hover transition-colors"
            >
              +49 30 123 456 789
            </a>
            <p className="text-xs text-warm-gray mt-2">Mo-Fr 9:00-18:00 Uhr</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TimelineItem({
  step,
  title,
  description,
  icon,
  time,
  active,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  time?: string;
  active?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center',
            active
              ? 'bg-gold/20 text-gold border border-gold/50'
              : 'bg-vinyl-black/50 text-warm-gray border border-off-white/10'
          )}
        >
          {icon}
        </div>
        {step < 3 && <div className="w-px h-full bg-off-white/10 mt-2" />}
      </div>
      <div className="pb-6">
        <div className="flex items-center gap-3 mb-1">
          <h3
            className={cn(
              'font-medium',
              active ? 'text-gold' : 'text-off-white'
            )}
          >
            {title}
          </h3>
          {time && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold">
              {time}
            </span>
          )}
        </div>
        <p className="text-sm text-warm-gray">{description}</p>
      </div>
    </div>
  );
}
