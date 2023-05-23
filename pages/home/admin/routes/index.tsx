import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
    Typography,
  Grid,
  Container,
  Card,
  Button
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import TableRoutesAdmin from './TableRoutesAdmin';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


function RutesAdmin() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageTitleWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Administracion de Rutas
            </Typography>
            {/* <Typography variant="subtitle2">
              yEFER, these are your recent transactions
            </Typography> */}
          </Grid>
          <Grid item>
          <Link href="/home/admin/routes/new-route">
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<AddRoundedIcon fontSize="small" />}
            >
              Crear Nueva Ruta
            </Button>
          </Link>
            
          </Grid>
        </Grid>
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
                <TableRoutesAdmin/>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

RutesAdmin.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default RutesAdmin;