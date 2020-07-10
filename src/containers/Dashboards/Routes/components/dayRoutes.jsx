/* eslint-disable */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {
  Button, ButtonToolbar, Container, Col, CardBody, Row, Nav, NavItem, NavLink, TabContent, TabPane,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import SteeringIcon from 'mdi-react/SteeringIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
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
          case 0: return <p style = {{marginTop: 0, marginLeft: 3, color:"black", fontWeight: "300", fontSize: 10}}> Sin empezar  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#A9A9A9"}}></span> </p>;
          case 1: return <p style = {{marginTop: 0, marginLeft: 3, color:"black", fontWeight: "300", fontSize: 10}}> En proceso  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#6495ED"}}></span> </p>;

          case 2: return <p style = {{marginTop: 0, marginLeft: 3, color:"black", fontWeight: "300", fontSize: 10}}> Terminado  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#4CE1B6"}}></span> </p>;

          case 3: return <p style = {{marginTop: 0, marginLeft: 3, color:"black", fontWeight: "300", fontSize: 10}}> Fallida  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#DC143C"}}></span> </p>;

          default: return "default error"
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
                 <p
                    style = {{fontSize: 19, fontWeight: "400", margin: 0, color: "#4CE1B6", cursor: "pointer"}}
                    onClick = {formStop.bind(this, {prop: "displayStopFormModal", value: true})}
                  > +
                  </p>
              </div>

              <div className ="dashboard__day-routes-list-stops">
                { route.paradas.map((parada, index) => {
                    return(
                      <div>
                        <div className ="dashboard__day-routes-list-stop">

                          <div style= {{display: "flex", flexDirection: "row", marginBottom: 5, justifyContent: "space-between"}}>
                            {this.renderTaskStatus(parada.status)}
                            <p style ={{margin: 0, cursor: "pointer", marginTop: -2}} onClick = {selectStop.bind(this, parada)}>...</p>
                          </div>
                          <p style = {{fontWeight:"bold", fontSize: 13, marginLeft: 2}}>{index + 1}.  {parada.stopName}</p>

                           <div className ="dashboard__day-routes-list-data" >
                              <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}> <SteeringIcon /> {parada.driver.name}</p>
                              <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}> <ClockOutlineIcon /> 10:40 am</p>
                           </div>
                        </div>
                      </div>
                    )
                  })
                }
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
        <div className ="dashboard__day-routes-container">
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
