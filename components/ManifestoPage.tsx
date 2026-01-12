"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Logo from './Logo';

const ManifestoPage: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                setScrollProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <div className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
            <Navbar isDark />
            <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <header className="mb-20 space-y-8 text-center">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.6em]">Pilares da Produtividade Inteligente</span>
                    <h1 className="font-display text-6xl md:text-8xl text-secondary leading-none tracking-tighter">Meu <br /><span className="italic text-primary">Manifesto</span></h1>
                    <div className="w-20 h-1 bg-primary mx-auto mt-12"></div>
                </header>
                <div className="prose prose-2xl max-w-none font-serif text-secondary/90 leading-[1.6] space-y-12 text-center md:text-left">
                    <p className="magazine-drop-cap text-3xl md:text-4xl italic font-medium leading-tight">Eu acredito que produtividade não é fazer mais coisas.</p>
                    <div className="space-y-8 text-xl md:text-2xl">
                        <p>É fazer o que importa, do jeito certo, pelo tempo necessário.</p>
                        <p>Não acredito em produtividade baseada em culpa, exaustão ou heroísmo.</p>
                        <p>Trabalhar até quebrar não é mérito — é falha de método.</p>
                        <p className="font-display text-4xl text-secondary py-8 border-y border-gray-100">Produtividade inteligente começa com clareza.</p>
                        <p>Clareza sobre prioridades. Clareza sobre limites. Clareza sobre o que realmente gera resultado.</p>
                        <p>Eu não persigo ocupação. Persigo impacto.</p>
                        <p>Aprendi que sistemas vencem força de vontade. Que processos bem desenhados superam esforço desorganizado. E que disciplina sem sentido leva ao esgotamento.</p>
                        <p>Por isso, escolho menos ferramentas e mais método. Menos promessas milagrosas e mais prática testada no mundo real. Menos ruído, mais estrutura.</p>
                        <div className="bg-off-white p-12 rounded-sm border-l-8 border-primary text-left">
                            <p className="font-display text-3xl mb-6">Acredito que foco é um ativo estratégico.</p>
                            <p>Não algo místico, nem inalcançável. Foco se constrói com ambiente, decisões e limites claros — especialmente no mundo digital, onde distração é o padrão.</p>
                        </div>
                        <p>Produtividade, para mim, não é velocidade constante. É ritmo sustentável.</p>
                        <p>Descanso não é fraqueza. É parte do sistema. Quem não descansa quebra — e quem quebra para de produzir.</p>
                        <p>Não separo produtividade de bem-estar. Uma alimenta a outra. Quando a mente está clara, o trabalho flui. Quando o corpo está exausto, nenhuma técnica funciona.</p>
                        <p>Também não acredito em produtividade isolada da realidade. Trabalho envolve pessoas, contexto, imprevistos e responsabilidade.</p>
                        <p>Por isso, adapto métodos — não sigo dogmas. Uso tecnologia como ferramenta, não como muleta.</p>
                        <p>Automação para liberar tempo. Dados para tomar decisões. Estrutura para reduzir retrabalho e desperdício.</p>
                        <p className="font-display text-3xl italic text-primary-dark">Produtividade inteligente é fazer escolhas conscientes todos os dias.</p>
                        <p>Escolher o essencial. Escolher o simples. Escolher o que sustenta resultados no longo prazo.</p>
                        <p>Não busco perfeição. Busco constância.</p>
                        <p>Não busco controle absoluto. Busco previsibilidade suficiente para decidir melhor.</p>
                        <div className="pt-20 text-center space-y-4">
                            <p className="font-display text-4xl text-secondary">No fim, produtividade não é sobre produzir mais.</p>
                            <p className="font-display text-5xl text-primary font-bold">É sobre viver melhor enquanto se produz.</p>
                        </div>
                        <div className="pt-24 flex flex-col items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-secondary/40">
                            <p>Esse é o meu compromisso.</p>
                            <p>Esse é o meu método.</p>
                            <p className="text-primary">Esse é o meu manifesto.</p>
                            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center mt-6">
                                <Logo className="w-6 h-6 opacity-20" color="#0E2A47" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32 pt-16 border-t border-gray-100 flex flex-col items-center gap-12">
                    <h4 className="font-display text-4xl text-secondary">Pronto para aplicar este sistema?</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/blog" className="bg-primary text-white px-10 py-5 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-primary-dark transition-all">Explorar Artigos</Link>
                        <Link href="/contact" className="bg-secondary text-white px-10 py-5 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all">Consultoria Estratégica</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ManifestoPage;
