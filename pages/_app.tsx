import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { wrapper } from '../src/store';

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
