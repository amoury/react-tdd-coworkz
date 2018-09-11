import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '@material-ui/core';

class ModalContainer extends Component {
  state = {
    modalOpen: false
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps !== this.props) {
      this.setState({ modalOpen: nextProps.modalProps.open })
    }
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  };

  render () {
    if (!this.props.modalType) return null;

    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <h2>Hello</h2>
      </Modal>

    );
  }
}


const mapStateToProps = state => ({
  modal: state.modal
})
export default connect(mapStateToProps)(ModalContainer);