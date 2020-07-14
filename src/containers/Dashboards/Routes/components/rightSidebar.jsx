/* eslint-disable */
import React, {PureComponent} from 'react';
import { withTranslation } from 'react-i18next';
import HideOutlineIcon from 'mdi-react/HideOutlineIcon';

class RightSidebar extends PureComponent {

  render(){
    const {showRightSidebar, data, moveInMap} = this.props;
    return(
        <div className ="dashboard__map-drivers-sidebar" style = {{height: window.innerHeight -99}}  >
        
          <HideOutlineIcon onClick = {showRightSidebar} />
          <div style ={{display: "flex", justifyContent:"space-around", flexDirection: "row", marginTop: 10, borderRadius: 5, backgroundColor: "#dcdcdc", marginLeft: 5, marginRight: 5}} >
              <p style = {{textDecoration: "underline"}}> Equipo </p>
              <p>  Rutas </p>
          </div>

          <div style = {{marginTop: 15}}>
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

        </div> 
    );
  }
}


export default withTranslation('common')(RightSidebar);
