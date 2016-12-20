import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Row from 'react-bootstrap/lib/Row';

export default function RecipeTargets() {
  return (
    <Row>
      <Col sm={3}>
        <FormGroup controlId="gravity">
          <ControlLabel>Preboil Gravity (SG)</ControlLabel>
          <FormControl type="text" defaultValue="1.055" />
        </FormGroup>
      </Col>

      <Col sm={3}>
        <FormGroup controlId="volume">
          <ControlLabel>Preboil Volume (Gallons)</ControlLabel>
          <FormControl type="text" defaultValue="5" />
        </FormGroup>
      </Col>

      <Col sm={3}>
        <FormGroup controlId="efficiency">
          <ControlLabel>Extract Efficiency</ControlLabel>
          <FormControl type="text" defaultValue="70" />
        </FormGroup>
      </Col>
    </Row>
  );
}
