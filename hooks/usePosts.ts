"use client";

import { useState, useMemo, useEffect } from 'react';
import { Article } from '../types';

interface UsePostsOptions {
    initialCount: number;
    step: number;
}

export const usePosts = (allArticles: Article[], options: UsePostsOptions) => {
    const { initialCount, step } = options;
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const [isLoading, setIsLoading] = useState(false);

    // Reset pagination if the underlying articles change (e.g. via search/filters)
    useEffect(() => {
        setVisibleCount(initialCount);
    }, [allArticles, initialCount]);

    const visiblePosts = useMemo(() => {
        return allArticles.slice(0, visibleCount);
    }, [allArticles, visibleCount]);

    const hasMore = visibleCount < allArticles.length;

    const loadMore = () => {
        if (!hasMore || isLoading) return;

        setIsLoading(true);
        // Simulating small network delay for feedback
        setTimeout(() => {
            setVisibleCount(prev => prev + step);
            setIsLoading(false);
        }, 600);
    };

    return {
        posts: visiblePosts,
        hasMore,
        isLoading,
        loadMore
    };
};
