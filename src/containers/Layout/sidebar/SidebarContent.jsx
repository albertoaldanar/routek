import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToLight, changeToDark } = this.props;

    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Equipos" icon="users" route="/teams" onClick={this.hideSidebar} />
          <SidebarLink
            title="Actividades"
            icon="location"
            route="/tasks"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Proyectos"
            icon="apartment"
            route="/projects"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Registros"
            icon="list"
            route="/records"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Configuración"
            icon="cog"
            route="/settings"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Estadisticas"
            icon="chart-bars"
            route="/stats"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Chat"
            icon="bubble"
            route="/chat"
            onClick={this.hideSidebar}
          />
          <SidebarCategory title="Vista" icon="magic-wand">
            <button className="sidebar__link" type="button" onClick={changeToLight}>
              <p className="sidebar__link-title">Claro</p>
            </button>
            <button className="sidebar__link" type="button" onClick={changeToDark}>
              <p className="sidebar__link-title">Oscuro</p>
            </button>
          </SidebarCategory>
        </ul>

        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/log_in" />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink
            title="Documentation"
            icon="text-align-justify"
            route="/documentation/introduction"
            onClick={this.hideSidebar}
          />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
