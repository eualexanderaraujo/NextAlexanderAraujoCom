"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import { Article } from '../types';

interface ArticlePageProps {
    selectedArticle: Article;
    contentNode?: React.ReactNode;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ selectedArticle, contentNode }) => {
    const [feedback, setFeedback] = useState<string | null>(null);
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

    const showFeedback = () => {
        setFeedback("Em breve.");
        setTimeout(() => setFeedback(null), 2000);
    };

    return (
        <div className="bg-white min-h-screen">
            <div
                className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
            <Navbar isDark />
            <main className="max-w-4xl mx-auto px-6 py-24">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary mb-12 hover:-translate-x-2 transition-transform"
                    aria-label="Voltar para Blog"
                >
                    <span className="material-symbols-outlined !text-sm">arrow_back</span> Voltar para Blog
                </Link>
                <header className="mb-16 space-y-8">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">{selectedArticle.category}</span>
                    <h1 className="font-display text-5xl md:text-7xl text-secondary leading-none tracking-tighter">{selectedArticle.title}</h1>
                    <div className="flex items-center gap-6 py-8 border-y border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg">AA</div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Alexander Araújo</p>
                            {selectedArticle.readingTimeMinutes && (
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-1">
                                    {selectedArticle.readingTimeMinutes} min de leitura
                                </p>
                            )}
                        </div>
                    </div>
                </header>
                <div className="relative overflow-hidden mb-16 rounded-sm shadow-2xl">
                    <img src={selectedArticle.imageUrl} className="w-full aspect-video object-cover" alt={`${selectedArticle.title} - ${selectedArticle.category}`} />
                </div>
                <div className="prose prose-xl max-w-none font-serif text-secondary/80 leading-relaxed text-xl magazine-drop-cap">
                    {contentNode ? contentNode : <div dangerouslySetInnerHTML={{ __html: selectedArticle.content || selectedArticle.description }} />}
                </div>
                <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center relative">
                    <div className="flex gap-4">
                        <button onClick={showFeedback} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary transition-colors" aria-label="Compartilhar insight">
                            <span className="material-symbols-outlined !text-lg">share</span>
                        </button>
                        <button onClick={showFeedback} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary transition-colors" aria-label="Salvar insight">
                            <span className="material-symbols-outlined !text-lg">bookmark</span>
                        </button>
                        {feedback && <span className="absolute -top-10 left-0 bg-secondary text-white text-[10px] px-3 py-1 rounded animate-fade-in-up">{feedback}</span>}
                    </div>
                    <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary transition-all">Voltar ao arquivo</Link>
                </div>
            </main>
        </div>
    );
};

export default ArticlePage;
