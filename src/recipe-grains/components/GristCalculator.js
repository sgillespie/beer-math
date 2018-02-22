import { withStyles } from 'material-ui/styles';
import { func, object } from 'prop-types';
import Paper from 'material-ui/Paper';
import React from 'react';
import Typography from 'material-ui/Typography';

import AddGrainContainer from '../containers/AddGrainContainer';
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

      <AddGrainContainer />
    </Paper>
  );
}

GristCalculator.propTypes = {
  classes: object.isRequired,
  grains: object.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default withStyles(styleSheet)(GristCalculator);
