import React, { PropTypes } from 'react';
import Table from 'react-mdl/lib/DataTable/Table';
import TableHeader from 'react-mdl/lib/DataTable/TableHeader';

import GrainActionsColumn from './GrainActionsColumn';

const grains = [
  { 
    type: 'US Two Row', 
    maxPpg: '1.034', 
    proportion: '90%', 
    weight: '11 lbs 4 oz', 
    actions: <GrainActionsColumn />
  },

  { 
    type: 'Crystral 40L', 
    maxPpg: '1.036', 
    proportion: '5%', 
    weight: '6 oz', 
    actions: <GrainActionsColumn />
  },

  { 
    type: 'Crystral 80L', 
    maxPpg: '1.036', 
    proportion: '5%', 
    weight: '6 oz', 
    actions: <GrainActionsColumn />
  },

  {
    type: 'Totals',
    proportion: '100%',
    weight: '12 lbs',
  }
];

export default function GrainTable({ grains }) {
  return (
    <Table className="grains-table" rows={grains}>
      <TableHeader name="type">GrainType</TableHeader>
      <TableHeader name="maxPpg">Max PPG (SG)</TableHeader>
      <TableHeader name="proportion">Proportion (%)</TableHeader>
      <TableHeader name="weight">Weight (lbs/oz)</TableHeader>
      <TableHeader 
        name="actions" 
        className="text-right">

        Actions
      </TableHeader>
    </Table>
  );
}

GrainTable.propTypes = {
  grains: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    maxPpg: PropTypes.string.isRequired,
    proportion: PropTypes.string.isRequired,
    weight: PropTypes.string,
    actions: PropTypes.element,
  })).isRequired,
};
