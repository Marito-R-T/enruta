import { 
    Box, 
    Button, 
    CardHeader, 
    IconButton, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableFooter, 
    TableHead,
    TableRow,
    Tooltip,
    Typography,
    useTheme
} from "@mui/material";
import React, { useState } from "react";
import { Package } from "@/models/Package";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModalFormPkg from "./modalFormPkg";
import { postOrders } from "../../../../services/ClientServices/api";


export default function TableListPkgOrderClient() {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [listPackagesOrder, setListPackagesOrder] = useState<Package[]>([]);

    const handleClickOpen = () => {
        console.log('adads');
        
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleAddPackage = (item: Package) => {
        const newItem: Package = item;
        setListPackagesOrder((prevItems) => [...prevItems, newItem]);
    };
    
    const handleSetListPackages = (newlist) => {
        setListPackagesOrder(newlist);
    };

    const handleDeletePkg = (itemIndex: number) => {
        // const updatedItems = listPackagesOrder.filter((item, index) => index !== itemIndex);
        const updatedItems = [...listPackagesOrder.slice(0, itemIndex), ...listPackagesOrder.slice(itemIndex + 1)];
        setListPackagesOrder(updatedItems);
    }

    const sumFeePackage = () => {
        let total = 0
        for (let i = 0; i < listPackagesOrder.length; i++) {
            total += listPackagesOrder[i].fee? listPackagesOrder[i].fee.amount : 0;
            // total += listPackagesOrder[i].fee? listPackagesOrder[i].fee.amount : 0;
            
        }
        return total.toFixed(2);
    }

    const handleSubmit = async () => {
        
        // Realizar validaciones adicionales y enviar el formulario si no hay errores
        if (listPackagesOrder.length>0) {
          try {
            const newOrder = {
                id: 0,
                creationDate: new Date(),
                total: 0,
                // nit: formData.nit,
                // address: formData.address,
                // name: formData.name,
                packages: listPackagesOrder
            }
            const response = await postOrders(newOrder);
            console.log(response);
            handleSetListPackages([]);
          } catch (error) {
            console.error(error);
            
          }
          console.log('Formulario enviado');
        }
      };

    return(
        <>
            <CardHeader
            title="Lista de Paquete de la Orden"
            action= {
                <Box >
                    <Button
                    sx={{mr: 1}}
                    onClick={() => {handleSetListPackages([])}}
                    size="small"
                    variant="outlined"
                    color="error"
                    >
                    Limpiar
                    </Button>
                    <Button
                    sx={{mr: 1}}
                    onClick={() => {handleSubmit}}
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
                    </Button>
                     <ModalFormPkg open={open} onOpenChange={handleClickOpen} onCloseChange={handleClose} onAddPackage={handleAddPackage} />
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
                                        <Tooltip title="Delete Order" arrow>
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
                                        </Tooltip>
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
        </>
    );
}