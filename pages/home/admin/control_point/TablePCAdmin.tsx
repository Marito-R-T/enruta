import { ChangeEvent, useState } from 'react';
import React from 'react';
import {
    Tooltip,
    Divider,
    Box,
    FormControl,
    InputLabel,
    Card,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Select,
    MenuItem,
    Typography,
    useTheme,
    CardHeader,
    InputAdornment,
    Button,
    styled,
    OutlinedInput
  } from '@mui/material';

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Checkpoint, listCheckpointExample } from '@/models/Checkpoint';
import ModalEditPC from './modalEditPC';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { deleteCheckpoint, getCheckpointList } from '../../../../services/CheckpointServices/api';

  const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      padding-right: ${theme.spacing(0.7)}
  `
  );

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];


  

function TablePCAdmin() {
  const theme = useTheme();
  const [listCP, setListCP] = useState<Checkpoint[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [search, setSearch] = useState<string>(undefined);
    
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event.target.value);  
  }

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
    getSearchCP(search, page, limit);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
    getSearchCP(search, 1, limit);
  };

  const handleSubmitSearch = async () => {
    await getSearchCP(search, 1, limit);
  }

  const handleDeleteUser = async (idCP) => {
    try {
        const response = await deleteCheckpoint(idCP);
        console.log(response);
        await getSearchCP(search, page, limit);
    } catch (error) {  
        console.error(error);
        
    }
  }

  const getSearchCP = async (pattern: string, page: number, size: number) => {
      try {
          const response = await getCheckpointList(pattern, page, size);
          setListCP(response);
          
      } catch (error) {  
          console.error(error);
          
      }
  }

  return (
      <Card>
          <CardHeader
          title="Recent Orders"
          action= {
              <Box width={150}>
                  <FormControl fullWidth variant="outlined">
                      <InputLabel>Status</InputLabel>
                      <Select
                      label="Status"
                      autoWidth
                      >
                      {statusOptions.map((statusOption) => (
                          <MenuItem key={statusOption.id} value={statusOption.id}>
                          {statusOption.name}
                          </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
              </Box>
          }   
          />
          <Divider />
          <FormControl variant="outlined" fullWidth>
            <OutlinedInputWrapper
              type="text"
              placeholder="Search terms here..."
              onChange={onChangeSearch}
              endAdornment={
                <InputAdornment position="end">
                  <Button variant="contained" size="small"
                  onClick={handleSubmitSearch}
                  >
                    Search
                  </Button>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          {/* <TableCell padding="checkbox">
                              <Checkbox
                              color="primary"
                              // checked={selectedAllCryptoOrders}
                              // indeterminate={selectedSomeCryptoOrders}
                              // onChange={handleSelectAllCryptoOrders}
                              />
                          </TableCell> */}
                          <TableCell>Checkpoint ID</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Latitude</TableCell>
                          <TableCell >length</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">Actions</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {listCheckpointExample.map((checkpoint) => {
                      return (
                        <TableRow
                        hover
                        key={checkpoint.id}
                        >
                          {/* <TableCell padding="checkbox">
                              <Checkbox
                              color="primary"
                              value={false}
                              />
                          </TableCell> */}
                          <TableCell >
                              <Typography
                              variant="body1"
                              fontWeight="bold"
                              color="text.primary"
                              gutterBottom
                              noWrap
                              >
                                {checkpoint.id}
                              </Typography>
                          </TableCell>
                          <TableCell>
                              <Typography
                              variant="body1"
                              fontWeight="bold"
                              color="text.primary"
                              gutterBottom
                              noWrap
                              >
                              {checkpoint.name}
                              </Typography>
                          </TableCell>
                          <TableCell align="right">
                              <Typography
                              variant="body1"
                              fontWeight="bold"
                              color="text.primary"
                              gutterBottom
                              noWrap
                              >
                              {checkpoint.latitude}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" noWrap>
                              punto X
                              </Typography>
                          </TableCell>
                          <TableCell >
                              <Typography
                              variant="body1"
                              fontWeight="bold"
                              color="text.primary"
                              gutterBottom
                              noWrap
                              >
                              {checkpoint.length}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" noWrap>
                              punto Y
                              </Typography>
                          </TableCell>
                          <TableCell align="right">
                              {/* {getStatusLabel(cryptoOrder.status)} */}
                              {checkpoint.checkpointType?.name? checkpoint.checkpointType.name: 'Completado'}
                          </TableCell>
                          <TableCell align="right">
                              <ModalEditPC idCheckpoint={checkpoint}/>
                              <Tooltip title="Delete Order" arrow>
                              <IconButton
                                onClick={()=> {handleDeleteUser(checkpoint.id)}}
                                  sx={{
                                  '&:hover': { background: theme.colors.error.lighter },
                                  color: theme.palette.error.main
                                  }}
                                  color="inherit"
                                  size="small"
                              >
                                  <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                              </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
              </Table>
          </TableContainer>
          <Box p={2}>
          <TablePagination
          component="div"
          count={35}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
          />
      </Box>
  </Card>
      
  );
}


export default TablePCAdmin;