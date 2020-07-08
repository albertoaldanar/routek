/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  Button, ButtonToolbar, Container
} from 'reactstrap';
import Modal from '@material-ui/core/Modal';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SteeringIcon from 'mdi-react/SteeringIcon';
import UserIcon from 'mdi-react/UserIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon';
import FlagIcon from 'mdi-react/FlagIcon';
import CameraIcon from 'mdi-react/CameraIcon';
import SignatureImageIcon from 'mdi-react/SignatureImageIcon';
import CommentIcon from 'mdi-react/CommentIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import TimePicker from 'rc-time-picker';
import DateFnsUtils from '@date-io/date-fns';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from "date-fns/locale/es";
registerLocale("es", es);
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { formStop } from '../../../../../../redux/actions/stopsActions';

const modalStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    margin: 40,
    overflow:'scroll',
    outline: 'none',
}


class CreateStopModal extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {

    const {data, formStop} = this.props;

    return (
          <div className ="modal__task-container">
                  <div className ="modal__task-close" onClick = {() => this.props.formStop({prop: null, value: null})}>
                    <p>X</p>
                  </div>

                  <div className ="modal__task-header">
                      <form>
                        <input
                          type="text"
                          placeholder= "Nombre de parada"
                          value= {data.stopName}
                          style = {{color: "black", fontSize: 17, width: "35%"}}
                          onChange = {value => formStop({prop: "stopName", value: value.target.value})}
                        />
                      </form>
                  </div>
                  <div className="modal__task-data-container">
                    <div className ="modal__task-column" style = {{ overflow: "scroll", borderRight: "none"}}>

                      <div className ="modal__task-items">
                        <p> <SteeringIcon />  Conductor   </p>
                        {
                          data.driver ?

                            <div className ="modal__create-route-dropdown">
                              <p style = {{color: "black"}}>
                                {data.driver.name  +  data.driver.lastName} <ChevronDownIcon />
                              </p>
                            </div>
                          :
                            null
                        }
                      </div>

                      <div className ="modal__task-items" >
                        <p> <ClockOutlineIcon />  Dia y Hora   </p>
                          <DatePicker
                            selected={null}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            locale="es"
                            timeCaption="Hora"
                            dateFormat="MMMM d, yyyy h:mm aa"
                          />
                      </div>

                      <div className ="modal__task-items">
                        <p> <UserIcon />  Cliente   </p>
                        <form>
                          <input
                            type="text"
                            placeholder= "Nombre de cliente"
                            value= {data.client}
                            onChange = {value => formStop({prop: "client", value: value.target.value})}
                          />
                        </form>
                      </div>

                      <div className ="modal__task-items">
                        <p> <MapMarkerIcon />  Destino   </p>

                        <form>
                          <input
                            type="text"
                            placeholder= "Dirección de destino"
                            value= {data.destination}
                            onChange = {value => formStop({prop: "destination", value: value.target.value})}
                          />
                        </form>
                      </div>

                      <div className ="modal__task-items">
                        <p> <UserIcon />  Solicitud del cliente   </p>
                        <form>
                          <textarea
                            type="text"
                            placeholder= "Solicitud del cliente"
                            value = "Hay cambiar los filtros porque estan muy sucios"
                            style = {{width: "75%"}}
                          />
                        </form>
                      </div>
                    </div>

                    <div className ="modal__create-footer">
                      <p>Crear parada</p>
                    </div>
                  </div>

              </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.formStopData
});

export default connect(mapStateToProps)(withTranslation('common')(CreateStopModal));

