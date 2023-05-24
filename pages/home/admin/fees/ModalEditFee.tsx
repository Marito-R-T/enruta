import ModalTemplate from "@/components/Modal";
import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Tooltip, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { getFee, putFee } from "../../../../services/PackageServices/api";

export default function ModalEditFee() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [formFee, setFormFee] = useState({
        fee: 0,
        prioritizedFee: 0
    });
    const [errors, setErrors] = useState({
        fee: false,
        prioritizedFee: false
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormFee({ ...formFee, [name]: value });
        setErrors({ ...errors, [name]: !value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formFee.fee && formFee.prioritizedFee) {
            try {
                const response = await putFee(formFee);
                console.log(response);
                handleClose();
            } catch (error) {
                console.error('Error',error);
            }
        }
    }

    const getFeeGlobal = async () => {
        try {
            const response: any = await getFee();
            setFormFee({fee: response.fee, prioritizedFee: response.prioritizedFee});
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(() => {
        getFeeGlobal();
        return () => {
          
        };
      }, [open]);
    
    return(
        <>
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
            title = 'Crear Punto de Control'
            >
                <Box component="form" onSubmit={handleSubmit} sx={{ pl: 1, pr: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <TextField
                                margin="normal"
                                disabled
                                fullWidth
                                id="name"
                                name="name"
                                autoFocus
                                type='text'
                                value={'Tarifa Global'}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} mt={2}>
                            <Box>
                                <TextField
                                required
                                fullWidth
                                id="fee"
                                label="Tarifa Global"
                                name='fee'
                                type="number"
                                InputProps={{ 
                                    inputProps: { 
                                      min: 0.00, 
                                      step: 0.01, 
                                    },
                                    startAdornment: <InputAdornment position="start">Q</InputAdornment>, 
                                  }}
                                value={formFee.fee}
                                onChange={handleChange}
                                error={errors.fee}
                                helperText={errors.fee ? 'Campo requerido' : ''}
                                />
                                
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <TextField
                                margin="normal"
                                disabled
                                fullWidth
                                id="name"
                                name="name"
                                autoFocus
                                type='text'
                                value={'Tarifa Priorizada'}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} mt={2}>
                            <Box>
                                <TextField
                                required
                                fullWidth
                                id="prioritizedFee"
                                label="Tarifa de Prioridad"
                                name='prioritizedFee'
                                type="number"
                                InputProps={{ 
                                    inputProps: { 
                                      min: 0.00, 
                                      step: 0.01, 
                                    },
                                    startAdornment: <InputAdornment position="start">Q</InputAdornment>, 
                                  }}
                                value={formFee.prioritizedFee}
                                onChange={handleChange}
                                error={errors.prioritizedFee}
                                helperText={errors.prioritizedFee ? 'Campo requerido' : ''}
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