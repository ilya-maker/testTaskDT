import React from 'react';
import FormAddComment from '../Forms/FormAddComment';
import PostRemove from './PostFunctional/PostRemove';
import { Container, Text } from './index';
import PostEdit from "./PostFunctional/PostEdit";

interface Props {
    post: Post;
}

const PostDetail = ({ post }: Props) => {
    const { id, title, body, comments } = post;

    return (
        <Container>
            <PostRemove postId={post.id} />
            <PostEdit id={post.id} />
            <h1>{title}</h1>
            {body && (
                <Text>
                    {body}
                </Text>
            )}
            <FormAddComment postId={id} />
            {comments && comments.length > 0 && (
                <>
                    <h3>Comments:</h3>
                    <ul>
                        {comments.map(({ id, body}) => (
                            <li key={id}>
                                {body}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </Container>
    )
};

export default PostDetail;
