import { Card, CardText, CardTitle } from 'react-mdl/lib/Card';
import { Cell, Grid } from 'react-mdl/lib/Grid';
import React, { Component, PropTypes } from 'react';
import Textfield from 'react-mdl/lib/Textfield';

export default class RecipeTargets extends Component {
  constructor() {
    super();

    this.onChangeGravity = this.onChangeGravity.bind(this);
  }

  onChangeGravity(event) {
    const { onChangeGravity } = this.props;

    onChangeGravity(event.target.value);
  }

  render() {
    return (
      <Card className="card-layout" shadow={1}>
        <CardTitle expand>Recipe Targets</CardTitle>
        <CardText>
          <Grid>
            <Cell col={4}>
              <Textfield 
                defaultValue="1.045"
                label="Preboil Gravity (SG)"
                name="gravity"
                onChange={this.onChangeGravity}
                floatingLabel /> 
            </Cell>

            <Cell col={4}>
              <Textfield 
                defaultValue="6"
                label="Preboil Volume (Gallons)"
                floatingLabel /> 
            </Cell>

            <Cell col={4}>
              <Textfield 
                defaultValue="70"
                label="Extract Efficiency"
                floatingLabel /> 
            </Cell>
          </Grid>
        </CardText>
      </Card>
    );
  }
}

RecipeTargets.propTypes = {
  onChangeGravity: PropTypes.func.isRequired,
};
