import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { actions } from '../../store';
import AdvancedSettingsModal from './AdvancedSettingsModal';

export default class WifiSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      valid: {},
    };
    this.validators = {
      ssid: value => value.length >= 8,
      key: value => value.length >= 8,
    };
  }

  componentDidMount() {
    const { wifiSettings } = this.props;

    this.setState({ fields: wifiSettings });
  }

  onFieldChange(event) {
    const { name, value } = event.target;
    const { fields, valid } = this.state;

    this.setState({
      fields: {
        ...fields,
        [name]: value,
      },
      valid: {
        ...valid,
        [name]: this.validators[name](value),
      },
    });
  }

  onSubmit(event) {
    const { fields } = this.state;
    event.preventDefault();
    actions.saveWifiSetting(fields);
  }

  isFieldValid(name) {
    const { fields, valid } = this.state;
    if (fields[name]) {
      return valid[name];
    }
    return undefined;
  }

  render() {
    const { wifiSettings, fields } = this.props;

    return (
      <Card style={{ flex: 1, minWidth: 300, margin: 10 }}>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            <Label
              for="form"
              style={{
                marginBottom: '20px',
                fontSize: '1.5em',
                textAlign: 'center',
              }}
            >
              {wifiSettings.device.radio_type}
            </Label>

            <FormGroup id="form">
              <Label for="ssid">
                SSID
              </Label>
              <Input
                type="text"
                name="ssid"
                valid={this.isFieldValid('ssid')}
                placeholder="min. 8 characters"
                onChange={this.onFieldChange}
                value={fields.ssid}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                Password
              </Label>
              <Input
                type="text"
                name="key"
                valid={this.isFieldValid('key')}
                placeholder="min. 8 characters"
                onChange={this.onFieldChange}
                value={fields.key}
              />
            </FormGroup>

            <FormGroup
              style={{
                display: 'flex',
                margin: -20,
                marginTop: 0,
                padding: 10,
              }}
            >
              <Button
                color="primary"
                style={{
                  margin: 10,
                }}
              >
                Save
              </Button>
            </FormGroup>

            <FormGroup
              style={{
                display: 'flex',
                margin: -20,
                marginTop: 0,
                padding: 10,
              }}
            >
              <AdvancedSettingsModal
                network={wifiSettings.device.radio_type}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

WifiSettingsForm.propTypes = {
  wifiSettings: PropTypes.objectOf(PropTypes.string).isRequired,
  fields: PropTypes.objectOf(PropTypes.string).isRequired,
};
