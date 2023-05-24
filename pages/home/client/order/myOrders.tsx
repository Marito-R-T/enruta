import { Box, 
    CardHeader, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Order } from "@/models/Order";


export default function TableListMyOrderClient() {
    // const router = useRouter();

    const [listPackagesOrder, setListPackagesOrder] = useState<Order[]>([]);


    
    const handleRowDoubleClick = (rowId: number) => {
        // router.push(`/home/client/package/${rowId}` );
        window.open(`/home/client/order/${rowId}`, '_blank');
    };

    const getMyOrder = async () => {
        try {
            // const response = await getOrderList();
            // setListPackagesOrder(response);
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(() => {
        getMyOrder();
        return () => {
  
        };
      }, []);

    return(
        <>
            <CardHeader
            title="Lista de Ordenes"
            action= {
                <Box width={300} >
                    
                </Box>
            }   
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell># Orden</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell align="right" >Total</TableCell>
                            {/* <TableCell>Direccion de entrega</TableCell> */}
                            {/* <TableCell align="right">Tarifa</TableCell>
                            <TableCell align="right">Ruta</TableCell> */}
                            {/* <TableCell align="right">Accion</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { listPackagesOrder.map((orderItem, index)=> {
                            return(
                                <TableRow
                                hover
                                key={index}
                                onDoubleClick={() => handleRowDoubleClick(orderItem.id)}
                                >
                                    <TableCell >
                                        <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {orderItem.id}
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
                                        {orderItem.creationDate.toLocaleString()}
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
                                        {orderItem.total}
                                        </Typography>
                                    </TableCell>
                                    {/* <TableCell>
                                        <Typography
                                        variant="body1"
                                        fontWeight="plain"
                                        color="text.secondary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {packageItem.deliveryAddress}
                                        </Typography>
                                    </TableCell> */}
                                    {/* <TableCell align="right">
                                        <Typography
                                        variant="body1"
                                        fontWeight="plain"
                                        color="text.secondary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {packageItem.fee? packageItem.fee.amount: '?'}
                                        </Typography>
                                    </TableCell> */}
                                    {/* <TableCell align="right">
                                        <Typography
                                        variant="body1"
                                        fontWeight="plain"
                                        color="text.secondary"
                                        gutterBottom
                                        noWrap
                                        >
                                        {packageItem.route? packageItem.route.name: '?'}
                                        </Typography>
                                    </TableCell> */}
                                    {/* <TableCell align="right"> */}
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
                                    {/* </TableCell> */}
                                </TableRow>
                            );
                        }) }
                    </TableBody>
                    {/* <TableFooter>
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
                                Total:
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
                                Q 100.00
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
                    </TableFooter> */}
                </Table>
            </TableContainer>
        </>
    );
}