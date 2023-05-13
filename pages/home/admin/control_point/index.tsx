import Head from 'next/head';
import React from 'react';
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
  styled,
  Button,
  TextField
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import TaskSearch from '@/content/Home/TaskSearch';
import TablePCAdmin from './TablePCAdmin';
import ModalAddPC from './modalAddPC';
import Modal from '@/components/Modal';

function ControlPointAdmin() {

  const [currentTab, setCurrentTab] = useState<string>('analytics');

  const tabs = [
    { value: 'analytics', label: 'Analytics Overview' },
    { value: 'taskSearch', label: 'Task Search' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const [open, setOpen] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };

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