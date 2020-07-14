/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Button, ButtonToolbar, Container, Col, CardBody, Row, Nav, NavItem, NavLink, TabContent, TabPane,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapView from './components/MapView';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from "date-fns/locale/es";
import RightSidebar from './components/rightSidebar';
import CogOutlineIcon from 'mdi-react/CogOutlineIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import moment from 'moment';
import Drivers from "./components/drivers";
import StopModal from "./components/modals/stops/index";
import RouteModal from "./components/modals/routes/routeModal";
import DayRoutes from "./components/dayRoutes";
import { getRoutes } from '../../../redux/actions/routesActions';
import { formRoute } from '../../../redux/actions/routesActions';
import { selectRoute } from '../../../redux/actions/routesActions';

var date = new Date();
var formatted = moment(date).format('L');

const DayPicker = ({ value, onClick }) => (
  <div style = {{width: 110, height: 30}} onClick={onClick}>
   <p>
     {
       formatted == value ? "Rutas de hoy" : value
     }
      <ChevronDownIcon/>
    </p> 
  </div>
);

class Routes extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };


  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      lat: 56.009483,
      lng: 92.8121694,
      driverSelected: null,
      loadedData: false,
      taskSelected: {},
      createTypeModal: null, 
      showRightSidebar: true,
      dateDropdown: false, 
      daySelected: new Date(),
    };

  }

  componentDidMount(){
    console.log(formatted);
    this.props.getRoutes();
  }

 //NAVEGACIÓN EN MAPA
  setCenter(values) {

    this.setState({
      lat: values.lat,
      lng: values.lng
    });

    console.log(values);
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  moveInMap(driver){
    this.setState({
      lat: driver.location.lat, lng: driver.location.lng, driverSelected: driver.name
    })
  }

  resetDrivers(){
    this.setState({
      driverSelected: null
    })
  }

//--NAVEGACIÓN EN MAPA--

  render() {
    const { t, data, rtl, getRoutes, theme, formRoute, selectRoute} = this.props;
    const { activeTab, lat, lng, driverSelected, showRightSidebar, dateDropdown, daySelected  } = this.state;

    return (
      <div style = {{position: "relative", marginLeft: -10}}>
            <div className ="dashboard__header-tools-container">
              <div className ="dashboard__header-tools-options">
                <div className ="dashboard__header-tools-date-picker" onClick = {() => this.setState({dateDropdown: !this.state.dateDropdown})}>

                      {
                          <DatePicker
                            selected={daySelected}
                            onChange={date => this.setState({daySelected: date})}
                            locale="es"
                            customInput={
                             < DayPicker />
                            }
                          />
                      }
                </div>
               
                <p onClick = {this.toggle.bind(this, "2")} style ={{textDecoration: activeTab == "2" ? "underline":  "none"}}>Lista</p>
                <p onClick = {this.toggle.bind(this, "1")} style = {{textDecoration: activeTab == "1" ? "underline":  "none", paddingLeft: 20}}>Mapa</p>
                <div style = {{position: "absolute", right: 25, display: "flex", flexDirection: "row"}} >
                  <p onClick = {formRoute.bind(this, {prop: "displayRouteFormModal", value: true})}>+ Crear ruta</p>
                </div>
              </div>

            </div>
              {
                activeTab == "1" ?
                  <div style = {{position: "relative"}}>

                    {showRightSidebar ? 
                      <RightSidebar 
                        showRightSidebar = {() => this.setState({showRightSidebar: false})} 
                        data={data} 
                        moveInMap={this.moveInMap.bind(this)}
                      />
                    : 
                      <div className ="dashboard__map-drivers-sidebar-open" onClick = {() => this.setState({showRightSidebar: true})} >
                        <p style ={{marginTop: 10, marginLeft: 10}} >
                          <CogOutlineIcon /> Herramientas 
                        </p>
                      </div>
                    }

                    
                    <MapView
                      data = {data}
                      lat={lat} lng={lng}
                      theme = {theme}
                      showIcon={true} driverSelected={driverSelected}
                      resetDrivers={this.resetDrivers.bind(this)} moveInMap={this.moveInMap.bind(this)} setCenter={this.setCenter.bind(this)}
                    />
                  </div>

                :
                  <DayRoutes data= {data}/>
              }
            <StopModal />
            <RouteModal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rtl: state,
  data: state.routes,
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  getRoutes: () => dispatch(getRoutes()),
  formRoute: ({prop, value}) => dispatch(formRoute({prop, value})),
  selectRoute: (objectsArray) => dispatch(selectRoute(objectsArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Routes));

