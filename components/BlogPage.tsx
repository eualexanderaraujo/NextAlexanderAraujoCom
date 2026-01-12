"use client";

import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import PostList from './PostList';
import { usePosts } from '../hooks/usePosts';
import { Article } from '../types';

interface BlogPageProps {
    allArticles: Article[];
}

const BlogPage: React.FC<BlogPageProps> = ({ allArticles }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedArticleTag, setSelectedArticleTag] = useState<string | null>(null);
    const [isFiltering, setIsFiltering] = useState(false);

    // Newsletter state
    const [emailTop, setEmailTop] = useState('');
    const [subscribedTop, setSubscribedTop] = useState(false);
    const [emailBottom, setEmailBottom] = useState('');
    const [subscribedBottom, setSubscribedBottom] = useState(false);

    // Filtering Logic extracted from App.tsx
    const categories = useMemo(() => {
        const cats = allArticles.map(a => a.category);
        return Array.from(new Set(cats));
    }, [allArticles]);

    const uniqueArticleTags = useMemo(() => {
        const tags = allArticles.map(a => a.tag).filter((tag): tag is string => !!tag);
        return Array.from(new Set(tags));
    }, [allArticles]);

    const filteredArticles = useMemo(() => {
        let result = allArticles;
        if (selectedTag) result = result.filter(article => article.category === selectedTag);
        if (selectedArticleTag) result = result.filter(article => article.tag === selectedArticleTag);
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query)
            );
        }
        return result;
    }, [allArticles, searchQuery, selectedTag, selectedArticleTag]);

    const handleCategoryFilter = (category: string | null) => {
        setIsFiltering(true);
        setSelectedTag(category);
        setTimeout(() => setIsFiltering(false), 400);
    };

    const handleTagFilter = (tag: string | null) => {
        setIsFiltering(true);
        setSelectedArticleTag(tag);
        setTimeout(() => setIsFiltering(false), 400);
    };

    // Use centralized pagination hook
    const {
        posts: visibleArticles,
        hasMore,
        isLoading: isLoadingMore,
        loadMore
    } = usePosts(filteredArticles, { initialCount: 12, step: 6 });

    const handleNewsletterTopSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailTop) return;
        setSubscribedTop(true);
    };

    const handleNewsletterBottomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailBottom) return;
        setSubscribedBottom(true);
    };

    return (
        <div className="bg-off-white min-h-screen">
            <Navbar isDark />
            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <header className="mb-16 space-y-10">
                    <div className="space-y-4">
                        <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Arquivo Editorial</span>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-secondary leading-[1.1] tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">
                            Explorando o <span className="italic text-primary">Produtivo.</span>
                        </h1>
                        <div className="pt-2 w-full max-w-md lg:max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {subscribedTop ? (
                                <div className="bg-primary/10 backdrop-blur-xl p-5 rounded-2xl border border-primary/20 text-secondary animate-fade-in-up shadow-xl text-center">
                                    <div className="flex items-center justify-center gap-3 mb-1">
                                        <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                                        <span className="font-display text-lg">Inscrição Confirmada!</span>
                                    </div>
                                    <p className="text-gray-500 text-xs">Obrigado por se juntar à nossa comunidade editorial.</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <form onSubmit={handleNewsletterTopSubmit} className="flex flex-col sm:flex-row gap-2 p-1.5 bg-white rounded-2xl border border-gray-100 shadow-xl group focus-within:border-primary/50 transition-all duration-500">
                                        <input required type="email" value={emailTop} onChange={(e) => setEmailTop(e.target.value)} placeholder="Seu melhor e-mail..." className="flex-1 bg-transparent border-none focus:ring-0 text-secondary placeholder:text-gray-400 px-5 py-2.5 text-sm" />
                                        <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-lg active:scale-95">Inscrever-se agora</button>
                                    </form>
                                    <p className="text-gray-400 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 pl-2">
                                        <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                                        Junte-se a 5.000+ criadores digitais
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8 pt-4">
                        <div className="relative max-w-2xl group">
                            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Pesquisar por título, categoria ou palavra-chave..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-secondary font-medium placeholder:text-gray-300 placeholder:font-light"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-300 hover:text-primary transition-colors"
                                    aria-label="Limpar pesquisa"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            )}
                        </div>

                        <div className="space-y-6">
                            {uniqueArticleTags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-3 max-w-4xl animate-fade-in-up">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary/40 mr-2 flex items-center gap-2">
                                        Tags: {isFiltering && <span className="material-symbols-outlined animate-spin !text-[12px] text-primary">sync</span>}
                                    </span>
                                    <button
                                        disabled={isFiltering}
                                        onClick={() => handleTagFilter(null)}
                                        className={`px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all border ${!selectedArticleTag ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-secondary/60 border-gray-100 hover:border-primary hover:text-primary'}`}
                                    >
                                        Todas
                                    </button>
                                    {uniqueArticleTags.map(tag => (
                                        <button
                                            key={tag}
                                            disabled={isFiltering}
                                            onClick={() => handleTagFilter(tag)}
                                            className={`px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all border ${selectedArticleTag === tag ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-secondary/60 border-gray-100 hover:border-primary hover:text-primary'}`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div className="flex flex-wrap items-center gap-2.5 max-w-4xl">
                                <span className="text-[9px] font-black uppercase tracking-widest text-secondary/40 mr-2">Categorias:</span>
                                <button
                                    disabled={isFiltering}
                                    onClick={() => handleCategoryFilter(null)}
                                    className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${!selectedTag ? 'bg-secondary text-white border-secondary' : 'bg-white text-secondary/60 border-gray-100 hover:border-primary hover:text-primary'}`}
                                >
                                    Todas
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        disabled={isFiltering}
                                        onClick={() => handleCategoryFilter(cat)}
                                        className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${selectedTag === cat ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/20' : 'bg-white text-secondary/60 border-gray-100 hover:border-primary hover:text-primary'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                <PostList
                    articles={visibleArticles}
                    hasMore={hasMore}
                    isLoading={isLoadingMore}
                    onLoadMore={loadMore}
                    isFiltering={isFiltering}
                    showLoadMore={true}
                />

                <section className="mt-32 md:mt-48 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-secondary p-10 md:p-14 lg:p-20 text-white rounded-sm shadow-2xl relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] group-hover:bg-primary/30 transition-colors"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-between">
                            <div className="flex-1 space-y-8 max-w-xl">
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Inside Access</span>
                                <h4 className="font-display text-4xl md:text-5xl leading-[0.9] tracking-tighter">Insights semanais que <span className="italic text-primary">não chegam</span> ao blog.</h4>
                                <p className="text-white/40 text-base md:text-lg leading-relaxed font-light">Junte-se a 5.000+ criadores digitais que recebem curadoria estratégica toda terça-feira diretamente no e-mail.</p>
                            </div>
                            <div className="w-full md:w-auto min-w-[320px] lg:min-w-[400px]">
                                {subscribedBottom ? (
                                    <div className="bg-white/10 p-8 rounded-sm border border-white/20 animate-fade-in-up text-center backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-primary text-4xl mb-4">check_circle</span>
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2">Inscrição Confirmada!</p>
                                        <p className="text-white/40 text-xs">Seja bem-vindo ao círculo interno.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleNewsletterBottomSubmit} className="space-y-6">
                                        <div className="relative">
                                            <input required type="email" value={emailBottom} onChange={(e) => setEmailBottom(e.target.value)} placeholder="Seu melhor e-mail..." className="w-full bg-white/5 border-transparent border-b-white/20 focus:border-b-primary focus:ring-0 transition-all py-5 px-0 text-white placeholder:text-white/20 text-lg" />
                                        </div>
                                        <button type="submit" className="w-full bg-primary hover:bg-white hover:text-secondary text-white font-black text-[11px] uppercase tracking-[0.3em] py-6 rounded-sm transition-all shadow-xl active:scale-95">Inscrever-se agora</button>
                                        <p className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-medium text-center">Respeitamos sua atenção. Sem spam.</p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BlogPage;
