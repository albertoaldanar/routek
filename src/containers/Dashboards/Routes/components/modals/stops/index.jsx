/* eslint-disable */
import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Modal from '@material-ui/core/Modal';
import CreateStopModal from "./createStopModal";
import EditShowStopModal from "./editShowStopModal";

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



class StopModal extends PureComponent {

  constructor(props){
    super(props);

    this.state= {

    }
  }

  render(){
    const { data, formStop } = this.props;

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
             data.modalType == "EDIT" ?
                <EditShowStopModal />
             :
                <CreateStopModal formStop = {this.props.formStop}/>

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
