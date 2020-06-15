import Router from 'next/router';
import React, { useState } from 'react';
import * as api from '../../helpers/api';
import FormTextarea from './FormTextarea';
import { Form, Button } from "./index";

interface Props {
    postId: number;
}

const FormAddComment = ({ postId }: Props) => {
    const [commentBody, setCommentBody] = useState('');

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        if (!commentBody.trim()) {
            return;
        }
        api.sendComment(postId, commentBody)
            .then(() => Router.reload())
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormTextarea
                name="body"
                id="commentBody"
                placeholder="Comment it there..."
                value={commentBody}
                onChange={setCommentBody}
            />
            <Button
                type="submit"
                name="Send comment"
                id="send-comment"
                disabled={!commentBody}
                onClick={handleSubmit}
            >
                Send comment
            </Button>
        </Form>
    );
};

export default FormAddComment;
