import { func, object, string } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

function onChange(handler) {
  return event => handler(event.target.value);
}

const styleSheet = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },

  grid: {
    padding: theme.spacing.unit * 2,
  },
});

function RecipeTargets(props) {
  const {
    classes,

    gravity,
    volume,
    efficiency,

    onChangeEfficiency,
    onChangeGravity,
    onChangeVolume,
  } = props;

  return (
    <div>
      <Paper elevation={1} className={classes.root}>
        <Typography type="headline">Recipe Targets</Typography>

        <Grid className={classes.grid} justify="space-around" container>
          <Grid item xs>
            <TextField
              defaultValue={gravity}
              label="Preboil Gravity (SG)"
              name="gravity"
              onChange={onChange(onChangeGravity)} />
          </Grid>

          <Grid item xs>
            <TextField
              defaultValue={volume}
              label="Preboil Volume (Gallons)"
              name="volume"
              onChange={onChange(onChangeVolume)} />
          </Grid>

          <Grid item xs>
            <TextField
              defaultValue={efficiency}
              label="Extract Efficiency"
              name="efficiency"
              onChange={onChange(onChangeEfficiency)} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

RecipeTargets.propTypes = {
  classes: object.isRequired,

  onChangeGravity: func.isRequired,
  onChangeVolume: func.isRequired,
  onChangeEfficiency: func.isRequired,

  gravity: string.isRequired,
  volume: string.isRequired,
  efficiency: string.isRequired,
};

export default withStyles(styleSheet)(RecipeTargets);
