import { FC, ChangeEvent, useState } from 'react';
import React from 'react';
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
    CardHeader
  } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Checkpoint } from '@/models/Checkpoint';

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

  const applyPagination = (
    controlPoints: Checkpoint[],
    page: number,
    limit: number
  ): Checkpoint[] => {
    return controlPoints.slice(page * limit, page * limit + limit);
  };

  

function TableExample() {
    const theme = useTheme();

    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const [filters, setFilters] = useState<Filters>({
        status: null
    });

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

    // const handleSelectAllCryptoOrders = (
    //     event: ChangeEvent<HTMLInputElement>
    //   ): void => {
    //     setSelectedCryptoOrders(
    //       event.target.checked
    //         ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
    //         : []
    //     );
    //   };
    
    //   const handleSelectOneCryptoOrder = (
    //     _event: ChangeEvent<HTMLInputElement>,
    //     cryptoOrderId: string
    //   ): void => {
    //     if (!selectedCryptoOrders.includes(cryptoOrderId)) {
    //       setSelectedCryptoOrders((prevSelected) => [
    //         ...prevSelected,
    //         cryptoOrderId
    //       ]);
    //     } else {
    //       setSelectedCryptoOrders((prevSelected) =>
    //         prevSelected.filter((id) => id !== cryptoOrderId)
    //       );
    //     }
    //   };
    
      const handlePageChange = (_event: any, newPage: number): void => {
        setPage(newPage);
      };
    
      const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLimit(parseInt(event.target.value));
      };

    return (
        <Card>
            <CardHeader
            title="Recent Orders"
            action= {
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
            }   
            />
            <Divider />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                color="primary"
                                // checked={selectedAllCryptoOrders}
                                // indeterminate={selectedSomeCryptoOrders}
                                // onChange={handleSelectAllCryptoOrders}
                                />
                            </TableCell>
                            <TableCell>Order Details</TableCell>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                color="primary"
                                value={false}
                                />
                            </TableCell>
                            <TableCell>
                                <Typography
                                variant="body1"
                                fontWeight="bold"
                                color="text.primary"
                                gutterBottom
                                noWrap
                                >
                                 Ors
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
                                1
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
                                Name
                                </Typography>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                fas
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
                                31323132
                                </Typography>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                {/* {numeral(50).format(
                                    `${54}0,0.00`
                                )} */}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                {/* {getStatusLabel(cryptoOrder.status)} */}
                                Completed
                            </TableCell>
                            <TableCell align="right">
                                <Tooltip title="Edit Order" arrow>
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
                                </Tooltip>
                            </TableCell>
                        </TableRow>
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


export default TableExample;