import Router from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../helpers/api';
import { setPosts } from '../../store/actions/setPosts';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import { Form, Button } from "./index";

const FormAddPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!postTitle.trim() && !postBody.trim()) {
            return;
        }

        api.sendPost(postTitle, postBody)
            .then(() => Router.push('/posts'));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="title"
                id="postTitle"
                placeholder="Post Title"
                value={postTitle}
                onChange={setPostTitle}
            />
            <FormTextarea
                name="body"
                id="postBody"
                placeholder="Post Body"
                value={postBody}
                onChange={setPostBody}
            />
            <Button
                type="submit"
                name="Send post"
                id="send-post"
                disabled={!postTitle && !postBody}
                onClick={handleSubmit}
            >
                Send post
            </Button>
        </Form>
    );
};

export default FormAddPost;
