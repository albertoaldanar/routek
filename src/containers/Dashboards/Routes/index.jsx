/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Button, ButtonToolbar, Container, Col, CardBody, Row, Nav, NavItem, NavLink, TabContent, TabPane,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import UserAddIcon from 'mdi-react/UserAddIcon';
import CalendarTaskIcon from 'mdi-react/CalendarTaskIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
import { connect } from 'react-redux';
import SettingsIcon from 'mdi-react/SettingsIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import MapMarkerPlusIcon from 'mdi-react/MapMarkerPlusIcon';
import PropTypes from 'prop-types';
import MapView from './components/MapView';
import Calendar from "./components/Calendar";
import Drivers from "./components/drivers";
import StopModal from "./components/modals/stops/index";
import RouteModal from "./components/modals/routes/routeModal";
import DayRoutes from "./components/dayRoutes";
import { getRoutes } from '../../../redux/actions/routesActions';
import { formRoute } from '../../../redux/actions/routesActions';
import { selectRoute } from '../../../redux/actions/routesActions';

class Routes extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };


  constructor(props) {
    super(props);
    this.state = {
      activeTab: '2',
      lat: 56.009483,
      lng: 92.8121694,
      driverSelected: null,
      activeDrivers: [],
      loadedData: false,
      showTaskModal: false,
      taskSelected: {},
      showCreateRouteModal: false,
      createTypeModal: null
    };

  }

  componentDidMount(){
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


  showTask(task){
    this.setState({
      taskSelected: task,
      showTaskModal: !this.state.showTaskModal
    })
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
    const { activeTab, lat, lng, driverSelected, showTaskModal, taskSelected, showCreateRouteModal, createRouteData, createTypeModal } = this.state;

    return (
      <div style = {{position: "relative", paddingLeft: 0}}>
            <div className ="dashboard__header-tools-container">
              <div className ="dashboard__header-tools-options">
                <p onClick = {this.toggle.bind(this, "2")} style ={{textDecoration: activeTab == "2" ? "underline":  "none"}}>Lista</p>
                <p onClick = {this.toggle.bind(this, "1")} style = {{textDecoration: activeTab == "1" ? "underline":  "none", paddingLeft: 20}}>Mapa</p>
              </div>

            </div>
              {
                activeTab == "1" ?
                  <MapView
                    data = {data}
                    lat={lat} lng={lng}
                    theme = {theme}
                    showIcon={true} driverSelected={driverSelected}
                    showTask = {this.showTask.bind(this)}
                    resetDrivers={this.resetDrivers.bind(this)} moveInMap={this.moveInMap.bind(this)} setCenter={this.setCenter.bind(this)}
                  />
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

