import React from 'react';
import { AppBar, Grid, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useStyles } from './FooterStyles';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container className={classes.footerInner}>
          <Grid className={classes.footerContent} container spacing={3}>
            <Grid item xs>
              <Typography className={classes.appYear}>2021</Typography>
            </Grid>
            <Grid className={classes.linkContent} container xs={8}>
              <Grid>
                {' '}
                <GitHubIcon />
              </Grid>

              <Grid item className={classes.linkBox}>
                <Link href="https://github.com/DmitryBogdan90" color="inherit">
                  <Typography>DmitryBogdan90</Typography>
                </Link>
              </Grid>

              <Grid item className={classes.linkBox}>
                <Link href="https://github.com/vzabavski" color="inherit">
                  <Typography> vzabavski</Typography>
                </Link>
              </Grid>

              <Grid item className={classes.linkBox}>
                <Link href="https://github.com/zhenya-band" color="inherit">
                  <Typography> zhenya-band</Typography>
                </Link>
              </Grid>
              <Grid item className={classes.linkBox}>
                <Link href="https://github.com/Gypsynkov" color="inherit">
                  <Typography> Gypsynkov</Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs>
              <Link href="https://rs.school/js/">
                <img
                  className={classes.rsLogo}
                  src="https://rs.school/images/rs_school_js.svg"
                  alt="rsschool logo"
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Footer;
