'use client'

import Image from 'next/image'

import { BlurEffect } from '@/components/client/blur-effect'
import { HeroContent } from '@/components/client/hero-content'

const HeroSection = () => {
    return (
        <div className="w-full overflow-hidden bg-gradient-to-b from-background to-background/95 h-screen flex justify-center items-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="space-y-8 text-center md:w-1/2">
                    <div className="mx-auto text-4xl font-bold text-center md:text-6xl">
                        <h1>
                            Detect
                            <span className="px-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                                Voice Authenticity
                            </span>
                            Instantly
                        </h1>
                    </div>
                    <BlurEffect />
                    <p className="max-w-[800px] mx-auto text-xl text-muted-foreground">
                        Our advanced AI technology analyzes audio content in
                        real-time to detect synthetic or manipulated voices.
                        Protect yourself from voice fraud and ensure the
                        authenticity of audio content.
                    </p>
                    <div className="flex justify-center"> </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <HeroContent />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
