import React from 'react';
import { Edit } from './index';
import Link from "next/link";

type Props = {
    id: number;
}

const PostEdit = ({ id }: Props) => {
    return (
        <Link href="/edit/[id]" as={`/edit/${id}`}>
            <Edit>
                <span>&#9998;</span>
            </Edit>
        </Link>
    )
};

export default PostEdit;
