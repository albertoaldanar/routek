/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const Ava1 = 'https://logan-marshall.com/wp-content/uploads/2016/08/Circle-Profile-No-Background-PNG-120dpi-page001.png';
const Ava2 = 'https://www.scripturaengage.com/wp-content/uploads/2018/01/Profile-Picture-Jim-Verbist-2-Circle.png';
const Ava3 = 'https://allswellproductions.ca/wp-content/uploads/2018/05/Jeroen-Van-Dalen-circle-profile.png'
const Ava4 = 'https://camg242.hotglue.me/?TECH.head.153143598539';

const Drivers = ({ t }) => (
  <div className="dashboard__map-drivers">
    <p className="dashboard__drivers-title">CONDUCTORES</p>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava1} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Pablo</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava2} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Bonnifcaio</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava3} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Carlos</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava4} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Ricardo</p>
      </div>
    </Link>
    <Link className="dashboard__competitor" to="/account/profile">
      <div className="dashboard__competitor-img">
        <img src={Ava4} alt="" />
      </div>
      <div className="dashboard__competitor-info">
        <p className="dashboard__competitor-name">Ricardo</p>
      </div>
    </Link>
  </div>
);

Drivers.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Drivers);
