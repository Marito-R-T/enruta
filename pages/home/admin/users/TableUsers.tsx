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
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import { Role, User } from '@/models/User';
import Label from '@/components/Label';
import ModalEditRole from './ModalEditRole';
import { deleteUsersId, getListUsersId } from '../../../../services/AuthenticationServices/api';

const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
);

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

function TableUser () {
    const theme = useTheme();
    const [listUser, setListUser] = useState<User[]>([]);
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const [search, setSearch] = useState<string>(undefined);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        console.log(event.target.value);
        
    }

    const handlePageChange = (_event: any, newPage: number): void => {
        setPage(newPage);
        getSearchUser(search, page, limit);
      };
    
    const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLimit(parseInt(event.target.value));
        getSearchUser(search, 1, limit);
    };

    const handleSubmitSearch = async () => {
        await getSearchUser(search, 1, limit);
    }

    const handleDeleteUser = async (idUser) => {
        try {
            const response = await deleteUsersId(idUser);
            console.log(response);
            await getSearchUser(search, page, limit);
        } catch (error) {  
            console.error(error);
            
        }
    }

    const getSearchUser = async (pattern: string, page: number, size: number) => {
        try {
            const response = await getListUsersId(pattern, page, size);
            setListUser(response);
            
        } catch (error) {  
            console.error(error);
            
        }
    }
    
    
    // listUser = listUserExp;
    
    return (
        <Grid item xs={12} md={12}>
            <Box>
            <FormControl variant="outlined" fullWidth>
                <OutlinedInputWrapper
                type="text"
                placeholder="Username Usuario..."
                onChange={onChangeSearch}
                
                value={search}
                endAdornment={
                    <InputAdornment position="end">
                    <Button variant="contained" size="small"
                    onClick={handleSubmitSearch}
                    >
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
                                    <ModalEditRole idUser={item.id}/>
                                    <Tooltip title="Delete Order" arrow>
                                    <IconButton
                                        onClick={() => handleDeleteUser(item.id)}
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