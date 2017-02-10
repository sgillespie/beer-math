import { Card, CardText, CardTitle } from 'react-mdl/lib/Card';
import React from 'react';

import AddGrainForm from './AddGrainForm';
import GrainTable from './GrainTable';

export default function GristCalculator () {
	return (
    <Card shadow={1}>
      <CardTitle>Grains</CardTitle>
      <CardText className="wd-auto">
        <GrainTable />
        <AddGrainForm />
      </CardText>
    </Card>
	);
}
