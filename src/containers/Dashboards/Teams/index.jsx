import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AddTeam from './components/AddTeam';
// import TotalPageViews from './components/TotalPageViews';
// import NewUsers from './components/NewUsers';
// import BounceRate from './components/BounceRate';
// import ABTestingAnalytics from './components/ABTestingAnalytics';
// import SalesStatistic from './components/SalesStatistic';
// import VisitorsSessions from './components/VisitorsSessions';
// import BounceRateArea from './components/BounceRateArea';
// import AudienceByCountry from './components/AudienceByCountry';
// import BudgetStatistic from './components/BudgetStatistic';
// import BestSellingRegions from './components/BestSellingRegions';
// import GoalsCompletion from './components/GoalsCompletion';
// import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const Teams = ({ t }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('teams.page_title')}</h3>
      </Col>
    </Row>
    <Row>
      <AddTeam />
    </Row>
  </Container>
);

Teams.propTypes = {
  // rtl: RTLProps.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(withTranslation('common'), connect(state => ({
  // rtl: state.rtl,
  rtl: state,
})))(Teams);
