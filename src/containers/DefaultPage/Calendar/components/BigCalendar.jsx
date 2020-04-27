import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import Calendar from '../../../../shared/components/Calendar';
import events from './events';

const BigCalendar = ({ dir }) => (
  <Col md={12} lg={12} xl={12}>
    <Calendar dir={dir} events={events} />
  </Col>
);

BigCalendar.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default BigCalendar;
