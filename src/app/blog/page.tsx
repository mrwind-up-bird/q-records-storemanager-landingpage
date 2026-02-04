import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Container, Section, getButtonClasses } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Neuigkeiten, Tipps und Einblicke rund um Schallplattenläden und Bestandsverwaltung.',
  robots: {
    index: true,
    follow: true,
  },
};

const blogPosts = [
  {
    id: 1,
    title: 'Warum Schallplattenläden eine moderne Bestandsverwaltung brauchen',
    excerpt: 'Die Vinyl-Renaissance bringt neue Herausforderungen für Ladenbesitzer. Erfahren Sie, wie digitale Tools Ihnen helfen können.',
    date: '2026-02-01',
    readTime: '5 min',
    category: 'Branche',
  },
  {
    id: 2,
    title: 'Discogs-Integration: So synchronisieren Sie Ihren Katalog',
    excerpt: 'Eine Schritt-für-Schritt-Anleitung zur optimalen Nutzung der Discogs-Schnittstelle für Ihren Laden.',
    date: '2026-01-25',
    readTime: '8 min',
    category: 'Tutorial',
  },
  {
    id: 3,
    title: '5 Fehler bei der Bestandsführung, die Sie vermeiden sollten',
    excerpt: 'Aus unseren Gesprächen mit über 100 Schallplattenläden haben wir die häufigsten Stolperfallen identifiziert.',
    date: '2026-01-18',
    readTime: '6 min',
    category: 'Tipps',
  },
];

export default function BlogPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif text-off-white mb-4">Blog</h1>
          <p className="text-warm-gray text-lg">
            Einblicke, Tipps und Neuigkeiten für Schallplattenladenbesitzer
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card-3d p-6 md:p-8 hover:border-gold/30 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-warm-gray">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('de-DE', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-serif text-off-white mb-3 group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-warm-gray leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-gold text-sm font-medium group-hover:underline">
                Weiterlesen →
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-warm-gray">
            Weitere Artikel folgen in Kürze. Bleiben Sie dran!
          </p>
        </div>
      </Container>
    </Section>
  );
}
