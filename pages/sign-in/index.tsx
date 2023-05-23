
import {Avatar, Box, Button, Container, Grid, TextField, ThemeProvider, Typography, useTheme} from '@mui/material';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { postAuthenticate } from '../../services/AuthenticationServices/api';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setIsAuthenticated } from '../../auth/authReducer';
import { RootState } from '../../auth/Store';

export default function SignIn() {
    const router = useRouter();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const theme = useTheme();
    const [formData, setFormData] = useState({
      username: 'ADMIN',
      password: 'admin',
    });
    const [errors, setErrors] = useState({
      username: false,
      password: false,
    });
    // getApi();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      // Validar el campo después de cada cambio y establecer el estado de error
      setErrors({ ...errors, [name]: !value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // const data = new FormData(event.currentTarget);
      // Realizar validaciones adicionales y enviar el formulario si no hay errores
      if (formData.username && formData.password) {
        try {
          console.log(formData);
          const response = await postAuthenticate(formData);
          
          console.log(response);
          handleAuthentication(response.token);
        } catch (error) {
          console.error(error);
          
        }
        console.log('Formulario enviado');
        // Reiniciar el estado y los campos del formulario
        setFormData({ username: '', password: '' });
        setErrors({ username: false, password: false });
      }
    };

    useEffect(() => {
      if (isAuthenticated) {
        router.push('/home');
      }
    }, [isAuthenticated, router]);

    const handleAuthentication = (token) => {
      // Realiza la autenticación y obtén el token
  
      dispatch(setToken(token));
      dispatch(setIsAuthenticated(true));
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1>ENRUTE INC.</h1>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* <Box component="form" noValidate sx={{ mt: 1 }}> */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                helperText={errors.password ? 'Campo requerido' : ''}
                inputProps= {{
                  "aria-label": "password",
                  "data-testid": "password"
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="/sign-up">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
