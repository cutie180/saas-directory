import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professionals in Pakistan | Find Verified Experts | BizNestUSA',
  description: 'Find Pakistani professionals, consultants, specialists, and service experts by field and city on BizNestUSA.',
  alternates: { canonical: 'https://listpak.com/professionals/' },
  openGraph: {
    title: 'Professionals in Pakistan | Find Verified Experts | BizNestUSA',
    description: 'Find Pakistani professionals, consultants, specialists, and service experts by field and city on BizNestUSA.',
    url: 'https://listpak.com/professionals/',
    type: 'website',
  },
}

export default function ProfessionalsLayout({ children }: { children: React.ReactNode }) {
  return children
}
