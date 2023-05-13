import {useState} from 'react';
import React from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select
  } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModalTemplate from '@/components/Modal';
import { CheckpointType } from '@/models/Checkpoint';


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

export default function ModalAddPC() {
    const [open, setOpen] = useState(false);
    const [currency, setCurrency] = useState('Type 3');
    // const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  const handleChangeTypeCheck = (event) => {
    setCurrency(event.target.value);
  };

    return (
      <>
        <Button onClick={handleClickOpen}
        sx={{ mt: { xs: 2, md: 0 } }}
        variant="contained"
        startIcon={<AddRoundedIcon fontSize="small" />}
      >
        Crear Punto de Control
      </Button>
      <ModalTemplate 
        open={open}
        onClose={handleClose}
        title = 'Crear Punto de Control'
        >
          <Box component="form" noValidate sx={{ pl: 1, pr: 1 }}>
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
                      autoComplete="Name"
                      autoFocus
                      type='text'
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                  <Box>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select"
                      fullWidth
                      // value={currency}
                      // onChange={handleChange}
                      // helperText="Please select your currency"
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
                      Crear Punto de Control
                    </Button>
                  </Box>
                </Grid>
                
            </Grid>
          </Box>
        </ModalTemplate>
      </>
      
    );
}