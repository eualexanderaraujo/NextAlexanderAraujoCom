"use client";

import React from 'react';
import Link from 'next/link';
import { Article } from '../types';

interface PostCardProps {
    article: Article;
    onClick?: (article: Article) => void;
}

const PostCard: React.FC<PostCardProps> = ({ article, onClick }) => {
    const content = (
        <article
            className="group cursor-pointer bg-white p-6 rounded-sm shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] hover:shadow-primary/10 hover:-translate-y-3 transition-all duration-500"
        >
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 relative">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors z-10 pointer-events-none"></div>
                <img
                    src={article.imageUrl}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt={article.title}
                />
                {article.tag && (
                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/90 backdrop-blur px-2.5 py-1 text-[7px] font-black uppercase tracking-widest text-primary shadow-lg">
                            {article.tag}
                        </span>
                    </div>
                )}
            </div>
            <span className="bg-primary/10 text-primary px-2 py-0.5 text-[8px] font-black uppercase tracking-widest mb-4 inline-block rounded-sm">
                {article.category}
            </span>
            <h3 className="font-display text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight">
                {article.title}
            </h3>
            <p className="text-gray-500 line-clamp-3 text-xs leading-relaxed mb-6">
                {article.description}
            </p>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">
                    {article.readingTimeMinutes || 8} min de leitura
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform duration-300">trending_flat</span>
            </div>
        </article>
    );

    // If onClick is provided (e.g. for custom handling), we use it. Otherwise, we link.
    // In our migration, we mostly want links.
    if (onClick) {
        return <div onClick={() => onClick(article)}>{content}</div>;
    }

    return <Link href={`/blog/${article.slug}`}>{content}</Link>;
};

export default PostCard;
