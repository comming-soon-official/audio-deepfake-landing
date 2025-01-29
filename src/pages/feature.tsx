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
                    <Badge variant="outline" className="mb-4">
                        Features
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4">
                        Advanced Audio Analysis
                        <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                            {' '}
                            Technology
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our cutting-edge deepfake detection system employs
                        multiple layers of analysis to ensure the highest level
                        of accuracy in identifying manipulated audio content.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature
