import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Row from 'react-bootstrap/lib/Row';

export default function RecipeTotals() {
  return (
    <Row>
      <Col sm={3}>
        <FormGroup controlId="totalWeight">
          <ControlLabel>Total weight (lbs/oz)</ControlLabel>
          <FormControl type="text" />
        </FormGroup>
      </Col>
    </Row>
  );
}
