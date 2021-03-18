import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useStyles } from '../useStyles';

const Logo = () => {
  const classes = useStyles();

  return (
    <NavLink to="/travel-app">
      <Typography className={classes.title} variant="h6" noWrap>
        Travel app
      </Typography>
    </NavLink>
  );
};

export default Logo;
