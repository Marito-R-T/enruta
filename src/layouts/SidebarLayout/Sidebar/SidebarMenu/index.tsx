import { useContext } from 'react';
import React from 'react';
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

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
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

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Link href="/home" passHref>
                  <Button
                    className={currentRoute === '="/' ? 'active' : ''}
                    disableRipple
                    component="p"
                    // onClick={closeSidebar}
                    startIcon={<DesignServicesTwoToneIcon />}
                  >
                    Overview
                  </Button>
                </Link>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        {/* <SidebarClient/> */}
        <SidebarAdmin/>
        {/* <SidebarOperator/> */}
        
        
        {/*<List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Components
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Link href="/components/buttons" passHref>
                  <Button
                    className={
                      currentRoute === '/components/buttons' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<BallotTwoToneIcon />}
                  >
                    Buttons
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/modals" passHref>
                  <Button
                    className={
                      currentRoute === '/components/modals' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<BeachAccessTwoToneIcon />}
                  >
                    Modals
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/accordions" passHref>
                  <Button
                    className={
                      currentRoute === '/components/accordions' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<EmojiEventsTwoToneIcon />}
                  >
                    Accordions
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/tabs" passHref>
                  <Button
                    className={
                      currentRoute === '/components/tabs' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<FilterVintageTwoToneIcon />}
                  >
                    Tabs
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/badges" passHref>
                  <Button
                    className={
                      currentRoute === '/components/badges' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<HowToVoteTwoToneIcon />}
                  >
                    Badges
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/tooltips" passHref>
                  <Button
                    className={
                      currentRoute === '/components/tooltips' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<LocalPharmacyTwoToneIcon />}
                  >
                    Tooltips
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/avatars" passHref>
                  <Button
                    className={
                      currentRoute === '/components/avatars' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<RedeemTwoToneIcon />}
                  >
                    Avatars
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/cards" passHref>
                  <Button
                    className={
                      currentRoute === '/components/cards' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<SettingsTwoToneIcon />}
                  >
                    Cards
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/components/forms" passHref>
                  <Button
                    className={
                      currentRoute === '/components/forms' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<TrafficTwoToneIcon />}
                  >
                    Forms
                  </Button>
                </Link>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Extra Pages
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Link href="/status/404" passHref>
                  <Button
                    className={currentRoute === '/status/404' ? 'active' : ''}
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<CheckBoxTwoToneIcon />}
                  >
                    Error 404
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/status/500" passHref>
                  <Button
                    className={currentRoute === '/status/500' ? 'active' : ''}
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<CameraFrontTwoToneIcon />}
                  >
                    Error 500
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/status/coming-soon" passHref>
                  <Button
                    className={
                      currentRoute === '/status/coming-soon' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<ChromeReaderModeTwoToneIcon />}
                  >
                    Coming Soon
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link href="/status/maintenance" passHref>
                  <Button
                    className={
                      currentRoute === '/status/maintenance' ? 'active' : ''
                    }
                    disableRipple
                    component="p"
                    onClick={closeSidebar}
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                  >
                    Maintenance
                  </Button>
                </Link>
              </ListItem>
            </List>
          </SubMenuWrapper>
                  </List>*/}
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
