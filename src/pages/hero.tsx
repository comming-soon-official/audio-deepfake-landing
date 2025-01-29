'use client'

import DesignInput from '@/components/internal/design-input'
import { Badge } from '@/components/ui/badge'

export const HeroSection = () => {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-background to-background/95">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

            <section className="container relative max-w-screen-xl mx-auto ">
                <div className="grid gap-8 py-20 md:py-32">
                    <div className="space-y-8 text-center">
                        <Badge
                            variant="outline"
                            className="py-2 text-sm animate-pulse"
                        >
                            <span className="mr-2 text-primary">
                                <Badge>AI-Powered</Badge>
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
                        <div className="w-full relative flex flex-col items-center justify-center overflow-hidden">
                            {/* Primary Glow Line */}
                            <div
                                className="absolute inset-x-auto top-0 
                                bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                                h-[2px] w-[200%] blur-sm
                                animate-[moveLight_3s_linear_infinite]"
                            />

                            {/* Secondary Glow Line */}
                            <div
                                className="absolute inset-x-auto top-0 
                                bg-gradient-to-r from-transparent via-blue-500 to-transparent 
                                h-px w-[200%]
                                animate-[moveLight_3s_linear_infinite_0.5s]"
                            />
                        </div>
                        <p className="max-w-[800px] mx-auto text-xl text-muted-foreground">
                            Our advanced AI technology analyzes audio content in
                            real-time to detect synthetic or manipulated voices.
                            Protect yourself from voice fraud and ensure the
                            authenticity of audio content.
                        </p>
                        <div className="flex justify-center">
                            {' '}
                            <DesignInput />
                        </div>
                        {/* <div className="flex flex-col items-center gap-6 pt-8">
                            <Card className="relative p-1 overflow-hidden border-2 border-dashed border-muted group rounded-2xl">
                                <div className="relative z-10 p-8 transition-colors rounded-lg bg-background/95 group-hover:bg-background/50">
                                    <input
                                        type="file"
                                        className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-pointer"
                                        accept="audio/*"
                                    />
                                    <div className="flex flex-col items-center gap-4">
                                        <FileUpload />
                                    </div>
                                </div>
                            </Card>
                            <Button size="lg" className="px-8">
                                Analyze Audio
                            </Button>

                            <div className="flex gap-4 pt-4 text-sm text-muted-foreground">
                                <span>✓ Free for personal use</span>
                                <span>✓ Results in seconds</span>
                                <span>✓ 99.8% accuracy</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
