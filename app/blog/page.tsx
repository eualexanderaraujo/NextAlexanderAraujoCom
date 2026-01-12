import React from 'react';
import BlogPage from '@/components/BlogPage';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/loadMarkdownPosts';

export default function Blog() {
    const allArticles = getAllArticles();
    return (
        <main>
            <BlogPage allArticles={allArticles} />
            <Footer />
        </main>
    );
}
