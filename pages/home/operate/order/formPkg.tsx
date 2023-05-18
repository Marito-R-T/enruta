import ModalTemplate from "@/components/Modal";
import Modal from "@/components/Modal";
import { Package } from "@/models/Package";
import { Box, Button, Divider, Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

type ChildComponentProps = {
    open: boolean,
    onOpenChange(): void
    onCloseChange(): void
    onAddPackage(data:Package): void
  }

export default function FormPkg({open, onOpenChange, onCloseChange, onAddPackage}: ChildComponentProps) {
    const [formData, setFormData] = useState({
        weight: 0,
        priority: false,
        incomeDate: null,
        // deliveryDate: Date;
        deliveryAddress: '',
        // fee: FeePkg,
        // route: RouteObj
    });
    const [errors, setErrors] = useState({
        weight: false,
        priority: false,
        incomeDate: false,
        // deliveryDate: Date;
        deliveryAddress: false,
        // fee: FeePkg,
        // route: RouteObj
    });

    useEffect(() => {
        // Código a ejecutar después de que el componente se monta en el DOM
        // o cuando ciertas dependencias cambian
        // Puedes realizar llamadas a API, actualizar el estado, etc.
        // setFormData({ weight: 0,
        //     priority: false,
        //     incomeDate: null,
        //     // deliveryDate: Date;
        //     deliveryAddress: '',
        //     // fee: FeePkg,
        //     // route: RouteObj 
        // });
        //   setErrors({ 
        //     weight: false,
        //     priority: false,
        //     incomeDate: false,
        //     // deliveryDate: Date;
        //     deliveryAddress: false,
        //     // fee: FeePkg,
        //     // route: RouteObj
        // });

        return () => {
          // Código para limpiar o cancelar cualquier efecto secundario
          // antes de que el componente se desmonte
        };
      }, [open]);
    
    const handleClose = () => {
        onCloseChange();
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

        //Crea el objeto de tipo Package
        const packageTemp: Package = {
            id: 0,
            weight: formData.weight,
            priority: formData.priority,
            incomeDate: formData.incomeDate,
            deliveryDate: null,
            deliveryAddress: formData.deliveryAddress,
            fee: null,
            route: null
        }
        //Envia al arreglo de paquetes
        onAddPackage(packageTemp);
        onCloseChange();
        setFormData({ weight: 0,
            priority: false,
            incomeDate: null,
            // deliveryDate: Date;
            deliveryAddress: '',
            // fee: FeePkg,
            // route: RouteObj 
        });
          setErrors({ 
            weight: false,
            priority: false,
            incomeDate: false,
            // deliveryDate: Date;
            deliveryAddress: false,
            // fee: FeePkg,
            // route: RouteObj
        });

        // Realizar validaciones adicionales y enviar el formulario si no hay errores
        // if (formData.name && formData.checkpointType && formData.latitude && formData.length && formData.feeType && formData.amount) {
        //   try {
        //     // const response = await postLogin({});
        //   } catch (error) {
        //     console.error(error);
            
        //   }
        //   console.log('Formulario enviado');
        //   // Reiniciar el estado y los campos del formulario
        
        // }
      };

    return(
        <>
            <ModalTemplate
            open={open}
            onClose={handleClose}
            title = 'Agregar Paquete'
            >
            <Box component="form" onSubmit={handleSubmit} sx={{ pl: 1, pr: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="incomeDate"
                    //   label="Fecha"
                      name="incomeDate"
                      autoFocus
                      type='date'
                      value={formData.incomeDate}
                      onChange={handleChange}
                      error={errors.incomeDate}
                      helperText={errors.incomeDate ? 'Campo requerido' : ''}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="weight"
                        label="Peso"
                        name="weight"
                        autoFocus
                        type='number'
                        InputProps={{ 
                          inputProps: { 
                            min: 0.00, 
                            step: 0.01, 
                          },
                          endAdornment: <InputAdornment position="start">LBS</InputAdornment>, 
                        }}
                        value={formData.weight}
                        onChange={handleChange}
                        error={errors.weight}
                        helperText={errors.weight ? 'Campo requerido' : ''}
                      />
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="deliveryAddress"
                      label="Direccion de Entrega"
                      name="deliveryAddress"
                      autoFocus
                      type='text'
                      rows={4}
                      multiline
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      error={errors.deliveryAddress}
                      helperText={errors.deliveryAddress ? 'Campo requerido' : ''}
                    />
                  </Box>
                </Grid>



                <Grid item xs={12} md={6} mt={2}>
                  <Box>
                    <TextField
                      select
                    //   required
                      fullWidth
                      id="route"
                      label="Ruta"
                      name='route'
                      // value={currency}
                      // onChange={handleChange}
                      // helperText="Please select your currency"
                    //   value={formData.checkpointType}
                    //   onChange={handleChange}
                    //   error={errors.checkpointType}
                    //   helperText={errors.checkpointType ? 'Campo requerido' : ''}
                    >
                      {/* {listCheckpointsType.map((checkpointType) => (
                        <MenuItem key={checkpointType.id} value={checkpointType.id}>
                          {checkpointType.name}
                        </MenuItem>
                      ))} */}
                    </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                        margin="normal"
                        // required
                        fullWidth
                        id="amount"
                        label="Tarifa"
                        name="amount"
                        autoFocus
                        type='number'
                        InputProps={{ 
                          inputProps: { 
                            min: 0.00, 
                            step: 0.01, 
                          },
                          startAdornment: <InputAdornment position="start">Q</InputAdornment>, 
                        }}
                        // value={formData.amount}
                        // onChange={handleChange}
                        // error={errors.amount}
                        // helperText={errors.amount ? 'Campo requerido' : ''}
                      />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <Box>
                    <TextField
                        select
                        // required
                        fullWidth
                        id="feeType"
                        label="Prioridad"
                        name='feeType'
                        // value={currency}
                        // onChange={handleChange}
                        // helperText="Please select your currency"
                        // value={formData.feeType}
                        // onChange={handleChange}
                        // error={errors.feeType}
                        // helperText={errors.feeType ? 'Campo requerido' : ''}
                      >
                        {/* {listCheckpointsType.map((checkpointType) => (
                          <MenuItem key={checkpointType.id} value={checkpointType.id}>
                            {checkpointType.name}
                          </MenuItem>
                        ))} */}
                      </TextField>
                  </Box>
                </Grid>

                <Divider/>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                        margin="normal"
                        // required
                        fullWidth
                        id="amount"
                        label="Tarifa de Prioridad"
                        name="amount"
                        autoFocus
                        type='number'
                        InputProps={{ 
                          inputProps: { 
                            min: 0.00, 
                            step: 0.01, 
                          },
                          startAdornment: <InputAdornment position="start">Q</InputAdornment>, 
                        }}
                        // value={formData.amount}
                        // onChange={handleChange}
                        // error={errors.amount}
                        // helperText={errors.amount ? 'Campo requerido' : ''}
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
                      Agregar
                    </Button>
                  </Box>
                </Grid>
                
            </Grid>
          </Box> 
            </ModalTemplate>
        </>
    );
}