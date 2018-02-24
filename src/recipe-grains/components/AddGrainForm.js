import { func, object, string } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import React from 'react';
import TextField from 'material-ui/TextField';

const styleSheet = theme => ({
  root: {
    marginTop: theme.spacing.unit,
  },
});

function handleChange(f) {
  return event => f(event.target.value);
}

function handleClick(f, ...args) {
  return () => f(...args);
}

function AddGrainForm(props) {
  const {
    classes,

    onChangeMaxPpg,
    onChangeType,
    onChangeProportion,
    onClickAdd,

    grainType,
    maxPpg,
    proportion,
  } = props;

  return (
    <Grid
      alignItems="flex-end"
      className={classes.root}
      justify="space-around"
      container>

      <Grid item>
        <TextField
          label="Grain Type"
          name="grainType"
          value={grainType}
          onChange={handleChange(onChangeType)} />
      </Grid>

      <Grid item>
        <TextField
          label="Max PPG (SG)"
          name="maxPpg"
          value={maxPpg}
          onChange={handleChange(onChangeMaxPpg)} />
      </Grid>

      <Grid item>
        <TextField
          label="Proportion (%)"
          name="proportion"
          value={proportion}
          onChange={handleChange(onChangeProportion)} />
      </Grid>

      <Grid item>
        <Button
          color="secondary"
          raised
          onClick={handleClick(onClickAdd, grainType, maxPpg, proportion)}>

          Add
        </Button>
      </Grid>
    </Grid>
  );
}

AddGrainForm.propTypes = {
  classes: object.isRequired,

  onChangeMaxPpg: func.isRequired,
  onChangeProportion: func.isRequired,
  onChangeType: func.isRequired,
  onClickAdd: func.isRequired,

  grainType: string,
  maxPpg: string,
  proportion: string,
};

AddGrainForm.defaultProps = {
  grainType: '',
  maxPpg: '',
  proportion: '',
};

export default withStyles(styleSheet)(AddGrainForm);
