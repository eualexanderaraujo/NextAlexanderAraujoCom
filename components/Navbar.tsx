"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { useGlobal } from './providers/GlobalProvider';

interface NavbarProps {
    isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDark = false }) => {
    const pathname = usePathname();
    const { setIsNewsletterOpen } = useGlobal();

    // Helper to determine if a link is active based on pathname
    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`relative z-50 w-full px-6 md:px-12 py-3 md:py-4 flex justify-between items-center transition-all duration-500 ${isDark ? 'bg-white border-b border-gray-100 shadow-sm' : 'border-b border-white/10 backdrop-blur-sm'}`}>
            <Link
                href="/"
                className="flex items-center gap-3 md:gap-4 cursor-pointer group"
            >
                <Logo className="w-7 h-7 md:w-9 md:h-9 transition-transform duration-500 group-hover:rotate-12" color={isDark ? "#0E2A47" : "#27C4B7"} />
                <div className="flex flex-col leading-none">
                    <span className={`font-display font-bold text-base md:text-lg tracking-tight ${isDark ? 'text-secondary' : 'text-white'}`}>Alexander Araújo</span>
                    <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.4em] mt-0.5 font-bold ${isDark ? 'text-primary' : 'text-primary'}`}>Produtividade Digital</span>
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <Link href="/" className={`${isDark ? 'text-secondary/70 hover:text-secondary' : 'text-white/80 hover:text-white'} text-[9px] font-bold uppercase tracking-[0.2em] transition-colors relative group`}>
                    Início
                    {isActive('/') && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary"></span>}
                </Link>
                <Link href="/manifesto" className={`${isDark ? 'text-secondary/70 hover:text-secondary' : 'text-white/80 hover:text-white'} text-[9px] font-bold uppercase tracking-[0.2em] transition-colors relative group`}>
                    Manifesto
                    {isActive('/manifesto') && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary"></span>}
                </Link>
                <Link href="/blog" className={`${isDark ? 'text-secondary/70 hover:text-secondary' : 'text-white/80 hover:text-white'} text-[9px] font-bold uppercase tracking-[0.2em] transition-colors relative group`}>
                    Blog
                    {isActive('/blog') || pathname.startsWith('/blog') ? <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary"></span> : null}
                    Blog
                </Link>
                <Link href="/contact" className={`${isDark ? 'text-secondary/70 hover:text-secondary' : 'text-white/80 hover:text-white'} text-[9px] font-bold uppercase tracking-[0.2em] transition-colors relative group`}>
                    Contato
                    {isActive('/contact') && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary"></span>}
                </Link>
            </div>

            <button
                onClick={() => setIsNewsletterOpen(true)}
                className={`${isDark ? 'bg-secondary text-white' : 'bg-white text-secondary'} px-4 md:px-6 py-2 rounded-full text-[8px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 shadow-lg`}
            >
                Newsletter
            </button>
        </nav>
    );
};

export default Navbar;
