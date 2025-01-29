import {
    ActivityIcon,
    AudioWaveformIcon,
    ClockIcon,
    LockIcon,
    ShieldCheckIcon,
    SparklesIcon
} from 'lucide-react'
import React from 'react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const Feature = () => {
    const features = [
        {
            icon: <AudioWaveformIcon className="w-10 h-10 text-blue-500" />,
            title: 'Advanced Waveform Analysis',
            description:
                'State-of-the-art audio processing algorithms to detect subtle manipulation patterns'
        },
        {
            icon: <ShieldCheckIcon className="w-10 h-10 text-purple-500" />,
            title: 'Real-time Detection',
            description:
                'Instant analysis of audio files with high accuracy and minimal processing time'
        },
        {
            icon: <SparklesIcon className="w-10 h-10 text-green-500" />,
            title: 'AI-Powered Intelligence',
            description:
                'Machine learning models trained on vast datasets of authentic and synthetic voices'
        },
        {
            icon: <ClockIcon className="w-10 h-10 text-orange-500" />,
            title: 'Rapid Results',
            description:
                'Get detailed analysis reports within seconds of uploading your audio file'
        },
        {
            icon: <ActivityIcon className="w-10 h-10 text-red-500" />,
            title: 'Accuracy Metrics',
            description:
                'Comprehensive confidence scores and detection probability indicators'
        },
        {
            icon: <LockIcon className="w-10 h-10 text-teal-500" />,
            title: 'Secure Processing',
            description:
                'End-to-end encryption and secure handling of all uploaded audio content'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <div className="container px-4 py-16 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="mb-4 inline-flex animate-fade-in"
                    >
                        Features
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4 animate-fade-in">
                        Advanced Audio Analysis
                        <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                            {' '}
                            Technology
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-10 animate-fade-in">
                        Our cutting-edge deepfake detection system employs
                        multiple layers of analysis to ensure the highest level
                        of accuracy in identifying manipulated audio content.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group relative p-6 overflow-hidden backdrop-blur-sm bg-background/30 border-muted/30 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 hover:bg-background/50 animate-float"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                            </div>

                            {/* Card content */}
                            <div className="relative z-10">
                                <div className="mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text group-hover:text-transparent transition-all duration-500">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground/90 group-hover:text-muted-foreground transition-all duration-500">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Enhanced glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-500 group-hover:animate-pulse" />
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature
