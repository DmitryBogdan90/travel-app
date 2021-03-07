import React, { useState } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, IconButton, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    headerInner: {
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      padding: '0 15px',
      [theme.breakpoints.up('md')]: {
        padding: '0 40px',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      marginRight: theme.spacing(0),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: 'auto',
      },
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(35),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    homeMobile: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    formControl: {
      minWidth: 65,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(0, 5, 0, 1),
      },

      '& svg': {
        [theme.breakpoints.up('md')]: {
          color: '#fff',
        },
      },
    },
    selectEmpty: {
      color: '#000',
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        color: '#fff',
      },

      '&:before': {
        borderColor: '#fff',
        [theme.breakpoints.up('md')]: {
          color: '#000',
        },
      },
    },
    selectLabel: {
      color: '#000',
      [theme.breakpoints.up('md')]: {
        color: '#fff',
      },
    },
    tools: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  const mobileMenuId = 'header-mobile-menu';

  const [lang, setLang] = useState('ru');
  const [isAuthorized] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  const handleMobileMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setMenuOpen(true);
  };

  const renderMobileMenu = (
    <Menu
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem className={classes.homeMobile} onClick={handleMobileMenuClose}>
        <NavLink to="/">Home</NavLink>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        {isAuthorized ? (
          <Button color="inherit">Log out</Button>
        ) : (
          <NavLink to="/auth">Login</NavLink>
        )}
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <FormControl className={classes.formControl} focused={false}>
          <InputLabel className={classes.selectLabel} shrink id="select-placeholder">
            Language
          </InputLabel>
          <Select
            labelId="select-lang-label"
            id="select-lang-label"
            value={lang}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}>
            <MenuItem value="ru">ru</MenuItem>
            <MenuItem value="en">en</MenuItem>
            <MenuItem value="be">be</MenuItem>
          </Select>
        </FormControl>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.headerInner}>
          <NavLink to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              Travel app
            </Typography>
          </NavLink>
          <div className={classes.tools}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <FormControl className={classes.formControl} focused={false}>
                <InputLabel className={classes.selectLabel} shrink id="select-placeholder">
                  Language
                </InputLabel>
                <Select
                  labelId="select-lang-label"
                  id="select-lang-label"
                  value={lang}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}>
                  <MenuItem value="ru">ru</MenuItem>
                  <MenuItem value="en">en</MenuItem>
                  <MenuItem value="be">be</MenuItem>
                </Select>
              </FormControl>
              {isAuthorized ? (
                <Button color="inherit">Log out</Button>
              ) : (
                <NavLink to="/auth">
                  <Button color="inherit">Login</Button>
                </NavLink>
              )}
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Header;
