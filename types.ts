export interface Article {
    id: string;
    category: string;
    tag?: string;
    title: string;
    description: string;
    imageUrl: string;
    isFeatured?: boolean;
    slug?: string;
    date?: string;
    publishedAt?: string;
    readingTimeMinutes?: number;
    content?: string;
}

export interface ManifestoPillar {
    id: string;
    icon: string;
    title: string;
    description: string;
}
