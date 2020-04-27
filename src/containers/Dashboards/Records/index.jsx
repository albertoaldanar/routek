import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TotalProfitEarned from './components/TotalProfitEarned';
import TotalCustomers from './components/TotalCustomers';
import TotalBookings from './components/TotalBookings';
import BookingCancels from './components/BookingCancels';
import RecordsList from './components/RecordsList';
import { CryptoTableProps } from '../../../shared/prop-types/TablesProps';

class Records extends PureComponent {
  static propTypes = {
    recordsTable: CryptoTableProps.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { recordsTable, t } = this.props;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t('records.page_title')}</h3>
          </Col>
        </Row>
        <Row>
          <TotalProfitEarned />
          <TotalBookings />
          <TotalCustomers />
          <BookingCancels />
        </Row>
        <Row>
          <RecordsList recordsTable={recordsTable} />
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  recordsTable: state.recordsTable.items,
  rtl: state,
}))(withTranslation('common')(Records));
