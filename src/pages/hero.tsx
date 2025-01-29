'use client'

import Image from 'next/image'

import { BlurEffect } from '@/components/client/blur-effect'
import { HeroContent } from '@/components/client/hero-content'
import { Badge } from '@/components/ui/badge'

const HeroSection = () => {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-background to-background/95 h-screen flex justify-center items-center">
            <div className="absolute opacity-30 blur-sm hidden md:block">
                <Image
                    src="/gridbg.jpg"
                    alt="Background grid pattern"
                    width={1920}
                    height={1080}
                    priority
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                />
            </div>

            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

            <section className="container relative max-w-screen-xl mx-auto ">
                <div className="grid gap-8 py-20 md:py-32">
                    <div className="space-y-8 text-center">
                        <Badge variant="outline" className="py-2 text-sm ">
                            <span className="mr-2 text-primary">
                                <Badge>Coming Soon</Badge>
                            </span>
                            <span>Deepfake Audio Detection</span>
                        </Badge>

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
                        <div className="flex justify-center">
                            {' '}
                            <HeroContent />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
