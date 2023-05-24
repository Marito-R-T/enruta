import React from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  Typography,
  Container,
  Box,
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';


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



function RouteDetails() {

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