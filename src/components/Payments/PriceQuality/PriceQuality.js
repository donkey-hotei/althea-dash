import React from 'react';
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

const PriceQuality = () => (
  <Card className="price-quality-card">
    <CardBody>
      <h3>
        Price/Quality tradeoff:
      </h3>

      <Form>
        <FormGroup>
          <Input type="range" />
          <div className="price-quality-preference">
            <small>
                Prefer low price
            </small>
            <small>
                Prefer high quality
            </small>
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">
              Highest acceptable price
          </Label>
          <InputGroup>
            <Input type="number" value="10" />
            <InputGroupAddon addonType="append">
                cents/GB
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

export default PriceQuality;
