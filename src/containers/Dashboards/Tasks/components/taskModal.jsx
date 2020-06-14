/* eslint-disable */
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Modal from '@material-ui/core/Modal';
import SteeringIcon from 'mdi-react/SteeringIcon';
import UserIcon from 'mdi-react/UserIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon';
import FlagIcon from 'mdi-react/FlagIcon';
import CameraIcon from 'mdi-react/CameraIcon';
import SignatureImageIcon from 'mdi-react/SignatureImageIcon';
import CommentIcon from 'mdi-react/CommentIcon';


const modalStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    margin: 40,
    overflow:'scroll',
}



class TaskModal extends PureComponent {

  constructor(props){
    super(props);

    this.state= {
      tab: "ruta"
    }
  }

  renderPictures(){
    const {taskSelected} = this.props;

    if(taskSelected.pictures){
      return taskSelected.pictures.map(picture => {
        return(
            <img
              src ={picture}
              className ="modal__task-image"
            />
        );
      })
    }
  }


  renderTabInfo(){
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
                    <img
                      src ={"https://upload.wikimedia.org/wikipedia/commons/b/b5/Signature-WangBowen.png"}
                      className ="modal__task-signature"
                    />
                  </div>
                </div>

                <div className ="modal__task-items">
                  <p> <CommentIcon />  Comentarios  </p>
                  <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>Se continuara mañana debido a que no nos abrio el guardia la casa para instalar.</p>
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
    const {showTaskModal, taskSelected, showTask} = this.props;
    const {tab} = this.state;

    console.log("PROPS => ", this.props.taskSelected.driver);

    return(
      <div>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open={showTaskModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={modalStyle}
        >
          <div className ="modal__task-container">
            <div className ="modal__task-close" onClick = {showTask.bind(this, {})}>
              <p>X</p>
            </div>

            <div className ="modal__task-header">
                <p style = {{color: "black", fontSize: 17}}>{taskSelected.title}</p>
                <p style = {{fontSize: 10, marginTop: 1}}> Folio de actividad: {taskSelected.id}</p>
            </div>


            <div className="modal__task-data-container">
              <div className ="modal__task-column" style = {{ overflow: "scroll"}}>
                <div className ="modal__task-items">
                  <p> <FlagIcon />  Status   </p>
                  <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}> Terminado  <span className="dashboard__competitor-dot" style = {{backgroundColor: "#4CE1B6"}}></span> </p>
                </div>
                <div className ="modal__task-items">
                  <p> <SteeringIcon />  Conductor   </p>
                  {
                    taskSelected.driver ?
                      <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>{taskSelected.driver.name} {taskSelected.driver.lastName}</p>
                    :
                      null
                  }

                </div>

                <div className ="modal__task-items">
                  <p> <UserIcon />  Cliente   </p>
                  {
                    taskSelected.client ?
                      <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>{taskSelected.client}</p>
                    :
                      null
                  }

                </div>

                <div className ="modal__task-items">
                  <p> <MapMarkerIcon />  Destino   </p>
                  <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300"}}>{taskSelected.destination}</p>
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
                    Gastos
                  </p>
                </div>

                {this.renderTabInfo()}

              </div>
            </div>

            <div className ="modal__task-footer">
              <p style = {{marginLeft: 15}}>Editar</p>
              <p style ={{margin: 0, marginLeft: 15}}>Descargar</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}


export default withTranslation('common')(TaskModal);
