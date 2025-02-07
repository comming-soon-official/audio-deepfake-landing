import type { Metadata } from 'next'
import './globals.css'

import { Geist, Geist_Mono } from 'next/font/google'

import { NavBar } from '@/components/internal/navbar'

import { Providers } from './providers'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

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

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Providers>
                    <NavBar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
