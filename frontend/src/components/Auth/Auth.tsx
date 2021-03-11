/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

import AuthForm from './AuthForm/AuthForm';
import TabPanel from './TabPanel/TabPanel';
import { useStyles } from './useStyles';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Auth = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.authWrapper}>
      <Tabs value={tabValue} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Sign up" {...a11yProps(0)} />
        <Tab label="Log in" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <AuthForm isSignUp />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <AuthForm />
      </TabPanel>
    </div>
  );
};

export default Auth;
