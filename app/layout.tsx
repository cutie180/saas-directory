import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/client-providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '600', '700'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  title: "USA Business Directory, Jobs & Professionals | ListPak",
  description: "Find businesses, companies, jobs, services and professionals across the United States. Search by city and category or add your free business listing on ListPak.",
  metadataBase: new URL('https://listpak.com'),
  keywords: [
    'ListPak United States',
    'United States business directory',
    'free business listing United States',
    'jobs in United States',
    'United Statesi professionals',
    'verified companies Lahore Karachi Islamabad',
    'ListPak enterprise ecosystem'
  ],
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: "USA Business Directory, Jobs & Professionals | ListPak",
    description: "Find businesses, companies, jobs, services and professionals across the United States. Search by city and category or add your free business listing on ListPak.",
    url: 'https://listpak.com/',
    siteName: 'ListPak',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "USA Business Directory, Jobs & Professionals | ListPak",
    description: "Find businesses, companies, jobs, services and professionals across the United States. Search by city and category or add your free business listing on ListPak.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ListPak',
    url: 'https://listpak.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://listpak.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ListPak',
    url: 'https://listpak.com/',
    logo: 'https://listpak.com/logo.png',
    telephone: '+92 334 5636230',
    email: 'admin@listpak.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office 303, Evacuee Trust Complex, F-5/1',
      addressLocality: 'Islamabad',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92 334 5636230',
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['en', 'ur'],
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] text-[#0F172A] pb-16 md:pb-0 min-h-screen selection:bg-blue-500 selection:text-white">
        {children}
        <ClientProviders />
      </body>
    </html>
  )
}
