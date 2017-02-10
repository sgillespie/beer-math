import { Card, CardText, CardTitle } from 'react-mdl/lib/Card';
import { Cell, Grid } from 'react-mdl/lib/Grid';
import React from 'react';
import Textfield from 'react-mdl/lib/Textfield';

export default function RecipeTargets() {
  return (
    <Card className="card-layout" shadow={1}>
      <CardTitle expand>Recipe Targets</CardTitle>
      <CardText>
        <Grid>
          <Cell col={4}>
            <Textfield 
              defaultValue="1.045"
              label="Preboil Gravity (SG)"
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
