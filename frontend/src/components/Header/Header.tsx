import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { NavLink } from 'react-router-dom';

import LangSelect from './LangSelect/LangSelect';
import LogInOutBtn from './LogInOutBtn/LogInOutBtn';
import Logo from './Logo/Logo';
import { MenuItemsType } from './types/MenuItemsType';
import MobileMenu from './MobileMenu/MobileMenu';
import { mobileMenuId } from '../../constants';
import Search from './Search/Search';
import { useStyles } from './useStyles';

const Header = () => {
  const classes = useStyles();
  const [lang, setLang] = useState(window.navigator.language.slice(0, 2));
  const [isAuthorized] = useState(false);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleLangChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  const handleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(mobileMenuAnchorEl ? null : event.currentTarget);
  };

  const menuItems: Array<MenuItemsType> = [
    {
      id: 1,
      content: <NavLink to="/">Home</NavLink>,
    },
    {
      id: 2,
      content: isAuthorized ? (
        <NavLink to="/">Log out</NavLink>
      ) : (
        <NavLink to="/auth">Log in</NavLink>
      ),
    },
    {
      id: 3,
      content: <LangSelect lang={lang} handleLangChange={handleLangChange} />,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.headerInner}>
          <Logo />
          <div className={classes.tools}>
            <Search />
            <div className={classes.sectionDesktop}>
              <LangSelect lang={lang} handleLangChange={handleLangChange} />
              <LogInOutBtn isAuthorized={isAuthorized} />
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenu}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MobileMenu
        menuItems={menuItems}
        isMenuOpen={!!mobileMenuAnchorEl}
        handleMobileMenu={handleMobileMenu}
        mobileMenuAnchorEl={mobileMenuAnchorEl}
      />
    </div>
  );
};

export default Header;
