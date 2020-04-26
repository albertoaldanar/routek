import React, { PureComponent } from 'react';
import {
  Col, Container, Row, Button,
} from 'reactstrap';
import UserAddIcon from 'mdi-react/UserAddIcon';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
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

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12} className="dashboard__title-and-button">
            <h3 className="page-title">{t('teams.page_title')}</h3>
            <Button color="success" className="dashboard__add-team icon">
              <UserAddIcon /> {t('teams.add_team')}
            </Button>
          </Col>
        </Row>

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
