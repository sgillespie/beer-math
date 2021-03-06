import { func, number, object } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import map from 'lodash.map';

import GrainTableRow from './GrainTableRow';

const styleSheet = {
  tableRow: {
    width: '24%',
  },
};

function GrainTable(props) {
  const {
    classes,
    grains,
    totalGrainWeight,
    onClickDelete,
    onClickEdit,
    onClickUpdate,
  } = props;

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
          <TableCell>
            <Typography>
              { totalGrainWeight }
            </Typography>
          </TableCell>
          <TableCell />
        </TableRow>

      </TableBody>
    </Table>
  );
}

GrainTable.propTypes = {
  classes: object.isRequired,
  grains: object.isRequired,
  totalGrainWeight: number.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default withStyles(styleSheet)(GrainTable);
