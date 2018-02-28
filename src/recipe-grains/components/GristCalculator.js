import { withStyles } from 'material-ui/styles';
import { func, object } from 'prop-types';
import Paper from 'material-ui/Paper';
import React from 'react';
import Typography from 'material-ui/Typography';

import AddGrainForm from '../components/AddGrainForm';
import GrainTable from './GrainTable';

const styleSheet = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
});

function GristCalculator(props) {
  const {
    classes,
    grains,
    onClickAdd,
    onClickDelete,
    onClickEdit,
    onClickUpdate,
  } = props;

  return (
    <Paper elevation={1} className={classes.root}>
      <Typography type="headline">Grains</Typography>

      <GrainTable
        grains={grains}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onClickUpdate={onClickUpdate} />

      <AddGrainForm onClickAdd={onClickAdd} />
    </Paper>
  );
}

GristCalculator.propTypes = {
  classes: object.isRequired,
  grains: object.isRequired,
  onClickAdd: func.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default withStyles(styleSheet)(GristCalculator);
