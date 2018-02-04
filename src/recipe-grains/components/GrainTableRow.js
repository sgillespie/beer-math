import { withStyles } from 'material-ui/styles';
import { func, object, string } from 'prop-types';
import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import EditableGrainField from './EditableGrainField';
import GrainActionsColumn from './GrainActionsColumn';

export const styleSheet = {
  defaultRow: {
  },

  isEditing: {
    backgroundColor: '#fafafa',
  },
};

class GrainTableRow extends Component {
  constructor(props) {
    super(props);

    this.onChangeGrainType = this.onChangeGrainType.bind(this);
    this.onChangeMaxPpg = this.onChangeMaxPpg.bind(this);
    this.onChangeProportion = this.onChangeProportion.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);

    const { grain } = props;

    this.state = {
      grainType: grain.grainType,
      maxPpg: grain.maxPpg,
      proportion: grain.proportion,
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

  onClickUpdate() {
    const { grainId, onClickUpdate } = this.props;

    const { grainType, maxPpg, proportion } = this.state;

    onClickUpdate(grainId, grainType, maxPpg, proportion);
  }

  onClickEdit() {
    const { grainId, onClickEdit, grain } = this.props;

    this.setState({
      grainType: grain.grainType,
      maxPpg: grain.maxPpg,
      proportion: grain.proportion,
    });

    onClickEdit(grainId);
  }

  render() {
    const { classes, grain, grainId, onClickDelete } = this.props;

    return (
      <TableRow hover className={grain.isEditing ? classes.isEditing : classes.defaultRow}>
        <TableCell>
          <EditableGrainField
            isEditing={grain.isEditing}
            name="grainType"
            label="Grain Type"
            value={grain.grainType}
            onChange={this.onChangeGrainType} />
        </TableCell>

        <TableCell>
          <EditableGrainField
            isEditing={grain.isEditing}
            name="grainMaxPpg"
            label="Max PPG"
            value={grain.maxPpg}
            onChange={this.onChangeMaxPpg} />
        </TableCell>

        <TableCell>
          <EditableGrainField
            isEditing={grain.isEditing}
            name="grainProportion"
            label="Proportion (%)"
            value={grain.proportion}
            onChange={this.onChangeProportion} />
        </TableCell>

        <TableCell>X lbs Y oz</TableCell>

        <TableCell numeric>
          <GrainActionsColumn
            id={grainId}
            onClickDelete={onClickDelete}
            onClickEdit={this.onClickEdit}
            onClickUpdate={this.onClickUpdate}
            grain={grain} />
        </TableCell>
      </TableRow>
    );
  }
}

GrainTableRow.propTypes = {
  classes: object.isRequired,
  grain: object.isRequired,
  grainId: string.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default withStyles(styleSheet)(GrainTableRow);
