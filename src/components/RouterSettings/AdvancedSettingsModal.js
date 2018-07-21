import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';

export default class AdvancedSettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { modal } = this.state;

    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal } = this.state;
    const { className, network } = this.props;

    return (
      <div>
        <Button
          color="link"
          onClick={this.toggle}
          style={{
            padding: 0,
            margin: 10,
          }}
        >
          Advanced Settings
        </Button>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          className={className}
        >
          <ModalHeader toggle={this.toggle}>
            {network}
            : WiFi Settings
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <h5>
                  Connect to a Mesh Network
                </h5>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />
                    {' '}
                    Check to Enable Connection
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              style={{
                margin: 10,
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AdvancedSettingsModal.propTypes = {
  className: PropTypes.string.isRequired,
  network: PropTypes.objectOf(PropTypes.string).isRequired,
};
