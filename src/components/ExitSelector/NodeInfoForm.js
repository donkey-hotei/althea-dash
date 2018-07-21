import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { emailRegex } from '../../lib/utils';
import { actions } from '../../store';

export default class NodeInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      valid: {},
    };
    this.validators = {
      email: value => !!value.match(emailRegex),
    };
  }

  componentDidMount() {
    const { regDetails } = this.props;
    this.setState({ fields: regDetails });
  }

  onFieldChange(e) {
    const { name, value } = e.target;
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

  onSubmit(e) {
    const { fields } = this.state;
    e.preventDefault();
    actions.saveRegDetails(fields);
  }

  isFieldValid(name) {
    const { fields, valid } = this.state;
    if (fields[name]) {
      return valid[name];
    }
    return undefined;
  }

  render() {
    const { fields, valid } = this.state;

    return (
      <Card>
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
              Node details
            </Label>

            <FormGroup id="form">
              <Label for="email">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                valid={this.isFieldValid('email')}
                onChange={this.onFieldChange}
                value={fields.email || ''}
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
                disabled={!Object.values(valid).some(t => t)}
                style={{
                  margin: 10,
                }}
              >
                Save
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

NodeInfoForm.propTypes = {
  regDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};
