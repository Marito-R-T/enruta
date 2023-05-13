import { Box, 
    Button, 
    FormControl, 
    Grid, IconButton, InputAdornment, 
    OutlinedInput, Table, TableBody, 
    TableCell, TableContainer, 
    TableHead, TablePagination, TableRow, 
    Tooltip, Typography, 
    styled, useTheme } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import { Role, User, UserRoleStatus, listUserExp } from '@/models/User';
import Label from '@/components/Label';

const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
);

interface Filters {
    status?: UserRoleStatus;
  }

const getStatusLabel = (userRoleStatus: Role): JSX.Element => {
    console.log('asdfasd',userRoleStatus);
    
    const map = {
      Admin: {
        text: 'Administrador',
        color: 'secondary'
      },
      Operador: {
        text: 'Operador',
        color: 'success'
      },
      Cliente: {
        text: 'Cliente',
        color: 'warning'
      }
    };
    
    const { text, color }: any = map[userRoleStatus.name];
  
    return <Label color={color}>{text}</Label>;
  };

let listUser: Array<User> = [];

function TableUser () {

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

    const handlePageChange = (_event: any, newPage: number): void => {
        setPage(newPage);
      };
    
    const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLimit(parseInt(event.target.value));
    };
    
    const theme = useTheme();
    listUser = listUserExp;
    console.log(listUser);
    
    return (
        <Grid item xs={12} md={12}>
            <Box>
            <FormControl variant="outlined" fullWidth>
                <OutlinedInputWrapper
                type="text"
                placeholder="Username Usuario..."
                endAdornment={
                    <InputAdornment position="end">
                    <Button variant="contained" size="small">
                        Buscar Usuario
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
                        <TableCell>Usuario ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Nombre Completo</TableCell>
                        <TableCell align="right">Rol</TableCell>
                        <TableCell align="right">Accion</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {listUser.map((item) => {
                        return(
                            <TableRow
                                hover
                                key={item.id}
                                >
                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                    {item.id}
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
                                    {item.username}
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
                                    {item.fullname}
                                    </Typography>
                                </TableCell>




                                <TableCell align="right">
                                    {getStatusLabel(item.role)}
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
                            
                        );
                    })}
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
            </Box>
        </Grid>
    );
}

export default TableUser;