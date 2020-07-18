/* eslint-disable */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import SteeringIcon from 'mdi-react/SteeringIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import { selectRoute } from '../../../../redux/actions/routesActions';
import { selectStop } from '../../../../redux/actions/stopsActions';
import { formStop } from '../../../../redux/actions/stopsActions';

class DayRoutes extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderTaskStatus(status){

      switch(status){
          case 1: return <p style = {{marginTop: 0, marginLeft: 3, fontWeight: "300", fontSize: 12, paddingLeft: 20}}> En proceso  <span className="dashboard__right_sidebar-driver-dot " style = {{backgroundColor: "#6495ED"}}></span> </p>;

          case 2: return <p style = {{marginTop: 0, marginLeft: 3, fontWeight: "300", fontSize: 12, paddingLeft: 20}}> Terminado  <span className="dashboard__right_sidebar-driver-dot " style = {{backgroundColor: "#4CE1B6"}}></span> </p>;

          case 3: return <p style = {{marginTop: 0, marginLeft: 3, fontWeight: "300", fontSize: 12, paddingLeft: 20}}> Fallida  <span className="dashboard__right_sidebar-driver-dot " style = {{backgroundColor: "#DC143C"}}></span> </p>;

          default: return <p style = {{marginTop: 0, marginLeft: 3, fontWeight: "300", fontSize: 12, paddingLeft: 20}}> Terminado  <span className="dashboard__right_sidebar-driver-dot " style = {{backgroundColor: "#4CE1B6"}}></span> </p>;
      }
  }

  renderRouteStop(){
      const {data, selectRoute, selectStop, formStop} = this.props;

      if(data.loaded){
        return data.routes.routes.map(route => {
          return(
            <div className ="dashboard__day-routes-list">
              <div className ="dashboard__day-routes-list-header">
                <div>
                  <p style = {{fontSize: 15, fontWeight: "400"}}>{route.routeName}</p>
                </div>
                <div style = {{display: "flex", flexDirection: "row"}}>
                  <p
                      style = {{fontSize: 14, fontWeight: "400", paddingRight: 15, marginTop: -3, cursor: "pointer"}}
                      onClick = {selectRoute.bind(this, route)}
                  > 
                  ...
                  </p>
                  <p
                      style = {{fontSize: 14, fontWeight: "400", margin: 0, color: "#4CE1B6", cursor: "pointer"}}
                      onClick = {formStop.bind(this, {prop: "displayStopFormModal", value: true})}
                  > + 
                  </p>
                </div>


              </div>

              <div className ="dashboard__day-routes-list-stops dashboard__right_sidebar_stop-list" style = {{paddingLeft: 10}}>
              <ul style= {{paddingRight: 10,}}>
                { route.paradas.map((parada, index) => {
                    return(
                      <div style = {{marginBottom: 50}}>
                        <view className ="dashboard__day-routes-list-stop">
                          <view style= {{display: "flex", flexDirection: "row", marginBottom: 5, justifyContent: "space-between", paddingLeft: 20}}>
                            <p style = {{fontWeight:"bold", fontSize: 14}}>{parada.stopName}</p>
                            <p style ={{margin: 0, cursor: "pointer", marginTop: -2}} onClick = {selectStop.bind(this, parada)}>...</p>
                          </view>
                          {this.renderTaskStatus(parada.status)}
                           <view className ="dashboard__day-routes-list-data" style= {{paddingLeft: 20}}>
                              <p style = {{marginTop: 0,fontWeight: "300"}}> <SteeringIcon /> {parada.driver.name}</p>
                              <p style = {{marginTop: 0,  fontWeight: "300"}}> <ClockOutlineIcon /> 10:40 am</p>
                           </view>
                        </view>
                      </div>
                    )
                  })
                }
              </ul>
              </div>
            </div>
          );
        })
      }
  }

  render() {
    const {data} = this.props;
    console.log("route data => ", data);

    return (
      <div >
        <p className ="dashboard__day-routes-date" >
          <ArrowLeftIcon />
          Calendario / 16 de Abril 2020
        </p>
        <div className ="dashboard__day-routes-container" style = {{height: window.innerHeight -120}}> 
          {this.renderRouteStop()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectRoute: (objectsArray) => dispatch(selectRoute(objectsArray)),
  selectStop: (objectsArray) => dispatch(selectStop(objectsArray)),
  formStop: ({prop, value}) => dispatch(formStop({prop, value})),
});

export default connect(null, mapDispatchToProps)(withTranslation('common')(DayRoutes));
