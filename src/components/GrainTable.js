import { func, object } from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import map from 'lodash.map';

import GrainTableRow from './GrainTableRow';

const styleSheet = createStyleSheet('GrainTable', {
  tableRow: {
    width: '24%',
  },
});

function GrainTable({ classes, grains, onClickDelete, onClickEdit, onClickUpdate }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={classes.tableRow}>Grain Type</TableCell>
          <TableCell className={classes.tableRow}>Max PPG (SG)</TableCell>
          <TableCell className={classes.tableRow}>Proportion (%)</TableCell>
          <TableCell className={classes.tableRow}>Weight (lbs/oz)</TableCell>
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
              className={classes.tableRow}
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
  classes: object.isRequired,
  grains: object.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default withStyles(styleSheet)(GrainTable);
