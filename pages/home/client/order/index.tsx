import React from "react";
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, useState } from 'react';
import Footer from '@/components/Footer';
import {
    Typography,
  Grid,
  Tab,
  Tabs,
  Container,
  Card,
  Box,
  styled
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import TableListPkgOrderClient from "./tableListPkgClient";
import TableListMyOrderClient from "./myOrders";


const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);

function OrderClient() {

  const [currentTab, setCurrentTab] = useState<string>('orders');

  const tabs = [
    { value: 'orders', label: 'Mis Ordenes' },
    { value: 'neworder', label: 'Nueva Orden' }
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
                    Ordenes {/*user.name*/}
                </Typography>
                <Typography variant="subtitle2">
                    {/* Manage your day to day packages! Enjoy this International Experience. */}
                </Typography>
                </Box>
            </Box>
        </Box>
      </PageTitleWrapper>
      <Container maxWidth="lg">
      <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>
          <Card variant="outlined">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={0}
            >
              {currentTab === 'orders' && (
                <>
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
                        <TableListMyOrderClient/>
                      </Card>
                    </Grid>
                  </Grid>
                </>
              )}

              {currentTab === 'neworder' && (
                <>
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
                        <TableListPkgOrderClient/>
                      </Card>
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Card>

        
      </Container>
      <Footer />
    </>
  );
}

OrderClient.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default OrderClient;