import React from 'react';
import BlogPage from '@/components/BlogPage';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
    title: 'Blog | Alexander Araújo',
    description: 'Artigos sobre produtividade, sistemas e tecnologia.',
};

export default async function BlogIndexRoute() {
    const articles = await getAllPosts();

    return (
        <main>
            <BlogPage initialPosts={articles} />
            <Footer />
        </main>
    );
}
