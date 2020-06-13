/* eslint-disable */
import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Modal from '@material-ui/core/Modal';


class TaskModal extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    const {showTaskModal, taskSelected} = this.props;
    console.log("PROPS => ", this.props);

    return(
      <div>
        <Modal
          open={showTaskModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <p>Heloooo</p>
        </Modal>
      </div>
    );
  }
}


export default withTranslation('common')(TaskModal);
