/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Container,
  Nav, NavItem, NavLink, Row, TabContent, TabPane,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import FilterIcon from 'mdi-react/FilterIcon';
import SearchIcon from 'mdi-react/SearchIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import { Field, reduxForm } from 'redux-form';

class SearchRow extends PureComponent {
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
                          <SearchIcon /> {t('records.word')}
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === '2' })}
                          onClick={() => {
                            this.toggle('2');
                          }}
                        >
                          <FilterIcon />  {t('records.filter')}
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <CardBody>
                          <form className="form form--horizontal">
                            <div className="form__form-group">
                              <UncontrolledDropdown className ="form__form-group-label">
                                <DropdownToggle className="icon icon--right" outline>
                                  <p>Cliente <ChevronDownIcon /></p>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown__menu">
                                  <DropdownItem>Action</DropdownItem>
                                  <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                              <div className="form__form-group-field">
                                <Field
                                  name="defaultInput"
                                  component="input"
                                  type="text"
                                  placeholder="Palabra a buscar"
                                />
                              </div>
                            </div>
                          </form>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="2">
                        <CardBody>
                        </CardBody>
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
// export default reduxForm({
//   form: 'horizontal_form', // a unique identifier for this form
// })(withTranslation('common')(Rec));

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(withTranslation('common')(SearchRow));
