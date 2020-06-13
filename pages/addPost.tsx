import React from 'react';
import Layout from '../src/components/Layout/Layout';
import FormAddPost from '../src/components/Forms/FormAddPost';

const AddPost = () => (
    <Layout title="Add New Post">
        <>
            <h1>
                Add Post
            </h1>
            <FormAddPost />
        </>
    </Layout>
);

export default AddPost;
