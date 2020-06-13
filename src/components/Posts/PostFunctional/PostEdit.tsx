import Router from 'next/router';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../../helpers/api';
import * as store from '../../../store/actions/setPosts';
import { Edit } from './index';
import { editPost } from "../../../store/actions/editPost";
import {setPosts} from "../../../store/actions/setPosts";
import Link from "next/link";
import {Container} from "../index";
// import { FormAddPost } from '../../Forms/FormAddPost';

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
