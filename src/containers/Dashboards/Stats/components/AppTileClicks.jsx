/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

import getTooltipStyles from '../../../../shared/helpers';

const data = [
  {
    name: 'Entre actividades', uv: 4000,
  },
  {
    name: 'En actividad', uv: 3000,
  },
  {
    name: 'Retraso llegadas', uv: 2000,
  },
  {
    name: 'Retraso salidas', uv: 2780,
  },
];

const AppTileClicks = ({ t, dir, themeName }) => (
  <Panel
    lg={8}
    xl={8}
    md={12}
    title={t('stats.time_analysis')}
    subhead={t('stats.time_analysis_explained')}
    panelClass="panel--narrow"
  >
    <div dir="ltr">
      <ResponsiveContainer height={300} className="dashboard__active-users-chart">
        <BarChart
          width={600}
          height={220}
          data={data}
          layout="vertical"
          barGap={0}
          barCategoryGap={0}
          stackOffset="expand"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            hide
            reversed={dir === 'rtl'}
          />
          <YAxis
            type="category"
            dataKey="name"
            tickLine={false}
            verticalAnchor="start"
            orientation={dir === 'rtl' ? 'right' : 'left'}
          />
          <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
          <Bar dataKey="pv" fill="#48b5ff" barSize={12} />
          <Bar dataKey="uv" fill="#7edbff" barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Panel>
);

AppTileClicks.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(AppTileClicks));
