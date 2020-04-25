/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
// import {
//   BarChart, Bar, Cell, ResponsiveContainer,
// } from 'recharts';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// const data = [
//   { name: 'Page A', uv: 4000 },
//   { name: 'Page B', uv: 3000 },
//   { name: 'Page C', uv: 2000 },
//   { name: 'Page D', uv: 2780 },
//   { name: 'Page E', uv: 1890 },
//   { name: 'Page F', uv: 2390 },
//   { name: 'Page G', uv: 3490 },
//   { name: 'Page H', uv: 2000 },
//   { name: 'Page I', uv: 2780 },
//   { name: 'Page J', uv: 1890 },
// ];

class AddTeam extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeIndex: 0,
  //   };
  // }

  // handleClick = (item) => {
  //   const index = data.indexOf(item.payload);
  //   this.setState({
  //     activeIndex: index,
  //   });
  // };

  render() {
    // const { activeIndex } = this.state;
    // const activeItem = data[activeIndex];
    const { t } = this.props;

    return (
      <Col md={12} xl={3} lg={6} xs={12}>
        <Card>
          <Link className="dashboard__add-team" to="/account/profile">
            <CardBody className="dashboard__card-widget">
              <div className="card__title">
                <span className="sidebar__link-icon lnr lnr-users" />
                <h5>{t('teams.add_team')}</h5>
              </div>
            </CardBody>
          </Link>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(AddTeam);
