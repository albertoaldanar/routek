/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';
import DriversList from "./driversList"

const Ava1 = 'https://logan-marshall.com/wp-content/uploads/2016/08/Circle-Profile-No-Background-PNG-120dpi-page001.png';
const Ava2 = 'https://www.scripturaengage.com/wp-content/uploads/2018/01/Profile-Picture-Jim-Verbist-2-Circle.png';
const Ava3 = 'https://allswellproductions.ca/wp-content/uploads/2018/05/Jeroen-Van-Dalen-circle-profile.png'
const Ava4 = 'https://camg242.hotglue.me/?TECH.head.153143598539';

const Drivers = ({ t }) => (
  <div className="dashboard__map-drivers">
    <p className="dashboard__drivers-title">CONDUCTORES</p>
    {
      DriversList.map(driver => {
        return(
          <Link className="dashboard__competitor" to="/account/profile">
            <div className="dashboard__competitor-img">
              <img src={driver.profile} alt="" />
            </div>
            <div className="dashboard__competitor-info">
              <p className="dashboard__competitor-name">{driver.name}</p>
            </div>
          </Link>
        );
      })
    }
  </div>
);

Drivers.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Drivers);
