import Head from 'next/head';
import React from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
    Typography,
  Grid,
  Container,
  Card,
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import TablePCAdmin from './TablePCAdmin';
import ModalAddPC from './modalAddPC';

function ControlPointAdmin() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageTitleWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Punto de Control
            </Typography>
            {/* <Typography variant="subtitle2">
              yEFER, these are your recent transactions
            </Typography> */}
          </Grid>
          <Grid item>
            <ModalAddPC/>
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
            {/* <RecentOrders /> */}
            <Card>
                <TablePCAdmin/>
            </Card>
            
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

ControlPointAdmin.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ControlPointAdmin;