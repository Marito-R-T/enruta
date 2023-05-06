import { useContext } from 'react';
import { useRouter } from 'next/router';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import Link from '@/components/Link';
import { SidebarContext } from '@/contexts/SidebarContext';

import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';

const SubMenuWrapper = styled(Box)(
    ({ theme }) => `
      .MuiList-root {
  
        .MuiListItem-root {
          padding: 1px 0;
  
          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(3.2)};
  
            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(10)};
              font-weight: bold;
              text-transform: uppercase;
              color: ${theme.palette.primary.contrastText};
            }
          }
      
          .MuiButton-root {
            display: flex;
            color: ${theme.colors.alpha.trueWhite[70]};
            background-color: transparent;
            width: 100%;
            justify-content: flex-start;
            padding: ${theme.spacing(1.2, 3)};
  
            .MuiButton-startIcon,
            .MuiButton-endIcon {
              transition: ${theme.transitions.create(['color'])};
  
              .MuiSvgIcon-root {
                font-size: inherit;
                transition: none;
              }
            }
  
            .MuiButton-startIcon {
              color: ${theme.colors.alpha.trueWhite[30]};
              font-size: ${theme.typography.pxToRem(20)};
              margin-right: ${theme.spacing(1)};
            }
            
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[50]};
              margin-left: auto;
              opacity: .8;
              font-size: ${theme.typography.pxToRem(20)};
            }
  
            &.active,
            &:hover {
              background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
              color: ${theme.colors.alpha.trueWhite[100]};
  
              .MuiButton-startIcon,
              .MuiButton-endIcon {
                color: ${theme.colors.alpha.trueWhite[100]};
              }
            }
          }
  
          &.Mui-children {
            flex-direction: column;
  
            .MuiBadge-root {
              position: absolute;
              right: ${theme.spacing(7)};
            }
          }
  
          .MuiCollapse-root {
            width: 100%;
  
            .MuiList-root {
              padding: ${theme.spacing(1, 0)};
            }
  
            .MuiListItem-root {
              padding: 1px 0;
  
              .MuiButton-root {
                padding: ${theme.spacing(0.8, 3)};
  
                .MuiBadge-root {
                  right: ${theme.spacing(3.2)};
                }
  
                &:before {
                  content: ' ';
                  background: ${theme.colors.alpha.trueWhite[100]};
                  opacity: 0;
                  transition: ${theme.transitions.create([
                    'transform',
                    'opacity'
                  ])};
                  width: 6px;
                  height: 6px;
                  transform: scale(0);
                  transform-origin: center;
                  border-radius: 20px;
                  margin-right: ${theme.spacing(1.8)};
                }
  
                &.active,
                &:hover {
  
                  &:before {
                    transform: scale(1);
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
  `
  );

function SidebarAdmin(){
    const { closeSidebar } = useContext(SidebarContext);
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <>
            <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Administration
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Link href="/home/admin/routes" passHref>
                  <Button
                    className={
                      currentRoute === '/home/admin/routes' ? 'active' : ''
                      }
                    disableRipple
                    component="div"
                    // onClick={closeSidebar}
                    startIcon={<RouteRoundedIcon />}
                  >
                    Rutas
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/home/admin/control_point" passHref>
                  <Button
                    className={
                      currentRoute === '/home/admin/control_point' ? 'active' : ''
                      }
                    disableRipple
                    component="div"
                    // onClick={closeSidebar}
                    startIcon={<RadioButtonCheckedRoundedIcon />}
                  >
                    Punto de Control
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/home/admin/fees" passHref>
                  <Button
                    className={
                      currentRoute === '/home/admin/fees' ? 'active' : ''
                      }
                    disableRipple
                    component="div"
                    // onClick={closeSidebar}
                    startIcon={<MoneyRoundedIcon />}
                  >
                    Tarifas
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/home/admin/costs" passHref>
                  <Button
                    className={
                      currentRoute === '/home/admin/costs' ? 'active' : ''
                    }
                    disableRipple
                    component="div"
                    // onClick={closeSidebar}
                    startIcon={<MonetizationOnRoundedIcon />}
                  >
                    Costos
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/home/admin/shares" passHref>
                  <Button
                    className={
                      currentRoute === '/home/admin/shares' ? 'active' : ''
                    }
                    disableRipple
                    component="div"
                    // onClick={closeSidebar}
                    startIcon={<AttachMoneyRoundedIcon />}
                  >
                    Cuotas
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/home/admin/users" passHref>
                  <Button
                    className={
                      currentRoute === '/home/admin/users' ? 'active' : ''
                    }
                    disableRipple
                    component="div"
                    // onClick={closeSidebar}
                    startIcon={<SupervisedUserCircleRoundedIcon />}
                  >
                    Usuarios
                  </Button>
                </Link>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        </>
    );
}

export default SidebarAdmin;