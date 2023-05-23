import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import {
    Typography,
  Grid,
  Box,
  useTheme,
  styled,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  TablePagination
} from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import { Checkpoint } from '@/models/Checkpoint';
import { getCheckpointListActive } from '../../../../../services/CheckpointServices/api';



const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

  

export default function SearchPCRoute( {onDataAddChange}) {
    const theme = useTheme();
    //para la consulta de busqueda
    const [listCheckpoints, setListCheckpoints] = useState<Checkpoint[]>([]);
    //los que se agregaron a la lista de la ruta
    const [checkpointsRoute, setCheckpointsRoute] = useState<Checkpoint[]>([]);
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const [search, setSearch] = useState<string>(undefined);

    //Para editar un dato del objeto del array
    const handleEditItem = (itemId: number, newName: string) => {
      setCheckpointsRoute((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, name: newName } : item
        )
      );
    };

    //Busca el item para regresarlo
    const getItemById = (itemId: number) => {
      return checkpointsRoute.find((item) => item.id === itemId);
    };
  
    //Muestra la accion de obtener el item
    const handleGetItem = (itemId: number) => {
      const item = getItemById(itemId);
      if (item) {
        console.log(item);
      } else {
        console.log("Item not found");
      }
    };

    const handleChangeAdd = (data) => {
      onDataAddChange(data);
    };

  const handleSubmitSearch = async () => {
    await getSearchCP(search, 1, limit);
  }

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    
}

  const handlePageChange = (_event: any, newPage: number): void => {
      setPage(newPage);
      getSearchCP(search, page, limit);
    };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setLimit(parseInt(event.target.value));
      getSearchCP(search, 1, limit);
  };

  const getSearchCP = async (pattern: string, page: number, size: number) => {
    try {
        const response = await getCheckpointListActive(pattern, page, size);
        setListCheckpoints(response);
        
    } catch (error) {  
        console.error(error);
        
    }
}

    return(
        <Grid item xs={12} md={6}>
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
                      <TableCell>PC ID</TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.secondary"
                          gutterBottom
                          noWrap
                          >
                          Nombre
                          </Typography>
                          <Typography variant="body2" color="text.secondary" noWrap>
                          (Latitud, Longitud)
                        </Typography></TableCell>
                      <TableCell align="right">Tipo</TableCell>
                      <TableCell align="right">Accion</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { listCheckpoints.map( (checkpointItem) => {
                      return(
                        <TableRow
                        hover
                        key={checkpointItem.id}
                        >
                          <TableCell>
                            <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            >
                            {checkpointItem.id}
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
                            {checkpointItem.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                            ({checkpointItem.latitude} , {checkpointItem.length})
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
                            Bodega
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Tooltip title="Agregar Punto" arrow>
                              <IconButton
                                  onClickCapture={() =>handleChangeAdd(checkpointItem)}
                                  sx={{
                                  '&:hover': {
                                      background: theme.colors.primary.lighter
                                  },
                                  color: theme.palette.success.main
                                  }}
                                  color="inherit"
                                  size="small"
                              >
                                  <AddLocationRoundedIcon fontSize="small" />
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