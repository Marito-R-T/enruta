import { Box, 
    Button, 
    CardHeader, 
    Divider, 
    FormControl, 
    Grid, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField
} from "@mui/material";
import React, { useState } from "react";


export default function FormClientPkg() {
    const [formData, setFormData] = useState({
        name: '',
        nit: '',
        address: '',
      });
    const [errors, setErrors] = useState({
        name: false,
        nit: false,
        address: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
        // Validar el campo después de cada cambio y establecer el estado de error
        setErrors({ ...errors, [name]: !value });
      };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Realizar validaciones adicionales y enviar el formulario si no hay errores
        if (formData.name && formData.nit && formData.address) {
          try {
            // const response = await postLogin({});
          } catch (error) {
            console.error(error);
            
          }
          console.log('Formulario enviado');
          // Reiniciar el estado y los campos del formulario
          setFormData({ name: '', nit: '', address: '' });
          setErrors({ name: false, nit: false, address: false });
        }
      };
    return(
        <>
            <CardHeader
            title="Datos del Cliente"
            action= {
                <Box width={150}>
                    <Button
                    //  onClick={handleClickOpen}
                     size="small"
                    //  variant="contained"
                     color="primary"
                     >
                        Finalizar Orden
                     </Button>
                </Box>
            }   
            />
            <Divider />
            <Box component="form" onSubmit={handleSubmit} sx={{ pl: 1, pr: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nit"
                            label="NIT"
                            name="nit"
                            autoFocus
                            type='text'
                            value={formData.nit}
                            onChange={handleChange}
                            error={errors.nit}
                            helperText={errors.nit ? 'Campo requerido' : ''}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <TextField
                            margin="normal"
                            // required
                            fullWidth
                            id="name"
                            label="Nombre"
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
                            disabled
                            // required
                            fullWidth
                            id="address"
                            label="Direccion del Cliente"
                            name="address"
                            autoFocus
                            type='text'
                            value={formData.address}
                            onChange={handleChange}
                            error={errors.address}
                            helperText={errors.address ? 'Campo requerido' : ''}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}