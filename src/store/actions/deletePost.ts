export const DELETE_POST = 'DELETE_POST';

export const deletePost = (id:number) => ({
    type: DELETE_POST,
    id,
});
