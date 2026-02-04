import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Briefcase, Users, Heart } from 'lucide-react';
import { Container, Section, getButtonClasses } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Karriere',
  description: 'Werden Sie Teil des Q-Records Teams. Aktuelle Stellenangebote und Karrieremöglichkeiten.',
  robots: {
    index: true,
    follow: true,
  },
};

const benefits = [
  {
    icon: MapPin,
    title: 'Remote-First',
    description: 'Arbeiten Sie von überall in Deutschland',
  },
  {
    icon: Briefcase,
    title: 'Flexible Arbeitszeiten',
    description: 'Work-Life-Balance ist uns wichtig',
  },
  {
    icon: Users,
    title: 'Kleines Team',
    description: 'Direkter Einfluss auf das Produkt',
  },
  {
    icon: Heart,
    title: 'Vinyl-Leidenschaft',
    description: 'Für Musik- und Schallplattenliebhaber',
  },
];

export default function KarrierePage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container size="md">
        <Link
          href="/"
          className={getButtonClasses('ghost', 'sm') + ' mb-8 inline-flex'}
        >
          <ArrowLeft size={18} />
          Zurück zur Startseite
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-off-white mb-4">Karriere</h1>
          <p className="text-warm-gray text-lg">
            Gestalten Sie die Zukunft der Schallplattenbranche mit uns
          </p>
        </div>

        <div className="card-3d p-8 mb-8">
          <h2 className="text-2xl font-serif text-gold mb-4">Warum Q-Records?</h2>
          <p className="text-off-white leading-relaxed mb-6">
            Wir bauen Software für eine leidenschaftliche Community. Schallplattenläden sind
            mehr als nur Geschäfte – sie sind kulturelle Treffpunkte. Mit Q-Records Store Manager
            helfen wir Ladenbesitzern, sich auf das zu konzentrieren, was sie lieben: Musik und Kunden.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-4">
                <benefit.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <h3 className="text-off-white font-medium text-sm mb-1">{benefit.title}</h3>
                <p className="text-warm-gray text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-3d p-8 mb-8">
          <h2 className="text-2xl font-serif text-gold mb-6">Offene Stellen</h2>

          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xl text-off-white mb-2">Derzeit keine offenen Stellen</h3>
            <p className="text-warm-gray max-w-md mx-auto">
              Wir haben aktuell keine offenen Positionen, aber wir freuen uns immer über
              Initiativbewerbungen von talentierten Menschen mit Leidenschaft für Vinyl.
            </p>
          </div>
        </div>

        <div className="card-3d p-8">
          <h2 className="text-2xl font-serif text-gold mb-4">Initiativbewerbung</h2>
          <p className="text-off-white leading-relaxed mb-4">
            Sie glauben, Sie passen perfekt zu uns? Erzählen Sie uns von sich! Wir suchen
            Menschen mit Erfahrung in:
          </p>
          <ul className="text-warm-gray space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Frontend-Entwicklung (React, TypeScript)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Backend-Entwicklung (Node.js, PostgreSQL)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Product Design / UX
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Customer Success / Support
            </li>
          </ul>
          <a
            href="mailto:karriere@q-records-storemanager.de?subject=Initiativbewerbung"
            className={getButtonClasses('primary', 'md')}
          >
            Jetzt bewerben
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-off-white/10 text-center">
          <p className="text-warm-gray text-sm">
            Fragen? Schreiben Sie uns an{' '}
            <a href="mailto:karriere@q-records-storemanager.de" className="text-gold hover:underline">
              karriere@q-records-storemanager.de
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
