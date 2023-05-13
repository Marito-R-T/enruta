/*import { FC } from "react";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";*/
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import type { ReactElement, ReactNode } from 'react';
import React from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProvider from '@/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/createEmotionCache';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface TokyoAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function TokyoApp({ Component, ...rest }: TokyoAppProps) {
  const { emotionCache = clientSideEmotionCache, pageProps } = rest;
  const { store } =  wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <CacheProvider value={emotionCache}>
              <Head>
                <title>Tokyo Free Black NextJS Typescript Admin Dashboard</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
              </Head>
              <SidebarProvider>
                <ThemeProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CssBaseline />
                    {getLayout(<Component {...pageProps} />)}
                  </LocalizationProvider>
                </ThemeProvider>
              </SidebarProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
}
export default TokyoApp;