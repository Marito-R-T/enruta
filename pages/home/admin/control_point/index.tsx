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
  styled,
  Button
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import TaskSearch from '@/content/Home/TaskSearch';
import TablePCAdmin from './TablePCAdmin';

function ControlPointAdmin() {

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
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<AddRoundedIcon fontSize="small" />}
            >
              Crear Punto de Control
            </Button>
          </Grid>
        </Grid>
        {/* <Box
            display="flex"
            alignItems={{ xs: 'stretch', md: 'center' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            >
            <Box display="flex" alignItems="center">
                <Box>
                  <Typography variant="h3" component="h3" gutterBottom>
                      Puntos de Control
                  </Typography>

                  <Box display="flex">
                    <Button color='primary' variant='outlined' sx={{ margin: 1 }}>Crear Punto de Control</Button>
                    <Button color='secondary' variant='outlined' sx={{ margin: 1 }}>Crear Punto de Control</Button>
                    <Button color='success' variant='outlined' sx={{ margin: 1 }}>Crear Punto de Control</Button>
                    <Button color='error' variant='outlined' sx={{ margin: 1 }}>Crear Punto de Control</Button>
                    <Button color='warning' variant='outlined' sx={{ margin: 1 }}>Crear Punto de Control</Button>
                  </Box>
                </Box>
            </Box>
        </Box> */}
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