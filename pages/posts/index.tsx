import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../src/components/Layout/Layout';
import PostList from '../../src/components/Posts/PostList';
import { getNewPosts } from '../../src/store';

const WithStaticProps = () => {
    const posts = useSelector(getNewPosts);

    return (
        <Layout title="Posts List">
            <>
                <h1>All Posts</h1>
                <PostList posts={posts} />
            </>
        </Layout>
    );
};

export default WithStaticProps;
