import React from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, useState } from 'react';
import PageHeader from '@/content/Home/PageHeader';
import Footer from '@/components/Footer';
import {
    Typography,
  Grid,
  Tab,
  Tabs,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
  styled
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { GetServerSideProps, NextPageContext } from 'next';


// export async function getServerSideProps: GetServerSideProps<Props> = async (
//   context: NextPageContext
// ) => {
//   const { productID } = context.query;
//   // Aquí puedes hacer una solicitud a una API o buscar los datos del producto en tu base de datos
//   const productData = await fetch(`https://mi-api.com/products/${productID}`);
//   const product = await productData.json();
//   return {
//     props: {
//       product,
//     },
//   };
// };

interface Product {
  id: string;
  name: string;
  description: string;
}

interface Props {
  product: Product;
}

function RouteDetails() {

  const [currentTab, setCurrentTab] = useState<string>('analytics');

  const tabs = [
    { value: 'analytics', label: 'Analytics Overview' },
    { value: 'taskSearch', label: 'Task Search' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageTitleWrapper>
        <Box
            display="flex"
            alignItems={{ xs: 'stretch', md: 'center' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            >
            <Box display="flex" alignItems="center">
                <Box>
                <Typography variant="h3" component="h3" gutterBottom>
                Ruta: {/*user.name*/}
                </Typography>
                <Typography variant="subtitle2">
                    {/* Manage your day to day packages! Enjoy this International Experience. */}
                </Typography>
                </Box>
            </Box>
        </Box>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        {/* <div>{product.name}</div> */}
      </Container>
      {/* <Footer /> */}
    </>
  );
}

RouteDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default RouteDetails;