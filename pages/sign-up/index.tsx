import React, { useState } from 'react';
import {Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, IconButton, Input, InputAdornment, TextField, ThemeProvider, Typography, createTheme, styled, useTheme} from '@mui/material';
import Link from 'next/link';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { postRegisterClient } from '../../services/AuthenticationServices/api';

export default function SignIn() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
    email: '',
    nit: '',
    fullname: '',
    username: '',
    numberPhone: '',
    age: 1,
    address: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: false,
    nit: false,
    fullname: false,
    username: false,
    numberPhone: false,
    age: false,
    address: false,
    password: false
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const validatePhoneNumber = () => {
  //   const phoneRegex = /^\d{10}$/; // Expresión regular para 10 dígitos numéricos
  //   return phoneRegex.test(formData.age);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Validar el campo después de cada cambio y establecer el estado de error
    setErrors({ ...errors, [name]: !value });
    // setPhoneNumberError(!validatePhoneNumber());
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(formData);
    
    // Realizar validaciones adicionales y enviar el formulario si no hay errores
    if (formData.email && formData.nit && formData.fullname && formData.numberPhone && formData.username && formData.age && formData.password) {
      try {
        const response = await postRegisterClient(formData);
        console.log(response);
        
      } catch (error) {
        console.error('Error',error);
        
      }
      console.log('Formulario enviado');
      // Reiniciar el estado y los campos del formulario
      // setFormData({ email: '', nit: '', fullname: '', username: '', numberPhone: '', age: null, address: '', password: '' });
      setErrors({ email: false, nit: false, fullname: false, username: false, numberPhone: false, age: false, address: false, password: false });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Container component="main" maxWidth="xs"> */}
      <Container component="main" maxWidth="md">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>ENRUTE INC.</h1>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Box>
                <TextField
                  type='text'
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant='outlined'
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? 'Campo requerido' : ''}
                  inputProps= {{
                    "data-testid": "email"
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <TextField
                  type='text'
                  margin="normal"
                  required
                  fullWidth
                  id="nit"
                  label="NIT"
                  name="nit"
                  autoComplete="nit"
                  variant='outlined'
                  value={formData.nit}
                  onChange={handleChange}
                  error={errors.nit}
                  helperText={errors.nit ? 'Campo requerido' : ''}
                  inputProps= {{
                    "data-testid": "nit"
                  }}
                />
              </Box>
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="nit"
                  label="NIT"
                  name="text"
                  autoComplete="nit"
                  autoFocus
                />
              </Box>
            </Grid> */}

            

            <Grid item xs={12} md={12}>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="fullname"
                  label="Full Name"
                  type="text"
                  id="fullname"
                  variant='outlined'
                  value={formData.fullname}
                  onChange={handleChange}
                  error={errors.fullname}
                  helperText={errors.fullname ? 'Campo requerido' : ''}
                  inputProps= {{
                    "data-testid": "fullname"
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="address"
                  label="Addreass"
                  type="text"
                  id="address"
                  variant='outlined'
                  value={formData.address}
                  onChange={handleChange}
                  error={errors.address}
                  helperText={errors.address ? 'Campo requerido' : ''}
                  inputProps= {{
                    "data-testid": "address"
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
                  id="Username"
                  label="Username"
                  type='text'
                  name="username"
                  variant='outlined'
                  value={formData.username}
                  onChange={handleChange}
                  error={errors.username}
                  helperText={errors.username ? 'Campo requerido' : ''}
                  inputProps= {{
                    "data-testid": "username"
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
                  name="numberPhone"
                  label="Number Phone"
                  type="tel"
                  id="numberPhone"
                  variant='outlined'
                  value={formData.numberPhone}
                  onChange={handleChange}
                  error={errors.numberPhone}
                  helperText={errors.numberPhone ? 'Campo requerido' : ''}
                  inputProps= {{
                    "data-testid": "numberPhone"
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
                  name="age"
                  label="Age"
                  type="number"
                  InputProps={{ inputProps: { min: 1 } }}
                  id="age"
                  variant='outlined'
                  value={formData.age}
                  onChange={handleChange}
                  error={errors.age}
                  helperText={errors.age ? 'Campo requerido' : ''}
                  inputProps= {{
                    "data-testid": "age"
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
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  variant='outlined'
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  helperText={errors.password ? 'Campo requerido' : ''}
                  inputProps= {{
                      "data-testid": "password"
                  }}
                  InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} mt={1}>
              <Box 
              sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              }}
              > 
                <Button
                  type="submit"
                  size="medium"
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Grid>


            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Full Name"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              id="name"
              autoComplete="current-password"
            /> */}
            
            
            
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> */}
            <Grid container mt={1}>
              <Grid item >
                <Link href="/sign-in">
                  {"Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
    );
  }