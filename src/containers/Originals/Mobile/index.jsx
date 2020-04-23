import React from 'react';
import { Col, Container, Row } from 'reactstrap';
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
import SocialMarketing from './components/SocialMarketing';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const Mobile = ({ rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Estadísticas de ruta</h3>
      </Col>
    </Row>
    <Row>
      <CurrentUsers />
      <ActiveUsers dir={rtl.direction} />
    </Row>
    <Row>
      <SessionShort />
      <ActiveUsersShort />
      <NewUsersShort />
      <PageViewsShort />
    </Row>
    <Row>
      <AppTileClicks dir={rtl.direction} />
      <WeeklyStatMobile />
      <SocialMarketing />
    </Row>
  </Container>
);

Mobile.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(withTranslation('common')(Mobile));
