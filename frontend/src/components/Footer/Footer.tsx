import React from 'react';
import { AppBar, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useStyles } from './FooterStyles';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerBlock}>
      <AppBar position="static">
        <div className={classes.footerInner}>
          <div className={classes.footerContent}>
            <div className={classes.appYear}>
              <Typography>2021</Typography>
            </div>
            <div className={classes.linkContent}>
              <div>
                {' '}
                <GitHubIcon />
              </div>

              <div className={classes.linkBox}>
                <Link href="https://github.com/DmitryBogdan90" color="inherit">
                  <Typography>DmitryBogdan90</Typography>
                </Link>
              </div>

              <div className={classes.linkBox}>
                <Link href="https://github.com/vzabavski" color="inherit">
                  <Typography> vzabavski</Typography>
                </Link>
              </div>

              <div className={classes.linkBox}>
                <Link href="https://github.com/zhenya-band" color="inherit">
                  <Typography> zhenya-band</Typography>
                </Link>
              </div>
              <div className={classes.linkBox}>
                <Link href="https://github.com/Gypsynkov" color="inherit">
                  <Typography> Gypsynkov</Typography>
                </Link>
              </div>
            </div>
            <div className={classes.rsLogo}>
              <Link href="https://rs.school/js/">
                <img
                  className={classes.logoImg}
                  src="https://rs.school/images/rs_school_js.svg"
                  alt="rsschool logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Footer;
