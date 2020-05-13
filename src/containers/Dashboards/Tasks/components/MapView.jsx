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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//OPCION 1 MARKER
const icon2 = "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_purple10.png"
//red, black, blue, green, grey, orange, purple, white, yellow
//OPCION 2 MARKER
const icon3 = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=3|000000|F5F5F5';

var mIcon = {
  path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
  fillOpacity: 1,
  fillColor: 'gold',
  strokeOpacity: 1,
  strokeWeight: 0.4,
  strokeColor: '#333',
  scale: 1.3
};

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
    defaultOptions={{ styles: nightMapStyle, mapTypeControl: false, streetViewControl: false, }}
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
        return route.paradas.map((parada, index) => {
          console.log(parada.lng, parada.lat);
          return(
            <div>
              <Marker position={{ "lat": parada.lat, "lng": parada.lng}} icon={icon2}>
              </Marker>
            </div>
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



// {
//   "abonos":[
//     {
//       "apellidomat": "DFWSADF",
//       "apellidopat": "FADFDS",
//       "fechaAlta": "2019-03-25",
//       "fechaVencimiento": "2021-03-20",
//       "folio": 29985,
//       "folioSeguro": 29985,
//       "iduSeguro": 1,
//       "importe": 0,
//       "mesesSeguro": "1",
//       "nombre": "AFA",
//       "tipoAsegurado": "Adicional",
//       "tipoPlan": "",
//       "total": 0
//     },
//     {
//       "apellidomat": "CAMPOS",
//       "apellidopat": "QUINTERO",
//       "fechaAlta": "2019-03-25",
//       "fechaVencimiento": "2021-03-20",
//       "folio": 49230,
//       "folioSeguro": 49230,
//       "iduSeguro": 5,
//       "importe": 95,
//       "mesesSeguro": "1",
//       "nombre": "MARIA ISABEL",
//       "tipoAsegurado": "Titular",
//       "tipoPlan": "Quintuple                     ",
//       "total": 95
//     },

//   ],
//   "fechaSistema": "2020-04-09",
//   "fechaVencimiento": "2020-06-11",
//   "folioAbono": "2004090490000000047",
//   "iduseguro": 1,
//   "importeTotal": 95,
//   "index": 29,
//   "numeroCaja": "69",
//   "numeroTienda": "490",
//   "token": "10835456",
//   "usuarioSistema": "90011322"
// }
