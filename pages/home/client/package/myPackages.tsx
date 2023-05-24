import { 
    Box, 
    CardHeader, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableFooter, 
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Package } from "@/models/Package";
import { getPackageList } from "../../../../services/PackageServices/api";


export default function TableListMyPackageClient() {
    
    // const router = useRouter();
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);

    const [listPackagesOrder, setListPackagesOrder] = useState<Package[]>([]);

    const sumFeePackage = () => {
        let total = 0
        for (let i = 0; i < listPackagesOrder.length; i++) {
            total += listPackagesOrder[i].fee? listPackagesOrder[i].fee.amount : 0;
            // total += listPackagesOrder[i].fee? listPackagesOrder[i].fee.amount : 0;
            
        }
        return total.toFixed(2);
    }

    const handleRowDoubleClick = (rowId: number) => {
        // router.push(`/home/client/package/${rowId}` );
        window.open(`/home/client/package/${rowId}`, '_blank');
    };

    const handlePageChange = (_event: any, newPage: number): void => {
        setPage(newPage);
        getListOrderPackFromUser('', page, limit);
      };
    
    const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLimit(parseInt(event.target.value));
        getListOrderPackFromUser('', 1, limit);
    };

    const getListOrderPackFromUser = async (pattern: string, page: number, size: number) => {
        try {
            const response = await getPackageList(pattern, page, size);
            setListPackagesOrder(response);
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(() => {
        getListOrderPackFromUser('', 1, limit);
        return () => {
          
        };
      }, [open]);

    return(
        <>
            <CardHeader
            title="Lista de Paquetes de Ordenes"
            action= {
                <Box width={300} >

                </Box>
            }   
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Peso</TableCell>
                            <TableCell>Prioridad</TableCell>
                            <TableCell>Direccion de entrega</TableCell>
                            <TableCell align="right">Tarifa</TableCell>
                            <TableCell align="right">Ruta</TableCell>
                            <TableCell align="right">Accion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { listPackagesOrder.map((packageItem, index)=> {
                            return(
                                <TableRow
                                hover
                                key={index}
                                onDoubleClick={() => handleRowDoubleClick(packageItem.id)}
                                >
                                    <TableCell >
                                        <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {index+1}
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
                                        {packageItem.prioritized? 'SI':'NO'}
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
                            <TableCell align="right">
                                <Typography
                                variant="body1"
                                fontWeight="plain"
                                color="text.secondary"
                                gutterBottom
                                noWrap
                                >
                                
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Box p={2}>
                <TablePagination
                component="div"
                count={35}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25, 30]}
                />
            </Box>
        </>
    );
}