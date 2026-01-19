"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Logo from './Logo';
import PostList from './PostList';
import { usePosts } from '@/hooks/usePosts';
import { useGlobal } from './providers/GlobalProvider';
import { getAllArticles } from '@/lib/loadMarkdownPosts';
import { MANIFESTO_PILLARS } from '@/constants/manifesto';

const AppHome: React.FC = () => {
    const [homeNewsletterEmail, setHomeNewsletterEmail] = useState('');
    const [homeNewsletterSubscribed, setHomeNewsletterSubscribed] = useState(false);
    const { setIsAIPanelOpen } = useGlobal();



    // Home posts hooks - Fixed at initial count for Home
    // In Next.js Server Components we could fetch this server side, but preserving client logic for now phase 1.
    const allArticles = getAllArticles();
    const {
        posts: homePosts,
        hasMore: homeHasMore,
        isLoading: homeIsLoading,
        loadMore: homeLoadMore
    } = usePosts(allArticles, { initialCount: 6, step: 6 });

    const handleHomeNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!homeNewsletterEmail) return;
        setHomeNewsletterSubscribed(true);
    };

    return (
        <>
            <header className="relative w-full h-[100vh] min-h-[550px] overflow-hidden flex flex-col">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format,compress&fit=crop&q=70&w=1920')",
                            animation: 'kenburns 25s ease-in-out infinite alternate'
                        }}
                    >
                        <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-secondary/80"></div>
                    </div>
                </div>
                <Navbar />
                <div className="relative z-30 flex-1 flex flex-col justify-center items-center text-center px-4 max-w-7xl mx-auto w-full -mt-4 md:-mt-8 lg:-mt-12">
                    <div className="space-y-3 md:space-y-4 animate-fade-in-up">
                        <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] inline-block mb-0.5">Exclusivo para Criativos Digitais</span>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[4rem] leading-[1.25] md:leading-[1.1] text-white font-medium tracking-tighter drop-shadow-2xl max-w-[1000px] mx-auto ">
                            Trabalhe com <span className="italic font-light text-primary">Produtividade Digital</span> e use a tecnologia a <span className="font-bold">favor do seu tempo.</span>
                        </h1>
                        <p className="font-body font-light text-sm md:text-base lg:text-lg text-white/80 max-w-xl mx-auto leading-relaxed mt-2 md:mt-3">
                            Estratégias práticas de produtividade digital para organizar tarefas, foco e tempo no dia a dia.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-8 w-full max-w-md lg:max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        {homeNewsletterSubscribed ? (
                            <div className="bg-primary/20 backdrop-blur-xl p-5 rounded-2xl border border-primary/30 text-white animate-fade-in-up shadow-2xl text-center">
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                                    <span className="font-display text-lg">Inscrição Confirmada!</span>
                                </div>
                                <p className="text-white/60 text-xs">Aguarde alguns instantes e verifique sua caixa de entrada.</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <form onSubmit={handleHomeNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 p-1.5 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl group focus-within:border-primary/50 transition-all duration-500">
                                    <input required type="email" value={homeNewsletterEmail} onChange={(e) => setHomeNewsletterEmail(e.target.value)} placeholder="Seu melhor e-mail..." className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-white/40 px-5 py-2.5 text-sm" />
                                    <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap shadow-2xl transform hover:-translate-y-1 active:translate-y-0">Inscreva-se agora</button>
                                </form>
                                <div className="flex items-center justify-center gap-5">
                                    <p className="text-white/30 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                                        5.000+ Assinantes
                                    </p>
                                    <Link href="/blog" className="text-white/50 hover:text-white text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold border-b border-white/10 hover:border-white transition-all">Ver Arquivo Editorial</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative z-30 w-full px-6 py-3 flex justify-center border-t border-white/10 backdrop-blur-md bg-black/5">
                    <span className="material-symbols-outlined text-white/30 animate-bounce cursor-pointer scale-75" onClick={() => { document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }}>expand_more</span>
                </div>
            </header>

            <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto" id="sobre">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                    <div className="w-full md:w-2/5 md:sticky md:top-24 space-y-8">
                        <div className="w-12 h-1 bg-primary"></div>
                        <h2 className="font-display text-5xl md:text-7xl text-secondary leading-[0.9]">Sistemas que <span className="italic text-primary-dark">libertam</span> sua mente.</h2>
                        <div className="space-y-12">
                            <p className="text-gray-500 text-xl leading-relaxed magazine-drop-cap">Minha filosofia foca em eliminar a fricção entre sua intenção e sua execução. Através de sistemas testados, transformamos o caos digital em um fluxo de trabalho potente.</p>
                            <Link href="/manifesto" className="group block cursor-pointer bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="material-symbols-outlined text-primary !text-4xl">auto_stories</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Leitura Recomendada</span>
                                </div>
                                <h3 className="font-display text-3xl text-secondary group-hover:text-primary transition-colors leading-tight mb-4">O Manifesto da Produtividade Inteligente</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Descubra os princípios que regem minha abordagem para um trabalho sustentável e de alto impacto.</p>
                                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary border-b-2 border-primary pb-1 group-hover:gap-4 transition-all">Ler Manifesto Completo <span className="material-symbols-outlined !text-sm">east</span></span>
                            </Link>
                        </div>
                        {/* AI Assistant Promo Card */}
                        <div className="p-8 bg-off-white border-l-4 border-secondary rounded-r-2xl shadow-lg space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Assistente IA Alexander</span>
                            </div>
                            <p className="text-secondary italic font-serif text-lg leading-relaxed">Acesse nosso consultor estratégico global para insights personalizados sobre sua rotina.</p>
                            <button onClick={() => setIsAIPanelOpen(true)} className="w-full py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 animate-float">
                                Abrir Assistente Global<span className="material-symbols-outlined !text-sm">bolt</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 grid grid-cols-1 gap-10">
                        {MANIFESTO_PILLARS.map((pillar) => (
                            <div key={pillar.id} className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <div className="flex items-center gap-6 mb-6">
                                    <span className="font-display text-4xl text-gray-200 group-hover:text-primary transition-colors">{pillar.id}</span>
                                    <div className="w-px h-10 bg-gray-100 group-hover:bg-primary/20"></div>
                                    <h3 className="text-2xl font-display font-bold text-secondary">{pillar.title}</h3>
                                </div>
                                <p className="text-gray-500 leading-relaxed text-sm">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Arquivo Recente</span>
                            <h2 className="font-display text-5xl md:text-7xl text-secondary leading-none tracking-tighter">Últimos <span className="italic text-primary">insights</span> estratégicos.</h2>
                        </div>
                        <Link
                            href="/blog"
                            className="text-[10px] font-black uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors flex items-center gap-2"
                        >
                            Ver arquivo completo <span className="material-symbols-outlined !text-sm">east</span>
                        </Link>
                    </div>

                    <PostList
                        articles={homePosts}
                        hasMore={homeHasMore}
                        isLoading={homeIsLoading}
                        onLoadMore={homeLoadMore}
                        showLoadMore={false}
                    // PostList now uses Links internally if onArticleClick is undefined, or we can assume it will Link.
                    // But PostList in our migration does: <PostCard onClick={onArticleClick} ... />
                    // And PostCard: if (onClick) ... else Link.
                    // So passing undefined onArticleClick will trigger Link behavior in PostCard. Correct.
                    />

                    <div className="flex justify-center pt-10">
                        <Link
                            href="/blog"
                            className="group relative px-12 py-5 overflow-hidden rounded-xl bg-secondary text-white transition-all hover:bg-primary inline-flex"
                        >
                            <span className="relative z-10 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em]">
                                Ver todos os artigos <span className="material-symbols-outlined !text-sm group-hover:translate-x-2 transition-transform">east</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppHome;
