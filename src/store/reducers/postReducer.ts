import { SET_POSTS } from '../actions/setPosts';
import { DELETE_POST } from '../actions/deletePost';
import { EDIT_POST } from "../actions/editPost";

const PostState: Post[] = [];

const postReducer = (state = PostState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return action.posts;
        case DELETE_POST:
            return state.filter(item => item.id !== action.id);
        case EDIT_POST:
            return state.filter(item => {
                if (item.id !== action.id)
                return item;
                else return {
                    ...item,
                    title: action.title,
                    body: action.body,
                }
            });
        default:
            return state;
    }
};

export default postReducer;
