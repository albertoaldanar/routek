/* eslint-disable */
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
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
import { formStop } from '../../../../redux/actions/stopsActions';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const modalStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    margin: 40,
    overflow:'scroll',
    outline: 'none',
}



class StopModal extends PureComponent {

  constructor(props){
    super(props);

    this.state= {
      tab: "ruta",
      info: "inicio",
      editMode: false
    }
  }

  renderTaskStatus(status){

      switch(status){
          case 0: return <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}> Sin empezar  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#A9A9A9"}}></span> </p>;
          case 1: return <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}> En proceso  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#6495ED"}}></span> </p>;

          case 2: return <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}> Terminado  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#4CE1B6"}}></span> </p>;

          case 3: return <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}> Fallida  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#DC143C"}}></span> </p>;

          default: return "default error"
      }
  }

  renderPictures(){
    const {data} = this.props;

    if(data.pictures.length > 0){
      return data.pictures.map(picture => {
        return(
            <img
              src ={picture}
              className ="modal__task-image"
            />
        );
      })
    } else {
      return(
        <p style = {{marginTop: 0, marginLeft: 25, color:"gray", fontWeight: "300", textAlign: "left"}}>No hay fotos de esta actividad</p>
      );
    }
  }

  renderTabInfo(){
    const {data} = this.props;

    if(this.state.tab == "ruta"){
      return(
        <div>
                <div className ="modal__task-items">
                  <p> <ClockOutlineIcon />  Hora llegada y salida  </p>
                  <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>10:00 AM - 12:00 AM</p>
                </div>

                <div className ="modal__task-items">
                  <p> <CameraIcon />  Fotos  </p>
                  <div className ="modal__task-pictures-container">
                    {this.renderPictures()}
                  </div>
                </div>

                <div className ="modal__task-items">
                  <p> <SignatureImageIcon />  Firma  </p>
                  <div className ="modal__task-pictures-container">
                  {
                    data.signature ?
                      <img
                        src ={data.signature}
                        className ="modal__task-signature"
                      />
                    :
                      <p style = {{marginTop: 0, marginLeft: 25, color:"gray", fontWeight: "300", textAlign: "left"}}>No hay firma en esta actividad</p>

                  }
                  </div>
                </div>

                <div className ="modal__task-items">
                  <p> <CommentIcon />  Comentarios  </p>
                  <p style = {{marginTop: 0, marginLeft: 25, color:"gray", fontWeight: "300"}}>{data.comments || "No hay comentarios"}</p>
                </div>
        </div>
      );
    } else {null};
  }

  changeData(tab){
    this.setState({
        tab
    })
  }

  render(){
    const { data, formStop } = this.props;
    const {tab, info, editMode} = this.state;
    // console.log(this.props.data);

    return(
      <div>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus = {true}
          open={data.displayStopFormModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={modalStyle}
        >

            {
              !editMode ?
                <div className ="modal__task-container">
                  <div className ="modal__task-close" onClick = {() => formStop({prop: null, value: null})}>
                    <p>X</p>
                  </div>

                  <div className ="modal__task-header">
                      <p style = {{color: "black", fontSize: 17}}>{data.stopName}</p>
                      <p style = {{fontSize: 10, marginTop: 1}}> Folio de actividad: {data.id}</p>
                  </div>
                  <div className="modal__task-data-container">
                    <div className ="modal__task-column" style = {{ overflow: "scroll"}}>

                      <div className ="modal__task-items">
                         <p> <FlagIcon />  Status  </p>
                         {this.renderTaskStatus(data.status)}
                      </div>

                      <div className ="modal__task-items">
                        <p> <SteeringIcon />  Conductor   </p>
                        {
                          data.driver ?
                            <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>{data.driver.name} {data.driver.lastName}</p>
                          :
                            null
                        }
                      </div>

                      <div className ="modal__task-items">
                        <p> <UserIcon />  Cliente   </p>
                        {
                          data.client ?
                            <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>{data.client}</p>
                          :
                            null
                        }
                      </div>

                      <div className ="modal__task-items">
                        <p> <MapMarkerIcon />  Destino   </p>
                        <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>{data.destination}</p>
                      </div>

                      <div className ="modal__task-items">
                        <p> <ClockOutlineIcon />  Horario   </p>
                        <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>10:00 AM - 12:00 AM</p>
                      </div>

                      <div className ="modal__task-items">
                        <p> <UserIcon />  Solicitud del cliente   </p>
                        <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>Cambiar los filtros por que estan muy sicios</p>
                      </div>
                    </div>

                    {
                      data.status > 0 ?
                        <div className ="modal__task-column" style = {{ overflow: "scroll"}}>
                          <div className ="modal__task-tabs">
                            <p
                              style = {{color: tab == "ruta" ? "black":  "gray", textDecoration: tab == "ruta" ? "underline":  "none", cursor: "pointer"}}
                              onClick = {this.changeData.bind(this, "ruta")}
                            >
                              Ruta
                            </p>
                            <p
                              style = {{color: tab == "gastos" ? "black":  "gray", textDecoration: tab == "gastos" ? "underline":  "none", cursor: "pointer"}}
                              onClick = {this.changeData.bind(this, "gastos")}
                            >
                              Adjuntos
                            </p>
                          </div>
                          {this.renderTabInfo()}
                        </div>
                      : <div className ="modal__task-no-data-container">
                          <img
                            src ={"https://image.flaticon.com/icons/svg/2924/2924574.svg"}
                            className ="modal__task-no-data-icon"
                          />
                          <p>La parada no ha comenzado aún</p>
                        </div>
                    }
                    <div className ="modal__task-footer">
                      <p style = {{marginLeft: 15}} onClick ={() => this.setState({editMode: true})}>Editar</p>
                      <p style ={{margin: 0, marginLeft: 15}}>Descargar</p>
                    </div>
                  </div>
                </div>


              :


                <div className ="modal__task-container">
                  <div className ="modal__task-close" >
                    <p>X</p>
                  </div>

                  <div className ="modal__task-header">
                    <div style = {{margin: 0, cursor: "pointer"}} onClick = {() => this.setState({editMode: false})}>
                      <ArrowLeftIcon />
                    </div>

                      <form>
                        <input
                          type="text"
                          placeholder= "Nombre ruta"
                          value= {data.title}
                          style = {{color: "black", fontSize: 17, width: "35%"}}
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
                            selected={new Date()}
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
                        {
                          data.client ?
                            <div className ="modal__create-route-dropdown">
                              <p style = {{color: "black"}}>
                                {data.client} <ChevronDownIcon />
                              </p>
                            </div>
                          :
                            null
                        }
                      </div>

                      <div className ="modal__task-items">
                        <p> <MapMarkerIcon />  Destino   </p>

                        <form>
                          <input
                            type="text"
                            placeholder= "Nombre ruta"
                            value= {data.destination}
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

                    <div className ="modal__task-footer-edit">
                      <p style = {{marginLeft: 15, color: "#228B22"}} onClick ={() => this.setState({editMode: true})}>Guardar cambios</p>
                      <p style ={{margin: 0, marginRight: 15, color: "#DC143C"}}>Eliminar</p>
                    </div>
                  </div>

                </div>
            }

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.formStopData,
});

const mapDispatchToProps = dispatch => ({
  formStop: ({prop, value}) => dispatch(formStop({prop, value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(StopModal));
