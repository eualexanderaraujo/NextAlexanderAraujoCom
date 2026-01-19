import React from 'react';
import ArticlePage from '@/components/ArticlePage';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import NewsletterCTA from '@/components/NewsletterCTA';

export async function generateStaticParams() {
    const articles = await getAllPosts();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getPostBySlug(slug);

    if (!article) {
        notFound();
    }

    const mdxComponents = {
        NewsletterCTA: NewsletterCTA
    };

    let contentNode;
    if (article.isMDX && article.content) {
        contentNode = <MDXRemote source={article.content} components={mdxComponents} />;
    }

    return (
        <main>
            <ArticlePage selectedArticle={article} contentNode={contentNode} />
            <Footer />
        </main>
    );
}
