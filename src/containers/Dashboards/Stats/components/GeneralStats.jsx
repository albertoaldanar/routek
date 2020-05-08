/* eslint-disable react/no-array-index-key */
/* eslint-disable */
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ClockIcon from 'mdi-react/ClockIcon';
import CheckIcon from 'mdi-react/CheckIcon';
import CalendarTaskIcon from 'mdi-react/CalendarTaskIcon';
import PhoneAlertIcon from "mdi-react/PhoneAlertIcon";
import {
  Card, CardBody, Col, Row,
} from 'reactstrap';

const GeneralStats = ({ t }) => (
  <Row>
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="mobile-app-widget">
            <div className="mobile-app-widget__title">
              <h5>{t('stats.total_activities')}</h5>
            </div>
            <div className="mobile-app-widget__top-line mobile-app-widget__top-line--pink">
              <p className="mobile-app-widget__total-stat">17 148</p>
              <CalendarTaskIcon className="dashboard__trend-icon" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>

    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="mobile-app-widget">
            <div className="mobile-app-widget__title">
              <h5>{t('stats.done_activities')}</h5>
            </div>
            <div className="mobile-app-widget__top-line mobile-app-widget__top-line--lime">
              <p className="mobile-app-widget__total-stat">1 472</p>
              <CheckIcon className="dashboard__trend-icon" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>

    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="mobile-app-widget">
            <div className="mobile-app-widget__title">
              <h5>{t('stats.not_done_activities')}</h5>
            </div>
            <div className="mobile-app-widget__top-line mobile-app-widget__top-line--blue">
              <p className="mobile-app-widget__total-stat">568</p>
              <ClockIcon className="dashboard__trend-icon" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>

    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="mobile-app-widget">
            <div className="mobile-app-widget__title">
              <h5>{t('stats.problems')}</h5>
            </div>
            <div className="mobile-app-widget__top-line mobile-app-widget__top-line--turquoise">
              <p className="mobile-app-widget__total-stat">2</p>
              <PhoneAlertIcon className="dashboard__trend-icon" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

GeneralStats.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(GeneralStats);
