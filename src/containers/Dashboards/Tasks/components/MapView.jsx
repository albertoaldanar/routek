/* eslint-disable */
import React from 'react';
import { Col, Button } from 'reactstrap';
import { compose, withProps, withStateHandlers } from 'recompose';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, Polyline } from 'react-google-maps';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import CloseIcon from 'mdi-react/CloseIcon';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import silverMapStyle from './silverMapStyle.json';
import blueMapStyle from './blueMapStyle.json';
import retroMapStyle from './retroMapStyle.json';
import darkMapStyle from './darkMapStyle.json';
import nightMapStyle from './nightMapStyle.json';
import UserAddIcon from 'mdi-react/UserAddIcon';

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
)((props) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 56.009483, lng: 92.8121694 }}
    defaultOptions={{ styles: blueMapStyle, mapTypeControl: false, streetViewControl: false, }}
  >
    {
      props.events.map(route => {
        console.log("routes=>", route);
        var locations = [];
        return route.paradas.map(parada => {
          console.log(parada.lng, parada.lat);
          locations.push({"lat": parada.lat, "lng": parada.lng});
          return(
            <Polyline
              path={locations}
              options={{
              strokeColor: route.color,
              strokeOpacity: 1,
              strokeWeight: 2,
              icons: [{
                icon: "hello",
                offset: '0',
                repeat: '10px'
              }],
              }}
            />
          );
        })
      })
    }

    {
      props.events.map(route => {
          console.log("routes=>", route);
        return route.paradas.map(parada => {
          console.log(parada.lng, parada.lat);
          return(
              <Marker position={{ "lat": parada.lat, "lng": parada.lng}}>
                <InfoBox options={{ closeBoxURL: '', enableEventPropagation: true }}>
                  <div className="map__marker-label">
                    <div className="map__marker-label-content">
                      <div className="map__maker-label-close" onClick={props.onToggleOpen}><CloseIcon /></div>
                      {route.color}
                    </div>
                  </div>
                </InfoBox>
              </Marker>
          );
        })
      })
    }

  </GoogleMap>
));

const MapView = (props) => (
  <Col xs={12} md={12} lg={12}>
    <MainMap isMarkerShown events={props.events}/>
  </Col>
);

// MapView.propTypes = {
//   t: PropTypes.func.isRequired,
// };


export default withTranslation('common')(MapView);
