'use client'
import { useTheme } from 'next-themes'

import { Button } from '../ui/button'

export function NavBar() {
    const { theme, setTheme } = useTheme()
    return (
        <Button
            className="hidden"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            Toggle Theme
        </Button>
    )
}
