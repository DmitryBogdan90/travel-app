import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

import { MenuItemsType } from '../types/MenuItemsType';
import { mobileMenuId } from '../../../constants';

type MobileMenuProps = {
  isMenuOpen: boolean;
  handleMobileMenu: (event: React.MouseEvent<HTMLElement>) => void;
  mobileMenuAnchorEl: null | HTMLElement;
  menuItems: Array<MenuItemsType>;
};

const MobileMenu = ({
  isMenuOpen,
  handleMobileMenu,
  mobileMenuAnchorEl,
  menuItems,
}: MobileMenuProps) => {
  return (
    <Menu
      id={mobileMenuId}
      keepMounted
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMobileMenu}>
      {menuItems.map((item: MenuItemsType) => (
        <MenuItem key={item.id} onClick={handleMobileMenu}>
          {item.content}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MobileMenu;
