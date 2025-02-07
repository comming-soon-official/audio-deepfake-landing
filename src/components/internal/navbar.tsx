'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '../ui/button'

export function NavBar() {
    const { theme, setTheme } = useTheme()

    return (
        <nav className="flex w-full justify-center items-center">
            <div className="container flex h-16 items-center justify-between">
                {/* Brand/Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold">aiEnsured</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link
                        href="/detect"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Detect Audio
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Contact
                    </Link>
                </div>

                {/* Theme Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                    className="relative"
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </nav>
    )
}
