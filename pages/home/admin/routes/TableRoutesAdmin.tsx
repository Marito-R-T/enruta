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
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { RouteObj } from '@/models/RouteObj';
import { deleteRoute, getListRoute } from '../../../../services/RouteServices/api';
import Label from '@/components/Label';


  const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

  const getStatusLabel = (routeStatus: boolean): JSX.Element => {
    
    const map = {
      Inactive: {
        text: 'INACTIVO',
        color: 'secondary'
      },
      Active: {
        text: 'ACTIVO',
        color: 'success'
      },
    };
    
    const { text, color }: any = map[routeStatus? 'Active': 'Inactive'];
  
    return <Label color={color}>{text}</Label>;
  };

function TableRoutesAdmin() {
    const theme = useTheme();
    const [listRoutes, setListRoutes] = useState<RouteObj[]>([]);
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const [search, setSearch] = useState<string>(undefined);


    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      console.log(event.target.value);
      
  }

  const handlePageChange = (_event: any, newPage: number): void => {
      setPage(newPage);
      getSearchRoute(search, page, limit);
    };
  
  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setLimit(parseInt(event.target.value));
      getSearchRoute(search, 1, limit);
  };

  const handleSubmitSearch = async () => {
      await getSearchRoute(search, 1, limit);
  }

  const handleDeleteRoute = async (idRoute) => {
      try {
          const response = await deleteRoute(idRoute);
          console.log(response);
          await getSearchRoute(search, page, limit);
      } catch (error) {  
          console.error(error);
          
      }
  }

  const getSearchRoute = async (pattern: string, page: number, size: number) => {
      try {
          const response = await getListRoute(pattern, page, size);
          setListRoutes(response);
          
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
            <Box>
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
                            <TableCell>ID RUTA</TableCell>
                            <TableCell>NOMBRE</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        listRoutes.map((item) => {
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
                                  {item.name}
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
                                  {item.description}
                                  </Typography>
                              </TableCell>
                              <TableCell align="right">
                                  {getStatusLabel(item.state? item.state : false)}
                              </TableCell>
                              <TableCell align="right">
                                  <Tooltip title="Delete Order" arrow>
                                  <IconButton
                                    onClick={() => handleDeleteRoute(1)}
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
                        })
                      }
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
        </Card>
        
    );
}


export default TableRoutesAdmin;