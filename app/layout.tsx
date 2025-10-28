import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: {
    default: 'Med Free Cure',
    template: '%s | Med Free Cure'
  },
  description: 'Drug-free pain relief clinic in Vashi, Navi Mumbai. Holistic therapies for back, neck, knee, and shoulder pain without medicines or side effects.',
  keywords: ['pain relief', 'drug-free', 'holistic therapy', 'back pain', 'knee pain', 'shoulder pain', 'Vashi', 'Navi Mumbai'],
  openGraph: {
    title: 'Med Free Cure — Drug-free Pain Relief Clinic',
    description: 'Holistic therapies targeting root cause. Safe, natural and effective.',
    type: 'website',
    url: 'https://medfreecure.example',
    images: [
      {
        url: '/new-hero.png',
        width: 1200,
        height: 630,
        alt: 'Med Free Cure Pain Relief Clinic'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Med Free Cure — Drug-free Pain Relief Clinic',
    description: 'Holistic therapies targeting root cause. Safe, natural and effective.',
    images: ['/new-hero.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: `calc(100dvh - var(--header-height))` }}>
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Med Free Cure',
              image: 'https://medfreecure.example/new-hero.png',
              url: 'https://medfreecure.example',
              telephone: '+917317312985',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Revere CHSL Flat No. C-1/9/02, Plot No: 1-8, Sector 2',
                addressLocality: 'Vashi, Navi Mumbai',
                addressRegion: 'Maharashtra',
                postalCode: '400703',
                addressCountry: 'IN'
              },
              openingHours: [
                'Mo-Sa 09:00-19:00',
                'Su ByAppointmentOnly'
              ],
              sameAs: [
                'https://wa.me/917317312985',
                'https://www.youtube.com/@MedFreeCure'
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
