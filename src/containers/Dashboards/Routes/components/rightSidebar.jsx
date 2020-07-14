/* eslint-disable */
import React, {PureComponent} from 'react';
import { withTranslation } from 'react-i18next';
import ArrowRightIcon from 'mdi-react/ArrowRightIcon';
import LinearProgress from '@material-ui/core/LinearProgress';
import CarIcon from 'mdi-react/CarIcon';

class RightSidebar extends PureComponent {

  render(){
    const {showRightSidebar, data, moveInMap} = this.props;
    return(
        <div className ="dashboard__map-drivers-sidebar" style = {{height: window.innerHeight -99}}  >
          
          <div style = {{position: "absolute", height: 15, width: 15, left: -20, zIndex: 10}}>
            <ArrowRightIcon onClick = {showRightSidebar} />
          </div>
          <div onClick = {showRightSidebar} style ={{display: "flex", justifyContent:"space-around", flexDirection: "row", marginTop: 10, borderRadius: 5, backgroundColor: "#dcdcdc", marginLeft: 5, marginRight: 5}} >
              <p style = {{textDecoration: "underline", color: "#232329"}}> Equipo </p>
              <p style = {{color: "#232329"}}>  Rutas </p>
          </div>

          <div style = {{marginTop: 35}}>
            {
              data.loaded ?
                data.routes.drivers.map(driver => {
                  return(
                    <a className="dashboard__competitor" to="/account/profile" >

                      <div className="dashboard__competitor-info">
                        <p className="dashboard__competitor-name" style ={{fontSize: 14, fontWeight: "400"}}>
                          {driver.name + " " + driver.lastName}
                          <span className="dashboard__competitor-dot" style = {{backgroundColor: driver.color}}></span>
                        </p>

                        <p style = {{fontSize: 11, fontWeight: "300", marginBottom: 3, marginTop: 3, fontStyle: "italic"}}> En trayecto <CarIcon style= {{width: 13, height: 13, marginTop:-2}}/></p>

                        <p style = {{fontSize: 9, fontWeight: "300"}}>10 / 15 paradas</p>
                        <div style = {{width: "100%"}}>
                          <LinearProgress variant = "buffer" value={40} style= {{color: "blue"}}/>
                        </div>

                        <div style = {{display: "flex", flexDirection: "row", marginTop: 10}}>
                          <p className="dashboard__competitor-link" onClick={moveInMap.bind(this, driver)}>Localizar</p>
                          <p className="dashboard__competitor-link" style = {{paddingLeft: 15}}>Ver ruta</p>
                        </div>

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
