import ModalTemplate from "@/components/Modal";
import { Package } from "@/models/Package";
import { RouteObj } from "@/models/RouteObj";
import { Box, Button, Divider, Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getListRouteActive } from "../../../../services/RouteServices/api";
import { getFee } from "../../../../services/PackageServices/api";

type ChildComponentProps = {
    open: boolean,
    onOpenChange(): void
    onCloseChange(): void
    onAddPackage(data:Package): void
  }

export default function FormPkg({open, onOpenChange, onCloseChange, onAddPackage}: ChildComponentProps) {
  const [listRoutes, setListRoutes] = useState<RouteObj[]>([]);
  const [globalFee, setGlobalFee] = useState(10);
  const [globalFeePriority, setGlobalFeePriority] = useState(5);
  const [formData, setFormData] = useState({
      weight: 0,
      priority: 1,
      incomeDate: undefined,
      deliveryAddress: '',
      fee: 0,
      prioritizedFee: 0,
      route: 1
  });
  const [errors, setErrors] = useState({
      weight: false,
      priority: false,
      incomeDate: false,
      // deliveryDate: Date;
      deliveryAddress: false,
      fee: false,
      prioritizedFee: false,
      route: false
  });

  const reserDataForm = () => {
    setFormData({ 
      weight: 0,
      priority: 1,
      incomeDate: undefined,
      deliveryAddress: '',
      fee: 0,
      prioritizedFee: 0,
      route: undefined
  });
    setErrors({ 
      weight: false,
      priority: false,
      incomeDate: false,
      deliveryAddress: false,
      fee: false,
      prioritizedFee: false,
      route: false
  });
  }
  useEffect(() => {
      getRoutes();
      getFeeGlobal();
      reserDataForm();

      return () => {

      };
    }, [open]);
  
  const handleClose = () => {
      onCloseChange();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: !value });
  };

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    
    setErrors((prevValues) => ({
      ...prevValues,
      [name]: !value,
    }));

    setFeeCalculate(value);
  };

  const setFeeCalculate = (weight) => {
    const name = 'fee';
    const value = ((globalFee*parseFloat(weight))+((formData.priority==2)? globalFeePriority : 0));
    console.log(value, ((formData.priority==2)? globalFeePriority : 0));
    
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((prevValues) => ({
      ...prevValues,
      [name]: !value,
    }));
  }
  const setFeeCalculatePriority = (valuep) => {
    const name = 'fee';
    const value = ((globalFee*formData.weight)+((valuep==2)? globalFeePriority : 0));
    console.log(value, ((formData.priority==2)? globalFeePriority : 0));
    
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((prevValues) => ({
      ...prevValues,
      [name]: !value,
    }));
  }

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    
    setErrors((prevValues) => ({
      ...prevValues,
      [name]: !value,
    }));

    console.log('valor: ', value);
    

    setFeeCalculatePriority(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Realizar validaciones adicionales y enviar el formulario si no hay errores
      if (formData.weight && formData.incomeDate && formData.deliveryAddress && formData.priority) {
        //Crea el objeto de tipo Package
        const packageTemp: Package = {
          id: 0,
          weight: formData.weight,
          incomeDate: formData.incomeDate,
          deliveryDate: new Date(),
          deliveryAddress: formData.deliveryAddress,
          routeId: 0,
          prioritized: (formData.priority==2)? true : false,
          fee: 0,
          prioritizedFee: 0
        }
        //Envia al arreglo de paquetes
        onAddPackage(packageTemp);
        onCloseChange();
        console.log('Formulario enviado');
        // Reiniciar el estado y los campos del formulario
      }
    };
    
        const getRoutes = async () => {
          try {
            const response = await getListRouteActive('', 0, 0);
            setListRoutes(response);
          } catch (error) {
            console.error(error);
            
          }
        }
    
      const getFeeGlobal = async () => {
        try {
          const response = await getFee();
          setGlobalFee(response.fee);
          setGlobalFeePriority(response.prioritizedFee);
        } catch (error) {
          console.error(error);
          
        }
      }

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
                        onChange={handleChangeWeight}
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
                      // required
                      fullWidth
                      id="route"
                      label="Ruta"
                      name='route'
                      value={formData.route}
                      onChange={handleChange}
                      error={errors.route}
                      helperText={errors.route ? 'Campo requerido' : ''}
                    >
                      {listRoutes.map((itemRoute) => (
                        <MenuItem key={itemRoute.id} value={itemRoute.id}>
                          {itemRoute.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <Box>
                    <TextField
                        select
                        // required
                        fullWidth
                        id="priority"
                        label="Prioridad"
                        name='priority'
                        value={formData.priority}
                        onChange={handleChangePriority}
                        error={errors.priority}
                        helperText={errors.priority ? 'Campo requerido' : ''}
                      >
                        <MenuItem key={1} value={1}>
                          NO
                        </MenuItem>
                        <MenuItem key={2} value={2}>
                          SI
                        </MenuItem>
                      </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                        margin="normal"
                        // required
                        fullWidth
                        id="fee"
                        label="Tarifa"
                        name="fee"
                        autoFocus
                        type='number'
                        InputProps={{ 
                          inputProps: { 
                            min: 0.00, 
                            step: 0.01, 
                          },
                          startAdornment: <InputAdornment position="start">Q</InputAdornment>, 
                        }}
                        value={formData.fee}
                        onChange={handleChange}
                        error={errors.fee}
                        helperText={errors.fee ? 'Campo requerido' : ''}
                      />
                  </Box>
                </Grid>
                

                <Divider/>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                        margin="normal"
                        // required
                        disabled
                        fullWidth
                        id="prioritizedFee"
                        label="Tarifa de Prioridad"
                        name="prioritizedFee"
                        autoFocus
                        type='number'
                        InputProps={{ 
                          inputProps: { 
                            min: 0.00, 
                            step: 0.01, 
                          },
                          startAdornment: <InputAdornment position="start">Q</InputAdornment>, 
                        }}
                        value={formData.prioritizedFee}
                        onChange={handleChange}
                        error={errors.prioritizedFee}
                        helperText={errors.prioritizedFee ? 'Campo requerido' : ''}
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