import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    footerInner: {
      position: 'fixed',
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      bottom: '0px',
      padding: '0 15px',
      color: 'black',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    footerContent: {},
    linkContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    appYear: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
    },
    link: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'black',
    },
    linkBox: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rsLogo: {
      maxHeight: '30px',
      maxWidth: '180px',
    },
  }),
);
