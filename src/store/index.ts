import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createSelector } from 'reselect';
import postReducer from './reducers/postReducer';
import {setPosts} from "./actions/setPosts";
import * as api from '../helpers/api';
import { Dispatch } from 'react-redux';

const rootReducer = combineReducers({
   posts: postReducer,
});

export const getPosts = (state): Post[] => state.posts;

export const getNewPosts = createSelector(
  getPosts, (posts: Post[]) => [...posts].sort((a, b) => b.id - a.id),
);

export const getLastPosts = createSelector(
    getNewPosts,
    (posts: Post[]) => [...posts].slice(0, 10),
);

export type RootState = ReturnType<typeof rootReducer>;

const initStore: MakeStore<RootState> = () => (
    createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
);

export const getPostsFromAPI = () => {
   return (dispatch: Dispatch<any>) => {
      api.getPosts()
          .then((posts) => dispatch(setPosts(posts)));
   };
};


export const wrapper = createWrapper<RootState>(initStore);
