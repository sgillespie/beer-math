import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';
import React from 'react';

import RecipeTargets from './RecipeTargets';

export default function GristCalculator () {
	return (
	  <Grid fluid>
      <Panel>
        <h3>Recipe Targets</h3>
        <RecipeTargets />
      </Panel>

      <Panel>
        <h3>Grain Bill</h3>

        <Table>
          <thead>
            <tr>
              <th>Grain</th>
              <th>Max PPG</th>
              <th>Percentage</th>
              <th>Weight (lbs/oz)</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Two Row (US)</td>
              <td>36</td>
              <td>
                <span>2.2</span>
                <span>%</span>
              </td>
              <td>
                <span>12</span>
                <span>/</span>
                <span>2</span>
              </td>
              <td className="text-right">
                <a href="#" className="text-muted">
                  <i className="material-icons">delete</i>
                </a>
                {' '}
                <a href="#" className="text-muted">
                  <i className="material-icons">create</i>
                </a>
              </td>
            </tr>
          </tbody>
        </Table>

        <form>
          <Row>
            <Col xs={3}>
              <FormGroup>
                <FormControl type="text" placeholder="Grain/Malt Type" />
              </FormGroup>
            </Col>

            <Col xs={3}>
              <FormGroup>
                <FormControl type="text" placeholder="Max PPG" />
              </FormGroup>
            </Col>

            <Col xs={3}>
              <FormGroup>
                <FormControl type="text" placeholder="Percentage" />
              </FormGroup>
            </Col>

            <Col xs={3} className="text-right">
              <FormGroup>
                <Button className="btn-raised vertical-center" bsStyle="primary">Add</Button>
              </FormGroup>
            </Col>

          </Row>
        </form>

        <p>Total Grains: 15lbs. 3oz.</p>
      </Panel>
      

	  </Grid>
	);
}
