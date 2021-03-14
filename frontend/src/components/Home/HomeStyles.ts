import { makeStyles, createStyles } from '@material-ui/core/styles';

export const homeStyles = makeStyles((theme) =>
  createStyles({
    countryListTitle: {
      textAlign: 'center',
    },
    countryList: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
    },
    countryCard: {
      maxWidth: 320,
      maxHeight: 500,
      minWidth: 250,
      flexBasis: '30%',
      margin: theme.spacing(1),
    },
    countryCardTitle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(3),
      },
    },
    countryCardInfo: {
      overflow: 'hidden',
    },
  }),
);
