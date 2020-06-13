import React from 'react';
import Layout from '../../src/components/Layout/Layout';
import PostDetail from '../../src/components/Posts/PostDetail';
import { getPostWithComments } from '../../src/helpers/api';
import { NextPageContext } from 'next';

interface Props {
    post: Post;
}

const StaticPropsDetail = ({ post }: Props) => {
    const { title } = post;

    return (
        <Layout title={title}>
            <PostDetail post={post} />
        </Layout>
    );
};

interface Context extends NextPageContext {
    id: number;
}

StaticPropsDetail.getInitialProps = async (context: Context) => {
    const post = await getPostWithComments(Number(context.query.id));

    return { post: post };
};

export default StaticPropsDetail;
