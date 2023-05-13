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



const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

export default function SearchPCRoute() {
    const theme = useTheme();


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
                                <TableRow>
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
                                    (1541 , 55464)
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
                              </TableBody>
                            </Table>
                          </TableContainer>
                      </Box>
                    </Grid>
    );
}