/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Button, Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
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
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import UserAddIcon from 'mdi-react/UserAddIcon';

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
          <Col md={12} className="dashboard__title-and-button">
            <h3 className="page-title">{t('records.page_title')}</h3>
            <Button color="success" className="dashboard__add-team icon">
              <UserAddIcon /> {t('teams.add_team')}
            </Button>
          </Col>
        </Row>
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
