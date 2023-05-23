import { useContext, useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router';

import {
  alpha,
  Box,
  List,
  styled,
  ListItem
} from '@mui/material';
import Link from '@/components/Link';
import { SidebarContext } from '@/contexts/SidebarContext';

import SidebarClient from './SidebarClient';
import SidebarAdmin from './SidebarAdmin';
import SidebarOperator from './SidebarOperator';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

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

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  const [role , setRole] = useState<string>('ALL');
  
  const isCompAdmin = () => {
    if (role=='ADMIN' || role == 'ALL') {
      return (<SidebarAdmin/>);
    }
    return (<></>);
  }
  const isCompOperator = () => {
    if (role=='OPERATOR' || role == 'ALL') {
      return (<SidebarOperator/>);
    }
    return (<></>);
  }
  const isCompClient = () => {
    if (role=='CLIENT' || role == 'ALL') {
      return (<SidebarClient/>);
    }
    return (<></>);
  }

  

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Link href="/home" passHref>
                  {/* <Button
                    className={currentRoute === '="/' ? 'active' : ''}
                    disableRipple
                    component="p"
                    // onClick={closeSidebar}
                    startIcon={<DesignServicesTwoToneIcon />}
                  >
                    Overview
                  </Button> */}
                </Link>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        {isCompAdmin()}
        {isCompOperator()}
        {isCompClient()}
        {/* <SidebarAdmin/>
        <SidebarOperator/>
        <SidebarClient/> */}
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
