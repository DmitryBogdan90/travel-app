import React from 'react';
import { GeoJSON, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as Geo from './custom.geo.json';

import { homeStyles } from '../../Home/HomeStyles';

interface CoordinatesProps {
  lat: number;
  lng: number;
}

interface MapProps {
  map: CoordinatesProps;
}

export const Map = ({ map }: MapProps): JSX.Element => {
  const classes = homeStyles();
  const createBorders = () => {
    // @ts-ignore
    return <GeoJSON data={Geo.features} />;
  };
  return (
    <div className={classes.mapWrapper}>
      <MapContainer
        center={map ? [map.lat, map.lng] : [51, -0.9]}
        zoom={10}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {createBorders()}
        <Marker position={map ? [map.lat, map.lng] : [51, -0.9]}>
          <Popup>
            Capital
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
