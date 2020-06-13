import React, { useState } from 'react';
import Layout from '../../src/components/Layout/Layout';
import { changePost } from '../../src/helpers/api';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { Button, Form } from '../../src/components/Forms';
import { Span } from './index';
import FormInput from "../../src/components/Forms/FormInput";
import FormTextarea from "../../src/components/Forms/FormTextarea";
import {editPost} from "../../src/store/actions/editPost";

interface Props {
    postData: Post;
}

const ChangePostData = ({ postData }: Props): JSX.Element => {
    const [title, setTitle] = useState(postData.title);
    const [body, setBody] = useState(postData.body);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(editPost(postData.id, title, body));
        changePost(title, body, postData.id)
            .then(() => Router.push('/'));
        return;
    };

    return (
        <Layout title="Change post">
            <Form onSubmit={handleSubmit}>
                <Span>Title:</Span>
                <FormInput
                    type="text"
                    name="title"
                    id="postTitle"
                    placeholder="Post Title"
                    value={title}
                    onChange={setTitle}
                />
                <Span>Body:</Span>
                <FormTextarea
                    name="body"
                    id="postBody"
                    placeholder="Post Body"
                    value={body}
                    onChange={setBody}
                />
                <Button>Change post</Button>
            </Form>
        </Layout>
    );
};

ChangePostData.getInitialProps = async (context) => {
    const { id } = context.query;
    const API_URL = 'https://simple-blog-api.crew.red/posts/';
    const preparedData = await fetch(`${API_URL}${id}`);
    const data = await preparedData.json();

    return { postData: data };
};

export default ChangePostData;
