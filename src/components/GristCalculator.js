import { Card, CardText, CardTitle } from 'react-mdl/lib/Card';
import { func, object } from 'prop-types';
import React, { PropTypes } from 'react';

import AddGrainForm from './AddGrainForm';
import GrainTable from './GrainTable';

export default function GristCalculator({ grains, onClickAdd, onClickDelete, onClickEdit, onClickUpdate }) {
	return (
    <Card shadow={1}>
      <CardTitle>Grains</CardTitle>
      <CardText className="wd-auto">
        <GrainTable grains={grains} onClickDelete={onClickDelete} onClickEdit={onClickEdit} onClickUpdate={onClickUpdate}/>
        <AddGrainForm onClickAdd={onClickAdd} />
      </CardText>
    </Card>
	);
}

GristCalculator.propTypes = {
  grains: object.isRequired,
  onClickAdd: func.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};
