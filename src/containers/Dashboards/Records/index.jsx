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
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import UserAddIcon from 'mdi-react/UserAddIcon';

class Records extends PureComponent {
  // static propTypes = {
  //   recordsTable: CryptoTableProps.isRequired,
  //   t: PropTypes.func.isRequired,
  // };

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
            <h3 className="page-title">{t('records.page_title')}</h3>
            <Button color="success" className="dashboard__add-team icon">
              <UserAddIcon /> {t('teams.add_team')}
            </Button>
          </Col>
        </Row>
        <div className="search_dropdown">
          <p className="search_label">Buscar: </p>
          <UncontrolledDropdown>
            <DropdownToggle className="icon icon--right" outline>
            <p>Actividades <ChevronDownIcon /></p>
            </DropdownToggle>
              <DropdownMenu className="dropdown__menu">
                <DropdownItem> Gastos</DropdownItem>
                <DropdownItem> Paradas fuera de ruta</DropdownItem>
                <DropdownItem> Indicencias</DropdownItem>
                <DropdownItem> Actividades</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <Row>
          <SearchRow />
        </Row>

      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   recordsTable: state.recordsTable.items,
// });


export default withTranslation('common')(Records);
