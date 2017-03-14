import React, { PropTypes } from 'react';
import Table from 'react-mdl/lib/DataTable/Table';
import TableHeader from 'react-mdl/lib/DataTable/TableHeader';

export default function GrainTable({ grains }) {
  return (
    <Table className="grains-table" rows={grains}>
      <TableHeader name="grainType">Grain Type</TableHeader>
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
    grainType: PropTypes.string.isRequired,
    maxPpg: PropTypes.string,
    proportion: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    actions: PropTypes.element,
  })).isRequired,
};
