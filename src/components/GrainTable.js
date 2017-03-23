import React, { PropTypes } from 'react';
import GrainActionsColumn from './GrainActionsColumn';
import { map } from 'lodash';

export default function GrainTable({ grains, onClickDelete }) {
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
            <tr key={key}>
              <td className="mdl-data-table__cell--non-numeric">{ grain.grainType }</td>
              <td className="mdl-data-table__cell--non-numeric">{ grain.maxPpg }</td>
              <td className="mdl-data-table__cell--non-numeric">{ grain.proportion }</td>
              <td className="mdl-data-table__cell--non-numeric">X lbs Y oz</td>
              <td className="mdl-data-table__cell--non-numeric">
                <GrainActionsColumn 
                  id={key}
                  onClickDelete={onClickDelete} />
              </td>
            </tr>
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
  grains: PropTypes.object.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
