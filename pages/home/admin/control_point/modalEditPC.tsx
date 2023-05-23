import {useEffect, useState} from 'react';
import React from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    MenuItem,
    Divider,
    InputAdornment,
    Tooltip,
    IconButton,
    useTheme,
  } from '@mui/material';
  import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ModalTemplate from '@/components/Modal';
import { Checkpoint, CheckpointType } from '@/models/Checkpoint';


const listCheckpointsType: CheckpointType[] = [
  {
    id: 1,
    name: 'Type 1',
    description: ''
  },
  {
    id: 2,
    name: 'Type 2',
    description: ''
  },
  {
    id: 3,
    name: 'Type 3',
    description: ''
  },
  {
    id: 4,
    name: 'Type 4',
    description: ''
  }
];

export default function ModalEditPC(props) {
    const theme = useTheme();
    const checkpointItem: Checkpoint = props.item;
    
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: checkpointItem.name,
      checkpointType: checkpointItem.checkpointType?.name,
      latitude: checkpointItem.latitude,
      length: checkpointItem.length,
      feeType: '',
      amount: 0.00
    });
    const [errors, setErrors] = useState({
      name: false,
      checkpointType: false,
      latitude: false,
      length: false,
      feeType: false,
      amount: false
    });
    
    useEffect(() => {

        // setFormData({ name: '', checkpointType: '', latitude: '', length: '', feeType: '', amount: 0.00 });
        // setErrors({ name: false, checkpointType: false, latitude: false, length: false, feeType: false, amount: false });
        // Llamada a una API
        try {
            //Api obtener los datas del Checkpoint
            // const response = await postLogin({});
        } catch (error) {
            console.error(error);
        
        }

        return () => { };
      }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    if (formData.name && formData.checkpointType && formData.latitude && formData.length && formData.feeType && formData.amount) {
      try {
        // const response = await postLogin({});
      } catch (error) {
        console.error(error);
        
      }
      console.log('Formulario enviado');
      // Reiniciar el estado y los campos del formulario
      setFormData({ name: '', checkpointType: '', latitude: '', length: '', feeType: '', amount: 0.00 });
      setErrors({ name: false, checkpointType: false, latitude: false, length: false, feeType: false, amount: false });
    }
  };

    return (
      <>
        {/* <Button onClick={handleClickOpen}
        sx={{ mt: { xs: 2, md: 0 } }}
        variant="contained"
        startIcon={<AddRoundedIcon fontSize="small" />}
      >
        Crear Punto de Control
      </Button> */}
        <Tooltip title="Edit Order" arrow>
            <IconButton
                onClick={handleClickOpen}
                sx={{
                '&:hover': {
                    background: theme.colors.primary.lighter
                },
                color: theme.palette.primary.main
                }}
                color="inherit"
                size="small"
            >
                <EditTwoToneIcon fontSize="small" />
            </IconButton>
        </Tooltip>
      <ModalTemplate 
        open={open}
        onClose={handleClose}
        title = 'Editar Punto de Control'
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ pl: 1, pr: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                      margin="normal"
                      required
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
                <Grid item xs={12} md={6} mt={2}>
                  <Box>
                    <TextField
                      select
                      required
                      fullWidth
                      id="checkpointType"
                      label="Tipo de Punto de Control"
                      name='checkpointType'
                      // value={currency}
                      // onChange={handleChange}
                      // helperText="Please select your currency"
                      value={formData.checkpointType}
                      onChange={handleChange}
                      error={errors.checkpointType}
                      helperText={errors.checkpointType ? 'Campo requerido' : ''}
                    >
                      {listCheckpointsType.map((checkpointType) => (
                        <MenuItem key={checkpointType.id} value={checkpointType.id}>
                          {checkpointType.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="latitude"
                      label="Latitude"
                      name="latitude"
                      autoComplete="latitude"
                      autoFocus
                      type='text'
                      value={formData.latitude}
                      onChange={handleChange}
                      error={errors.latitude}
                      helperText={errors.latitude ? 'Campo requerido' : ''}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="length"
                      label="Length"
                      name="length"
                      autoComplete="length"
                      autoFocus
                      type='text'
                      value={formData.length}
                      onChange={handleChange}
                      error={errors.length}
                      helperText={errors.length ? 'Campo requerido' : ''}
                    />
                  </Box>
                </Grid>
                <Divider/>
                <Grid item xs={12} md={6}>
                  <Box>
                    <TextField
                        margin="normal"
                        required
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
                        value={formData.amount}
                        onChange={handleChange}
                        error={errors.amount}
                        helperText={errors.amount ? 'Campo requerido' : ''}
                      />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <Box>
                    <TextField
                        select
                        required
                        fullWidth
                        id="feeType"
                        label="Tipo de Tarifa"
                        name='feeType'
                        // value={currency}
                        // onChange={handleChange}
                        // helperText="Please select your currency"
                        value={formData.feeType}
                        onChange={handleChange}
                        error={errors.feeType}
                        helperText={errors.feeType ? 'Campo requerido' : ''}
                      >
                        {listCheckpointsType.map((checkpointType) => (
                          <MenuItem key={checkpointType.id} value={checkpointType.id}>
                            {checkpointType.name}
                          </MenuItem>
                        ))}
                      </TextField>
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
                      Actualizar
                    </Button>
                  </Box>
                </Grid>
                
            </Grid>
          </Box>
        </ModalTemplate>
      </>
      
    );
}