/* eslint-disable */
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Modal from '@material-ui/core/Modal';
import DatePicker from 'react-datepicker';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { connect } from 'react-redux';
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
import { formRoute } from '../../../../redux/actions/routesActions';
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

  componentWillMount(){
    console.log("REDUX => ", this.props.formRoute);
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

  // resetData(){
  //   this.props.f
  // }

  render(){

    const { showModal, showCreateRouteModal, data, formRoute } = this.props;
    const { showDriversList, showRoutesList } = this.state;
    console.log(this.props.data);

    return(
      <div>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus = {true}
          open={data.displayFormModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={modalStyle}
        >
          <div className ="modal__create-route-container">
            <div className ="modal__create-route-header">
              <p style = {{marginLeft: 2}}> Creación de ruta </p>
              <p onClick = {() => formRoute({prop: null, value: null}) }> X </p>
            </div>

            <div className = "modal__create-route-data">
              <div className ="modal__create-route-items">
                <div className ="modal__create-route-options">
                  <p> <MapOutlineIcon />  Nombre de ruta  </p>
                  <div style = {{display: "flex", fleDirection:"row"}}>
                    <Checkbox
                      checked={data.duplicatedRoute}
                      onClick={formRoute.bind(this, {prop: "duplicatedRoute", value: !data.duplicatedRoute})}
                      name="checkedB"
                      style = {{padding: 0, color: "#4CE1B6", marginRight: 2}}
                    />

                    <p style = {{margin: 0, color: "black", fontWeight: "300", fontSize: 10}}> Duplicar ruta existente </p>
                  </div>
                </div>
              {
                !data.duplicatedRoute ?
                  <form>
                    <input
                      type="text"
                      placeholder= "Nombre ruta"
                      value= {data.routeName}
                      onChange = {value => formRoute({prop: "routeName", value: value.target.value})}
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
                      checked={data.multipleDays}
                      onClick={this.props.formRoute.bind(this, {prop: "multipleDays", value: !data.multipleDays})}
                      name="checkedB"
                      style = {{padding: 0, color: "#4CE1B6", marginRight: 2 }}
                    />
                    <p style = {{margin: 0, color: "black", fontWeight: "300", fontSize: 10}}> Ruta de mas de 1 día </p>
                  </div>
                </div>

                {
                  !data.multipleDays ?
                      <div className="date-picker">
                        <DatePicker
                          className="form__form-group-datepicker"
                          selected = {data.startDate}
                          placeholderText="yyyy/MM/dd"
                          dateFormat="yyyy/MM/dd"
                          dropDownMode="select"
                          popperPlacement="center"
                          onChange = {value => formRoute({prop: "startDate", value: value})}
                        />
                      </div>
                  :
                    <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                      <div className="date-picker">
                        <DatePicker
                          className="form__form-group-datepicker"
                          selected = {data.startDate}
                          placeholderText="Dia inicio"
                          dateFormat="yyyy/MM/dd"
                          dropDownMode="select"
                          popperPlacement="center"
                          onChange = {value => formRoute({prop: "startDate", value: value})}

                        />
                      </div>
                      <div className="date-picker">
                        <DatePicker
                          className="form__form-group-datepicker"
                          selected = {data.endDate}
                          placeholderText="Dia final"
                          dateFormat="yyyy/MM/dd"
                          dropDownMode="select"
                          popperPlacement="center"
                          onChange = {value => formRoute({prop: "endDate", value: value})}
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
                      checked={data.multipleDrivers}
                      onClick={this.props.formRoute.bind(this, {prop: "multipleDrivers", value: !data.multipleDrivers})}
                      name="checkedB"
                      style = {{padding: 0, color: "#4CE1B6", marginRight: 2}}
                    />
                    <p style = {{margin: 0, color: "black", fontWeight: "300", fontSize: 10}}> + de 1 conductor en ruta </p>
                  </div>
                </div>
                {
                  data.multipleDrivers ?
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
            {
              data.modalType == "CREATE" ?
                <div className ="modal__create-route-footer">
                  <p>Crear ruta</p>
                </div>
              :
                <div className ="modal__create-route-footer">
                  <p>Editar ruta</p>
                </div>
            }
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.formRouteData,
});

const mapDispatchToProps = dispatch => ({
  createRoute: () => dispatch(createRoute()),
  formRoute: ({prop, value}) => dispatch(formRoute({prop, value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(CreateRouteModal));
