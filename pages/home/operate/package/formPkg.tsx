import React from "react";
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, useState } from 'react';
import PageHeader from '@/content/Home/PageHeader';
import Footer from '@/components/Footer';
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
  CardHeader,
  FormControl,
  MenuItem,
  Button,
  TextField
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';



export default function FormPkgOp() {
    const [formData, setFormData] = useState({
        weight: 0.00,
        priority: false,
        incomeDate: ''
      });
      const [errors, setErrors] = useState({
        name: false,
        checkpointType: false,
        latitude: false,
        length: false,
        feeType: false,
        amount: false
      });
    return (
        <Card>
            <CardHeader>
                <Box width={150}>
                    
                </Box>
            </CardHeader>
            <Divider />
            <Grid>
                {/* <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        type='text'
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.username} // Aplicar la clase de error al TextField si el estado de error es verdadero
                        helperText={errors.username ? 'Campo requerido' : ''}
                        inputProps= {{
                        "data-testid": "email"
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        
                    >
                        Crear Usuario
                    </Button>
                </Box> */}
            </Grid>
        </Card>
  );
}
