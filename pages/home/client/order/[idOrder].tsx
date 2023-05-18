import PageTitleWrapper from "@/components/PageTitleWrapper";
import Head from "next/head";
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
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableFooter,
  CardHeader
} from '@mui/material';
import React, { useState } from "react";
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";
import { Package, listPackExp } from "@/models/Package";


export default function OrderClient() {
    const router = useRouter();
    const idOrder = router.query.idOrder as string;
    const [listPackagesOrder, setListPackagesOrder] = useState<Package[]>(listPackExp);

    const sumFeePackage = () => {
        let total = 0
        for (let i = 0; i < listPackagesOrder.length; i++) {
            total += listPackagesOrder[i].fee? listPackagesOrder[i].fee.amount : 0;
            // total += listPackagesOrder[i].fee? listPackagesOrder[i].fee.amount : 0;
            
        }
        return total.toFixed(2);
    }

    return(
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
                            Orden: # {idOrder}
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
                            
                        <CardHeader
                            title="Lista de Paquetes de la Orden"
                            action= {
                <Box width={300} >
                    {/* <Button
                    sx={{mr: 1}}
                    onClick={() => {}}
                    size="small"
                    variant="outlined"
                    color="primary"
                    >
                    Finalizar Orden
                    </Button>
                    <Button
                    onClick={handleClickOpen}
                    size="small"
                    variant="contained"
                    color="info"
                    >
                    Agregar Paquete
                    </Button> */}
                     {/* <ModalFormPkg open={open} onOpenChange={handleClickOpen} onCloseChange={handleClose} onAddPackage={handleAddPackage} /> */}
                </Box>
            }   
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell># ID</TableCell>
                            <TableCell>Peso</TableCell>
                            <TableCell>Prioridad</TableCell>
                            <TableCell>Direccion de entrega</TableCell>
                            <TableCell align="right">Tarifa</TableCell>
                            <TableCell align="right">Ruta</TableCell>
                            {/* <TableCell align="right">Accion</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { listPackagesOrder.map((packageItem, index)=> {
                            return(
                                <TableRow
                                hover
                                key={index}
                                >
                                    <TableCell >
                                        <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {packageItem.id}
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
                                        {packageItem.weight}
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
                                        {packageItem.priority? 'SI':'NO'}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                        variant="body1"
                                        fontWeight="plain"
                                        color="text.secondary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {packageItem.deliveryAddress}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography
                                        variant="body1"
                                        fontWeight="plain"
                                        color="text.secondary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {packageItem.fee? packageItem.fee.amount: '?'}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography
                                        variant="body1"
                                        fontWeight="plain"
                                        color="text.secondary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {packageItem.route? packageItem.route.name: '?'}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        {/* <ModalEditPkg item={packageItem}/> */}
                                        {/* <Tooltip title="Delete Order" arrow>
                                        <IconButton
                                            onClick={() => handleDeletePkg(index)}
                                            sx={{
                                            '&:hover': { background: theme.colors.error.lighter },
                                            color: theme.palette.error.main
                                            }}
                                            color="inherit"
                                            size="small"
                                        >
                                            <DeleteTwoToneIcon fontSize="small" />
                                        </IconButton>
                                        </Tooltip> */}
                                    </TableCell>
                                </TableRow>
                            );
                        }) }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                <Typography
                                variant="body1"
                                fontWeight="plain"
                                color="text.secondary"
                                gutterBottom
                                noWrap
                                >
                                
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                variant="body1"
                                fontWeight="plain"
                                color="text.secondary"
                                gutterBottom
                                noWrap
                                >
                                
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                variant="body1"
                                fontWeight="plain"
                                color="text.secondary"
                                gutterBottom
                                noWrap
                                >
                                
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography
                                variant="body1"
                                fontWeight="bold"
                                color="text.primary"
                                gutterBottom
                                noWrap
                                >
                                Total
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography
                                variant="body1"
                                fontWeight="bold"
                                color="text.primary"
                                gutterBottom
                                noWrap
                                >
                                Q {sumFeePackage()}
                                {/* Q 100.00 */}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography
                                variant="body1"
                                fontWeight="bold"
                                color="text.primary"
                                gutterBottom
                                noWrap
                                >
                                
                                </Typography>
                            </TableCell>
                            {/* <TableCell align="right">
                                <Typography
                                variant="body1"
                                fontWeight="plain"
                                color="text.secondary"
                                gutterBottom
                                noWrap
                                >
                                
                                </Typography>
                            </TableCell> */}
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
                            

                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}