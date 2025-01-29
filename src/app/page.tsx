import { NavBar } from '@/components/internal/navbar'

import Feature from '../pages/feature'
import { HeroSection } from '../pages/hero'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI Voice Authentication | Deepfake Detection',
    description:
        'Advanced AI technology for real-time synthetic voice detection and audio authentication. Protect against voice fraud with instant analysis.',
    keywords: 'deepfake detection, voice authentication, AI audio analysis',
    openGraph: {
        title: 'AI Voice Authentication | Deepfake Detection',
        description: 'Protect against voice fraud with instant AI analysis'
    }
}

// Add JSON-LD structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Voice Authentication',
    description:
        'Advanced AI technology for real-time synthetic voice detection and audio authentication.',
    applicationCategory: 'Security',
    operatingSystem: 'All',
    offers: {
        '@type': 'Offer',
        availability: 'ComingSoon'
    }
}

export const dynamic = 'force-static'
export const revalidate = false // Never revalidate, build-time only

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="relative min-h-screen">
                <NavBar />
                <HeroSection />
                <Feature />
            </main>
        </>
    )
}
