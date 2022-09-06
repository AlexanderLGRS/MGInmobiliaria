import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import { Link } from 'react-router-dom';
import './SideBar.css';

const drawerWidth = 200;
const drawerBleeding = 56;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   })
// );

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function SideBar(props) {
  const theme = useTheme();
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box className='header'>
        {/* <SideBar/> */}
        <AppBar color='transparent' position='static'>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              bgcolor: '#4d18c7',
              color: 'white',
            }}
          >
            <Link
              className='sideBar-button'
              to='/MGInmobiliaria'
              underline='none'
            >
              <h4 className='title'>MG Inmobiliaria</h4>
            </Link>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='end'
                onClick={toggleDrawer(true)}
                sx={{ ...(open && { display: 'none' }), zIndex: 6 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        sx={{
          zIndex: 5,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: '#4d18c7',
          },
        }}
        container={container}
        anchor='right'
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
            {theme.direction === 'rtl' ? (
              <div className='sideBar-item'>
                <ChevronLeftIcon />
                <span>Menu</span>
              </div>
            ) : (
              <div className='sideBar-item'>
                <ChevronRightIcon />
                <span>Menu</span>
              </div>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem className='sideBar-item' key={'home'} disablePadding>
            <Link
              className='sideBar-item-button'
              to='/MGInmobiliaria'
              underline='none'
            >
              <ListItemButton>
                <ListItemIcon>
                  <HomeRoundedIcon className='sideBar-item-icon' />
                </ListItemIcon>
                <ListItemText primary={'Inicio'} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className='sideBar-item' key={'inmuebles'} disablePadding>
            <Link
              className='sideBar-item-button'
              to='/inmuebles'
              underline='none'
            >
              <ListItemButton>
                <ListItemIcon>
                  <ApartmentRoundedIcon className='sideBar-item-icon' />
                </ListItemIcon>
                <ListItemText primary={'Inmuebles'} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className='sideBar-item' key={'nosotros'} disablePadding>
            <Link
              className='sideBar-item-button'
              to='/nosotros'
              underline='none'
            >
              <ListItemButton>
                <ListItemIcon>
                  <InfoRoundedIcon className='sideBar-item-icon' />
                </ListItemIcon>
                <ListItemText primary={'Nosotros'} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
    </Box>
  );
}
SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
