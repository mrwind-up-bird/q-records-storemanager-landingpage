import { Hero, DashboardPreview, Features, Testimonials, FAQ } from '@/components/sections';
import { siteConfig, faqItems } from '@/lib/constants';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: siteConfig.name,
        description: siteConfig.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '49',
          priceCurrency: 'EUR',
          priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '200',
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Organization',
          name: 'Q-Records',
          url: siteConfig.url,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'Organization',
        name: 'Q-Records',
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        sameAs: [siteConfig.links.linkedin].filter(Boolean),
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'kontakt@q-records.de',
          availableLanguage: ['German', 'English'],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <div className="section-divider" />

      <DashboardPreview />

      <div className="section-divider" />

      <Features />

      <div className="section-divider" />

      <Testimonials />

      <div className="section-divider" />

      <FAQ />
    </>
  );
}
