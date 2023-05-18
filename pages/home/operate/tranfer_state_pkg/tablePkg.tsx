import React from 'react';
import { FC, ChangeEvent, useState } from 'react';
import { format } from 'date-fns';

import PropTypes from 'prop-types';
import {
    Tooltip,
    Divider,
    Box,
    FormControl,
    InputLabel,
    Card,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Select,
    MenuItem,
    Typography,
    useTheme,
    CardHeader,
    styled,
    OutlinedInput,
    InputAdornment,
    Button
  } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Checkpoint } from '@/models/Checkpoint';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Package, listPackExp } from '@/models/Package';

  interface Filters {
    status?: Checkpoint;
  }

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];


  const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

function TablePkgOp() {
    const theme = useTheme();

    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const [filters, setFilters] = useState<Filters>({
        status: null
    });

    let listPackages: Array<Package> = [];
    listPackages = listPackExp;

    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
        let value = null;
    
        if (e.target.value !== 'all') {
          value = e.target.value;
        }
    
        setFilters((prevFilters) => ({
          ...prevFilters,
          status: value
        }));
    };

    return (
        <Card>
            <CardHeader>
                <Box width={150}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Status</InputLabel>
                        <Select
                        value={filters.status || 'all'}
                        onChange={handleStatusChange}
                        label="Status"
                        autoWidth
                        >
                        {statusOptions.map((statusOption) => (
                            <MenuItem key={statusOption.id} value={statusOption.id}>
                            {statusOption.name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Box>
            </CardHeader>
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
                            <TableCell>Orden ID</TableCell>
                            <TableCell>Paquete ID</TableCell>
                            <TableCell>Peso</TableCell>
                            <TableCell>Fecha Ingeso</TableCell>
                            <TableCell>Fecha Entrega</TableCell>
                            {/* <TableCell align="right">Tarifa</TableCell> */}
                            <TableCell align="right">Ubicacion</TableCell>
                            <TableCell align="right">Ruta</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listPackages.map((pkgItem) => {
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
                                        {/* <TableCell align="right"> */}
                                            {/* {getStatusLabel(cryptoOrder.status)} */}
                                            {/* Completed
                                        </TableCell> */}
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
                                                type="submit"
                                                size="small"
                                                variant="contained"
                                                color='success'
                                                >
                                                    Trasladar
                                                </Button>
                                            </Tooltip>
                                            {/* <Tooltip title="Edit Order" arrow>
                                            <IconButton
                                                sx={{
                                                '&:hover': {
                                                    background: theme.colors.primary.lighter
                                                },
                                                color: theme.palette.primary.main
                                                }}
                                                color="inherit"
                                                size="small"
                                            >
                                                <EditTwoToneIcon fontSize="small" />
                                            </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete Order" arrow>
                                            <IconButton
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
                                </>
                            );
                        }) }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
        
    );
}


export default TablePkgOp;