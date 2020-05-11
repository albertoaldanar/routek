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
import PropTypes from 'prop-types';
import MapView from './components/MapView';
import Calendar from "./components/Calendar";
import events from "./components/events";
import Drivers from "./components/drivers";

class Tasks extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      activeTab: '1',
    };
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    const { t } = this.props;
    const { activeTab } = this.state;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12} className="dashboard__title-and-button">
            <h3 className="page-title">{t('tasks.page_title')}</h3>
            <Button color="success" className="dashboard__add-team icon">
              <UserAddIcon /> {t('tasks.add_activity')}
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
                  <MapView />
                  <Drivers/>
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
            </div>
          </div>
        </CardBody>
      </Container>
    );
  }
}

export default connect(state => ({
  rtl: state,
}))(withTranslation('common')(Tasks));
