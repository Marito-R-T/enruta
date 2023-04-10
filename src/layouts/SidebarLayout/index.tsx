import { FC, ReactNode, useContext } from 'react';
import { Box, alpha, lighten, useTheme, styled } from '@mui/material';
import { SidebarContext } from '@/contexts/SidebarContext';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Header from './Header';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${theme.sidebar.width}`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const { sidebarToggle } = useContext(SidebarContext);
  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',

          '.MuiPageTitle-wrapper': {
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.trueWhite[5]
                : theme.colors.alpha.white[50],
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05
                  )}`
          }
        }}
      >
        <Header />
        <Sidebar />
        <Main
          sx={{
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              ml: sidebarToggle ? `${theme.sidebar.width}` : `0px`
            }
          }}
          open={sidebarToggle}
        >
          <Box display="block">{children}</Box>
        </Main>
      </Box>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node
};

export default SidebarLayout;
