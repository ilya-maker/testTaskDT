/// <reference types="next" />
/// <reference types="next/types/global" />

interface Post {
    body?: string;
    comments?: Comment[];
    id: number;
    title: string;
}

interface Comment {
    id: number;
    postId: number;
    body: string;
}
