"use client";

import React, { useState } from 'react';

const NewsletterCTA: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubscribed(true);
    };

    if (subscribed) {
        return (
            <div className="mt-32 p-12 bg-secondary rounded-[3rem] text-white relative shadow-2xl overflow-hidden group animate-fade-in">
                <div className="relative z-10 text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 mb-1">
                        <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                        <span className="font-display text-2xl">Inscrição Confirmada!</span>
                    </div>
                    <p className="text-white/60 text-lg italic font-serif">Aguarde alguns instantes e verifique sua caixa de entrada.</p>
                </div>
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
            </div>
        );
    }

    return (
        <div className="mt-32 p-12 bg-secondary rounded-[3rem] text-white relative shadow-2xl overflow-hidden group">
            <div className="relative z-10 space-y-8">
                <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Inside Access</span>
                <h3 className="font-display text-4xl md:text-5xl leading-none tracking-tighter">
                    Insights que <span className="italic text-primary">não chegam</span> ao blog.
                </h3>
                <p className="text-white/40 text-lg leading-relaxed max-w-xl">
                    Junte-se a 5.000+ criadores digitais que recebem curadoria estratégica exclusiva toda terça-feira.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 pt-4">
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu melhor e-mail..."
                        className="flex-1 bg-white/5 border-transparent border-b-white/20 focus:border-b-primary focus:ring-0 transition-all py-3 px-0 text-white placeholder:text-white/20 text-lg"
                    />
                    <button
                        type="submit"
                        className="bg-primary hover:bg-white hover:text-secondary text-white font-black text-[10px] uppercase tracking-[0.3em] px-10 py-4 rounded-xl transition-all shadow-2xl"
                    >
                        Inscrever-se
                    </button>
                </form>
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors"></div>
        </div>
    );
};

export default NewsletterCTA;
