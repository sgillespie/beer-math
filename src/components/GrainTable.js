import { func, object } from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import map from 'lodash.map';

import GrainTableRow from './GrainTableRow';

const styleSheet = createStyleSheet('GrainTable', {
});

function GrainTable({ grains, onClickDelete, onClickEdit, onClickUpdate }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Grain Type</TableCell>
          <TableCell>Max PPG (SG)</TableCell>
          <TableCell>Proportion (%)</TableCell>
          <TableCell>Weight (lbs/oz)</TableCell>
          <TableCell numeric>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {
          map(grains, (grain, key) => (
            <GrainTableRow
              grain={grain}
              grainId={key}
              key={key}
              onClickDelete={onClickDelete}
              onClickEdit={onClickEdit}
              onClickUpdate={onClickUpdate} />
          ))
        }

        <TableRow>
          <TableCell>Total Weight</TableCell>
          <TableCell />
          <TableCell>100 %</TableCell>
          <TableCell />
          <TableCell />
        </TableRow>

      </TableBody>
    </Table>
  );
}

GrainTable.propTypes = {
  grains: object.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default withStyles(styleSheet)(GrainTable);
