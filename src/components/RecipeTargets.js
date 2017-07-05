import { func, object, string } from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

function onChange(handler) {
  return event => handler(event.target.value);
}

const styleSheet = createStyleSheet('RecipeTargets', theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },

  grid: {
    padding: theme.spacing.unit * 2,
  },
}));

class RecipeTargets extends Component {
  constructor(props) {
    super(props);

    const { onChangeEfficiency, onChangeGravity, onChangeVolume } = this.props;

    this.onChangeGravity = onChange(onChangeGravity).bind(this);
    this.onChangeVolume = onChange(onChangeVolume).bind(this);
    this.onChangeEfficiency = onChange(onChangeEfficiency).bind(this);
  }

  onChangeGravity(event) {
    const { onChangeGravity } = this.props;

    onChangeGravity(event.target.value);
  }

  onChangeVolume(event) {
    const { onChangeVolume } = this.props;

    onChangeVolume(event.target.value);
  }

  onChangeEfficiency(event) {
    const { onChangeEfficiency } = this.props;

    onChangeEfficiency(event.target.value);
  }

  render() {
    const { classes, gravity, volume, efficiency } = this.props;

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
                onChange={this.onChangeGravity} />
            </Grid>

            <Grid item xs>
              <TextField
                defaultValue={volume}
                label="Preboil Volume (Gallons)"
                name="volume"
                onChange={this.onChangeVolume} />
            </Grid>

            <Grid item xs>
              <TextField
                defaultValue={efficiency}
                label="Extract Efficiency"
                name="efficiency"
                onChange={this.onChangeEfficiency} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
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
