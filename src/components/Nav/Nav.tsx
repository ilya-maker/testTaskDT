import Link from 'next/link';
import React from 'react';
import { List, A, Item } from './index';

const Nav = () => (
    <nav>
        <List>
            <Item>
                <Link href="/">
                    <A>
                        New Posts
                    </A>
                </Link>
            </Item>
            <Item>
                <Link href="/posts">
                    <A>
                        Posts
                    </A>
                </Link>
            </Item>
            <Item>
                <Link href="/addPost">
                    <A>
                        Add Post
                    </A>
                </Link>
            </Item>
        </List>
    </nav>
);

export default Nav;
