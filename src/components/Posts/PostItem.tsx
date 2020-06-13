import React from 'react';
import Link from 'next/link';
import { ContainerDiv, A } from './index';

interface Props {
    post: Post;
}

const PostItem = ({ post }: Props) => {
    const { title } = post;

    return (
        <ContainerDiv>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <A>
                    {title}
                </A>
            </Link>
        </ContainerDiv>
    )
};

export default PostItem;
