import React, { PropTypes } from 'react';
import GrainActionsColumn from './GrainActionsColumn';

export default function GrainTable({ grains }) {
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
		<tr>
		  <td className="mdl-data-table__cell--non-numeric">TWO ROW</td>
		  <td className="mdl-data-table__cell--non-numeric">1.033</td>
		  <td className="mdl-data-table__cell--non-numeric">90 %</td>
		  <td className="mdl-data-table__cell--non-numeric">12 lbs 3 oz</td>
		  <td className="mdl-data-table__cell--non-numeric"><GrainActionsColumn /></td>
		</tr>
		<tr>
		  <td className="mdl-data-table__cell--non-numeric">Not TWO ROW</td>
		  <td className="mdl-data-table__cell--non-numeric">1.033</td>
		  <td className="mdl-data-table__cell--non-numeric">90 %</td>
		  <td className="mdl-data-table__cell--non-numeric">12 lbs 3 oz</td>
		  <td className="mdl-data-table__cell--non-numeric"><GrainActionsColumn /></td>
		</tr>		
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
  grains: PropTypes.arrayOf(PropTypes.shape({
    grainType: PropTypes.string.isRequired,
    maxPpg: PropTypes.string,
    proportion: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    actions: PropTypes.element,
  })).isRequired,
};
