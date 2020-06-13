export const SET_POSTS = 'SET_POSTS';

export const setPosts = (posts: Post[]) => ({
    type: SET_POSTS,
    posts,
});
