
import {Avatar, Box, Button, Container, Grid, TextField, ThemeProvider, Typography, useTheme} from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function SignIn() {
    const theme = useTheme();
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //   });
    // };
  
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
            <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={false}
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
                error={false}
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
