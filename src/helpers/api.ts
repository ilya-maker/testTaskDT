import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'https://simple-blog-api.crew.red/';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

type RequestConfig = AxiosRequestConfig & {
    title?: string,
    body?: string,
    postId?: number,
    redirect?: 'follow'
};

export const getPosts  = async (): Promise<Post[]> => {
    const requestConfig: RequestConfig = {
        method: 'GET',
        redirect: 'follow',
    };

    try {
        const response = await axios.get('posts', requestConfig);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const sendPost = async (postTitle: string, postBody: string): Promise<Post[]> => {
    const requestConfig: RequestConfig = {
        method: 'POST',
        title: postTitle,
        body: postBody,
        redirect: 'follow',
    };

    try {
        return await axios.post('posts', requestConfig);
    } catch(error) {
        console.error(error);
    }
};

export const getPostWithComments = async (id: number): Promise<Post> => {
    const requestConfig: RequestConfig = {
        method: 'GET',
        redirect: 'follow',
    };

    try {
        const response = await axios.get(`posts/${id}?_embed=comments`, requestConfig);
        const { data } = response;

        return data;
    } catch (err) {
        throw `Something went wrong: ${err}`;
    }
};

export const removePost = async (postId: number): Promise<Post[]> => {
    const requestConfig: RequestConfig = {
        method: 'DELETE',
        redirect: 'follow',
    };

    try {
        return await axios.delete(`posts/${postId}`, requestConfig);
    } catch(error) {
        console.error(error);
    }
};

export const sendComment = async (postId: number, postBody: string): Promise<Post[]> => {
    const requestConfig: RequestConfig = {
        method: 'POST',
        postId: postId,
        body: postBody,
        redirect: 'follow',
    };

    try {
        return await axios.post('comments', requestConfig);
    } catch(error) {
        console.error(error);
    }
};

export const changePost = async (
    postTitle: string,
    postBody: string,
    id: number,
): Promise<Post[]> => {
    const requestConfig: RequestConfig = {
        method: 'PUT',
        redirect: 'follow',
        title: postTitle,
        body: postBody,
    };

    try {
        return axios
            .put(`${API_URL}posts/${id}`, requestConfig)
            .then(() => getPosts());
    } catch (error) {
        console.log(error);
    }
};
