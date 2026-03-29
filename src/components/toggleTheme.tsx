'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent p-0 border-0 outline-none cursor-pointer"
        >
            <Sun className="h-5 w-5 scale-110 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-110 dark:rotate-0" />
        </button>
    );
}
