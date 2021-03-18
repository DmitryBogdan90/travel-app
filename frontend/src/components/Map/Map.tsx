import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { connect } from 'react-redux';
import * as Geo from './countries.geo.json';

import { homeStyles } from '../Home/HomeStyles';

const getCountryISO3 = require('country-iso-2-to-3');

interface CoordinatesProps {
  lat: number;
  lng: number;
}

interface MapProps {
  map: CoordinatesProps;
  countryName: string;
}

const Map = ({ map, countryName }: MapProps): JSX.Element => {
  const classes = homeStyles();
  const [polygonData, setPolygonData] = useState<any>([]);

  useEffect(() => {
    if (countryName) {
      const iso3Name = getCountryISO3(countryName);
      // @ts-ignore
      const countryData = Geo.features.find(
        (country: any) => country.properties.ISO_A3 === iso3Name,
      );
      if (countryData) {
        // @ts-ignore
        const reversedCoordinates = countryData.geometry.coordinates.map((row) =>
          row.map((item: any) => item.map((i: any) => [i[1], i[0]])),
        );
        setPolygonData(reversedCoordinates);
      }
    }
  }, [countryName]);

  return (
    <>
      {map.lat && countryName && (
        <div className={classes.mapWrapper}>
          <MapContainer
            center={map ? [map.lat, map.lng] : [51, -0.9]}
            zoom={5}
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Polygon positions={polygonData.length ? polygonData : []} />;
            <Marker position={map ? [map.lat, map.lng] : [51, -0.9]}>
              <Popup>Capital</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    countryName: state?.countries?.weather?.sys?.country,
  };
};

export default connect(mapStateToProps)(Map);
