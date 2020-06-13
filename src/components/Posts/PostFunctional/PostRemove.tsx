import Router from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../../helpers/api';
import {setPosts} from '../../../store/actions/setPosts';
import {deletePost} from '../../../store/actions/deletePost';
import { Delete } from './index';

interface Props {
    postId: number;
    redirectUrl?: string;
}

const PostRemove = ({ postId }: Props) => {
    const dispatch = useDispatch();
    const removePost = (postId: number) => {
        dispatch(deletePost(postId));
        api.removePost(postId)
            .then(() => Router.push('/posts'))
    };

    return (
        <Delete onClick={() => removePost(postId)}>
            <span>&#10006;</span>
        </Delete>
    )
};

export default PostRemove;
