import React, { useState } from 'react'

import { toast } from '@/hooks/use-toast'

interface DesignInputProps {
    onSubmit?: (value: string) => Promise<void>
    placeholder?: string
    buttonText?: string
}

const DesignInput: React.FC<DesignInputProps> = ({
    onSubmit,
    placeholder = 'Enter your email',
    buttonText = 'Join WaitList'
}) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const trimmedEmail = email.trim()

        if (!trimmedEmail) {
            toast({
                title: 'Error',
                description: 'Please enter an email address',
                variant: 'destructive'
            })
            return
        }

        if (!validateEmail(trimmedEmail)) {
            toast({
                title: 'Error',
                description: 'Please enter a valid email address',
                variant: 'destructive'
            })
            return
        }

        setLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/submit-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: trimmedEmail })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to join waitlist')
            }

            toast({
                title: 'Success! 🎉',
                description: 'You have been added to the waitlist. Thank you!'
            })

            setEmail('')
            if (onSubmit) await onSubmit(trimmedEmail)
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Failed to join waitlist'
            setError(errorMessage)
            toast({
                title: 'Error',
                description: errorMessage,
                variant: 'destructive'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row w-full md:w-1/2 gap-4 px-4"
            aria-label="Waitlist signup form"
        >
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                disabled={loading}
                required
                aria-label="Email address"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'email-error' : undefined}
                className="flex-1 px-6 py-3 
                    text-base font-medium
                    text-white bg-transparent
                    rounded-lg border border-purple-400
                    shadow-[0_0_15px_rgba(147,51,234,0.3)]
                    transition-all duration-300
                    placeholder:text-purple-200/50
                    focus:outline-none
                    focus:border-purple-500
                    focus:shadow-[0_0_5px_rgb(147,51,234),0_0_25px_rgb(147,51,234)]
                    hover:shadow-[0_0_5px_rgb(147,51,234),0_0_25px_rgb(147,51,234)]
                    disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
                type="submit"
                disabled={loading}
                aria-label={buttonText}
                className="px-8 py-3 text-base font-semibold tracking-wide text-white 
                    rounded-lg bg-gradient-to-r from-blue-600 to-purple-600
                    shadow-[0_0_25px_rgba(147,51,234,0.5)] 
                    transition-all duration-300 
                    hover:shadow-[0_0_5px_rgb(147,51,234),0_0_25px_rgb(147,51,234)]
                    hover:from-blue-700 hover:to-purple-700
                    active:transform active:scale-95
                    disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Submitting...' : buttonText}
            </button>
            {error && (
                <span id="email-error" className="sr-only">
                    {error}
                </span>
            )}
        </form>
    )
}

export default DesignInput
