/* eslint-disable react/no-array-index-key */
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';
import {
  Card, CardBody, Col,
} from 'reactstrap';

const PageViewsShort = ({ t }) => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <CardBody className="dashboard__card-widget">
        <div className="mobile-app-widget">
          <div className="mobile-app-widget__title">
            <h5>{t('dashboard_mobile_app.widget_pageviews')}</h5>
          </div>
          <div className="mobile-app-widget__top-line mobile-app-widget__top-line--turquoise">
            <p className="mobile-app-widget__total-stat">21 534</p>
            <TrendingDownIcon className="dashboard__trend-icon" />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

PageViewsShort.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(PageViewsShort);
