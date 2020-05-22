/* eslint-disable */
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';
import DriversList from "./driversList"

class Drivers extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    const { moveInMap } = this.props;
    return(
      <div className="dashboard__map-drivers">
        <p className="dashboard__drivers-title">LOCALIZADOR</p>
        {
          this.props.drivers.map(driver => {
            return(
              <a className="dashboard__competitor" to="/account/profile" onClick={moveInMap.bind(this, driver)}>
                <div className="dashboard__competitor-img">
                  <img src={driver.profile} alt="" />
                </div>
                <div className="dashboard__competitor-info">
                  <p className="dashboard__competitor-name">{driver.name}</p>
                </div>
              </a>
            );
          })
        }
      </div>
    );
  }
}


export default withTranslation('common')(Drivers);
