import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { Country } from './Home.types';
import { homeStyles } from './HomeStyles';
import Preloader from '../Preloader/Preloader';
import { setCountryId } from '../../redux/countriesReducer';

const Home = ({
  countries,
  isLoading,
}: {
  countries: Country[];
  isLoading: boolean;
}): JSX.Element => {
  const classes = homeStyles();
  const dispatch = useDispatch();

  const handleChooseCountry = (id: string) => {
    dispatch(setCountryId(id));
  };

  return (
    <>
      <h1 className={classes.countryListTitle}>Travel app</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className={classes.countryList}>
          {countries.map(({ _id, capital, name, img, info }: Country) => {
            return (
              <Card className={classes.countryCard} key={_id}>
                <NavLink to={`/country/${_id}`}>
                  <CardActionArea onClick={() => handleChooseCountry(_id)}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={img}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        className={classes.countryCardTitle}
                        gutterBottom
                        variant="h4"
                        component="h2">
                        {name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        {capital}
                      </Typography>
                      <Typography
                        className={classes.countryCardInfo}
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        {info}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NavLink>
                <CardActions>
                  <NavLink to={`/country/${_id}`} onClick={() => handleChooseCountry(_id)}>
                    <Button size="small" color="primary">
                      Go
                    </Button>
                  </NavLink>
                  <Button size="small" color="primary">
                    Like
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  countries: state.countries.countries,
  isLoading: state.countries.isLoading,
});

export default connect(mapStateToProps)(Home);
