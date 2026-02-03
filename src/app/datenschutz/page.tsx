import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container, Section, getButtonClasses } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung für Q-Records Store Manager. Informationen zum Schutz Ihrer personenbezogenen Daten.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
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
          <h1 className="text-off-white mb-4">Datenschutzerklärung</h1>
          <p className="text-warm-gray mb-8">Stand: Dezember 2025</p>

          <div className="space-y-8">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="text-2xl font-serif text-gold mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <div className="card-3d p-6 mb-6">
                <h3 className="text-lg font-medium text-off-white mt-0 mb-3">
                  Allgemeine Hinweise
                </h3>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
                  Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
                  identifiziert werden können. Ausführliche Informationen zum Thema
                  Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                  Datenschutzerklärung.
                </p>
              </div>

              <div className="card-3d p-6 mb-6">
                <h3 className="text-lg font-medium text-off-white mt-0 mb-3">
                  Datenerfassung auf dieser Website
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  <strong className="text-off-white">
                    Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                  </strong>
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis
                  zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  <strong className="text-off-white">Wie erfassen wir Ihre Daten?</strong>
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                  mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
                  Kontaktformular oder Demo-Anfrage eingeben.
                </p>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
                  der Website durch unsere IT-Systeme erfasst. Das sind vor allem
                  technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                  Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
                  Sie diese Website betreten.
                </p>
              </div>

              <div className="card-3d p-6">
                <h3 className="text-lg font-medium text-off-white mt-0 mb-3">
                  Wofür nutzen wir Ihre Daten?
                </h3>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
                  Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                  Nutzerverhaltens verwendet werden. Wenn Sie eine Demo anfragen, werden
                  Ihre Daten verwendet, um Sie zu kontaktieren und Ihnen eine
                  personalisierte Demonstration unserer Software anzubieten.
                </p>
              </div>
            </section>

            {/* 2. Verantwortliche Stelle */}
            <section>
              <h2 className="text-2xl font-serif text-gold mb-4">
                2. Hinweis zur verantwortlichen Stelle
              </h2>

              <div className="card-3d p-6">
                <p className="text-warm-gray leading-relaxed mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
                  ist:
                </p>
                <div className="space-y-1 text-off-white mb-4">
                  <p className="font-medium text-lg mb-0">Q-Records Storemanager</p>
                  <p className="mb-0">Oliver Baer</p>
                  <p className="mb-0">Feldstrasse 26</p>
                  <p className="mb-0">21335 Lüneburg</p>
                  <p className="mb-0">Deutschland</p>
                </div>
                <p className="text-warm-gray mb-2">
                  <span className="text-warm-gray">Telefon:</span>{' '}
                  <a href="tel:+491702305888" className="text-gold hover:text-gold-hover">
                    +49 (0) 170 230 5888
                  </a>
                </p>
                <p className="text-warm-gray mb-0">
                  <span className="text-warm-gray">E-Mail:</span>{' '}
                  <a
                    href="mailto:info@q-records-storemanager.de"
                    className="text-gold hover:text-gold-hover"
                  >
                    info@q-records-storemanager.de
                  </a>
                </p>
              </div>
            </section>

            {/* 3. Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-serif text-gold mb-4">
                3. Ihre Rechte als betroffene Person
              </h2>

              <div className="card-3d p-6">
                <p className="text-warm-gray leading-relaxed mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                  Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
                  erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
                  dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                  Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
                  für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </p>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                  Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
                  Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="card-3d p-4">
                  <h4 className="text-off-white font-medium mb-2">Auskunftsrecht</h4>
                  <p className="text-warm-gray text-sm mb-0">
                    Recht auf Auskunft über Ihre gespeicherten Daten
                  </p>
                </div>
                <div className="card-3d p-4">
                  <h4 className="text-off-white font-medium mb-2">Berichtigungsrecht</h4>
                  <p className="text-warm-gray text-sm mb-0">
                    Recht auf Korrektur unrichtiger Daten
                  </p>
                </div>
                <div className="card-3d p-4">
                  <h4 className="text-off-white font-medium mb-2">Löschungsrecht</h4>
                  <p className="text-warm-gray text-sm mb-0">
                    Recht auf Löschung Ihrer Daten
                  </p>
                </div>
                <div className="card-3d p-4">
                  <h4 className="text-off-white font-medium mb-2">Datenübertragbarkeit</h4>
                  <p className="text-warm-gray text-sm mb-0">
                    Recht auf Übertragung Ihrer Daten
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Demo-Anfragen */}
            <section>
              <h2 className="text-2xl font-serif text-gold mb-4">
                4. Datenerfassung bei Demo-Anfragen
              </h2>

              <div className="card-3d p-6">
                <h3 className="text-lg font-medium text-off-white mt-0 mb-3">
                  Welche Daten erfassen wir?
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Wenn Sie eine Demo über unser Formular anfragen, erfassen wir folgende
                  Daten:
                </p>
                <ul className="text-warm-gray space-y-2 mb-4">
                  <li>Vor- und Nachname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer (optional)</li>
                  <li>Name Ihres Geschäfts</li>
                  <li>Stadt/Standort</li>
                  <li>Geschätzte Kataloggröße</li>
                  <li>Aktuell verwendete Lösung (optional)</li>
                  <li>Zusätzliche Nachricht (optional)</li>
                </ul>

                <h3 className="text-lg font-medium text-off-white mb-3">Rechtsgrundlage</h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
                  lit. a DSGVO (Einwilligung). Sie können diese Einwilligung jederzeit
                  widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                  Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>

                <h3 className="text-lg font-medium text-off-white mb-3">Speicherdauer</h3>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Die von Ihnen im Rahmen der Demo-Anfrage eingegebenen Daten verbleiben
                  bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
                  Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.
                  Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
                  bleiben unberührt.
                </p>
              </div>
            </section>

            {/* 5. Hosting */}
            <section>
              <h2 className="text-2xl font-serif text-gold mb-4">5. Hosting</h2>

              <div className="card-3d p-6">
                <p className="text-warm-gray leading-relaxed mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h3 className="text-lg font-medium text-off-white mt-0 mb-3">Vercel</h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
                  USA. Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen
                  Daten auf den Servern von Vercel verarbeitet. Hierbei können auch
                  personenbezogene Daten an den Mutterkonzern von Vercel in die USA
                  übermittelt werden.
                </p>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                  DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
                  zuverlässigen Darstellung unserer Website.
                </p>
              </div>
            </section>

            {/* 6. SSL/TLS */}
            <section>
              <h2 className="text-2xl font-serif text-gold mb-4">
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>

              <div className="card-3d p-6">
                <p className="text-warm-gray leading-relaxed mb-0">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als
                  Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                  verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                  Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol
                  in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert
                  ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
                  mitgelesen werden.
                </p>
              </div>
            </section>

            {/* 7. Externe Dienste */}
            <section>
              <h2 className="text-2xl font-serif text-gold mb-4">
                7. Externe Dienste
              </h2>

              <div className="card-3d p-6 mb-4">
                <h3 className="text-lg font-medium text-off-white mt-0 mb-3">Airtable</h3>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Für die Verwaltung von Demo-Anfragen nutzen wir Airtable (Formagic Inc.,
                  799 Market Street, 8th Floor, San Francisco, CA 94103, USA). Wenn Sie
                  eine Demo anfragen, werden Ihre Daten in Airtable gespeichert. Weitere
                  Informationen finden Sie in der Datenschutzerklärung von Airtable.
                </p>
              </div>

              <div className="card-3d p-6">
                <h3 className="text-lg font-medium text-off-white mt-0 mb-3">Resend</h3>
                <p className="text-warm-gray leading-relaxed mb-0">
                  Für den Versand von E-Mails (z.B. Bestätigungen für Demo-Anfragen)
                  nutzen wir Resend. Wenn Sie eine Demo anfragen, werden Ihre E-Mail-Adresse
                  und relevante Daten zur Zustellung der Bestätigungs-E-Mail verwendet.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-off-white/10">
            <div className="card-3d p-6 text-center">
              <h3 className="text-lg font-medium text-off-white mt-0 mb-3">
                Fragen zum Datenschutz?
              </h3>
              <p className="text-warm-gray mb-4">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen
                Daten wenden Sie sich bitte an:
              </p>
              <a
                href="mailto:info@q-records-storemanager.de"
                className="text-gold hover:text-gold-hover font-medium"
              >
                info@q-records-storemanager.de
              </a>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
