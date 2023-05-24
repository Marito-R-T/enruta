import React from 'react';
import { ChangeEvent, useState } from 'react';
import {
    Divider,
    Box,
    FormControl,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Typography,
    CardHeader,
    styled,
    OutlinedInput,
    InputAdornment,
    Button
  } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Package } from '@/models/Package';
import { getPackageListDelivered } from '../../../../services/PackageServices/api';

  const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

function TableDeliveryOp() {
    const [listDelivered, setListDelivered] = useState<Package[]>([]);
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const [search, setSearch] = useState<string>(undefined);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      console.log(event.target.value);
      
    }

    const handlePageChange = (_event: any, newPage: number): void => {
        setPage(newPage);
        getSearchPackage(search, page, limit);
      };
    
    const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLimit(parseInt(event.target.value));
        getSearchPackage(search, 1, limit);
    };

    const handleSubmitSearch = async () => {
        await getSearchPackage(search, 1, limit);
    }

    const getSearchPackage = async (pattern: string, page: number, size: number) => {
      try {
          const response = await getPackageListDelivered(pattern, page, size);
          setListDelivered(response);
          
      } catch (error) {  
          console.error(error);
          
      }
  }

    return (
        <Card>
            <CardHeader>
                <Box width={150}>
                    
                </Box>
            </CardHeader>
            <Divider />
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="text"
                placeholder="Search terms here..."
                onChange={onChangeSearch}
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="contained" size="small"
                    onClick={handleSubmitSearch}
                    >
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
                            <TableCell>Orden ID</TableCell>
                            <TableCell>Paquete ID</TableCell>
                            <TableCell>Peso</TableCell>
                            <TableCell>Fecha Ingeso</TableCell>
                            <TableCell>Fecha Entrega</TableCell>
                            {/* <TableCell align="right">Tarifa</TableCell> */}
                            <TableCell align="right">Estado</TableCell>
                            {/* <TableCell align="right">Ruta</TableCell>
                            <TableCell align="right">Actions</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listDelivered.map((pkgItem) => {
                            return(
                                <>
                                    <TableRow
                                    hover
                                    key={pkgItem.id}
                                    >
                                        <TableCell>
                                            <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                            color="text.primary"
                                            gutterBottom
                                            noWrap
                                            >
                                            ?
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
                                            {pkgItem.id}
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
                                            {pkgItem.weight}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" noWrap>
                                            lbs
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
                                            {pkgItem.incomeDate.toLocaleString()}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" noWrap>
                                            {/* {numeral(50).format(
                                                `${54}0,0.00`
                                            )} */}
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
                                            {pkgItem.deliveryDate.toLocaleDateString()}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" noWrap>
                                            {/* {numeral(50).format(
                                                `${54}0,0.00`
                                            )} */}
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
                                            {}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" noWrap>
                                            {/* {numeral(50).format(
                                                `${54}0,0.00`
                                            )} */}
                                            </Typography>
                                        </TableCell>
                                        
                                    </TableRow>
                                </>
                            );
                        }) }
                        
                    </TableBody>
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
        </Card>
        
    );
}


export default TableDeliveryOp;