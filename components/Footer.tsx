"use client";

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white py-32 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
                    <div className="max-w-md">
                        <div className="flex items-center gap-4 mb-10">
                            <Logo className="w-12 h-12" color="#27C4B7" />
                            <span className="font-display font-bold text-3xl text-white tracking-tighter">Alexander Araújo</span>
                        </div>
                        <p className="text-white/40 text-lg leading-relaxed">Curadoria estratégica para profissionais que desejam dominar o caos digital e recuperar a clareza mental através de sistemas inteligentes.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-20 md:gap-32">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary">Plataforma</h4>
                            <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors text-left font-medium">Início</Link>
                            <Link href="/blog" className="text-white/40 hover:text-white text-sm transition-colors text-left font-medium">Arquivo Editorial</Link>
                            <Link href="/manifesto" className="text-white/40 hover:text-white text-sm transition-colors text-left font-medium">Manifesto</Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary">Conectar</h4>
                            <a href="https://www.linkedin.com/in/alexanderdearaujo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Alexander Araújo" className="text-white/40 hover:text-white text-sm transition-colors font-medium">LinkedIn</a>
                            <a href="https://www.youtube.com/@euAlexanderAraujo" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Alexander Araújo" className="text-white/40 hover:text-white text-sm transition-colors font-medium">YouTube</a>
                            <Link href="/contact" className="text-white/40 hover:text-white text-sm transition-colors text-left font-medium">Contato</Link>
                        </div>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                    <p>© 2025 ALEXANDER ARAÚJO. TODOS OS DIREITOS RESERVADOS.</p>
                    <p className="flex items-center gap-2">Desenvolvido por <span className="text-primary italic">Deep Work</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
