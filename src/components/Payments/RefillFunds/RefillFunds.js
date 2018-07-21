import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import QRious from 'qrious';

export default class RefillFunds extends Component {
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
      <div className="refill-funds">
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
          <ModalBody className="refill-funds-modal-body">
            <img
              alt="QR code"
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

RefillFunds.propTypes = {
  address: PropTypes.string.isRequired,
};
