import React, { useState } from 'react';
import {
  Grid,
  Box,
  TextField,
} from '@mui/material';


export default function FormDataRoute({ onData, onErrors }) {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    description: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: !value });
    onData(formData);
    onErrors(errors)
  };

  return(
      <Grid item xs={12} 
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
      paddingBottom={3}
      paddingX={1}
      >
        <Grid item xs={12} md={6}>
          <Box>
          <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Nombre"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? 'Campo requerido' : ''}
                inputProps= {{
                  "aria-label": "name",
                  "data-testid": "name"
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
                name="description"
                label="Description"
                type="text"
                id="description"
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
                helperText={errors.description ? 'Campo requerido' : ''}
                inputProps= {{
                  "aria-label": "description",
                  "data-testid": "description"
                }}
            />  
          </Box>
        </Grid>
    </Grid>
  );
}