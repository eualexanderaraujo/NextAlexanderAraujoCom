"use client";

import React, { useState } from 'react';
import { useGlobal } from './providers/GlobalProvider';
import FloatingAIButton from './ai/FloatingAIButton';
import AIPanel from './ai/AIPanel';

const GlobalLayoutClient = () => {
    const { isNewsletterOpen, setIsNewsletterOpen, isAIPanelOpen, setIsAIPanelOpen } = useGlobal();
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

    // AI State
    const [tip, setTip] = useState<string | null>(null);
    const [loadingTip, setLoadingTip] = useState(false);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setNewsletterSubscribed(true);
        setTimeout(() => {
            setIsNewsletterOpen(false);
            setNewsletterSubscribed(false);
            setNewsletterEmail('');
        }, 4500);
    };

    const fetchTip = async () => {
        setTip(null);
        setLoadingTip(true);
        try {
            const response = await fetch('/api/insight', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic: 'digital focus and productivity systems' })
            });
            const data = await response.json();
            setTip(data.text);
        } catch (error) {
            console.error(error);
            setTip("Foco é a chave.");
        }
        setLoadingTip(false);
    };

    return (
        <>
            {/* GLOBAL AI ASSISTANT COMPONENTS */}
            <FloatingAIButton
                isOpen={isAIPanelOpen}
                onClick={() => setIsAIPanelOpen(!isAIPanelOpen)}
            />

            <AIPanel
                isOpen={isAIPanelOpen}
                onClose={() => setIsAIPanelOpen(false)}
                onGenerate={fetchTip}
                tip={tip}
                loading={loadingTip}
            />

            {/* Newsletter Modal */}
            <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${isNewsletterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-secondary/80 backdrop-blur-md" onClick={() => setIsNewsletterOpen(false)} />
                <div className={`relative w-full max-w-2xl bg-white p-12 md:p-20 rounded-sm shadow-2xl transition-all duration-500 transform ${isNewsletterOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
                    <button onClick={() => setIsNewsletterOpen(false)} className="absolute top-8 right-8 text-secondary/30 hover:text-primary transition-colors" aria-label="Fechar Newsletter">
                        <span className="material-symbols-outlined !text-4xl">close</span>
                    </button>
                    {newsletterSubscribed ? (
                        <div className="text-center py-10 animate-fade-in-up">
                            <span className="material-symbols-outlined text-primary text-6xl mb-6">verified</span>
                            <h2 className="font-display text-4xl text-secondary mb-4">Agradecemos por se juntar à elite!</h2>
                            <p className="text-gray-500">Insights exclusivos estão a caminho da sua caixa de entrada.</p>
                        </div>
                    ) : (
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Inside Access</span>
                                <h2 className="font-display text-5xl md:text-6xl text-secondary leading-none tracking-tighter">Insights que <span className="italic text-primary">não chegam</span> ao blog.</h2>
                            </div>
                            <p className="text-gray-500 text-lg leading-relaxed">Junte-se a 5.000+ criadores digitais que recebem curadoria estratégica exclusiva toda terça-feira.</p>
                            <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                                <input required type="email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="Seu melhor e-mail..." className="w-full bg-off-white border-transparent border-b-gray-100 focus:border-b-primary focus:ring-0 transition-all py-5 text-lg" />
                                <button type="submit" className="w-full bg-secondary hover:bg-primary text-white font-black text-[11px] uppercase tracking-[0.3em] py-6 rounded-xl transition-all shadow-xl">Garantir Meu Acesso</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GlobalLayoutClient;
