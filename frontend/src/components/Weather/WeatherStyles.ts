import { makeStyles, createStyles } from '@material-ui/core/styles';

export const weatherStyles = makeStyles((theme) =>
  createStyles({
    weatherWrapper: {
      textAlign: 'center',
      padding: theme.spacing(1),
      border: '1px solid black',
    },
    temp: {
      fontSize: '18px',
      fontWeight: 600,
    },
  }),
);
