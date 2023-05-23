import React from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Home/PageHeader';
import Footer from '@/components/Footer';
import {
  Container,
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import axios from 'axios';
import ProtectedRoute from '../ProtectedRoute';


function HomeTasks() {

  //Un redirect para que se vaya a administracion o algo diferente

  return (
    <ProtectedRoute>
      <Head>
        <title>Home</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        
      </Container>
      <Footer />
    </ProtectedRoute>
  );
}

HomeTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

async function getApi() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(response);
}


export default HomeTasks;



