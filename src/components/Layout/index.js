import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { blueGrey, blue, green } from '@material-ui/core/colors';
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Collapse
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import PollRoundedIcon from '@material-ui/icons/PollRounded';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import {
  ExpandMore,
  ExpandLess,
  PersonRounded,
  BusinessCenterRounded,
  WcRounded,
  LocalMallRounded,
  SupervisedUserCircleRounded
} from '@material-ui/icons';

const drawerWidth = 260;
const drawerbg = blueGrey[900];
const appbarbg = blue[700];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: '#039be5'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '100%'
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  expandIcon: {
    paddingLeft: '5px'
  },
  menuItem: {
    color: 'white'
  }
}));

function Layout(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [openCollapseEcommerce, setOpenCollapseEcommerce] = React.useState(
    false
  );

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };
  const handleClickEcommerce = () => {
    setOpenCollapseEcommerce(!openCollapseEcommerce);
  };

  const { children } = props;

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem component={Link} to='/login' onClick={handleMenuClose}>
        Login
      </MenuItem>
      <MenuItem component={Link} to='/register' onClick={handleMenuClose}>
        Register
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderAppBar = (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Baetron
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label='show 4 new mails' color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label='show 17 new notifications' color='inherit'>
            <Badge badgeContent={17} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge='end'
            aria-label='account of current user'
            aria-controls={menuId}
            aria-haspopup='true'
            onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label='show more'
            aria-controls={mobileMenuId}
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}
            color='inherit'
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );

  const renderDrawer = (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <div className={classes.toolbar}>
        <Typography variant='h6' noWrap>
          Baetron
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />

      <MenuList
        className={classes.menuItem}
        style={{ background: `${drawerbg}` }}
      >
        <MenuItem
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashboardRoundedIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
          component={Link}
          to='/users'
        >
          <ListItemIcon>
            <GroupAddSharpIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='User Management' onClick={handleClick} />
          {openCollapse ? (
            <ExpandLess className={classes.expandIcon} />
          ) : (
            <ExpandMore className={classes.expandIcon} />
          )}
        </MenuItem>
        <Collapse
          in={openCollapse}
          timeout='auto'
          unmountOnExit
          style={{ background: blueGrey[800] }}
        >
          <MenuList component='div' disablePadding>
            <MenuItem component={Link} to='/users' className={classes.nested}>
              <ListItemIcon>
                <PersonRounded className={classes.menuItem} />
              </ListItemIcon>
              <ListItemText primary='Manage users' />
            </MenuItem>
            <MenuItem component={Link} to='/' className={classes.nested}>
              <ListItemIcon>
                <BusinessCenterRounded className={classes.menuItem} />
              </ListItemIcon>
              <ListItemText primary='Roles' />
            </MenuItem>
            <MenuItem component={Link} to='/' className={classes.nested}>
              <ListItemIcon>
                <WcRounded className={classes.menuItem} />
              </ListItemIcon>
              <ListItemText primary='Sales Agents' />
            </MenuItem>
          </MenuList>
        </Collapse>
        <MenuItem
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PermContactCalendarRoundedIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Contacts' />
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <MonetizationOnSharpIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Purchases' />
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 4}
          onClick={event => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <AttachMoneyRoundedIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Sales' />
        </MenuItem>
        <MenuItem
          component={Link}
          to='/suppliers'
          selected={selectedIndex === 5}
          onClick={event => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <SupervisedUserCircleRounded className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Suppliers' />
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 6}
          onClick={event => handleListItemClick(event, 6)}
          component={Link}
          to='/apps/ecommerce/products'
        >
          <ListItemIcon>
            <ShoppingCartRoundedIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Ecommerce' onClick={handleClickEcommerce} />
          {openCollapseEcommerce ? (
            <ExpandLess className={classes.expandIcon} />
          ) : (
            <ExpandMore className={classes.expandIcon} />
          )}
        </MenuItem>
        <Collapse
          in={openCollapseEcommerce}
          timeout='auto'
          unmountOnExit
          style={{ background: blueGrey[800] }}
        >
          <MenuList component='div' disablePadding>
            <MenuItem
              component={Link}
              to='/products'
              className={classes.nested}
            >
              <ListItemIcon>
                <ShoppingBasketRoundedIcon className={classes.menuItem} />
              </ListItemIcon>
              <ListItemText primary='Products' />
            </MenuItem>
            <MenuItem
              component={Link}
              to='/apps/ecommerce/invoices'
              className={classes.nested}
            >
              <ListItemIcon>
                <ShoppingBasketRoundedIcon className={classes.menuItem} />
              </ListItemIcon>
              <ListItemText primary='Invoices' />
            </MenuItem>
            <MenuItem
              component={Link}
              to='/apps/ecommerce/orders'
              className={classes.nested}
            >
              <ListItemIcon>
                <BusinessCenterRounded className={classes.menuItem} />
              </ListItemIcon>
              <ListItemText primary='Orders' />
            </MenuItem>
            <MenuItem
              component={Link}
              to='/apps/ecommerce/products'
              className={classes.nested}
            >
              <ListItemIcon>
                <LocalMallRounded className={classes.menuItem} />
              </ListItemIcon>
              <ListItemText primary='Shop' />
            </MenuItem>
          </MenuList>
        </Collapse>
        <MenuItem
          selected={selectedIndex === 7}
          onClick={event => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <AssignmentRoundedIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Inventory' />
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 8}
          onClick={event => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <PollRoundedIcon className={classes.menuItem} />
          </ListItemIcon>
          <ListItemText primary='Reports' />
        </MenuItem>
      </MenuList>
      <Divider />
      <MenuList>
        {['HR', 'Taxes', 'Settings'].map((text, index) => (
          <MenuItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </MenuItem>
        ))}
      </MenuList>
    </Drawer>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {renderAppBar}
      {renderDrawer}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Layout;
