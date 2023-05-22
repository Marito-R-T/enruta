import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';
import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore  
import { wrapper } from "../store/store"
import React from "react";
import type { ReactElement } from 'react';
import BaseLayout from '@/layouts/BaseLayout';

import Link from '@/components/Link';
import Head from 'next/head';

import Logo from '@/components/LogoSign';
import Hero from '@/content/Overview/Hero';

import { useRouter } from 'next/router';
import { useEffect } from 'react';


const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>ENRUTA</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/dashboards/tasks"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Live Preview
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography textAlign="center" variant="subtitle1">
          Crafted by{' '}
          <Link
            href="https://bloomui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            BloomUI.com
          </Link>
        </Typography>
      </Container>
    </OverviewWrapper>
  );
}

//export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};



const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    router.push('/sign-in');
  }, []);

  return (
    <>
      
    </>
    // <div>
    //   <div>{authState ? "Logged in" : "Not Logged In"}</div>
    //   <button
    //     onClick={() =>
    //       authState
    //         ? dispatch(setAuthState(false))
    //         : dispatch(setAuthState(true))
    //     }
    //   >
    //     {authState ? "Logout" : "LogIn"}
    //   </button>
    // </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setAuthState(true)); 
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);

export default Home;

