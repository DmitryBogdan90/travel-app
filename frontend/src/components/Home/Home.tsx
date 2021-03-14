import React from 'react';
import { useStyles } from './useStyles';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.countryListTitle}>Travel app</h1>
      <div className={classes.countryList}>
        <div className={classes.countryCard}>
          <div className={classes.countryCardImage}>Image</div>
          <div className={classes.countryCardButton}>Button</div>
        </div>
      </div>
    </>
  );
};

export default Home;
