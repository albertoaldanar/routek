/* eslint-disable */
import React from 'react';
import { Col } from 'reactstrap';
import { compose, withProps } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import silverMapStyle from './silverMapStyle.json';
import blueMapStyle from './blueMapStyle.json';
import retroMapStyle from './retroMapStyle.json';
import darkMapStyle from './darkMapStyle.json';

const MainMap = compose(
  withProps({
    // generate your API key
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA1PquORAjAjumChpMb1to9WHsifrBrjvs&callback=initMap'
    + 'exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="map" style={{ height: '445px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(() => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 56.009483, lng: 92.8121694 }}
    defaultOptions={{ styles: blueMapStyle }}
  />
));

const MapView = () => (
  <Col xs={12} md={12} lg={12}>
    <MainMap />
  </Col>
);

// MapView.propTypes = {
//   t: PropTypes.func.isRequired,
// };


export default withTranslation('common')(MapView);
