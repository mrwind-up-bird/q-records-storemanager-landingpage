import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container, Section, getButtonClasses } from '@/components/ui';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen für Q-Records Store Manager.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
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

        <article className="prose prose-invert max-w-none">
          <h1 className="text-off-white mb-8">Impressum</h1>

          <div className="card-3d p-8 mb-8">
            <h2 className="text-xl font-serif text-gold mt-0 mb-4">
              Angaben gemäß § 5 TMG
            </h2>

            <div className="space-y-1 text-off-white">
              <p className="font-medium text-lg mb-0">Q-Records Storemanager</p>
              <p className="mb-0">Oliver Baer</p>
              <p className="mb-0">Feldstrasse 26</p>
              <p className="mb-0">21335 Lüneburg</p>
              <p className="mb-0">Deutschland</p>
            </div>
          </div>

          <div className="card-3d p-8 mb-8">
            <h2 className="text-xl font-serif text-gold mt-0 mb-4">Kontakt</h2>
            <div className="space-y-2 text-off-white">
              <p className="mb-0">
                <span className="text-warm-gray">Telefon:</span>{' '}
                <a href="tel:+491702305888" className="text-gold hover:text-gold-hover">
                  +49 (0) 170 230 5888
                </a>
              </p>
              <p className="mb-0">
                <span className="text-warm-gray">E-Mail:</span>{' '}
                <a href="mailto:info@q-records-storemanager.de" className="text-gold hover:text-gold-hover">
                  info@q-records-storemanager.de
                </a>
              </p>
            </div>
          </div>

          <div className="card-3d p-8 mb-8">
            <h2 className="text-xl font-serif text-gold mt-0 mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-off-white mb-0">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>
            <p className="text-gold font-medium text-lg mb-0">DE283903394</p>
          </div>

          <div className="card-3d p-8 mb-8">
            <h2 className="text-xl font-serif text-gold mt-0 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="space-y-1 text-off-white">
              <p className="mb-0">Oliver Baer</p>
              <p className="mb-0">Feldstrasse 26</p>
              <p className="mb-0">21335 Lüneburg</p>
            </div>
          </div>

          <div className="space-y-8 text-warm-gray">
            <div>
              <h2 className="text-xl font-serif text-off-white mb-4">
                Haftung für Inhalte
              </h2>
              <p className="leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p className="leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-off-white mb-4">
                Haftung für Links
              </h2>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="leading-relaxed">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
                ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-off-white mb-4">Urheberrecht</h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="leading-relaxed">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-off-white/10 text-center">
            <p className="text-warm-gray text-sm">
              © {new Date().getFullYear()} Q-Records Storemanager. Alle Rechte vorbehalten.
            </p>
          </div>
        </article>
      </Container>
    </Section>
  );
}
