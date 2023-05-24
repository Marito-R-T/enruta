import PageTitleWrapper from "@/components/PageTitleWrapper";
import Head from "next/head";
import {
    Typography,
  Grid,
  Container,
  Box,
  styled,
  Tooltip,
  IconButton,
  CardHeader
} from '@mui/material';
import React, { useState } from "react";
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';  import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import GpsNotFixedRoundedIcon from '@mui/icons-material/GpsNotFixedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { Checkpoint } from "@/models/Checkpoint";
import { Package } from "@/models/Package";




export default function PackageClient() {
    const router = useRouter();
    const [dataCheckRoute, setDataCheckRoute] = useState<Checkpoint[]>([]);
    const [dataPackage, setDataPackage] = useState<Package>({
        id: 1,
        weight: 5,
        prioritized: false,
        incomeDate: new Date('2023-01-25'),
        deliveryDate: new Date('2023-02-8'),
        deliveryAddress: 'Mexico Distrito Federal, Mexico, Mexico',
        fee: null,
        routeId: null
    });
    const idPackage = router.query.idPackage as string;
    
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
            <PageTitleWrapper>
                <Box
                    display="flex"
                    alignItems={{ xs: 'stretch', md: 'center' }}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    >
                    <Box display="flex" alignItems="center">
                        <Box>
                        <Typography variant="h3" component="h3" gutterBottom>
                            Paquete: # {idPackage}
                        </Typography>
                        <Typography variant="subtitle2">
                            {/* Manage your day to day packages! Enjoy this International Experience. */}
                        </Typography>
                        </Box>
                    </Box>
                </Box>
            </PageTitleWrapper>
            <Container maxWidth="md">
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
                
                >
                    <Grid item xs={12} md={6}>
                      <Box>
                        {/* Aqui la data del paquete */}
                        <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        marginBottom={1}
                        // gutterBottom
                        // noWrap
                        >
                            Peso: {dataPackage.weight}
                        </Typography>
                        <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        marginBottom={1}
                        // gutterBottom
                        // noWrap
                        >
                            Prioridad: {dataPackage.prioritized? "SI": "NO"}
                        </Typography>
                        <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        marginBottom={1}
                        // gutterBottom
                        // noWrap
                        >
                            Fecha de Ingreso: {dataPackage.incomeDate.toLocaleString()}
                        </Typography>
                        <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        marginBottom={1}
                        // gutterBottom
                        // noWrap
                        >
                            Fecha de Entrega: {dataPackage.deliveryDate.toLocaleString()}
                        </Typography>
                        <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        marginBottom={1}
                        // gutterBottom
                        // noWrap
                        >
                            Direccion de Envio: {dataPackage.deliveryAddress}
                        </Typography>
                        <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        marginBottom={1}
                        // gutterBottom
                        // noWrap
                        >
                            Tarifa: {dataPackage.fee? dataPackage.fee.amount : 0.00}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <CardHeader
                        sx={{
                        px: 0,
                        pt: 0
                        }}
                        
                        action={
                            <Tooltip arrow title="Refresh list">
                                <IconButton size="small" color="primary">
                                <RefreshTwoToneIcon />
                                </IconButton>
                            </Tooltip>
                        }
                        title="Ruta del Paquete"
                        />
                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 1,
                                },
                            }}
                            >
                        { dataCheckRoute.map((itemCP) =>{
                            return(
                            <>
                            <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: '0 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    >
                                    9:30 am
                                    </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <RadioButtonCheckedRoundedIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Typography
                                    variant="h4"
                                    sx={{
                                    pb: 2
                                    }}
                                >
                                    "{itemCP.name}"
                                </Typography>
                                </TimelineContent >
                            </TimelineItem>
                            </>
                            )
                        }) }
                    <TimelineItem>
                        <TimelineOppositeContent
                                    sx={{ m: '0 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    >
                                    9:30 am
                                    </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="primary">
                            <GpsNotFixedRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography
                            variant="h4"
                            sx={{
                            pb: 2
                            }}
                        >
                            "Project Management"
                        </Typography>
                        
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                                    sx={{ m: '0 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                    >
                                    9:30 am
                                    </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="primary">
                            <RadioButtonUncheckedRoundedIcon />
                        </TimelineDot>
                        {/* <TimelineConnector /> */}
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography
                            variant="h4"
                            sx={{
                            pb: 2
                            }}
                        >
                            "Business & Marketing"
                        </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    </Timeline>
                      </Box>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Card>
                            
                        </Card>
                    </Grid> */}
                </Grid>
            </Container>
            <Footer />
        </>
    );
}