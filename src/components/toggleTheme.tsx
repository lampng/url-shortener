'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ModeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggle}
            className={`relative w-10 h-10 flex items-center justify-center rounded-full ${className}`}
        >
            <Sun className="absolute transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
        </button>
    );
}
