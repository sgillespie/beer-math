import { func, object } from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const styleSheet = createStyleSheet('AddGrainForm', theme => ({
  root: {
    marginTop: theme.spacing.unit,
  },
}));

class AddGrainForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeGrainType = this.onChangeGrainType.bind(this);
    this.onChangeMaxPpg = this.onChangeMaxPpg.bind(this);
    this.onChangeProportion = this.onChangeProportion.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);

    this.state = {
      grainType: '',
      maxPpg: '',
      proportion: '',
    };
  }

  onChangeGrainType(event) {
    const grainType = event.target.value;

    this.setState({
      grainType,
    });
  }

  onChangeMaxPpg(event) {
    const maxPpg = event.target.value;

    this.setState({
      maxPpg,
    });
  }

  onChangeProportion(event) {
    const proportion = event.target.value;

    this.setState({
      proportion,
    });
  }

  onClickAdd() {
    const { onClickAdd } = this.props;

    const { grainType, maxPpg, proportion } = this.state;

    onClickAdd(grainType, maxPpg, proportion);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        align="flex-end"
        className={classes.root}
        justify="space-around"
        container>

        <Grid item>
          <TextField
            label="Grain Type"
            name="grainType"
            onChange={this.onChangeGrainType} />
        </Grid>

        <Grid item>
          <TextField
            label="Max PPG (SG)"
            name="maxPpg"
            onChange={this.onChangeMaxPpg} />
        </Grid>

        <Grid item>
          <TextField
            label="Proportion (%)"
            name="proportion"
            onChange={this.onChangeProportion} />
        </Grid>

        <Grid item>
          <Button color="accent" raised onClick={this.onClickAdd}>Add</Button>
        </Grid>
      </Grid>
    );
  }

}

AddGrainForm.propTypes = {
  classes: object.isRequired,
  onClickAdd: func.isRequired,
};

export default withStyles(styleSheet)(AddGrainForm);
