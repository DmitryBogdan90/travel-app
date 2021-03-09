import React from 'react';
import { NavLink } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import { Menu } from '@material-ui/core';
import { useStyles } from '../useStyles';
import LangSelect from '../LangSelect/LangSelect';
import LogInOutBtn from '../LogInOutBtn/LogInOutBtn';

type MobileMenuProps = {
  isMenuOpen: boolean;
  handleMobileMenu: (event: React.MouseEvent<HTMLElement>) => void;
  mobileMenuAnchorEl: null | HTMLElement;
  isAuthorized: boolean;
  lang: string;
  handleLangChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const MobileMenu = ({
  isMenuOpen,
  handleMobileMenu,
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
        onClose={handleMobileMenu}>
        <MenuItem className={classes.homeMobile} onClick={handleMobileMenu}>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem onClick={handleMobileMenu}>
          <LogInOutBtn isAuthorized={isAuthorized} />
        </MenuItem>
        <MenuItem onClick={handleMobileMenu}>
          <LangSelect lang={lang} handleLangChange={handleLangChange} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
