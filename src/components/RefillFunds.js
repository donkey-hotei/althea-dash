import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import QRious from 'qrious';

class RefillFunds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressModal: false,
    };
  }

  toggleAddressModal() {
    const { addressModal } = this.state;
    this.setState({ addressModal: !addressModal });
  }

  render() {
    const { addressModal } = this.state;
    const { address } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 60,
          marginBottom: 60,
        }}
      >
        <Button
          onClick={this.toggleAddressModal}
          outline
          color="primary"
          size="lg"
        >
          Refill Funds
        </Button>

        <Modal
          isOpen={addressModal}
          toggle={this.toggleAddressModal}
        >
          <ModalHeader toggle={this.toggleAddressModal}>
            Send Ether to this address:
          </ModalHeader>
          <ModalBody
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={new QRious({
                size: 256,
                value: address,
              }).toDataURL()}
            />
            {address}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RefillFunds;
