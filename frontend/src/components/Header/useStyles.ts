import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    headerInner: {
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      padding: '0 15px',
      [theme.breakpoints.up('md')]: {
        padding: '0 40px',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      marginRight: theme.spacing(0),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: 'auto',
      },
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(35),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    homeMobile: {
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    formControl: {
      minWidth: 65,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(0, 5, 0, 1),
      },

      '& svg': {
        [theme.breakpoints.up('md')]: {
          color: '#fff',
        },
      },
    },
    selectEmpty: {
      color: '#000',
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        color: '#fff',
      },

      '&:before': {
        borderColor: '#fff',
        [theme.breakpoints.up('md')]: {
          color: '#000',
        },
      },
    },
    selectLabel: {
      color: '#000',
      [theme.breakpoints.up('md')]: {
        color: '#fff',
      },
    },
    tools: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
  }),
);
