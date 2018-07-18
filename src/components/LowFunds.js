import React from 'react';
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from 'reactstrap';

const LowFunds = () => (
  <Card style={{
    flex: 1, minWidth: 300, maxWidth: 400, margin: 10,
  }}
  >
    <CardBody>
      <h3>
          When funds get low:
      </h3>

      <Form>
        <FormGroup>
          <Label for="exampleEmail">
              Threshold
          </Label>
          <InputGroup>
            <Input style={{ width: '5em' }} type="number" value="10" />
            <InputGroupAddon addonType="append">
                % of average monthly use
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>

        {/* <FormGroup check style={{ marginBottom: ".5rem" }}>
          <Label check>
            <Input type="checkbox" /> Send an email to this address:
          </Label>
          </FormGroup>

          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup> */}

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            {' '}
              Throttle speed
          </Label>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

export default LowFunds;
