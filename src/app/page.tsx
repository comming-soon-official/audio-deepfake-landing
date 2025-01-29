import { ThemeProvider } from 'next-themes'
import React from 'react'

import { NavBar } from '@/components/internal/navbar'

import Feature from '../pages/feature'
import { HeroSection } from '../pages/hero'

const page = () => {
    return (
        <ThemeProvider attribute="class">
            <NavBar />
            <HeroSection />
            <Feature />
        </ThemeProvider>
    )
}

export default page
