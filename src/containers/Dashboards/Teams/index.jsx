/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Col, Container, Row, Button
} from 'reactstrap';
import UserAddIcon from 'mdi-react/UserAddIcon';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import Modal from '@material-ui/core/Modal';
import { formatDistance } from 'date-fns'
import PropTypes from 'prop-types';
// import { es } from 'date-fns/locale'
import * as rdrLocales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import AddTeam from './components/AddTeam';
// import TotalPageViews from './components/TotalPageViews';
// import NewUsers from './components/NewUsers';
// import BounceRate from './components/BounceRate';
// import ABTestingAnalytics from './components/ABTestingAnalytics';
// import SalesStatistic from './components/SalesStatistic';
// import VisitorsSessions from './components/VisitorsSessions';
// import BounceRateArea from './components/BounceRateArea';
// import AudienceByCountry from './components/AudienceByCountry';
import TeamList from './components/TeamList';
// import BestSellingRegions from './components/BestSellingRegions';
// import GoalsCompletion from './components/GoalsCompletion';
// import { RTLProps } from '../../../shared/prop-types/ReducerProps';

class Teams extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasTeams: true,
      showCalendar: false
    };
  }

  renderTeams() {
    const { hasTeams } = this.state;
    const { t } = this.props;

    if (hasTeams) {
      return (
        <Row>
          <TeamList />
          <TeamList />
        </Row>
      );
    }
    return (
      <Row>
        <img src="https://image.flaticon.com/icons/svg/476/476761.svg" height={300} width={300} alt="" />
        <p className="dashboard__no-teams">{t('teams.no_teams_yet')}</p>
      </Row>
    );
  }

  render() {
    const { t } = this.props;
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
    const spanish = {
      es: 'Spanish',
    };

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12} className="dashboard__title-and-button">
            <h3 className="page-title">{t('teams.page_title')}</h3>
            <Button color="success" className="dashboard__add-team icon" onClick = {() => this.setState({showCalendar: !this.state.showCalendar})}>
              <UserAddIcon /> {t('teams.add_team')}
            </Button>
          </Col>
        </Row>

          <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              className={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              open={this.state.showCalendar}

              closeAfterTransition

              BackdropProps={{
                timeout: 500,
              }}
          >
            <DateRange
              editableDateInputs={true}
              onChange={item => console.log(item)}
              moveRangeOnFirstSelection={false}
              ranges={[selectionRange]}
              color = "#1667A3"
              locale = {rdrLocales.es}
            />
          </Modal>
        {this.renderTeams()}
      </Container>
    );
  }
}

// Teams.propTypes = {
//   // rtl: RTLProps.isRequired,
//   t: PropTypes.func.isRequired,
// };

export default compose(withTranslation('common'), connect(state => ({
  // rtl: state.rtl,
  rtl: state,
})))(Teams);
