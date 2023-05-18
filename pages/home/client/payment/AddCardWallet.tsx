import { 
    Box, 
    Card, 
    CardHeader, 
    Divider, 
    Grid, 
    TextField, 
    Button 
} from "@mui/material";
import React, { useState } from "react";


export default function AddCardWallet() {

    const [formData, setFormData] = useState({
        code: '',
        name: '',
        dueDate: null,
    });
    const [errors, setErrors] = useState({
        code: false,
        name: false,
        dueDate: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(e.target);
        
        setFormData({ ...formData, [name]: value });
        console.log(formData);
        // Validar el campo después de cada cambio y establecer el estado de error
        setErrors({ ...errors, [name]: !value });
        // setPhoneNumberError(!validatePhoneNumber());
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Realizar validaciones adicionales y enviar el formulario si no hay errores
        if (formData.code && formData.dueDate) {
          try {
            // const response = await postLogin({});
          } catch (error) {
            console.error(error);
            
          }
          console.log('Formulario enviado');
          // Reiniciar el estado y los campos del formulario
          setFormData({ code: '', name: '', dueDate: null });
          setErrors({ code: false, name: false, dueDate: false });
        }
      };

    return (
        <>
            <Card>
                {/* <CardHeader
                title="Recent Orders"
                action= {
                    <Box width={150}>
                        
                    </Box>
                }   
                /> */}
            </Card>
            <Divider />
            <Box component="form" onSubmit={handleSubmit}>
                <Grid 
                container 
                spacing={1} 
                justifyContent="center" 
                alignContent={'center'} 
                alignItems={'center'} 
                textAlign={'center'}
                paddingX={2}
                >
                    <Grid item xs={12} md={12}>
                        <Box>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="code"
                            label="# Tarjeta"
                            name="code"
                            autoFocus
                            type='text'
                            value={formData.code}
                            onChange={handleChange}
                            error={errors.code}
                            helperText={errors.code ? 'Campo requerido' : ''}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box>
                            <TextField
                            margin="normal"
                            // required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoFocus
                            type='text'
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            helperText={errors.name ? 'Campo requerido' : ''}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Box>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="dueDate"
                            // label="Name"
                            name="dueDate"
                            autoFocus
                            type='date'
                            value={formData.dueDate}
                            onChange={handleChange}
                            error={errors.dueDate}
                            helperText={errors.dueDate ? 'Campo requerido' : ''}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} >
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
                        sx={{ mt: 3, mb: 2 }}
                        >
                            Agregar Tarjeta
                        </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    </>
    );
}