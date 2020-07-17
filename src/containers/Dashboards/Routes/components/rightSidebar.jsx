/* eslint-disable */
import React, {PureComponent} from 'react';
import { withTranslation } from 'react-i18next';
import ArrowRightIcon from 'mdi-react/ArrowRightIcon';
import LinearProgress from '@material-ui/core/LinearProgress';
import CarIcon from 'mdi-react/CarIcon';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon';
import ArrowDownIcon from 'mdi-react/ArrowDownIcon';
import { Line, Circle } from 'rc-progress';

class RightSidebar extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      selectDriver: false,
    }
  }
  render(){
    const {showRightSidebar, data, moveInMap} = this.props;
    const  {selectDriver} = this.state;
    const stops = [{name: "Arreglar equipos dafi", status: 0, hour: "10:40 am"}, {name: "Lavar rejillas la marina", status: 1, hour: "10:40 am"}, {name: "Cambiar tuberia obra san isidro", status: 0, hour: "10:40 am"}, {name: "Instalar rejillas para las oficinas primavera", status: 0, hour: "10:40 am"}, {name: "Instalar rejillas para las oficinas primavera", status: 0, hour: "10:40 am"}, {name: "Instalar rejillas para las oficinas primavera", status: 0, hour: "10:40 am"}, {name: "Instalar rejillas para las oficinas primavera", status: 0, hour: "10:40 am"}, {name: "Instalar rejillas quntas", status: 0, hour: "10:40 am"}];

    return(
        <div className ="dashboard__map-drivers-sidebar" style = {{height: window.innerHeight -99}}  >
          { 
            !selectDriver ? 
              <div>
                
                <ArrowRightIcon onClick = {showRightSidebar} />
                
                <div onClick = {showRightSidebar} style ={{display: "flex", justifyContent:"space-around", flexDirection: "row", marginTop: 10, borderRadius: 5, backgroundColor: "#dcdcdc", marginLeft: 5, marginRight: 5}} >
                    <p style = {{textDecoration: "underline", color: "#232329"}}> Equipo </p>
                    <p style = {{color: "#232329"}}>  Rutas </p>
                </div>

                <div style = {{marginTop: 35,}}>
                  {
                    data.loaded ?
                      data.routes.drivers.map(driver => {
                        return(
                          <a className="dashboard__right_sidebar-driver" to="/account/profile" >

                            <div className="ddashboard__right_sidebar-driver-info">
                              <p className="dashboard__right_sidebar-driver-name" style ={{fontSize: 14, fontWeight: "400"}}>
                                {driver.name + " " + driver.lastName}
                                <span className="dashboard__right_sidebar-driver-dot" style = {{backgroundColor: driver.color}}></span>
                              </p>

                              <p style = {{fontSize: 11, fontWeight: "300", marginBottom: 3, marginTop: 3, fontStyle: "italic"}}> En trayecto <CarIcon style= {{width: 13, height: 13, marginTop:-2}}/></p>

                              <p style = {{fontSize: 9, fontWeight: "300"}}>10 / 15 paradas</p>
                              <div style = {{width: "100%"}} >
                                <LinearProgress variant = "buffer" value={40} style= {{color: "red", colorPrimary: {background: "red"}, fill: "red"}}/>
                              </div>
            
                              <div style = {{display: "flex", flexDirection: "row", marginTop: 10}}>
                                <p className="dashboard__right_sidebar-driver-link" onClick={moveInMap.bind(this, driver)}>Localizar</p>
                                <p className="dashboard__right_sidebar-driver-link" style = {{paddingLeft: 15}} onClick = {() => this.setState({selectDriver: true})}>Ver ruta</p>
                              </div>

                            </div>
                          </a>
                        );
                      }) : null
                  }
                </div>
              </div>
            : 
              <div>
                <ArrowLeftIcon style={{marginRight: 2, marginTop: 4}} onClick = {() => this.setState({selectDriver: false})}/>


                <div className ="dashboard__right_sidebar_stop-list">
                  <ul>
                    {
                      stops.map((stop, index) => (
                        <div className = "dashboard__right_sidebar_stop-card">
                          <view>
                            <p> {stop.name}</p>
                            <p style = {{marginTop: 0, fontWeight: "300", fontSize: 11, marginBottom: 5}}> Terminado  <span className="dashboard__right_sidebar-driver-dot" style = {{backgroundColor: "#4CE1B6"}}></span> </p>
                           
                            <view style = {{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                              <p style = {{fontSize: 11, fontWeight: "300"}}> <ClockOutlineIcon style = {{width: 11, height: 11, marginTop: -2}}/> 10: 40 am</p>
                              <p style = {{fontSize: 11, textDecoration: "underline", fontWeight: "300"}} >Ver parada</p>
                            </view>
                          </view>
                        </div>
                      ))
                    }
                  </ul>
                </div>
              </div>
          }
        
        </div> 
    );
  }
}


export default withTranslation('common')(RightSidebar);
