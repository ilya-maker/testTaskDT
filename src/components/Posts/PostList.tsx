import React from 'react';
import PostItem from './PostItem';
import PostRemove from './PostFunctional/PostRemove';
import PostEdit from './PostFunctional/PostEdit';
import {ContainerUl, Item} from './index';

interface Props {
    posts: Post[];
}

const PostList = ({ posts }: Props) => (
    <ContainerUl>
        {posts.map((post) => (
                <Item key={post.id}>
                    <PostRemove postId={post.id} />
                    <PostItem post={post} />
                    <PostEdit id={post.id}/>
                </Item>
        ))}
    </ContainerUl>
);

export default PostList;
