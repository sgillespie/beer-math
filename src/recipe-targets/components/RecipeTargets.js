import { func, object, string } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styleSheet = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },

  grid: {
    padding: theme.spacing.unit * 2,
  },
});

class RecipeTargets extends Component {
  constructor(props) {
    super(props);

    const { gravity, volume, efficiency } = props;

    this.state = {
      gravity,
      volume,
      efficiency,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(stateKey, handler) {
    return (event) => {
      const val = event.target.value;

      this.setState({
        [stateKey]: val,
      });

      handler(val);
    };
  }

  render() {
    const {
      classes,

      onChangeEfficiency,
      onChangeGravity,
      onChangeVolume,
    } = this.props;

    const { gravity, volume, efficiency } = this.state;

    return (
      <div>
        <Paper elevation={1} className={classes.root}>
          <Typography type="headline">Recipe Targets</Typography>

          <Grid className={classes.grid} justify="space-around" container>
            <Grid item xs>
              <TextField
                value={gravity}
                label="Preboil Gravity (SG)"
                name="gravity"
                onChange={this.onChange('gravity', onChangeGravity)} />
            </Grid>

            <Grid item xs>
              <TextField
                value={volume}
                label="Preboil Volume (Gallons)"
                name="volume"
                onChange={this.onChange('volume', onChangeVolume)} />
            </Grid>

            <Grid item xs>
              <TextField
                value={efficiency}
                label="Extract Efficiency"
                name="efficiency"
                onChange={this.onChange('efficiency', onChangeEfficiency)} />
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

  gravity: string,
  volume: string,
  efficiency: string,
};

RecipeTargets.defaultProps = {
  gravity: '',
  volume: '',
  efficiency: '',
};

export default withStyles(styleSheet)(RecipeTargets);
