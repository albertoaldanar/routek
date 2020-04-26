import React, { PureComponent } from 'react';
import {
  Button, Card, CardBody, Container, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import UserAddIcon from 'mdi-react/UserAddIcon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Tasks extends PureComponent {
  static propTypes = {
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
    const { t } = this.props;
    const { activeTab } = this.state;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12} className="dashboard__title-and-button">
            <h3 className="page-title">{t('tasks.page_title')}</h3>
            <Button color="success" className="dashboard__add-team icon">
              <UserAddIcon /> {t('teams.add_team')}
            </Button>
          </Col>
        </Row>
        <Card>
          <CardBody>
            <div className="tabs tabs--justify tabs--bordered-bottom">
              <div className="tabs__wrap">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      {t('tasks.activities')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      {t('tasks.map')}
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                      use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article
                      concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you
                      numerous securing.
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                      use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default connect(state => ({
  rtl: state,
}))(withTranslation('common')(Tasks));
