import React from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, useState } from 'react';
import PageHeader from '@/content/Home/PageHeader';
import Footer from '@/components/Footer';
import {
    Typography,
  Grid,
  Tab,
  Tabs,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
  styled,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import TaskSearch from '@/content/Home/TaskSearch';
import TableUser from './TableUsers';
import SearchUser from './SearchUser';
import { Role, User, UserRoleStatus, listRolesExp } from '@/models/User';

interface Filters {
  status?: UserRoleStatus;
}
const statusOptions = [{id: 0, name: 'All'},...listRolesExp];

const applyFilters = (
  listUser: User[],
  filters: Filters
): User[] => {
  return listUser.filter((userItem) => {
    let matches = true;

    if (filters.status && userItem.role.name !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

function UsersAdmin() {
  statusOptions.push();
  const [currentTab, setCurrentTab] = useState<string>('analytics');
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageTitleWrapper>
        <Box
            display="flex"
            alignItems={{ xs: 'stretch', md: 'center' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            >
            <Box display="flex" alignItems="center">
                <Box>
                <Typography variant="h3" component="h3" gutterBottom>
                    Usuarios {/*user.name*/}
                </Typography>
                <Typography variant="subtitle2">
                    {/* Manage your day to day packages! Enjoy this International Experience. */}
                </Typography>
                </Box>
            </Box>
        </Box>
      </PageTitleWrapper>
      <Container maxWidth="lg">
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <Card>
                <CardHeader
                  title="Recent Orders"
                  action= {
                      <Box width={150}>
                          <FormControl fullWidth variant="outlined">
                        <InputLabel>Status</InputLabel>
                        <Select
                        value={filters.status || '0'}
                        onChange={handleStatusChange}
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
                  <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={3}
                  paddingTop={3}
                  paddingX={1}
                  >
                    <SearchUser/>
                    <TableUser/>
                  </Grid>
                  
              </Card>
              
            </Card>
          </Grid>
        </Grid>
        
      </Container>
      {/* <Footer /> */}
    </>
  );
}

UsersAdmin.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default UsersAdmin;