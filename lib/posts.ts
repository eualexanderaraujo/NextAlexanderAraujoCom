import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article } from '@/types';
import { getAllArticles as getLegacyArticles } from './loadMarkdownPosts';
import MarkdownIt from 'markdown-it';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const md = new MarkdownIt();

export async function getAllPosts(): Promise<Article[]> {
    if (!fs.existsSync(postsDirectory)) {
        console.log('Posts directory not found:', postsDirectory);
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.filter(fileName => /\.(md|mdx)$/.test(fileName)).map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const slug = fileName.replace(/\.mdx?$/, '');
        const { data, content } = matter(fileContents);
        const isMDX = fileName.endsWith('.mdx');
        const finalSlug = data.slug || slug;

        // Render HTML for standard markdown immediately to maintain compatibility
        // For MDX, we pass the raw content string, to be compiled by the consumer
        const finalContent = isMDX ? content : md.render(content);

        return {
            id: slug,
            slug: finalSlug,
            title: data.title,
            date: data.date,
            category: data.category || 'Geral',
            tag: data.tag,
            description: data.description,
            imageUrl: data.cover || data.imageUrl,
            content: finalContent,
            isMDX: isMDX,
            readingTimeMinutes: 8, // Placeholder or calculate
            ...data
        } as Article;
    });

    return allPostsData.sort((a, b) => {
        if ((a.date || '') < (b.date || '')) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostBySlug(slug: string): Promise<Article | null> {
    const allPosts = await getAllPosts();
    return allPosts.find((post) => post.slug === slug) || null;
}
