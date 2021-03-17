import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerBlock: {
      width: '100%',
    },
    footerInner: {
      position: 'fixed',
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      bottom: '0px',
      padding: '0 15px',
      backgroundColor: '#3f51b5',
      color: 'white',
      [theme.breakpoints.up('xl')]: {
        backgroundColor: 'white',
        color: '#3f51b5',
      },
    },
    footerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      minHeight: '64px',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
    },
    linkContent: {
      display: 'flex',
      alignItems: 'center',
      width: '50%',
      justifyContent: 'space-around',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
    },
    appYear: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
    },
    linkBox: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rsLogo: {
      minWidth: '160px',
    },
    logoImg: {
      maxHeight: '30px',
      maxWidth: '180px',
    },
  }),
);
