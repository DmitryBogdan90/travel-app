import { makeStyles, createStyles } from '@material-ui/core/styles';

export const weatherStyles = makeStyles((theme) =>
  createStyles({
    weatherWrapper: {
      textAlign: 'center',
      padding: theme.spacing(1),
      border: '2px solid #00000024;',
      color: 'rgba(0, 0, 0, 0.9)',
      fontWeight: 600,
    },
    weather: {
      marginRight: '20px',
      [theme.breakpoints.down('sm')]: {
        marginRight: '0',
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15px',
    },
    temp: {
      fontSize: '18px',
      fontWeight: 600,
    },
  }),
);
