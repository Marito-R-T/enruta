import React, { useEffect } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { useState } from 'react';
import Footer from '@/components/Footer';
import {
  Typography,
  Grid,
  Container,
  Card,
  Box,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import ModalEditFee from './ModalEditFee';
import { getFee } from '../../../../services/PackageServices/api';


function RatesAdmin() {

  const [formFee, setFormFee] = useState({
    fee: 0,
    prioritizedFee: 0
  });

  useEffect(() => {
    getFeeGlobal();
    return () => {
      
    };
  }, []);

  const getFeeGlobal = async () => {
    try {
        const response: any = await getFee();
        setFormFee({fee: response.fee, prioritizedFee: response.prioritizedFee});
    } catch (error) {
        console.error(error);
        
    }
  }

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
                Tarifas {/*user.name*/}
                </Typography>
                <Typography variant="subtitle2">
                    {/* Manage your day to day packages! Enjoy this International Experience. */}
                </Typography>
                </Box>
            </Box>
        </Box>
      </PageTitleWrapper>
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          paddingTop={3}
          paddingX={1}
        >
          <Grid item xs={12}>
            <Card>
            <Grid item xs={12} md={12}>
              <Box>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Tarifa</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            Tarifa Global (por LBS)
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                          >
                            {formFee.fee}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <ModalEditFee/>
                      </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            Tarifa de Priorizacion
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                          > 
                          {formFee.prioritizedFee}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <ModalEditFee/>
                      </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

RatesAdmin.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default RatesAdmin;