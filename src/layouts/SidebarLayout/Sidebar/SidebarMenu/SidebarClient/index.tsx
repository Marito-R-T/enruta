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

import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';

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

function SidebarClient(){
    const { closeSidebar } = useContext(SidebarContext);
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <>
            <List
            component="div"
            subheader={
                <ListSubheader component="div" disableSticky>
                Client
                </ListSubheader>
            }
            >
            <SubMenuWrapper>
                <List component="div">
                <ListItem component="div">
                    <Link href="/home/client/package" passHref>
                    <Button
                        className={
                        currentRoute === '/home/client/package' ? 'active' : ''
                        }
                        disableRipple
                        component="div"
                        // onClick={closeSidebar}
                        startIcon={<Inventory2RoundedIcon />}
                    >
                        Paquete
                    </Button>
                    </Link>
                </ListItem>
                <ListItem component="div">
                    <Link href="/home/client/order" passHref>
                    <Button
                        className={
                        currentRoute === '/home/client/order' ? 'active' : ''
                        }
                        disableRipple
                        component="div"
                        // onClick={closeSidebar}
                        startIcon={<LocalShippingRoundedIcon />}
                    >
                        Orden
                    </Button>
                    </Link>
                </ListItem>
                <ListItem component="div">
                    <Link href="/home/client/payment" passHref>
                    <Button
                        className={
                        currentRoute === '/home/client/payment' ? 'active' : ''
                        }
                        disableRipple
                        component="div"
                        // onClick={closeSidebar}
                        startIcon={<PaymentsRoundedIcon />}
                    >
                        Pagos
                    </Button>
                    </Link>
                </ListItem>
                <ListItem component="div">
                    <Link href="/home/client/bill" passHref>
                    <Button
                        className={
                        currentRoute === '/home/client/bill' ? 'active' : ''
                        }
                        disableRipple
                        component="div"
                        // onClick={closeSidebar}
                        startIcon={<RequestQuoteRoundedIcon />}
                    >
                        Facturas
                    </Button>
                    </Link>
                </ListItem>
                </List>
            </SubMenuWrapper>
            </List>
        </>
    );
}

export default SidebarClient;