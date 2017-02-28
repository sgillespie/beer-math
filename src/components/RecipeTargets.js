import { Card, CardText, CardTitle } from 'react-mdl/lib/Card';
import { Cell, Grid } from 'react-mdl/lib/Grid';
import React, { Component, PropTypes } from 'react';
import Textfield from 'react-mdl/lib/Textfield';

export default class RecipeTargets extends Component {
  constructor() {
    super();

    this.onChangeGravity = this.onChangeGravity.bind(this);
	this.onChangeVolume = this.onChangeVolume.bind(this);
	this.onChangeEfficiency = this.onChangeEfficiency.bind(this);
  }

  onChangeGravity(event) {
    const { onChangeGravity } = this.props;

    onChangeGravity(event.target.value);
  }
  
  onChangeVolume(event) {
    const { onChangeVolume } = this.props;

    onChangeVolume(event.target.value);
  }
  
  onChangeEfficiency(event) {
    const { onChangeEfficiency } = this.props;

    onChangeEfficiency(event.target.value);
  }

  render() {
    const { gravity, volume, efficiency } = this.props;

    return (
      <Card className="card-layout" shadow={1}>
        <CardTitle expand>Recipe Targets</CardTitle>
        <CardText>
          <Grid>
            <Cell col={4}>
              <Textfield 
                defaultValue={gravity}
                label="Preboil Gravity (SG)"
                name="gravity"
                onChange={this.onChangeGravity}
                floatingLabel /> 
            </Cell>

            <Cell col={4}>
              <Textfield 
                defaultValue={volume}
                label="Preboil Volume (Gallons)"
				name="volume"
                onChange={this.onChangeVolume}
                floatingLabel /> 
            </Cell>

            <Cell col={4}>
              <Textfield 
                defaultValue={efficiency}
                label="Extract Efficiency"
				name="efficiency"
				onChange={this.onChangeEfficiency}
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
  gravity: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  efficiency: PropTypes.string.isRequired,
};
