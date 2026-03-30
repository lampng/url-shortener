'use client';

import React from 'react';
import { ModeToggle } from './toggleTheme';
import { Dock, DockIcon } from './ui/dock';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

export default function Navbar() {
    return (
        <div className="fixed inset-x-0 bottom-4 z-30">
            <Dock direction="middle">
                <DockIcon>
                    <Link href="/">
                        <Home />
                    </Link>
                </DockIcon>
                <Separator orientation="vertical" />
                <DockIcon>
                    <AnimatedThemeToggler />
                </DockIcon>
            </Dock>
        </div>
    );
}
