'use client'

export function BlurEffect() {
    return (
        <div className="w-full relative flex flex-col items-center justify-center">
            {/* Main blur gradient */}
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />

            {/* Animated gradient lines */}
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full animate-pulse duration-1000 delay-100" />
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full animate-pulse duration-2000 delay-300" />
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full animate-pulse duration-3000 delay-500" />

            {/* Purple glow effects */}
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[4px] w-1/2 blur-md animate-pulse duration-2000 delay-200" />
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[3px] w-1/2 blur-sm animate-pulse duration-2500 delay-400" />
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] w-1/2 animate-pulse duration-3000 delay-600" />

            {/* Sharp line overlay */}
            <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/2 animate-pulse duration-1500" />

            {/* Mask overlay */}
            <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(60%_200px_at_top,transparent_30%,white)]" />
        </div>
    )
}
