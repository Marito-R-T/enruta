import React from 'react';
import { ChangeEvent, useState } from 'react';
import Head from 'next/head';
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


export default function FormDataRoute() {
    return(
        <Grid item xs={12} 
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={3}
                  paddingBottom={3}
                  paddingX={1}
                  >
                    <Grid item xs={12} md={6}>
                      <Box>
                      <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Nombre"
                            type="text"
                            id="name"
                            error={false}
                            inputProps= {{
                              "aria-label": "name",
                              "data-testid": "name"
                            }}
                        /> 
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                      <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            type="text"
                            id="description"
                            error={false}
                            inputProps= {{
                              "aria-label": "description",
                              "data-testid": "description"
                            }}
                        />  
                      </Box>
                    </Grid>
                </Grid>
    );
}