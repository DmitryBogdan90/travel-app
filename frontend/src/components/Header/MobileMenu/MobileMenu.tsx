import React from 'react';
import { NavLink } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import { Menu } from '@material-ui/core';
import { useStyles } from '../useStyles';
import LangSelect from '../LangSelect/LangSelect';
import LogInOutBtn from '../LogInOutBtn/LogInOutBtn';

type MobileMenuProps = {
  isMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  mobileMenuAnchorEl: null | HTMLElement;
  isAuthorized: boolean;
  lang: string;
  handleLangChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const MobileMenu = ({
  isMenuOpen,
  handleMobileMenuClose,
  mobileMenuAnchorEl,
  isAuthorized,
  lang,
  handleLangChange,
}: MobileMenuProps) => {
  const classes = useStyles();
  const mobileMenuId = 'header-mobile-menu';

  return (
    <div>
      <Menu
        id={mobileMenuId}
        keepMounted
        anchorEl={mobileMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMobileMenuClose}>
        <MenuItem className={classes.homeMobile} onClick={handleMobileMenuClose}>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <LogInOutBtn isAuthorized={isAuthorized} />
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <LangSelect lang={lang} handleLangChange={handleLangChange} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
