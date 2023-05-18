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

import TaskSearch from '@/content/Home/TaskSearch';
import TableDeliveryOp from './tableDeliverOp';


function DeliveryOp() {

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
        <title>EnruteOP</title>
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
                Entregas {/*user.name*/}
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
              <TableDeliveryOp/>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DeliveryOp.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DeliveryOp;