/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
// import FilterIcon from 'mdi-react/FilterIcon';
// import SearchIcon from 'mdi-react/SearchIcon';
import TotalProfitEarned from './components/TotalProfitEarned';
import TotalCustomers from './components/TotalCustomers';
import TotalBookings from './components/TotalBookings';
import BookingCancels from './components/BookingCancels';
import RecordsList from './components/RecordsList';
import SearchRow from "./components/SearchRow";
import { CryptoTableProps } from '../../../shared/prop-types/TablesProps';

class Records extends PureComponent {
  static propTypes = {
    recordsTable: CryptoTableProps.isRequired,
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
    const { recordsTable, t } = this.props;
    const { activeTab } = this.state;

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
          <SearchRow />
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
