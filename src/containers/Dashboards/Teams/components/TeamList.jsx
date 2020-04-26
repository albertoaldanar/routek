import React from 'react';
// import { PieChart, Pie } from 'recharts';
import { withTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import EyeIcon from 'mdi-react/EyeIcon';
// import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';


// const data01 = [{ value: 50, fill: '#4ce1b6' },
//   { value: 50, fill: '#eeeeee' }];

const TeamList = () => (
  <Panel md={12} lg={6} xl={4} title="Equipo Mazatlán">
    <div className="dashboard__stat dashboard__stat--budget">
      <div className="dashboard__stat-main">
        <p className="dashboard__stat-main-title">Total Actividades</p>
        <p className="dashboard__stat-main-number">23</p>
        <hr />
      </div>

      <div className="dashboard__stat-data">
        <div>
          <p className="dashboard__stat-data-number">20</p>
          <p style={{ color: '#64677b' }}>Terminadas</p>
        </div>
        <div>
          <p className="dashboard__stat-data-number">3</p>
          <p style={{ color: '#64677b' }}>Pendientes</p>
        </div>
      </div>

      <div className="dashboard__stat-data">
        <div>
          <p className="dashboard__stat-data-number">7</p>
          <p style={{ color: '#64677b' }}>Miembros</p>
        </div>
        <div>
          <p className="dashboard__stat-data-number">6</p>
          <p style={{ color: '#64677b' }}>Vehiculos</p>
        </div>
      </div>
    </div>
    <Button className="dashboard__see-team icon" color="success">
      <p className="center-text"><EyeIcon /> Ver equipo</p>
    </Button>
  </Panel>
);

// TeamList.propTypes = {
//   t: PropTypes.func.isRequired,
// };

export default withTranslation('common')(TeamList);
