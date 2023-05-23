import { Box, Button, Grid, IconButton, MenuItem, TextField, Tooltip, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ModalTemplate from "@/components/Modal";
import { Role, User } from "@/models/User";
import { getUsersId, putUsers } from "../../../../services/AuthenticationServices/api";

const roles: Role[] = [
    {
        id: 1,
        name: 'ADMIN'
    },
    {
        id: 2,
        name: 'OPERATOR'
    },
    {
        id: 3,
        name: 'CLIENT'
    }
]

export default function ModalEditRole({ idUser }) {
    const theme = useTheme();
    // const router = useRouter();
    // const idPackage = router.query.idPackage as string;
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState<User>(null);
    const [formData, setFormData] = useState({role: 0});
    const [errors, setErrors] = useState({role: false});

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.role) {
            try {
                const flagUser = {
                    id: 0,
                    fullname: "string",
                    password: "string",
                    username: "string",
                    isDeleted: true,
                    role: {
                      id: 0,
                      name: "string",
                      description: ""
                    }
                  }
                const response = await putUsers(flagUser);
                console.log(response);
                
            } catch (error) {
                console.error('Error',error);
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: !value });
      };

    const getUser = async () => {

        try {
            const response: any = await getUsersId(idUser);
            setUser(response);
            setFormData({['role']: user.role.id});
        } catch (error) {
            console.error('Error',error);
        }
    }

    useEffect(() => {
        // Código a ejecutar después de que el componente se monta en el DOM
        // o cuando ciertas dependencias cambian
        // Puedes realizar llamadas a API, actualizar el estado, etc.
        getUser();
        return () => {
          // Código para limpiar o cancelar cualquier efecto secundario
          // antes de que el componente se desmonte
        };
      }, [open]);
    
    return (
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
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoFocus
                                type='text'
                                value={user? user.fullname : ''}
                                disabled
                                // onChange={handleChange}
                                // error={errors.name}
                                // helperText={errors.name ? 'Campo requerido' : ''}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} mt={2}>
                            <Box>
                                <TextField
                                select
                                required
                                fullWidth
                                id="role"
                                label="Tipo de Role"
                                name='role'
                                value={formData.role}
                                onChange={handleChange}
                                error={errors.role}
                                helperText={errors.role ? 'Campo requerido' : ''}
                                >
                                {roles.map((roleType) => (
                                    <MenuItem key={roleType.id} value={roleType.id}>
                                    {roleType.name}
                                    </MenuItem>
                                ))}
                                </TextField>
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