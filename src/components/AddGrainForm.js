import { Cell, Grid } from 'react-mdl/lib/Grid';
import Button from 'react-mdl/lib/Button';
import React from 'react';
import Textfield from 'react-mdl/lib/Textfield';

export default function AddGrainForm() {
  return (
    <Grid style={{ marginTop: '1rem' }}>
      <Cell col={3}>
        <Textfield 
          label="Grain Type"
          floatingLabel /> 
      </Cell>

      <Cell col={3}>
        <Textfield 
          label="Max PPG (SG)"
          floatingLabel /> 
      </Cell>

      <Cell col={3}>
        <Textfield 
          label="Proportion (%)"
          floatingLabel /> 
      </Cell>

      <Cell col={3} className="button-group">
        <Button raised ripple accent>Add</Button>
      </Cell>
    </Grid>
  );
}

