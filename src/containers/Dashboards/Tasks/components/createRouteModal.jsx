/* eslint-disable */
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Modal from '@material-ui/core/Modal';
import DatePicker from 'react-datepicker';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import SteeringIcon from 'mdi-react/SteeringIcon';
import UserIcon from 'mdi-react/UserIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon';
import FlagIcon from 'mdi-react/FlagIcon';
import CameraIcon from 'mdi-react/CameraIcon';
import SignatureImageIcon from 'mdi-react/SignatureImageIcon';
import CommentIcon from 'mdi-react/CommentIcon';
import MapOutlineIcon from 'mdi-react/MapOutlineIcon';
import CalendarIcon from 'mdi-react/CalendarIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const modalStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    margin: 40,
    overflow:'scroll',
    outline: 'none',
}

class CreateRouteModal extends PureComponent {

  constructor(props){
    super(props);

    this.state = {
      tab: "ruta",
      info: "inicio",
      showRoutesList: false,
      showDriversList: false
    }
  }


  renderDropdownList(){
    const { showModal, showCreateRouteModal, createRouteData, createRouteSetData, onChangeInput, changeDates } = this.props;
    return(
      <div className ="dashboard__create-route-dropdown-list">
        <p>Ruta la primavera</p>
        <p>Ruta las quintas</p>
        <p>Ruta carlos</p>
        <p>Ruta Colonia sinaloa</p>
      </div>
    );
  }

  render(){

    const { showModal, showCreateRouteModal, createRouteData, createRouteSetData, onChangeInput, changeDates } = this.props;
    const { showDriversList, showRoutesList } = this.state;

    return(
      <div>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus = {true}
          open={showCreateRouteModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={modalStyle}
        >
          <div className ="modal__create-route-container">
            <div className ="modal__create-route-header">
              <p style = {{marginLeft: 2}}> Creación de ruta </p>
              <p onClick = {showModal}> X </p>
            </div>

            <div className = "modal__create-route-data">
              <div className ="modal__create-route-items">
                <div className ="modal__create-route-options">
                  <p> <MapOutlineIcon />  Nombre de ruta  </p>
                  <div style = {{display: "flex", fleDirection:"row"}}>
                    <Checkbox
                      checked={createRouteData.duplicateRoute}
                      onClick={createRouteSetData.bind(this, 1)}
                      name="checkedB"
                      style = {{padding: 0, color: "#4CE1B6", marginRight: 2}}
                    />

                    <p style = {{margin: 0, color: "black", fontWeight: "300", fontSize: 10}}> Duplicar ruta existente </p>
                  </div>
                </div>
              {
                !createRouteData.duplicateRoute ?
                  <form>
                    <input
                      type="text"
                      placeholder= "Nombre ruta"
                      onChange = {onChangeInput('routeName')}
                    />
                  </form>
                :
                  <div>
                    <div className ="modal__create-route-dropdown">
                      <p
                        onClick = {() => this.setState({showRoutesList: !this.state.showRoutesList})}
                      >
                        Nombre de ruta <ChevronDownIcon />
                      </p>
                    </div>
                    {
                      showRoutesList ?
                        this.renderDropdownList()
                      :
                        null
                    }

                  </div>

              }

              </div>

              <div className ="modal__create-route-items">
                <div className ="modal__create-route-options">
                  <p> <CalendarIcon />  Fecha  </p>
                  <div style = {{display: "flex", fleDirection:"row"}}>
                    <Checkbox
                      checked={createRouteData.multipleDays}
                      onClick={createRouteSetData.bind(this, 2)}
                      name="checkedB"
                      style = {{padding: 0, color: "#4CE1B6", marginRight: 2 }}
                    />
                    <p style = {{margin: 0, color: "black", fontWeight: "300", fontSize: 10}}> Ruta de mas de 1 día </p>
                  </div>
                </div>

                {
                  !createRouteData.multipleDays ?
                      <div className="date-picker">
                        <DatePicker
                          className="form__form-group-datepicker"
                          selected = {createRouteData.startDate}
                          placeholderText="yyyy/MM/dd"
                          dateFormat="yyyy/MM/dd"
                          dropDownMode="select"
                          popperPlacement="center"
                          onChange = {changeDates.bind(this, 1)}
                        />
                      </div>
                  :
                    <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                      <div className="date-picker">
                        <DatePicker
                          className="form__form-group-datepicker"
                          selected = {createRouteData.startDate}
                          placeholderText="Dia inicio"
                          dateFormat="yyyy/MM/dd"
                          dropDownMode="select"
                          popperPlacement="center"
                          onChange = {changeDates.bind(this, 1)}
                        />
                      </div>
                      <div className="date-picker">
                        <DatePicker
                          className="form__form-group-datepicker"
                          selected = {createRouteData.endDate}
                          placeholderText="Dia final"
                          dateFormat="yyyy/MM/dd"
                          dropDownMode="select"
                          popperPlacement="center"
                          onChange = {changeDates.bind(this, 2)}
                        />
                      </div>
                    </div>

                }

              </div>

              <div className ="modal__create-route-items">
                <div className ="modal__create-route-options">
                  <p> <SteeringIcon  />  Conductor  </p>
                  <div style = {{display: "flex", fleDirection:"row"}}>
                    <Checkbox
                      checked={createRouteData.multipleDrivers}
                      onClick={createRouteSetData.bind(this, 3)}
                      name="checkedB"
                      style = {{padding: 0, color: "#4CE1B6", marginRight: 2}}
                    />
                    <p style = {{margin: 0, color: "black", fontWeight: "300", fontSize: 10}}> + de 1 conductor en ruta </p>
                  </div>
                </div>
                {
                  createRouteData.multipleDrivers ?
                    <p style = {{marginTop: 0, marginLeft: 25, color:"black", fontWeight: "300", paddingTop: 7}}>Listo! Podras asignar un conductor a cada parda cuando la crees</p>
                  :
                    <div>
                      <div className ="modal__create-route-dropdown">
                        <p
                          onClick = {() => this.setState({showDriversList: !this.state.showDriversList})}
                        >
                          Selecciona conductor <ChevronDownIcon />
                        </p>
                      </div>
                      {
                        showDriversList ?
                          this.renderDropdownList()
                        :
                          null
                      }

                    </div>
                }

              </div>

            </div>

            <div className ="modal__create-route-footer">
              <p>Crear ruta</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}


export default withTranslation('common')(CreateRouteModal);
