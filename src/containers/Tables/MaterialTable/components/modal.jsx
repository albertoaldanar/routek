/* eslint-disable */
import React, { PureComponent } from 'react';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import classNames from 'classnames';


class ModalComponent extends PureComponent {

  constructor() {
    super();
    this.state = {
      modal: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  render() {
    const {children} = this.props;
    return (
      <div className ="modal__container">
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal_table"
        >
          {children}
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
