import React from "react";
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import {
  Typography,
  Grid,
  Container,
  Card,
  Box,
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import TableListMyPackageClient from "./myPackages";


function PackageClient() {

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
                    Paquetes {/*user.name*/}
                </Typography>
                <Typography variant="subtitle2">
                    {/* Manage your day to day packages! Enjoy this International Experience. */}
                </Typography>
                </Box>
            </Box>
        </Box>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                {/* Aqui el form de la data del cliente */}
                {/* <FormClientPkg/> */}
              </Card>
              <Card>
                {/* Aqui la tabla de los paquetes junto con el modal de la info
                    de paquetes */}
                <TableListMyPackageClient/>
              </Card>
            </Grid>
          </Grid>
      </Container>
      <Footer />
    </>
  );
}

PackageClient.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default PackageClient;