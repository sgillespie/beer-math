import { func, object, string } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const styleSheet = theme => ({
  root: {
    marginTop: theme.spacing.unit,
  },
});

class AddGrainForm extends Component {
  constructor(props) {
    super(props);

    const { grainType, maxPpg, proportion } = props;

    this.state = {
      grainType,
      maxPpg,
      proportion,
    };

    this.onChange = this.onChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onChange(stateKey) {
    return event => this.setState({
      [stateKey]: event.target.value,
    });
  }

  onClickAdd() {
    const { grainType, maxPpg, proportion } = this.state;
    this.props.onClickAdd(grainType, maxPpg, proportion);
  }

  render() {
    const { classes } = this.props;
    const { grainType, maxPpg, proportion } = this.state;

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
            onChange={this.onChange('grainType')} />
        </Grid>

        <Grid item>
          <TextField
            label="Max PPG (SG)"
            name="maxPpg"
            value={maxPpg}
            onChange={this.onChange('maxPpg')} />
        </Grid>

        <Grid item>
          <TextField
            label="Proportion (%)"
            name="proportion"
            value={proportion}
            onChange={this.onChange('proportion')} />
        </Grid>

        <Grid item>
          <Button
            color="secondary"
            raised
            onClick={this.onClickAdd}>

            Add
          </Button>
        </Grid>
      </Grid>
    );
  }
}

AddGrainForm.propTypes = {
  classes: object.isRequired,

  grainType: string,
  maxPpg: string,
  proportion: string,

  onClickAdd: func.isRequired,
};

AddGrainForm.defaultProps = {
  grainType: '',
  maxPpg: '',
  proportion: '',
};

export default withStyles(styleSheet)(AddGrainForm);
