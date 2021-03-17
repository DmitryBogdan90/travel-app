import { makeStyles, createStyles } from '@material-ui/core/styles';

export const exchangeRatesStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontWeight: 600,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
