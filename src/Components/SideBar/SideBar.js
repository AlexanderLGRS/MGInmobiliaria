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
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Link } from 'react-router-dom';
import './SideBar.css';

const drawerWidth = 200;
const drawerBleeding = 5;
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
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SideBar(props) {
  const theme = useTheme();
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [filter, setFilter] = React.useState('');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const filterPropertiesListHandler = (event) => {
    setFilter(event.target.innerText);
  };
  React.useEffect(() => {
    props.onSelectFilter(filter);
  });
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box className='header'>
        <AppBar color='transparent' position='static'>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              bgcolor: '#4d18c7',
              color: 'white',
            }}
          >
            <Link className='sideBar-button' to='/' underline='none'>
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
                sx={{ ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        className='sideBar'
        sx={{
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
          <IconButton sx={{ color: '#fff' }} onClick={toggleDrawer(false)}>
            {theme.direction === 'rtl' ? (
              <div className='sideBar-item'>
                <ChevronLeftIcon fontSize='large' />
                <span>Menu</span>
              </div>
            ) : (
              <div className='sideBar-item'>
                <ChevronRightIcon fontSize='large' />
                <span>Menu</span>
              </div>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem className='sideBar-item' key={'home'} disablePadding>
            <Link className='sideBar-item-button' to='/' underline='none'>
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
                <ExpandMore
                  sx={{ color: '#fff' }}
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </ListItemButton>
            </Link>
          </ListItem>
          <Collapse
            sx={{ color: '#fff', paddingLeft: '3rem' }}
            in={expanded}
            timeout='auto'
            unmountOnExit
          >
            <ListItem
              onClick={filterPropertiesListHandler}
              className='sideBar-item'
              disablePadding
            >
              <ArrowRightRoundedIcon fontSize='large' />
              <ListItemText primary={'Apartamentos'} />
            </ListItem>
            <ListItem
              onClick={filterPropertiesListHandler}
              className='sideBar-item'
              disablePadding
            >
              <ArrowRightRoundedIcon fontSize='large' />
              <ListItemText primary={'Casas'} />
            </ListItem>
            <ListItem
              disabled
              // onClick={filterPropertiesListHandler}
              className='sideBar-item'
              disablePadding
            >
              <ArrowRightRoundedIcon fontSize='large' />
              <ListItemText primary={'Locales'} />
            </ListItem>
            <ListItem
              onClick={filterPropertiesListHandler}
              className='sideBar-item'
              disablePadding
            >
              <ArrowRightRoundedIcon fontSize='large' />
              <ListItemText primary={'Todos'} />
            </ListItem>
          </Collapse>
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
