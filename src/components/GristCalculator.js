import { Card, CardText, CardTitle } from 'react-mdl/lib/Card';
import React, { PropTypes } from 'react';

import AddGrainForm from '../components/AddGrainForm';
import GrainTable from './GrainTable';

export default function GristCalculator({ grains, onClickAdd, onClickDelete }) {
	return (
    <Card shadow={1}>
      <CardTitle>Grains</CardTitle>
      <CardText className="wd-auto">
        <GrainTable grains={grains} onClickDelete={onClickDelete}/>
        <AddGrainForm onClickAdd={onClickAdd} />
      </CardText>
    </Card>
	);
}

GristCalculator.propTypes = {
  grains: PropTypes.object.isRequired,
  onClickAdd: PropTypes.func.isRequired,
};
