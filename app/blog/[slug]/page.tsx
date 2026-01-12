import React from 'react';
import ArticlePage from '@/components/ArticlePage';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/loadMarkdownPosts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const articles = getAllArticles();
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main>
            <ArticlePage selectedArticle={article} />
            <Footer />
        </main>
    );
}
