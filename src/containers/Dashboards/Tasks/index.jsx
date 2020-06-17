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
import events from "./components/events";
import Drivers from "./components/drivers";
import DriversList from "./components/driversList";
import TaskModal from "./components/taskModal";
import CreateRouteModal from "./components/createRouteModal";
import { getRoutes } from '../../../redux/actions/routesActions';
// import { changeCryptoTableData, loadCryptoTableData } from '../../../redux/actions/cryptoTableActions';

class Tasks extends PureComponent {
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
      activeDrivers: [],
      loadedData: false,
      showTaskModal: false,
      taskSelected: {},
      showCreateRouteModal: false,
      createRouteData: {
        duplicateRoute: false,
        multipleDays: false,
        multipleDrivers: false,
        routeName: "",
        startDate: "",
        endDate: "",

      }
    };

  }

  componentDidMount(){
    this.props.getRoutes();
  }

  setCenter(values) {

    this.setState({
      lat: values.lat,
      lng: values.lng
    });

    console.log(values);
  }

  createRouteSetData(attr){

    console.log("ATTR =>", attr);
    switch (attr) {
      case 1:
        return  this.setState(prevState => ({
            createRouteData: {
                ...prevState.createRouteData,
                duplicateRoute: !this.state.createRouteData.duplicateRoute
            }
        }))
        break;
      case 2:
        return  this.setState(prevState => ({
            createRouteData: {
                ...prevState.createRouteData,
                multipleDays: !this.state.createRouteData.multipleDays
            }
        }))
        break;
      case 3:
        return  this.setState(prevState => ({
            createRouteData: {
                ...prevState.createRouteData,
                multipleDrivers: !this.state.createRouteData.multipleDrivers
            }
        }))
        break;
      default:
        console.log("Invalid Attr.")
        break;
    }
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

  render() {
    const { t, data, rtl, getRoutes, theme} = this.props;
    const { activeTab, lat, lng, driverSelected, showTaskModal, taskSelected, showCreateRouteModal, createRouteData } = this.state;
    console.log("R=> ", this.props.data);

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12} className="dashboard__title-and-button">
            <h3 className="page-title">{t('tasks.page_title')}</h3>
            <Button color="success" className="dashboard__add-team icon" onClick = {() => this.setState({showCreateRouteModal: !this.state.showCreateRouteModal})}>
              <MapMarkerPlusIcon/> {t('tasks.add_route')}
            </Button>
          </Col>
        </Row>
        <CardBody style={{position: "relative"}}>
          <div className="tabs tabs--justify tabs--bordered-bottom">
            <div className="tabs__wrap">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    <CalendarTaskIcon /> {t('tasks.activities')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    <MapMarkerIcon /> {t('tasks.map')}
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Calendar events={events}/>
                </TabPane>
                <TabPane tabId="2">
                  <MapView
                    data = {data}
                    lat={lat} lng={lng}
                    theme = {theme}
                    showIcon={true} driverSelected={driverSelected}
                    showTask = {this.showTask.bind(this)}
                    resetDrivers={this.resetDrivers.bind(this)} moveInMap={this.moveInMap.bind(this)} setCenter={this.setCenter.bind(this)}/>
                  <Drivers data={data} moveInMap={this.moveInMap.bind(this)}/>
                  <div className="dashboard__map-button">
                      <UncontrolledDropdown>
                        <DropdownToggle className="icon icon--right" color="success">
                          <p>Ruta de hoy <ChevronDownIcon /></p>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown__menu">
                          <DropdownItem>Ruta de hoy</DropdownItem>
                          <DropdownItem>Cambiar fecha</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                  </div>
                </TabPane>
              </TabContent>
              <TaskModal
                showTaskModal={showTaskModal}
                taskSelected ={taskSelected}
                showTask = {this.showTask.bind(this)}
              />

              <CreateRouteModal
                showCreateRouteModal = {showCreateRouteModal}
                showModal = {() => this.setState({showCreateRouteModal: !this.state.showCreateRouteModal})}
                createRouteData = {createRouteData}
                createRouteSetData = {this.createRouteSetData.bind(this)}
              />

            </div>
          </div>
        </CardBody>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  rtl: state,
  data: state.routes,
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  getRoutes: () => dispatch(getRoutes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Tasks));

