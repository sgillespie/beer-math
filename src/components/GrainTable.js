import { func, object } from 'prop-types';
import React from 'react';
import GrainTableRow from './GrainTableRow';
import { map } from 'lodash';

export default function GrainTable({ grains, onClickDelete, onClickEdit, onClickUpdate }) {
  return (
    <table className="grains-table mdl-data-table">
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Grain Type</th>
          <th className="mdl-data-table__cell--non-numeric">Max PPG (SG)</th>
          <th className="mdl-data-table__cell--non-numeric">Proportion (%)</th>
          <th className="mdl-data-table__cell--non-numeric">Weight (lbs/oz)</th>
          <th className="text-right mdl-data-table__cell--non-numeric">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          map(grains, (grain, key) => (
            <GrainTableRow grain={grain} grainId={key} key={key} onClickDelete={onClickDelete} onClickEdit={onClickEdit} onClickUpdate={onClickUpdate} />
          ))
	    }
      </tbody>
      <tfoot>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Total Weight</th>
          <th className="mdl-data-table__cell--non-numeric"></th>
          <th className="mdl-data-table__cell--non-numeric">100 %</th>
          <th className="mdl-data-table__cell--non-numeric"></th>
          <th className="mdl-data-table__cell--non-numeric"></th>
        </tr>
      </tfoot>
    </table>
  );
}

GrainTable.propTypes = {
  grains: object.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};
