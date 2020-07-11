/* eslint-disable */
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

class Drivers extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    const { moveInMap, data } = this.props;
    return(
      <div className="dashboard__map-drivers">
        {
          data.loaded ?
            data.routes.drivers.map(driver => {
              return(
                <a className="dashboard__competitor" to="/account/profile" >
                  <div className="dashboard__competitor-img">
                    <img src={driver.profile} alt="" />
                  </div>
                  <div className="dashboard__competitor-info">
                    <p className="dashboard__competitor-name">
                      {driver.name}
                      <span className="dashboard__competitor-dot" style = {{backgroundColor: driver.color}}></span>
                    </p>
                    <p className="dashboard__competitor-link" onClick={moveInMap.bind(this, driver)}>Localizar</p>
                  </div>
                </a>
              );
            }) : null
        }
      </div>
    );
  }
}


export default withTranslation('common')(Drivers);
