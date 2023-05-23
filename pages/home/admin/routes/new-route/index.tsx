import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
    Typography,
  Grid,
  Divider,
  Container,
  Card,
  Box,
  Button,
  CardHeader
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import RoutePath from './routepath';
import FormDataRoute from './formDataRute';
import SearchPCRoute from './searchPCRoute';
import { Checkpoint } from '@/models/Checkpoint';
import { postRoute } from '../../../../../services/RouteServices/api';




function NewRoute() {
  const [dataFromChild, setDataFromChild] = useState({
    name: '',
    description: ''
  });

  const [dataErrors, setDataErrors] = useState({
    name: false,
    description: false
  })
  //los que se agregaron a la lista de la ruta
  const [checkpointsRoute, setCheckpointsRoute] = useState<Checkpoint[]>([]);

  
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

  const handleChildData = (data) => {
    setDataFromChild(data);
  };

  const handleChildError = (data) => {
    setDataErrors(data);
  };

  const sendData = async () => {
    if ((dataFromChild.name != '' || dataFromChild.name != undefined || dataFromChild.description!= '' || dataFromChild.description != undefined) && checkpointsRoute.length>0) {
      const dataRoute = {
        id: 0,
        name: dataFromChild.name,
        description: dataFromChild.description,
        packagesOnRoute: 0,
        isActive: true,
        isDeleted: true,
        checkpoints: checkpointsRoute
      }
      const response = await postRoute(dataRoute);
      console.log(response);
      setCheckpointsRoute([]);
      setDataFromChild({
        name: '',
        description: ''
      });
      setDataErrors({
        name: false,
        description: false
      });

      try {
        
      } catch (error) {
        console.error(error);
      }
    }
    
  }


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
                        <Button
                        onClick={sendData}
                        >
                          Crear ruta
                        </Button>
                      </Box>
                    }   
                  />
                  <Divider />
                  <FormDataRoute onData={handleChildData} onErrors={handleChildError} />
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