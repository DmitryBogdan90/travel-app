import React from 'react';

import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../useStyles';

const Logo = () => {
  const classes = useStyles();

  return (
    <NavLink to="/">
      <Typography className={classes.title} variant="h6" noWrap>
        Travel app
      </Typography>
    </NavLink>
  );
};

export default Logo;
