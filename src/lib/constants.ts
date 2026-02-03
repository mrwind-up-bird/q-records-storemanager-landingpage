import type { Feature, Testimonial, FAQItem, SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Q-Records Store Manager',
  description: 'Die präzise Inventarverwaltung, die Ihre Schallplattensammlung verdient. Professionelle Software für Vinyl-Händler in Deutschland.',
  url: 'https://q-records.de',
  ogImage: '/og-image.jpg',
  links: {
    linkedin: 'https://linkedin.com/company/q-records',
  },
};

export const navItems: NavItem[] = [
  { title: 'Features', href: '#features' },
  { title: 'Über uns', href: '#about' },
  { title: 'FAQ', href: '#faq' },
  { title: 'Demo anfragen', href: '/demo' },
];

export const features: Feature[] = [
  {
    id: 'pos-integration',
    title: 'POS Integration',
    description: 'Nahtlose Verbindung zu Ihrer Kasse. Verkäufe werden automatisch mit Ihrem Bestand synchronisiert.',
    icon: 'CreditCard',
    details: [
      'Kompatibel mit gängigen Kassensystemen',
      'Echtzeit-Bestandsaktualisierung',
      'Automatische Preisanpassung',
      'Barcode-Scanner-Unterstützung',
    ],
  },
  {
    id: 'discogs-sync',
    title: 'Discogs Synchronisierung',
    description: 'Importieren Sie Ihren gesamten Discogs-Katalog mit einem Klick. Halten Sie Preise und Verfügbarkeit automatisch aktuell.',
    icon: 'RefreshCw',
    details: [
      'Ein-Klick-Katalogimport',
      'Bidirektionale Synchronisation',
      'Automatische Preisaktualisierung',
      'Bestandsabgleich in Echtzeit',
    ],
  },
  {
    id: 'inventory-automation',
    title: 'Bestandsautomatisierung',
    description: 'Intelligente Algorithmen verwalten Ihren Bestand. Nie wieder manuelle Zählungen oder verpasste Nachbestellungen.',
    icon: 'Package',
    details: [
      'Automatische Nachbestellvorschläge',
      'Bestandsprognosen mit KI',
      'Multi-Standort-Verwaltung',
      'Inventurunterstützung',
    ],
  },
  {
    id: 'analytics',
    title: 'Verkaufsanalysen',
    description: 'Verstehen Sie, was sich verkauft und warum. Detaillierte Berichte helfen Ihnen, bessere Entscheidungen zu treffen.',
    icon: 'BarChart3',
    details: [
      'Trendanalysen nach Genre',
      'Saisonale Verkaufsmuster',
      'Kundenverhalten-Insights',
      'Exportierbare Berichte',
    ],
  },
  {
    id: 'mobile-app',
    title: 'Mobile Verwaltung',
    description: 'Verwalten Sie Ihren Shop von überall. Scannen Sie neue Ankäufe direkt in Ihr System.',
    icon: 'Smartphone',
    details: [
      'iOS und Android App',
      'Mobiles Scannen',
      'Push-Benachrichtigungen',
      'Offline-Modus',
    ],
  },
  {
    id: 'customer-management',
    title: 'Kundenverwaltung',
    description: 'Bauen Sie Beziehungen zu Ihren Stammkunden auf. Wunschlisten, Vorbestellungen und personalisierte Empfehlungen.',
    icon: 'Users',
    details: [
      'Kundendatenbank',
      'Wunschlisten-Management',
      'Vorbestellungssystem',
      'Treue-Programme',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Endlich eine Software, die versteht, wie ein Plattenladen funktioniert. Die Discogs-Integration allein spart mir 10 Stunden pro Woche.',
    author: 'Marcus Weinert',
    role: 'Inhaber',
    store: 'Vinyl Dreams',
    city: 'Berlin',
  },
  {
    id: '2',
    quote: 'Die Bestandsprognosen haben unsere Nachbestellungen revolutioniert. Wir haben kaum noch totes Kapital im Lager.',
    author: 'Sandra Hoffmann',
    role: 'Geschäftsführerin',
    store: 'Schallplattencafé',
    city: 'München',
  },
  {
    id: '3',
    quote: 'Von Excel zu Q-Records war der beste Schritt für mein Geschäft. Die Einrichtung war überraschend einfach.',
    author: 'Thomas Becker',
    role: 'Inhaber',
    store: 'Groove Station',
    city: 'Hamburg',
  },
  {
    id: '4',
    quote: 'Die mobile App ist ein Game-Changer. Ich kann Ankäufe auf Flohmärkten direkt ins System einpflegen.',
    author: 'Julia Krause',
    role: 'Inhaberin',
    store: 'Black Wax Records',
    city: 'Köln',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Wie funktioniert der Discogs-Import?',
    answer: 'Sie verbinden einfach Ihren Discogs-Account mit Q-Records. Mit einem Klick importieren wir Ihren gesamten Katalog inklusive aller Metadaten, Bilder und Preise. Der initiale Import dauert je nach Kataloggröße zwischen wenigen Minuten und einer Stunde. Danach synchronisieren wir alle 15 Minuten automatisch.',
  },
  {
    id: '2',
    question: 'Welche Kassensysteme werden unterstützt?',
    answer: 'Q-Records integriert sich mit allen gängigen deutschen Kassensystemen wie SumUp, Zettle, Lightspeed und Shore. Wir bieten auch eine offene API für individuelle Integrationen. Bei der Einrichtung helfen wir Ihnen kostenlos, Ihr bestehendes System anzubinden.',
  },
  {
    id: '3',
    question: 'Ist meine Daten sicher?',
    answer: 'Absolut. Wir hosten alle Daten auf deutschen Servern (DSGVO-konform) mit täglichen Backups. Die Übertragung erfolgt verschlüsselt via TLS 1.3. Sie können jederzeit einen vollständigen Export Ihrer Daten anfordern.',
  },
  {
    id: '4',
    question: 'Was kostet Q-Records?',
    answer: 'Wir bieten flexible Preismodelle basierend auf Ihrer Kataloggröße. Der Einstieg beginnt bei 49€/Monat für bis zu 5.000 Artikel. Fordern Sie eine Demo an, um ein individuelles Angebot zu erhalten. Die ersten 30 Tage sind immer kostenlos.',
  },
  {
    id: '5',
    question: 'Kann ich Q-Records auch für Online-Verkäufe nutzen?',
    answer: 'Ja! Q-Records synchronisiert nahtlos mit Ihrem Online-Shop (Shopify, WooCommerce, etc.) sowie mit Marktplätzen wie Discogs und eBay. Alle Verkäufe landen in einem zentralen Dashboard.',
  },
  {
    id: '6',
    question: 'Wie lange dauert die Einrichtung?',
    answer: 'Die meisten Shops sind innerhalb eines Tages komplett eingerichtet. Wir bieten persönliches Onboarding, bei dem ein Mitarbeiter Sie durch den gesamten Prozess führt. Komplexere Setups mit mehreren Standorten oder speziellen Integrationen können 2-3 Tage dauern.',
  },
];
