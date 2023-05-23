import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, 
    Grid, 
    TextField, 
    Button, 
    InputAdornment, 
    IconButton, 
    FormControl, 
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";


export default function FormClientOp() {
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
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Validar el campo después de cada cambio y establecer el estado de error
        setErrors({ ...errors, [name]: !value });
        // setPhoneNumberError(!validatePhoneNumber());
      };
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        
        // Realizar validaciones adicionales y enviar el formulario si no hay errores
        if (formData.email && formData.nit && formData.fullname && formData.numberPhone && formData.username && formData.age && formData.password) {
          try {
            // const response = await postLogin({});
          } catch (error) {
            console.error(error);
            
          }
          console.log('Formulario enviado');
          // Reiniciar el estado y los campos del formulario
          setFormData({ email: '', nit: '', fullname: '', username: '', numberPhone: '', age: null, address: '', password: '' });
          setErrors({ email: false, nit: false, fullname: false, username: false, numberPhone: false, age: false, address: false, password: false });
        }
      };

    return(
        <Box component="form" onSubmit={handleSubmit} sx={{ px: 1, pb: 1 }}>
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
                        label="Address"
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
                        Registrar Cliente
                        </Button>
                    </Box>
                    </Grid>
            </Grid>
        </Box>
    );
}