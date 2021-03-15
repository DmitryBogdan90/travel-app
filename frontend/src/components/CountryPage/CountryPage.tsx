import React, { useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { Country, Sight } from '../Home/Home.types';
import { homeStyles } from '../Home/HomeStyles';
import { setActiveCountryData, setCountryId } from '../../redux/countriesReducer';
import Weather from '../Weather/Weather';

const CountryPage = ({
  activeCountryData,
  location,
}: {
  activeCountryData: Country;
  location: any;
}): JSX.Element => {
  const { pathname } = location;
  const { name: countryName, capital, info, sights } = activeCountryData;
  const dispatch = useDispatch();
  const classes = homeStyles();

  useEffect(() => {
    axios.get(`/countries/${pathname.slice(9)}`).then(({ data }) => {
      dispatch(setCountryId(pathname?.slice(9)));
      dispatch(setActiveCountryData(data));
    });
  }, []);

  return (
    <div className={classes.countryPage}>
      <Weather capital={capital}/>
      <div className={classes.countryName}>{countryName}</div>
      <div className={classes.capitalName}>{capital}</div>
      <div className={classes.countryInfo}>{info}</div>
      <div className={classes.sightList}>
        {sights.map(({ name, description, img: sightImg }: Sight) => (
          <Card className={classes.sightCard} key={name}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={sightImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  className={classes.sightCardTitle}
                  gutterBottom
                  variant="h4"
                  component="h2">
                  {name}
                </Typography>
                <Typography
                  className={classes.sightCardInfo}
                  variant="body2"
                  color="textSecondary"
                  component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Go
              </Button>
              <Button size="small" color="primary">
                Like
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  activeCountryData: state.countries.activeCountryData,
});

export default connect(mapStateToProps, { setCountryData: setActiveCountryData })(CountryPage);
