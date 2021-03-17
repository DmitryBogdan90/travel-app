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
    countryPage: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
    },
    countryName: {
      fontSize: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(3),
      },
    },
    capitalName: {
      fontSize: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(2),
      },
    },
    countryInfo: {
      overflow: 'hidden',
    },
    sightList: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
    },
    sightCard: {
      width: '100%',
      height: '100%',
      maxWidth: 320,
      maxHeight: 320,
      minWidth: 250,
      flexBasis: '30%',
      margin: theme.spacing(1),
    },
    sightCardTitle: {
      fontSize: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(2),
      },
    },
    sightCardInfo: {
      overflow: 'hidden',
      fontSize: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(1),
      },
    },
    mapWrapper: {
      width: '50vw',
      height: '30vw',
      [theme.breakpoints.down('sm')]: {
        height: '50vw',
      },
    },
  }),
);
