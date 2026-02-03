import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Shield, Headphones } from 'lucide-react';
import { Container, Section, getButtonClasses } from '@/components/ui';
import { DemoRequestForm } from '@/components/forms/demo-request-form';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Demo anfragen',
  description:
    'Fordern Sie eine kostenlose, persönliche Demo von Q-Records an. Sehen Sie, wie unsere Software Ihren Schallplattenladen transformieren kann.',
  openGraph: {
    title: 'Demo anfragen | Q-Records Store Manager',
    description:
      'Fordern Sie eine kostenlose, persönliche Demo von Q-Records an. Sehen Sie, wie unsere Software Ihren Schallplattenladen transformieren kann.',
    url: `${siteConfig.url}/demo`,
  },
};

export default function DemoPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container size="lg">
        {/* Back link */}
        <Link
          href="/"
          className={getButtonClasses('ghost', 'sm') + ' mb-8 inline-flex'}
        >
          <ArrowLeft size={18} />
          Zurück zur Startseite
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Info */}
          <div>
            <h1 className="text-off-white mb-4">
              Sehen Sie Ihren Laden{' '}
              <span className="text-gradient-gold">in Bewegung</span>
            </h1>
            <p className="text-warm-gray text-lg mb-8 leading-relaxed">
              In einer persönlichen 30-minütigen Demo zeigen wir Ihnen, wie Q-Records
              Ihren Bestand automatisiert, Ihre Verkäufe steigert und Ihnen Zeit für
              das Wesentliche gibt: Ihre Leidenschaft für Vinyl.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              <BenefitItem
                icon={<Clock className="w-6 h-6" />}
                title="30 Minuten, kein Commitment"
                description="Eine kurze, fokussierte Demo – zugeschnitten auf Ihre Anforderungen."
              />
              <BenefitItem
                icon={<Headphones className="w-6 h-6" />}
                title="Persönliche Beratung"
                description="Ein Vinyl-Experte führt Sie durch das System und beantwortet alle Fragen."
              />
              <BenefitItem
                icon={<Shield className="w-6 h-6" />}
                title="30 Tage kostenlos testen"
                description="Nach der Demo erhalten Sie vollen Zugriff – ohne Kreditkarte, ohne Risiko."
              />
            </div>

            {/* Quote */}
            <div className="card-3d p-6 relative">
              <div className="absolute -top-3 left-6 text-4xl text-gold/30">&ldquo;</div>
              <blockquote className="text-off-white italic mb-4 pt-4">
                Die Demo hat mir in 30 Minuten gezeigt, was ich in Jahren mit Excel nie
                geschafft habe. Am nächsten Tag war mein kompletter Discogs-Katalog importiert.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-walnut/30 flex items-center justify-center text-off-white font-serif font-bold">
                  M
                </div>
                <div>
                  <div className="text-sm font-medium text-off-white">
                    Marcus Weinert
                  </div>
                  <div className="text-xs text-warm-gray">Vinyl Dreams, Berlin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <DemoRequestForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function BenefitItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-off-white font-medium mb-1">{title}</h3>
        <p className="text-warm-gray text-sm">{description}</p>
      </div>
    </div>
  );
}
