import Head from 'next/head';
import React, {useEffect} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Main, Wrapper } from './index';
import { useDispatch } from 'react-redux';
import { getPostsFromAPI } from '../../store/index';

interface Props {
    title?: string;
    children: JSX.Element;
}

const Layout = ({children, title = 'Blog'}: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsFromAPI());
    }, []);
    return (
        <Wrapper>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
