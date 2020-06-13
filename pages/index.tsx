import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../src/components/Layout/Layout';
import PostList from '../src/components/Posts/PostList';
import { getLastPosts } from '../src/store';

const Index = () => {
  const posts = useSelector(getLastPosts);

  return (
      <Layout>
        <>
          <h1>New Posts</h1>
          <PostList posts={posts} />
        </>
      </Layout>
  )
};

export default Index;
