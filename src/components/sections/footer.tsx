import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Container } from '@/components/ui';
import { siteConfig } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { title: 'Features', href: '/#features' },
      { title: 'Preise', href: '/#pricing' },
      { title: 'Demo anfragen', href: '/demo' },
      { title: 'FAQ', href: '/#faq' },
    ],
    company: [
      { title: 'Über uns', href: '/#about' },
      { title: 'Blog', href: '/blog' },
      { title: 'Karriere', href: '/karriere' },
      { title: 'Kontakt', href: '/kontakt' },
    ],
    legal: [
      { title: 'Impressum', href: '/impressum' },
      { title: 'Datenschutz', href: '/datenschutz' },
      { title: 'AGB', href: '/agb' },
    ],
  };

  return (
    <footer className="bg-deep-charcoal border-t border-off-white/5">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-gold/20" />
                <div className="absolute inset-0.5 rounded-full bg-vinyl-black border border-gold/50" />
                <div className="absolute inset-2 rounded-full bg-gold" />
              </div>
              <span className="font-serif text-lg font-medium text-off-white">
                Q-Records
              </span>
            </Link>
            <p className="text-warm-gray text-sm leading-relaxed mb-6 max-w-xs">
              Professionelle Inventarverwaltung für Schallplattenläden in Deutschland.
            </p>
            {siteConfig.links.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-warm-gray hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-off-white font-medium mb-4 text-sm">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-off-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-off-white font-medium mb-4 text-sm">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-off-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-off-white font-medium mb-4 text-sm">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-off-white transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-off-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-sm">
            &copy; {currentYear} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2 text-sm text-warm-gray">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
            Alle Systeme betriebsbereit
          </div>
        </div>
      </Container>

      {/* GDPR Badge */}
      <div className="bg-vinyl-black/50 py-3 border-t border-off-white/5">
        <Container>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-warm-gray">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              DSGVO-konform
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              SSL-verschlüsselt
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Server in Deutschland
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
