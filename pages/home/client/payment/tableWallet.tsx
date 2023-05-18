import { Box, Button, Card, CardHeader, Divider, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, styled, useTheme } from "@mui/material";
import React, { useState } from "react";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { CardClient } from "@/models/CardClient";


const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
        background-color: ${theme.colors.alpha.white[100]};
        padding-right: ${theme.spacing(0.7)}
    `
);

export default function TableWallet() {
    const theme = useTheme();
    const [listCards, setListCards] = useState<CardClient[]>([]);

    const handleDeleteCard = (itemIndex: number) => {
        // const updatedItems = listPackagesOrder.filter((item, index) => index !== itemIndex);
        const updatedItems = [...listCards.slice(0, itemIndex), ...listCards.slice(itemIndex + 1)];
        setListCards(updatedItems);
    }

    return (
        <>
            <Card>
                <CardHeader
                title="Tarjetas"
                action= {
                    <Box width={150}>
                        
                    </Box>
                }   
                />
            </Card>
            <Divider />
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="text"
                placeholder="Search terms here..."
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="contained" size="small">
                      Search
                    </Button>
                  </InputAdornment>
                }
                startAdornment={
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Codigo Tarjeta</TableCell>
                            <TableCell>Fecha de Vencimiento</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { listCards.map( (cardItem, index)=>{
                        return(
                            <TableRow
                            hover
                            key={cardItem.code}
                            >
                                <TableCell >
                                    <Typography
                                    variant="body1"
                                    fontWeight="bold"
                                    color="text.primary"
                                    gutterBottom
                                    noWrap
                                    >
                                    {cardItem.code}
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography
                                    variant="body1"
                                    fontWeight="bold"
                                    color="text.primary"
                                    gutterBottom
                                    noWrap
                                    >
                                    {cardItem.dueDate.toLocaleString()}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    {/* <ModalEditPkg item={packageItem}/> */}
                                    <Tooltip title="Delete Order" arrow>
                                    <IconButton
                                        onClick={() => handleDeleteCard(index)}
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
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}