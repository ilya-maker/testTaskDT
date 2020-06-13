export const EDIT_POST = 'EDIT_POST';

export const editPost = (id:number, title:string, body:string) => ({
    type: EDIT_POST,
    id,
    title,
    body,
});
