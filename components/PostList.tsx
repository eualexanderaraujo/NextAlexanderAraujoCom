"use client";

import React from 'react';
import { Article } from '../types';
import PostCard from './PostCard';

interface PostListProps {
    articles: Article[];
    hasMore: boolean;
    isLoading: boolean;
    onLoadMore: () => void;
    onArticleClick?: (article: Article) => void;
    isFiltering?: boolean;
    showLoadMore?: boolean;
}

const PostList: React.FC<PostListProps> = ({
    articles,
    hasMore,
    isLoading,
    onLoadMore,
    onArticleClick,
    isFiltering = false,
    showLoadMore = true
}) => {
    if (articles.length === 0 && !isFiltering) {
        return (
            <div className="py-24 text-center space-y-6 animate-fade-in-up bg-white/50 rounded-3xl border border-dashed border-gray-200">
                <span className="material-symbols-outlined text-5xl text-gray-200">search_off</span>
                <div className="space-y-2">
                    <p className="font-display text-2xl text-secondary">Nenhum insight encontrado</p>
                    <p className="text-gray-400 max-w-sm mx-auto text-sm">Não encontramos nada correspondente aos seus filtros atuais.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-16">
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 animate-fade-in-up transition-opacity duration-300 ${isFiltering ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                {articles.map(article => (
                    <PostCard
                        key={article.id}
                        article={article}
                        onClick={onArticleClick}
                    />
                ))}
            </div>

            {showLoadMore && hasMore && (
                <div className="flex justify-center pt-8 animate-fade-in-up">
                    <button
                        onClick={onLoadMore}
                        disabled={isLoading}
                        aria-label="Carregar mais posts"
                        className="group flex flex-col items-center gap-4 py-8 px-12 transition-all disabled:opacity-50"
                    >
                        <div className={`w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center transition-all group-hover:bg-secondary group-hover:text-white ${isLoading ? 'animate-spin-slow bg-secondary text-white' : ''}`}>
                            <span className="material-symbols-outlined !text-2xl">{isLoading ? 'sync' : 'expand_more'}</span>
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary/60 group-hover:text-secondary transition-colors">
                            {isLoading ? 'Carregando insights...' : 'Carregar mais posts'}
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList;
