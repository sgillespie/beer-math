import React from 'react';
import Table from 'react-mdl/lib/DataTable/Table';
import TableHeader from 'react-mdl/lib/DataTable/TableHeader';

import GrainActionsColumn from './GrainActionsColumn';

const grains = [
  { 
    type: 'US Two Row', 
    maxPpg: '1.034', 
    proportion: '90%', 
    weight: '11/4', 
    actions: <GrainActionsColumn />
  },

  { 
    type: 'Crystral 40L', 
    maxPpg: '1.036', 
    proportion: '5%', 
    weight: '0/6', 
    actions: <GrainActionsColumn />
  },

  { 
    type: 'Crystral 80L', 
    maxPpg: '1.036', 
    proportion: '5%', 
    weight: '0/6', 
    actions: <GrainActionsColumn />
  }
];

export default function GrainTable() {
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

