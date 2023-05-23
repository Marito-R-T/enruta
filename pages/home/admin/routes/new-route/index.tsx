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
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';;
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import RoutePath from './routepath';
import FormDataRoute from './formDataRute';
import SearchPCRoute from './searchPCRoute';
import { Checkpoint } from '@/models/Checkpoint';
import { Edge, PathRoute } from '@/models/RouteObj';




function NewRoute() {
  const theme = useTheme();
  //para la consulta de busqueda
  const [checkpoints, setCheckpoints] = useState<Checkpoint[]>([]);
  //los que se agregaron a la lista de la ruta
  const [checkpointsRoute, setCheckpointsRoute] = useState<Checkpoint[]>([]);
  const [edgesRoute, setEdgesRoute] = useState<Edge[]>([]);
  const [pathsRoute, setPathsRoute] = useState<PathRoute[]>([]);

  
  //Agrega data al array del use estate
  const handleClickAddCheckpoint = (checkData: Checkpoint) => {
    setCheckpointsRoute( (prevDataList) => [...prevDataList, checkData]);
    // console.log(checkpointsRoute);
    
  };

  //Un delete para un item del array del useState
  const handleDeleteItem = (itemId: number) => {
    const updatedItems = checkpointsRoute.filter((item) => item.id !== itemId);
    setCheckpointsRoute(updatedItems);
  };


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageTitleWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Nueva Ruta
            </Typography>
            {/* <Typography variant="subtitle2">
              yEFER, these are your recent transactions
            </Typography> */}
          </Grid>
          <Grid item>
            {/* <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              // startIcon={<AddRoundedIcon fontSize="small" />}
            >
              Crear Nueva Ruta
            </Button> */}
          </Grid>
        </Grid>
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
                <Grid item xs={12} md={12} >
                  <CardHeader
                    title="Creacion de Ruta"
                    action= {
                      <Box width={150}>
                        <Button>
                          Crear ruta
                        </Button>
                      </Box>
                    }   
                  />
                  <Divider />
                  <FormDataRoute/>
                </Grid>
                
                <Divider />
                <Grid item xs={12} 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={3}
                  paddingTop={3}
                  paddingX={1}
                >
                    <SearchPCRoute onDataAddChange={handleClickAddCheckpoint} />
                    <Grid item xs={12} md={6}>
                      <Box>
                        <RoutePath dataCheckRoute={checkpointsRoute} onDataDeleteChange={handleDeleteItem}/>
                      </Box>
                    </Grid>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box>
                          
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box>

                  </Box>
                </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

NewRoute.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

  export default NewRoute;