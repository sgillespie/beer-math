import { Cell, Grid } from 'react-mdl/lib/Grid';
import Button from 'react-mdl/lib/Button';
import React, { Component, PropTypes, } from 'react';
import Textfield from 'react-mdl/lib/Textfield';

export default class AddGrainForm extends Component {
  constructor() {
    super();
	
    this.onChangeGrainType = this.onChangeGrainType.bind(this);
    this.onChangeMaxPpg = this.onChangeMaxPpg.bind(this);
    this.onChangeProportion = this.onChangeProportion.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    
    this.state = {
      grainType: '',
      maxPpg: '',
      proportion: '',
    };
  }
  
  onChangeGrainType(event) {
    const grainType = event.target.value;
	
	this.setState({
      grainType,
	});
  }
  
  onChangeMaxPpg(event) {
    const maxPpg = event.target.value;
	
	this.setState({
      maxPpg,
	});
  }
  
  onChangeProportion(event) {
    const proportion = event.target.value;
	
	this.setState({
      proportion,
	});
  }
  
  onClickAdd() {
    const { onClickAdd } = this.props;
	
    const { grainType, maxPpg, proportion } = this.state;
	
    onClickAdd( grainType, maxPpg, proportion );
  }

  render() { 
	  
    return (
      <Grid style={{ marginTop: '1rem' }}>
        <Cell col={3}>
          <Textfield 
            label="Grain Type"
            name="grainType"
            onChange={this.onChangeGrainType}
            floatingLabel />
        </Cell>

        <Cell col={3}>
          <Textfield 
            label="Max PPG (SG)"
            name="maxPpg"
            onChange={this.onChangeMaxPpg}
            floatingLabel /> 
        </Cell>

        <Cell col={3}>
          <Textfield 
            label="Proportion (%)"
            name="proportion"
            onChange={this.onChangeProportion}
            floatingLabel /> 
        </Cell>

        <Cell col={3} className="button-group">
          <Button raised ripple accent onClick={this.onClickAdd}>Add</Button>
        </Cell>
      </Grid>
    );
  }

}

AddGrainForm.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};
