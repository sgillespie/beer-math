import Button from 'react-mdl/lib/Button';
import React from 'react';
import { Card, CardText, CardTitle } from 'react-mdl/lib/Card';
import { Content, Header, Layout, Navigation } from 'react-mdl/lib/Layout';
import { Table, TableHeader } from 'react-mdl/lib/DataTable';
import { Grid, Cell } from 'react-mdl/lib/Grid';
import Textfield from 'react-mdl/lib/Textfield';

export default function() {
  return (
    <Layout>
      <Header title="🍺+🍺=🍻">
        <Navigation>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Navigation>
      </Header>

      <Content>
        <div className="page-content">
          { /* RecipeTargets */}
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

          <Card shadow={1}>
            <CardTitle>Grains</CardTitle>
            <CardText>
              <Table style={{ width: '100%' }} rows={[
                { type: 'US Two Row', maxPpg: '1.034', proportion: '90%', weight: '11/4' },
                { type: 'Crystral 40L', maxPpg: '1.036', proportion: '5%', weight: '0/6' },
                { type: 'Crystral 80L', maxPpg: '1.036', proportion: '5%', weight: '0/6' }
              ]}>
                <TableHeader name="type">GrainType</TableHeader>
                <TableHeader name="maxPpg">Max PPG (SG)</TableHeader>
                <TableHeader name="proportion">Proportion (%)</TableHeader>
                <TableHeader name="weight">Weight (lbs/oz)</TableHeader>
                <TableHeader name="actions">Actions</TableHeader>
              </Table>

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
            </CardText>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}
