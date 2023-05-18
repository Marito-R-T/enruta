import React from 'react';
import { ChangeEvent, useState } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
    Typography,
  Grid,
  Tab,
  Tabs,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
  styled,
  Button,
  TextField,
  CardHeader,
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
  Tooltip
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import { PathRoute, Edge, RouteObj, listRouteExp } from '@/models/RouteObj';
import { Checkpoint, listCheckpointExample } from '@/models/Checkpoint';



const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

  

export default function SearchPCRoute( {onDataAddChange}) {
    const theme = useTheme();
    //para la consulta de busqueda
    const [checkpoints, setCheckpoints] = useState<Checkpoint[]>([]);
    //los que se agregaron a la lista de la ruta
    const [checkpointsRoute, setCheckpointsRoute] = useState<Checkpoint[]>([]);
    const [edgesRoute, setEdgesRoute] = useState<Edge[]>([]);
    const [pathsRoute, setPathsRoute] = useState<PathRoute[]>([]);


    let listRoutes: Array<RouteObj> = [];
    listRoutes = listRouteExp;

    let listCheckpoint: Array<Checkpoint> = [];
    listCheckpoint = listCheckpointExample;

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
      // const newData = event.target.value;
      // console.log(data);
      
      onDataAddChange(data);
    };


    return(
        <Grid item xs={12} md={6}>
                      <Box>
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
                                { listCheckpoint.map( (checkpointItem) => {
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
                      </Box>
                    </Grid>
    );
}