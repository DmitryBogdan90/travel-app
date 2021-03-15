import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles, createStyles } from '@material-ui/core/styles';

export const preloaderStyles = makeStyles(() =>
  createStyles({
    preloaderContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px',
    },
  }),
);

const Preloader = () => {
  const classes = preloaderStyles();

  return (
    <div className={classes.preloaderContainer}>
      <CircularProgress size={80}/>
    </div>
  );
};

export default Preloader;
