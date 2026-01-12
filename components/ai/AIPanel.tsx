"use client";

import React, { useEffect } from 'react';
import Logo from '../Logo';

interface AIPanelProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: () => void;
    tip: string | null;
    loading: boolean;
}

const AIPanel: React.FC<AIPanelProps> = ({ isOpen, onClose, onGenerate, tip, loading }) => {

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[110] bg-secondary/20 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Panel */}
            <aside
                className={`fixed top-0 right-0 h-full z-[120] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-[90%] md:w-[400px] lg:w-[450px] flex flex-col`}
            >
                <div className="p-8 md:p-12 flex flex-col h-full">
                    <header className="flex justify-between items-start mb-12">
                        <div className="flex items-center gap-3">
                            <Logo className="w-8 h-8" color="#27C4B7" />
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-lg text-secondary">AI Assistant</span>
                                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary">Produtividade Digital</span>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-gray-300 hover:text-secondary transition-colors">
                            <span className="material-symbols-outlined !text-3xl">close</span>
                        </button>
                    </header>

                    <div className="flex-1 overflow-y-auto space-y-10 pr-2 custom-scrollbar">
                        <section className="space-y-4">
                            <h2 className="font-display text-3xl text-secondary leading-tight">Como posso otimizar seu <span className="italic text-primary">fluxo de trabalho</span> hoje?</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">Gere insights estratégicos baseados em sistemas de produtividade de elite para manter o foco e a clareza.</p>
                        </section>

                        <div className="bg-off-white rounded-2xl p-8 border border-gray-100 min-h-[200px] flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>

                            {loading ? (
                                <div className="space-y-4 animate-pulse">
                                    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Consultando IA...</p>
                                </div>
                            ) : tip ? (
                                <div className="animate-fade-in-up">
                                    <span className="material-symbols-outlined text-primary mb-4 !text-4xl">lightbulb</span>
                                    <p className="text-secondary italic font-serif text-xl leading-relaxed">"{tip}"</p>
                                </div>
                            ) : (
                                <div className="opacity-40">
                                    <span className="material-symbols-outlined !text-5xl mb-2">bolt</span>
                                    <p className="text-xs uppercase font-bold tracking-widest">Clique abaixo para começar</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <footer className="mt-auto pt-8">
                        <button
                            onClick={onGenerate}
                            disabled={loading}
                            className="w-full bg-secondary hover:bg-primary text-white font-black text-[11px] uppercase tracking-[0.3em] py-6 rounded-xl transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-50"
                        >
                            {loading ? 'Processando...' : 'Gerar Insight'}
                            <span className="material-symbols-outlined !text-sm group-hover:rotate-12 transition-transform">auto_awesome</span>
                        </button>
                        <p className="text-[8px] text-gray-300 text-center mt-6 uppercase tracking-[0.2em] font-medium">Powered by Gemini AI Studio • Alexander Araújo</p>
                    </footer>
                </div>
            </aside>
        </>
    );
};

export default AIPanel;
