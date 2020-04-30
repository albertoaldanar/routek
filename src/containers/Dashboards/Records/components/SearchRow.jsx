/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import FilterIcon from 'mdi-react/FilterIcon';
import SearchIcon from 'mdi-react/SearchIcon';

class Records extends PureComponent {
  // static propTypes = {
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
    const { recordsTable, t } = this.props;
    const { activeTab } = this.state;

    return (
          <Col md={12} sm={12}>
            <Card>
              <CardBody>
                <div className="tabs tabs--bordered-bottom">
                  <div className="tabs__wrap">
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === '1' })}
                          onClick={() => {
                            this.toggle('1');
                          }}
                        >
                          <SearchIcon /> Buscar por palabra
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === '2' })}
                          onClick={() => {
                            this.toggle('2');
                          }}
                        >
                          <FilterIcon />  Buscar por filtros
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
          </Col>
    );
  }
}

export default connect(state => ({
  recordsTable: state.recordsTable.items,
  rtl: state,
}))(withTranslation('common')(Records));
