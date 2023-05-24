import { Box, 
    Button, 
    CardHeader, 
    Divider, 
    Grid, 
    TextField
} from "@mui/material";
import React, { useState } from "react";
import { postOrders } from "../../../../services/ClientServices/api";

export default function FormClientPkg( { onlistPackages, onSetListPackages } ) {
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
        setErrors({ ...errors, [name]: !value });
      };

    const handleChangeNit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: !value });
      };

    const handleSetListPack = () => {
        onSetListPackages([]);
    }

    const handleSubmit = async () => {
        console.log(onlistPackages);
        
        // Realizar validaciones adicionales y enviar el formulario si no hay errores
        if (formData.name && formData.nit && formData.address && onlistPackages.length>0) {
          try {
            const newOrder = {
                id: 0,
                creationDate: new Date(),
                total: 0,
                nit: formData.nit,
                address: formData.address,
                name: formData.name,
                packages: onlistPackages
            }
            const response = await postOrders(newOrder);
            console.log(response);
            handleSetListPack();
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
                    // disabled={onlistPackages.length==0}
                     onClick={handleSubmit}
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
            <Box component="form" sx={{ pl: 1, pr: 1 }}>
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
                            onChange={handleChangeNit}
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