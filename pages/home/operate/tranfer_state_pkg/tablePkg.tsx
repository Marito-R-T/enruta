import React from 'react';
import { ChangeEvent, useState } from 'react';
import {
    Tooltip,
    Divider,
    Box,
    FormControl,
    Card,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Typography,
    useTheme,
    CardHeader,
    styled,
    OutlinedInput,
    InputAdornment,
    Button
  } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { postPackage } from '../../../../services/PackageServices/api';
import { getPackageInformation } from '../../../../services/CheckpointServices/api';
import { PackageInformation } from '@/models/Checkpoint';


  const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

function TablePkgOp() {
    const theme = useTheme();
    const [listPackages, setListPackages] = useState<PackageInformation[]>([]);
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
            const response = await getPackageInformation(pattern, page, size);
            setListPackages(response);
            
        } catch (error) {  
            console.error(error);
            
        }
    }

    const traslatePackage = async (idPackage, idCheckpoint) => {
        try {
            const data = {
                idPackage: idPackage,
                idCheckpoint: idCheckpoint
            }
            await postPackage(data);
            await getSearchPackage(search, 1, limit);;
            
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
                            <TableCell>Paquete ID</TableCell>
                            <TableCell>Fecha Llegada</TableCell>
                            <TableCell>Ubicacion</TableCell>
                            <TableCell align="right">ID Punto Control</TableCell>
                            <TableCell align="right">Nombre Punto Control</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listPackages.map((pkgItem) => {
                            return(
                                <>
                                    <TableRow
                                    hover
                                    key={pkgItem.idPackage}
                                    >
                                        <TableCell>
                                            <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                            color="text.primary"
                                            gutterBottom
                                            noWrap
                                            >
                                            {pkgItem.idPackage}
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
                                            {pkgItem.arrivalDate.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                            variant="body2"
                                            fontWeight="bold"
                                            color="text.secondary"
                                            gutterBottom
                                            noWrap
                                            >
                                            {pkgItem.latitude+', '+pkgItem.length}
                                            </Typography>
                                            {/* <Typography variant="body2" color="text.secondary" noWrap>
                                            lbs
                                            </Typography> */}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                            color="text.primary"
                                            gutterBottom
                                            noWrap
                                            >
                                            {pkgItem.idCheckpoint}
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
                                            {pkgItem.checkpointName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" noWrap>
                                            {/* {numeral(50).format(
                                                `${54}0,0.00`
                                            )} */}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Tooltip title="Info Paquete" arrow>
                                                <IconButton
                                                    sx={{
                                                    '&:hover': {
                                                        background: theme.colors.primary.lighter
                                                    },
                                                    color: theme.palette.warning.main
                                                    }}
                                                    color="inherit"
                                                    size="small"
                                                >
                                                    <InfoRoundedIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Trasladar al Siguiente Punto de Control" arrow>
                                                <Button
                                                onClick={() => traslatePackage(pkgItem.idPackage, pkgItem.idCheckpoint)}
                                                type="submit"
                                                size="small"
                                                variant="contained"
                                                color='success'
                                                >
                                                    Trasladar
                                                </Button>
                                            </Tooltip>
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


export default TablePkgOp;