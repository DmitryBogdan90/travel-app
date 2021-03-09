import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core';

type LogInOutBtnProps = {
  isAuthorized: boolean;
};

const LogInOutBtn = ({ isAuthorized }: LogInOutBtnProps) => {
  return (
    <>
      {isAuthorized ? (
        <Button color="inherit">Log out</Button>
      ) : (
        <NavLink to="/auth">
          <Button color="inherit">Login</Button>
        </NavLink>
      )}
    </>
  );
};

export default LogInOutBtn;
