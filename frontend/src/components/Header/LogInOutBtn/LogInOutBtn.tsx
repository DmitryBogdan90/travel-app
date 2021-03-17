import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

type LogInOutBtnProps = {
  isAuthorized: boolean;
};

const LogInOutBtn = ({ isAuthorized }: LogInOutBtnProps) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  return (
    <>
      {isAuthorized ? (
        <Button color="inherit" onClick={handleLogout}>
          Log out
        </Button>
      ) : (
        <NavLink to="/auth">
          <Button color="inherit">Login</Button>
        </NavLink>
      )}
    </>
  );
};

export default LogInOutBtn;
