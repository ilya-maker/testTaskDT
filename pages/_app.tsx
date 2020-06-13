import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { getPosts } from '../src/helpers/api';
import { wrapper } from '../src/store';
import { setPosts } from '../src/store/actions/setPosts';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    height: 100%;
  }
`;

const WrappedApp = ({ Component, pageProps }: AppProps) => {

    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
};

export default wrapper.withRedux(WrappedApp);
