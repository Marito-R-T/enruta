import {Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Input, TextField, ThemeProvider, Typography, createTheme, styled, useTheme} from '@mui/material';
import Link from 'next/link';

export default function SignIn() {
    const theme = useTheme();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
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
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Box>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant='filled'
                    
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nit"
                    label="NIT"
                    name="text"
                    autoComplete="nit"
                    variant='filled'
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
                    name="name"
                    label="Full Name"
                    type="text"
                    id="name"
                    variant='standard'
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
                    name="text"
                    variant='outlined'
                  />
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    label="Phone"
                    type="tel"
                    id="name"
                    variant='outlined'
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
                    variant='filled'
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
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant='filled'
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