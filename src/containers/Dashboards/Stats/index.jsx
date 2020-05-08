/* eslint-disable */
import React from 'react';
import {
  Col, Container, Row, DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
 } from 'reactstrap';
import { withTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentUsers from './components/CurrentUsers';
import ActiveUsers from './components/ActiveUsers';
import SessionShort from './components/SessionShort';
import ActiveUsersShort from './components/ActiveUsersShort';
import NewUsersShort from './components/NewUsersShort';
import PageViewsShort from './components/PageViewsShort';
import AppTileClicks from './components/AppTileClicks';
import WeeklyStatMobile from './components/WeeklyStatMobile';
import GeneralStats from './components/GeneralStats';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

const Stats = ({ rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12} className="dashboard__title-and-button">
        <h3 className="page-title">Estadísticas de ruta</h3>
        <UncontrolledDropdown>
        <DropdownToggle className="icon icon--right" outline>
          <p>Este mes <ChevronDownIcon /></p>
          </DropdownToggle>
            <DropdownMenu className="dropdown__menu">
              <DropdownItem>Este año</DropdownItem>
              <DropdownItem>Esta mes</DropdownItem>
              <DropdownItem>Esta semana</DropdownItem>
              <DropdownItem>Todos los registros</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Col>
    </Row>
    <GeneralStats />
    <Row>
      <AppTileClicks dir={rtl.direction} />
      <CurrentUsers />
    </Row>
  </Container>
);

Stats.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(withTranslation('common')(Stats));
