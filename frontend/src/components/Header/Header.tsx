import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { languages } from '../../constants';
import MobileMenu from './MobileMenu/MobileMenu';
import { useStyles } from './useStyles';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import LangSelect from './LangSelect/LangSelect';
import LogInOutBtn from './LogInOutBtn/LogInOutBtn';

const Header = () => {
  const classes = useStyles();
  const mobileMenuId = 'header-mobile-menu';

  const [lang, setLang] = useState(languages[0]);
  const [isAuthorized] = useState(false);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleLangChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

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
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        isAuthorized={isAuthorized}
        mobileMenuAnchorEl={mobileMenuAnchorEl}
        lang={lang}
        handleLangChange={handleLangChange}
      />
    </div>
  );
};

export default Header;
